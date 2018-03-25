import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js';
import { IronIcon } from '@polymer/iron-icon/iron-icon.js'
import { IronIconsetSvg } from '@polymer/iron-iconset-svg/iron-iconset-svg.js'

import * as template_string from './component_assets/lucent-upload/lucent-upload.html'
import * as css from './component_assets/lucent-upload/lucent-upload.css'

export class LucentUpload extends PolymerElement {

    static get template() {
        return '<style>' + css + '</style>' + template_string
    }
    constructor() {
        super();
        this.name = 'Polymer 3 Upload';
    }

    static get properties() {
        return{    
            target: {
                type: String,
                value: ''
            },
            accept: {
                type: String,
                value: ''
            },
            hideFileList: {
                type: Boolean,
                value: false
            },
            progressHidden: {
                type: Boolean,
                value: false
            },
            droppable: {
                type: Boolean,
                value: false
            },
            dropText: {
                type: String,
                value: 'Drop Files Here'
            },      
            multi: {
                type: Boolean,
                value: false
            },
            files: {
                type: Array,
                notify: true,
                value: function() {
                    return [];
                }
            },
            method: {
                type: String,
                value: 'PUT'
            },
            withCredentials: {
                type: Boolean,
                value: false
            },      
            raised: {
                type: Boolean,
                value: false
            },
            noink: {
                type: Boolean,
                value: false
            },
            headers: {
                type: Object,
                value: {},
            },
            retryText: {
                type: String,
                value: 'Retry Upload'
            },      
            removeText: {
                type: String,
                value: 'Remove'
            },
            successText: {
                type: String,
                value: 'Success'
            },
            errorText: {
                type: String,
                value: 'Error uploading file...'
            },
            _shownDropText: {
                type: Boolean,
                value: false
            },
            additional: {
                type: Object,
                value: {},
            },
            manualUpload: {
                type: Boolean,
                value: false
            },
            fileDataName: {
                type: String,
                value: 'file'
            },
            paperButtonAlt: {
                type: String,
                value: ''
            },
            paperButtonTitle: {
                type: String,
                value: ''
            }
        }
    };


    /**
     * Clears the list of files
     */
    clear() {
      this.set('files', []);
      this.$.fileInput.value = '';
      this._showDropText();
    }

    ready() {
      if (this.raised) {
        this.toggleAttribute('raised', true, this.$.button);
      }
      if (this.noink) {
        this.toggleAttribute('noink', true, this.$.button);
      }
      if (this.droppable) {
        this._showDropText();
        this.setupDrop();
      }
    }

    /**
     * A function to set up a drop area for drag-and-drop file uploads
     */
    setupDrop() {
      var uploadBorder = this.$.UploadBorder;
      this.toggleClass('enabled', true, uploadBorder);

      this.ondragover = function(e) {
        e.stopPropagation();
        this.toggleClass('hover', true, uploadBorder);
        return false;
      }

      this.ondragleave = function() {
        this.toggleClass('hover', false, uploadBorder);
        return false;
      }

      this.ondrop = function(event) {
        this.toggleClass('hover', false, uploadBorder);
        event.preventDefault();

        // Check if multiple upload is allowed
        if (!this.multi && this.files.length !== 0) {
          return;
        }

        var length = event.dataTransfer.files.length;
        for (var i = 0; i < length; i++) {
          var file = event.dataTransfer.files[i];

          // Check if filetype is accepted
          var mimeType = ((file.type !== '') ? file.type.match(/^[^\/]*\//)[0] : null);
          var fileType = file.name.match(/\.[^\.]*$/)[0];
          if (this.accept !== '' && !(this.accept.indexOf(mimeType) > -1 || this.accept.indexOf(fileType) > -1)) {
            continue;
          }

          file.progress = 0;
          file.error = false;
          file.complete = false;
          this.push('files', file);
          if (!this.manualUpload) {
            this.uploadFile(file);
          }
        }
      }
    }

    /**
     * Clicks the invisible file input
     */
    _fileClick() {
      var elem = this.$.fileInput;
      if (elem && document.createEvent) { // sanity check
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('click', true, false);
        elem.dispatchEvent(evt);
      }
    }

    /**
     * Called whenever the list of selected files changes
     *
     * @param {object} e An event object
     */
    _fileChange(e) {
      var length = e.target.files.length;

      for (var i = 0; i < length; i++) {
        var file = e.target.files[i];
        file.progress = 0;
        file.error = false;
        file.complete = false;
        if (!this.multi){
          this.set('files',[file]);
        }
        else{
          this.push('files', file);
        }
        if (!this.manualUpload) {
          this.uploadFile(file);
        }
      }
    }

    /**
     * Cancels the file upload for a specific file
     *
     * @param {object} file An element of the files array
     */
    cancel(file) {
      if (file) {
        if (file.xhr) {
          file.xhr.abort();
        }
        this.splice('files', this.files.indexOf(file), 1);
        this._showDropText();
      }
    }

    /**
     * Cancels the file upload
     *
     * @param {object} e An event object
     */
    _cancelUpload(e) {
      this.cancel(e.model.__data__.item);
    }

    /**
     * Retries to upload the file
     *
     * @param {object} e An event object
     */
    _retryUpload(e) {
      e.model.set('item.error', false);
      e.model.set('item.progress', 0);
      // The async helps give visual feedback of a retry occurring, even though it's less efficient.
      var self = this;
      this.async(function() {
        self.uploadFile(e.model.__data__.item);
      }, 50);
    }

    /**
     * Whether or not to display the drop text
     */
    _showDropText() {
      this.set('_shownDropText', (!this.files.length && this.droppable));
    }

    /**
     * Uploads a file
     *
     * @param {object} file An element of the files array
     */
    uploadFile(file) {
      if (!file) {
        return;
      }
      this.fire('before-upload');
      this._showDropText();
      var prefix = 'files.' + this.files.indexOf(file);
      var self = this;

      var formData = new FormData();

      // Add additional data to send with the POST variable
      var addData = this.additional;
      for (var key in addData) {
          if (addData.hasOwnProperty(key)) {
            formData.append(key, addData[key]);
          }
      }

      // Add the file data last to support POSTing to Amazon Web Services S3.
      formData.append(this.fileDataName, file, file.name);

      var xhr = file.xhr = new XMLHttpRequest();
      xhr.withCredentials = this.withCredentials;

      xhr.upload.onprogress = function(e) {
        var done = e.loaded, total = e.total;
        self.set(prefix + '.progress', Math.floor((done / total) * 1000) / 10);
      };

      var url = this.target.replace('<name>', file.name);
      xhr.open(this.method, url, true);
      for (key in this.headers) {
        if (this.headers.hasOwnProperty(key)) {
          xhr.setRequestHeader(key, this.headers[key]);
        }
      }
      var fireError = function() {
          self.set(prefix + '.error', true);
          self.set(prefix + '.complete', false);
          self.set(prefix + '.progress', 100);
          self.updateStyles();
          self.fire('error', {filename: file.name, xhr: xhr});
      };
      xhr.onload = function(e) {
        if (xhr.status >= 200 && xhr.status < 300) {
          self.fire('success', {filename: file.name, xhr: xhr});
          self.set(prefix + '.complete', true);
        } else {
          fireError();
        }
      };
      xhr.onerror = function(e) {
          fireError();
      };
      xhr.send(formData);
    }
}

customElements.define('lucent-upload', LucentUpload);

