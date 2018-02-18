import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiTable extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
    <!--STYLES-->
        <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
        <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
	<table class="mui-table">
    	<thead>
        	<tr>
            	<th>Column 1</th>
            	<th>Column 2</th>
        	</tr>
        </thead>
        <tbody>
           	<tr>
           	    <td>Cell 1-1</td>
               	<td>Cell 1-2</td>
           	</tr>
            <tr>
           	    <td>Cell 2-1</td>
               	<td>Cell 2-2</td>
           	</tr>
    	</tbody>
	</table>

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

customElements.define("mui-table", MuiTable)
