
//End of global declaration.
sap.ui.controller("C3UI5.Views_Controllers.view1", {

	

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf createcall.createcall
*/
	onInit: function() {
		
	},
// End of call type change.	
	to: function(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
	    router.navTo("view2", false);
	
	}

});