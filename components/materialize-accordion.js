import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeAccordion extends PolymerElement {
    static get observers(){
    }
    constructor(){
        super()
        this.name="MaterializeAccordion"
    }
	static get template() {
    return `
        <!--STYLES-->
          <link rel="stylesheet" href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css">
          <script href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->

          <ul class="collapsible">
              <li>
                    <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
                          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                              </li>
                                  <li>
                                        <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                                              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                  <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
              </ul>
        <!--END-TEMPLATE-->

        <!--SCRIPTS-->

          var elem = document.querySelector('.collapsible');
            var instance = M.Collapsible.init(elem, options);
        <!--END-SCRIPTS-->
	`
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("materialize-accordion", MaterializeAccordion)
