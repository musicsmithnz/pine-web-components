import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js'
import * as template_string from './component_assets/lucent-search/lucent-search.html'

export class LucentSearch extends PolymerElement {

    static get template() {
        return template_string
    }
    constructor() {
        super();
        this.name = 'lucent search';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('lucent-search', LucentSearch);
