
import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcGridTile extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
            <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
			<li class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
		    	<div class="mdc-grid-tile__primary">
                    <slot name="image">
                        <img src="https://www.polymer-project.org/images/logos/p-logo.png"></img>
                    <slot>
		    	</div>
                <span class="mdc-grid-tile__secondary">
                    <slot name="description">
                        <h2 href="https://www.webcomponents.org/collection/Polymer/elements">Polymer Elements</h2>
                    </slot>
			    </span>
			</li>
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

customElements.define("mdc-grid-tile", MdcGridTile)
