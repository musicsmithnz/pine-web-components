import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcToolbarNav extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link rel="stylesheet" href="https://ipfs.io/ipfs/QmQGgLSemG8rLUZYxiMViB7b7E1qFiyV3MKcHFCtm66qiW/material-components-web.min.css"></link>
            <style>
            </style>
        <!--END-STYLES-->

        <!--TEMPLATE-->
<nav class="toolbar-nav">
	<ul class="toolbar-nav__links">
	<li>
	<a href="/components/web/catalog/" class="toolbar-nav-link
	toolbar-nav-link--active">
	<span class="toolbar-nav-link__text">Components</span>
	</a>
	</li>
	<li class="mdc-menu-anchor">
	<a href="/components/web/docs/" class="toolbar-nav-link toolbar-nav-link--desktop
	">
	<span class="toolbar-nav-link__text">Documentation</span>
	</a>
	<button class="toolbar-nav-link toolbar-nav-link--mobile
	">
	Documentation
	</button>
	<div class="toolbar-platform-chooser__menu mdc-simple-menu" tabindex="-1">
	<ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
	<li class="mdc-list-item" role="menuitem" tabindex="0" data-href="/components/web/docs/authoring-components/">
	Authoring Components
	</li>
	<li class="mdc-list-item" role="menuitem" tabindex="0" data-href="/components/web/docs/closure-compiler/">
	Closure Compiler Annotations
	</li>
	<li class="mdc-list-item" role="menuitem" tabindex="0" data-href="/components/web/docs/framework-integration/">
	Framework Integration
	</li>
	<li class="mdc-list-item" role="menuitem" tabindex="0" data-href="/components/web/docs/getting-started/">
	Getting Started
	</li>
	<li class="mdc-list-item" role="menuitem" tabindex="0" data-href="/components/web/docs/migrating-from-mdl/">
	Migrating from MDL
	</li>
	<li class="mdc-list-item" role="menuitem" tabindex="0" data-href="/components/web/docs/theming/">
	Theming Guide
	</li>
	</ul>
	</div>
	</li>
	<li>
	<a href="https://github.com/material-components/material-components-web/" class="toolbar-nav-link toolbar-nav-link--github">
	<span class="toolbar-nav-link__text">View on GitHub</span>
	<svg class="toolbar-nav-link__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g clip-rule="evenodd">
	<path fill-rule="evenodd" fill="#fff" d="M12 2.25c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.34.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.03 2.75-1.03.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.74 0 .27.18.58.69.48a9.997 9.997 0 0 0 6.83-9.49C22 6.72 17.52 2.25 12 2.25z"></path>
	</g>
	</svg>
	</a>
	</li>
	</ul>
</nav>
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

customElements.define("mdc-toolbar-nav", MdcToolbarNav)
