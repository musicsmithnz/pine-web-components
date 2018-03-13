import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js';
import * as template_string from './component_assets/lucent-thumbnail/lucent-thumbnail.html'

export class LucentThumbnail extends PolymerElement {

    static get template() {
        return template_string
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
