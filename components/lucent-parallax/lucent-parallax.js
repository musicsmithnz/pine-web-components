import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

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
            return
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
