import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

import "../onlyoffice/api_5.4.1";
import { config } from "../onlyoffice/config.js"


/**
 * `only-office`
 * Element that represents an editor of only office
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class OnlyOffice extends PolymerElement {

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
          width: 100%;
        }
        #oowrapper{
          width: 100%;
          height:100%;
          background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
        }
        div.info label{
          font-weight: 600;
        }
      </style>
    
      <button on-click="initEditor">Init!</button>
      <button on-click="closeEditor">Close</button>
     
      <div id="oowrapper"></div>
    `;
  }

  static get properties() {
    return {
      documentServerUrl: {
        type: String,
        reflectToAttribute: true
      },
      documentType: {
        type: String,
        reflectToAttribute: true
      },

      documentTitle: {
        type: String,
        reflectToAttribute: true
      },

      documentFileType: {
        type: String,
        reflectToAttribute: true
      },

      documentKey: {
        type: String,
        reflectToAttribute: true
      },

      documentUrl: {
        type: String,
        reflectToAttribute: true
      }

    };
  }

  constructor() {
    super();
  }




  initEditor() {
    this.docEditor = new DocsAPI.DocEditor(this.$.oowrapper, {
      ...config,
      documentServerURL: this.documentServerUrl,
      documentType: this.documentType,
      document: {
        ...config.document,
        title: this.documentTitle,
        fileType: this.documentFileType,
        key: this.documentKey,
        url: this.documentUrl
      }
    });
  }

  closeEditor() {
    this.docEditor.destroyEditor();
  }






  static get is() {
    return 'oo-wrapper';
  }


}

window.customElements.define('only-office', OnlyOffice);
