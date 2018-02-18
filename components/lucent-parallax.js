import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class LucentParallax extends PolymerElement {
    static get observers(){
        "perspective-changed": "_perspectiveChanged",
        "foregroundScale-changed": "_perspectiveChanged",
        "scale-changed": "_perspectiveChanged"
    }
    constructor(){
        super()
        this.name="LucentParallax"
    }
	static get template() {
    return `
        <!--STYLES-->
            <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
            <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
        <!--END-TEMPLATE-->

        <!--SCRIPTS-->
        <!--END-SCRIPTS-->
	`
	}
	static get properties() {
                  perspective: {
                              type: Number,
                                  notify: true,
                                  value: 300
                            },
                  foregroundScale: {
                              type: Number,
                                  notify: true,
                                  value: 5
                            },
                  scale: {
                              type: Number,
                                  notify: true,
                                  value: 300
                            },
                  scrollTopValue: {
                              type: Number,
                                  notify: true,
                                  readOnly: true,
                                  value: 0
                            }
    	return {
    	    name: String
	    }
	}
}

customElements.define("lucent-parallax", LucentParallax)
