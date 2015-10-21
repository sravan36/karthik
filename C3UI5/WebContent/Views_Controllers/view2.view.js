sap.ui.jsview("C3UI5.Views_Controllers.view2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf checkwarranty.CheckWrntyView
	*/ 
	getControllerName : function() {
		return "C3UI5.Views_Controllers.view2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf checkwarranty.CheckWrntyView
	*/ 
	createContent : function(oController) {var mainPage = new sap.m.Page("mainPage3", {
	    title: "View 2",
	    showHeader : true,
	    busyIndicatorDelay: 0,
	    height:"10em" 
	  });
	var btn1 = new sap.m.Button("btn4",{text:"This is page 2"});
	var btn2 = new sap.m.Button("btn6",{icon:"sap-icon://home",text:"Click to go to view 1",press:[oController.to,oController]});
	mainPage.addContent(btn1).addContent(btn2);
	return mainPage;
	}

});
