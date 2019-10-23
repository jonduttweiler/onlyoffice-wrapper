
  

# \<only-office\>

  

Polymer3 component for [onlyoffice document editor](https://www.onlyoffice.com/es/document-editor.aspx).

This project allows show several editors in the same page, since the component has it's own shadow DOM.

This uses a modified api.js (``onlyoffice/api_5.4.1.js``)that receives an extra param for documentServerURL in the config object.
You need provide the same file in your document server,
usually this file is placed at : 
``/var/www/onlyoffice/documentserver/web-apps/apps/api/documents/api.js``

  

You can instantiate an editor as follows:
```
<only-office
	document-server-url="http://my-document-server.intranet"
	document-type="text"
	document-file-type="docx"
	document-key="-1885629705"
	document-title="The colour of the magic.docx"
	document-url="http://my-storage-service/path/to/file.docx"
></only-office>
```

## Demo
To see the component in action, edit ``demo/index.html`` and set the parameters for your editor,then execute:

```

$ polymer serve

or

$ npm start

```
