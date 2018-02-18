import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiTabs extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
	    <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
	    <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
    <ul class="mui-tabs__bar">
	    <li class="mui--is-active"><a data-mui-toggle="tab" data-mui-controls="pane-default-1">Tab-1</a></li>
    	<li><a data-mui-toggle="tab" data-mui-controls="pane-default-2">Tab-2</a></li>
    	<li><a data-mui-toggle="tab" data-mui-controls="pane-default-3">Tab-3</a></li>
	</ul>
	<div class="mui-tabs__pane mui--is-active" id="pane-default-1">Pane-1</div>
	<div class="mui-tabs__pane" id="pane-default-2">Pane-2</div>
	<div class="mui-tabs__pane" id="pane-default-3">Pane-3</div>

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

customElements.define("mui-tabs", MuiTabs)
