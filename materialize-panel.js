    import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/materialize-panel/materialize-panel.html"
    
    export class MaterializePanel extends PolymerElement {
    static get observers(){}
    static get template() {
            return template_string
    }
    static get properties() {
    return {
    name: String,
    content: String,
    }
    }
    }
    
    customElements.define("materialize-panel", MaterializePanel)
    
