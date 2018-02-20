import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcGridList extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
            <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
			<div class="mdc-grid-list">
				<ul class="mdc-grid-list__tiles">
                    <slot></slot>
            	</ul>
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

customElements.define("mdc-grid-list", MdcGridList)
