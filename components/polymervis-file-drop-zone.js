import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"

export class PolymervisFileDropZone extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
	<style>
	file-drop-zone {
	    border: 1px dashed transparent;
    	color: #aaa;
	    background-color: #efefef;
	    width: 560px;
	    height: 300px;
	    transition: all .3s;
	}
	file-drop-zone.dragover {
	    border: 1px dashed #E91E63;
	    transition: all .3s;
	}
	file-drop-zone:hover > [slot='drop-zone'],file-drop-zone.dragover > [slot='drop-zone'] {
	    color: #E91E63;
    	transition: all .3s;
	}
	file-drop-zone.errored {
	    background-color: #FFEBEE;
	    transition: all .3s;
	}
	file-drop-zone[has-files] {
	    color: #2196F3;
	    transition: all .3s;
	}
	[slot='drop-zone'] {
	    text-align: center;
	    font-size: 1.1em;
	    --iron-icon-height: 64px;
	    --iron-icon-width: 64px;
	}
	[slot='drop-zone'] > .title {
	    font-size: 1.2em;
	}
    [slot='drop-zone'] > .small{
	    font-size: 0.6em;
	}
	</style>
	<!--END-STYLES-->

	<!--TEMPLATE-->
	<file-drop-zone
	    multiple
        accept=".csv, .tsv"
	    files="{{files}}"
	    last-error="{{error}}"
	    on-error="onError">

	<!-- Custom slot element to style the interior of the drop zone -->
	    <div slot="drop-zone" class="layout vertical center center-justified">
<!--	        <iron-icon icon="description"></iron-icon> -->
	        <div class="title">Drop CSV or TSV files here</div>
	        <div class="small">[[error.message]]</div>
<!--	        <template is="dom-repeat" items="[[files]]">
	            <div class="small">[[item.name]]</div>
            </template> -->
	    </div>
	</file-drop-zone>
	<!--END-TEMPLATE-->

	<!--SCRIPTS-->
	<!--END-SCRIPTS-->
	`
	}
	static get properties() {
	    return {
            name: String
            file: 
	    }
	}
}

customElements.define("polymervis-file-drop-zone", polymervis-file-drop-zone)
