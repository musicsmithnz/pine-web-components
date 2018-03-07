    import { Element as PolymerElement } from "../../@polymer/polymer/polymer-element.js"
    
    export class MaterializePanel extends PolymerElement {
    static get observers(){}
    static get template() {
            return
    }
    static get properties() {
    return {
    name: String,
    content: String,
    }
    }
    }
    
    customElements.define("materialize-panel", MaterializePanel)
    
