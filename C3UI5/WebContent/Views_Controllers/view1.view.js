//C3UI5.Views_Controllers.Lava.createCall.createcall
sap.ui.jsview("C3UI5.Views_Controllers.view1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf new_asp_process.Process
	*/ 
	getControllerName : function() {
		return "C3UI5.Views_Controllers.view1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf new_asp_process.Process
	*/ 
	createContent : function(oController) {
		var mainPage = new sap.m.Page("mainPage2", {
	    title: "View 1",
	    showHeader : true,
	    busyIndicatorDelay: 0,
	    height:"10em" 
	  });
	var btn1 = new sap.m.Button("btn",{text:"This is page 1"});
	var btn2 = new sap.m.Button("btn1",{icon:"sap-icon://home",text:"Click to go to view 1",press:[oController.to,oController]});
	mainPage.addContent(btn1).addContent(btn2);
	
	return mainPage;
	
	}

});