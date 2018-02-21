import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcToolbarFixed extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link rel="stylesheet" href="https://ipfs.io/ipfs/QmQGgLSemG8rLUZYxiMViB7b7E1qFiyV3MKcHFCtm66qiW/material-components-web.min.css">
        <!--END-STYLES-->

        <!--TEMPLATE-->
            <header class="mdc-toolbar mdc-toolbar--fixed">
                <div class="mdc-toolbar__row">
                    <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                        <span class="mdc-toolbar__title">Title</span>
                    </section>
                </div>
            </header>

            <main class="mdc-toolbar-fixed-adjust">
                <p class="demo-paragraph">
                    A demo paragraph here.
                </p>
            </main>

            <script>
                var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
                toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
            </script>
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

customElements.define("mdc-toolbar-fixed", MdcToolbarFixed)
