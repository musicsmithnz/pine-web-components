import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdbNavbar extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
	    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
	    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
	    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	    <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
	    <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
	    <header>
	        <nav class="navbar navbar-expand-lg navbar-dark light-blue accent-4">
	            <div class="container">
	                <a class="navbar-brand" href="#">Navbar</a>
	                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	                    <span class="navbar-toggler-icon"></span>
	                </button>
	                <div class="collapse navbar-collapse" id="navbarSupportedContent">
	                    <ul class="navbar-nav mr-auto">
	                        <li class="nav-item active">
                            	<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                        	<li class="nav-item">
                            	<a class="nav-link" href="#">Features</a>
                        	</li>
                        	<li class="nav-item">
                            	<a class="nav-link" href="#">Pricing</a>
                        	</li>
                        	<li class="nav-item btn-group">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown </a>
                                <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                	<a class="dropdown-item" href="#">Action</a>
                            	    <a class="dropdown-item" href="#">Another action</a>
                            	    <a class="dropdown-item" href="#">Something else here</a>
                        	    </div>
                        	</li>
	                    </ul>
                    	<form class="form-inline">
                        	<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    	</form>
                	</div>
            	</div>
        	</nav>
        </header>
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

customElements.define("mdb-navbar", MdbNavbar)
