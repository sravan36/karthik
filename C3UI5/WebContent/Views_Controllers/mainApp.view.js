sap.ui.jsview("C3UI5.Views_Controllers.mainApp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf dashboard.mainApp
	*/ 
	getControllerName : function() {
		return "C3UI5.Views_Controllers.mainApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf dashboard.mainApp
	*/ 
	createContent : function(oController) {
		
//		Main page with header(Bar) and container(Navigation Container) for different view's
		
		
		var mainPage = new sap.m.Page( {
		    title: "Main Page",
		    showHeader : false,
		    busyIndicatorDelay: 0,initialPage:"mainPage2",
		    height:"100%" 
		  });

//		Main Navigation container for all view's
		
		var mainNav = new sap.m.NavContainer("mainNav",{height:"100%"});

//      Contents of main bar which will not navigate		
		
		
//		Adding Navigation container to Page(mainPage)
		
		mainPage.addContent(mainNav);
		
//		Page(mainPage) is returned to the view which holds the Bar(mainBar) and Navigation container(mainNav)
		
		return mainPage;	
	}

});