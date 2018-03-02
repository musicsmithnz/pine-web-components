import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeParallax extends PolymerElement {
    static get observers(){
    }
    constructor(){
        super()
        this.name="MaterializeParallax"
    }
	static get template() {
    return `
        <!--STYLES-->
          <link rel="stylesheet" href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css">
          <script href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
          <div class="parallax-container">
            <div class="parallax">
              <img src="images/parallax1.jpg">
            </div>
          </div>
        <!--END-TEMPLATE-->

        <!--SCRIPTS-->
          var elem = document.querySelector('.parallax');
          var instance = M.Parallax.init(elem, options);
        <!--END-SCRIPTS-->
	`
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("materialize-parallax", MaterializeParallax)
