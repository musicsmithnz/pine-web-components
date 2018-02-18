import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiAppbar extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
        <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
        <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
	    <div class="mui-appbar">
    	    <table width="100%">
        	    <tr style="vertical-align:middle;">
        	        <td class="mui--appbar-height">Left Side</td>
    	            <td class="mui--appbar-height" align="right">Right Side</td>
    	        </tr>
	        </table>
        </div>
	<!--END-TEMPLATE-->

	<!--SCRIPTS-->
	<!--END-SCRIPTS-->
	`
	}
	static get properties() {
	    return {
	        name: String
	    }
	}
}

customElements.define("mui-appbar", MuiAppbar)
