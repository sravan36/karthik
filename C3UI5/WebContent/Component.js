jQuery.sap.declare("C3UI5.Component");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("C3UI5.Component", {
	metadata : {
		"name" : "C3UI5",
		"version" : "1.0",
		"includes" : [],
		"dependencies" : {
			"libs" : ["sap.m", "sap.me", "sap.ushell","sap.ui.commons","sap.ui.table","sap.ui.ux3"],
			"components" : []
		},

		"config" : {
			"resourceBundle" : "i18n/messageBundle.properties",
			"titleResource" : "",
			
			"serviceConfig" : {
				name: "C3UI5",
				serviceUrl: ""
			}
		},

		routing: {
			config: {
				viewType : "JS",
				viewPath: "C3UI5.Views_Controllers",  // common prefix
				targetAggregation: "pages",
				targetControl: "mainNav"
			},
			routes:
				[{
					pattern : "", 
					name : "mainApp",
					view : "mainApp"									
				},
				{
					pattern : "view2", // will be the url and from has to be provided in the data
					view : "view2",
					name : "view2" // name used for listening or navigating to this route
				},
				{
					pattern : "view1", // will be the url and from has to be provided in the data
					view : "view1",
					name : "view1" // name used for listening or navigating to this route
				}
				]
		}
	},

	init : function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter());
		// this component should automatically initialize the router
		this.getRouter().initialize();
	},

	/**
	 * Initialize the application
	 * 
	 * @returns {sap.ui.core.Control} the content
	 */
	createContent : function() {

		var oViewData = {
				component : this
		};
		return sap.ui.view({
			viewName : "C3UI5.Views_Controllers.mainApp",
			type : sap.ui.core.mvc.ViewType.JS,
			viewData : oViewData
		});
	}
});

