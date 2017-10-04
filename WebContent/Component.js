sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/odata/v2/ODataModel",
	"ZTREE/localService/mockserver"
], function(UIComponent, ODataModel, mockserver) {
	"use strict";
	return UIComponent.extend("ZTREE.Component", {
		metadata: {
			rootView: "ZTREE.View",
			dependencies: {
				libs: [
					"sap.ui.table",
					"sap.ui.unified",
					"sap.m"
				]
			},
			config: {
				"sample": {
					"stretch": true,
					"files": [
						"localService/mockdata/Nodes.json",
						"localService/metadata.xml",
						"localService/mockserver.js",
						"Component.js",
						"Controller.controller.js",
						"View.view.xml"
					]
				},
				"serviceConfig": {
					"name": "ZHR_144_SRV_01",
					"serviceUrl": "/sap/opu/odata/sap/ZHR_144_SRV_01/"
				}
			}
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			var sODataServiceUrl = "/here/goes/your/odata/service/url/";
			// init our mock server
			mockserver.init(sODataServiceUrl);
			// set model on component
			this.setModel(new ODataModel(sODataServiceUrl, {
				json: true,
				useBatch: true
			}));
		}
	});
});