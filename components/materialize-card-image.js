import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeCardImage extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
		<!--STYLES-->
			<link rel="stylesheet" href="https://ipfs.io/ipfs/QmZjRLPbC5TRshn1zmJQU7KWVj125y7xx68GS7vkAwbWdv/materialize.min.css">
            <script src="https://ipfs.io/ipfs/QmZjRLPbC5TRshn1zmJQU7KWVj125y7xx68GS7vkAwbWdv/materialize.min.js"></script>
            <style>
            .card {
                height: 25em;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-content: stretch;
            }
            .card-image {
                flex: 1 3 auto;
                overflow: hidden;
            }
            .card-image img{
                width: 100%;
            }
            .card-content {
                flex: 1 2 auto;
            }
            .card-action{
                flex: 1 1 auto;
            }
            </style>
		<!--END-STYLES-->

		<!--TEMPLATE-->
            <div class="card card-panel hoverable">
                <div class="card-image">
                    <img class="responsive-img" src="[[img]]"></img>
                    <span class="card-title">[[title]]</span>
                </div>
                <div class="card-content">
                    <span>[[content]]</slot>
                    <slot></slot>
                </div>
                <div class="card-action">
                    <a href="[[actionlink]]">[[action]]</a>
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
            img: String,
            title: String,
            content: String,
            action: String,
            actionlink: String
	    }
	}
}

customElements.define("materialize-card-image", MaterializeCardImage)
