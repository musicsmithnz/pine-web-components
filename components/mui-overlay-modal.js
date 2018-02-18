import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiOverlayModal extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
        <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
        <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
	<button class="mui-btn mui-btn--primary" onclick="activateModal()">Activate modal</button>
	<!--END-TEMPLATE-->

	<!--SCRIPTS-->
	<script>
	    function activateModal() {
	        var modalEl = document.createElement('div');
        	modalEl.style.width = '400px';
	        modalEl.style.height = '300px';
            modalEl.style.margin = '100px auto';
        	modalEl.style.backgroundColor = '#fff';
	        mui.overlay('on', modalEl);
	    }
	</script>
	<!--END-SCRIPTS-->
	`
	}
	static get properties() {
	    return {
	        name: String
	    }
	}
}

customElements.define("mui-overlay-modal", MuiOverlayModal)
