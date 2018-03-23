import { Element as PolymerElement } from "@polymer/polymer/polymer-element";
import * as template_string from "./lucent-upload.html";
const ipfsAPI = require('ipfs-api')

const ipfs = ipfsAPI({
    host: '127.0.0.1', 
    port: '5001', 
    protocol: 'http'
})
export class LucentUpload extends PolymerElement {
    _uploadProgress(e) {
        if (e.lengthComputable) {
            bytes_uploaded = e.loaded;
            bytes_total = e.total;
            let iPercentComplete = Math.round(e.loaded * 100 / e.total);
            let iBytesTransfered = bytesToSize(bytes_uploaded);
            document.getElementById('progress_percent').innerHTML = iPercentComplete.toString() + '%';
            document.getElementById('progress').style.width = (iPercentComplete * 4).toString() + 'px';
            document.getElementById('b_transfered').innerHTML = iBytesTransfered;
            if (iPercentComplete == 100) {
                let oUploadResponse = document.getElementById('upload_response');
                oUploadResponse.innerHTML = '<h1>Please wait...processing</h1>';
                oUploadResponse.style.display = 'block';
            }
        } else {
            document.getElementById('progress').innerHTML = 'unable to compute';
        }
    };

    _startUploading() {
        this.previous_bytes_loaded = 0;
        //document.getElementById('progress_percent').innerHTML = '';
        //let progress = document.getElementById('progress');
        //progress.style.display = 'block';
        //progress.style.width = '0px';
        //let vFD = new FormData(document.getElementById('upload_form'));
        //  console.log(vFD);
        //let oXHR = new XMLHttpRequest();
        //oXHR.upload.addEventListener('progress', this.uploadProgress, false);
        //        oXHR.addEventListener('load', uploadFinish, false);
        //oXHR.addEventListener('error', displayError("invalid_file"), false);
        //oXHR.addEventListener('abort', displayError("abort"), false);
        //oXHR.open('POST', 'upload.php');
        //oXHR.send(vFD);
        //        upload_timer = setInterval(doInnerUpdates, 300);
    }
    
    _bytesToSize(bytes) {
        let sizes = ['Bytes', 'KB', 'MB'];
        if (bytes === 0) {
            return 'n/a';
        }
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    };

    fileSelected(e){
        /*
                fs.readFileSync('/home/raymond/pictures/134588198.jpg', "utf-8", function(err, data) {
                    var base64data = new Buffer(data).toString('base64');
                    ipfs.files.add({
                        path: '/home/raymond/pictures/134588198.jpg',
                        content: base64data
                    })
                });
                */
        let file = e.target.files[0]
        console.log(file)
        /*
	    let filter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
	    if (! filter.test(file.type)) {
	        displayError('invalid_file');
	        return;
        }
        */
	    if (file.size > this.max_file_size) {
	        displayError('size');
	        return;
        } else { 
	        this.result_file_size = this._bytesToSize(file.size);
        }
	    let reader = new FileReader();
        let preview = document.createElement('img');
        reader.onload = e => {
            preview.src = reader.result;
            preview.onload = e => {
                preview.height = '100%';
	            let parameters={
    	            'status': 'ready',
    	            'name': file.name,
    	            'size': this.result_file_size,
    	            'type': file.type,
    	            'dimension': preview.naturalWidth + ' x ' + preview.naturalHeight,
    	            'preview': preview.src
                };

                this.push('files', parameters);
                var buffer = new Buffer(reader.result).toString('base64');
                console.log(base64data)
                ipfs.files.add(
                    '~/Downloads/austrianeconomics.jpg', 
                    function(err, res){
                        if (err){
                            console.log(err)
                        } else{
                            console.log(res)
                        }
                    }
                )
                ipfs.files.get(
                    '/ipfs/Qme88zhRyhmpv7eN11We2wG1NvyFQXrgoR5tVLZPjNXkpz/zerg.jpeg',
                    function(err, res){
                        if (err){
                            console.log(err)
                        } else{
                            console.log(res)
                        }
                    }
                )
                //console.log(this.files)
            }
        };
        //        reader.readAsDataURL(file);
        //        console.log(reader.readAsDataURL(file));
        //        this._startUploading();
    }
    saveFile(parameters){
        console.log(parameters.name)
        console.log(parameters.preview)
    }
    static get is(){
        return 'lucent-upload';
    }
    constructor(){
        super()
        this.bytes_uploaded = 0;
        this.bytes_total = 0;
        this.previous_bytes_loaded = 0;
        this.max_file_size = 10000000000;
        this.upload_timer = 0;
        this.result_file_size = '';
        this.files=[];
    }

    static get observers(){}

	static get template() {
        return template_string ;
    }

	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("lucent-upload", LucentUpload)
