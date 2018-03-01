import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeTable extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.css">
        <script href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.js"></script>
        <style>
        .theme-primary{
            background: var(--theme-primary);
        }
        .theme-primary-light{
            background: var(--theme-primary-light);
        }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->
          <table class="striped highlight responsive-table">
		    <thead>
	            <tr>
		            <th>Name</th>
		            <th>Item Name</th>
			        <th>Item Price</th>
	            </tr>
	        </thead>
	        <tbody>
                <tr>
		            <td>Alvin</td>
            		<td>Eclair</td>
            		<td>$0.87</td>
                </tr>
                <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
        		</tr>
		        <tr>
				    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
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

customElements.define("materialize-table", MaterializeTable)
