    import { Element as PolymerElement } from "../../@polymer/polymer/polymer-element.js"
    
    export class MaterializePanel extends PolymerElement {
    static get observers(){}
    static get template() {
    return `
    <!--STYLES-->
    <link rel="stylesheet" href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css">
    <script href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css"></script>
    <style>
    .card {
    height: 25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    }
    .card-content {
    flex: 1 1 auto;
    }
    </style>
    <!--END-STYLES-->
    
    <!--TEMPLATE-->
    <div class="card card-panel hoverable">
    <div class="card-content">
    <span>[[content]]</span>
    <slot></slot>
    </div>
    </div>
    <!--END-TEMPLATE-->
    
    <!--SCRIPTS-->
    <!--END-SCRIPTS-->
    `
    }
    static get properties() {
    return {
    name: String,
    content: String,
    }
    }
    }
    
    customElements.define("materialize-panel", MaterializePanel)
    
