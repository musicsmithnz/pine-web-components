import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiOverlay extends PolymerElement {
    static get observers(){}
	static get template() {
    return `
        <!--STYLES-->
            <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
            <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
            <button class="mui-btn mui-btn--primary" onclick="activateOverlay()">Activate overlay</button>
        <!--END-TEMPLATE-->

        <!--SCRIPTS-->
        <script>
            function activateOverlay() {
                mui.overlay('on');
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

customElements.define("mui-overlay", MuiOverlay)
