import {Element as PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js';
import * as template_string from './lucent-thumbnail.html'

export class LucentThumbnail extends PolymerElement {

    static get template() {
        return `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/js/materialize.min.js"></script> 
            <style>        
            a{
                color: var( --my-light-theme-color, purple)
            }
            .content-box {
                display: inline-block;
                position: relative;
                width: 100%;
            }
            .content-box:after {
                content: '';
                display: block;
                margin-top: 100%;
            }
            .element {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #fdfdfd;
                border: .1em solid var(--my-light-theme-color, #aaa);
                border-radius: .5em;
                margin: .2em;
                width: 100%;
                height: 100%;
            }
            </style>
                <div class="content-box" style="background: [[background_color]];">
                    <div class="element card-panel">
            <a href="[[link]]">
                        <slot></slot>
            </a>        
                    </div>
                </div>
            `
    }
    constructor() {
        super();
        this.name = 'Polymer 3 Thumbnail';
    }

    static get properties() {
        return{    
            name: {
                Type: String
            },
            link: {
                Type: String
            },
            background_color: {
                Type: String
            }
        };
    }
}

customElements.define('lucent-thumbnail', LucentThumbnail);
