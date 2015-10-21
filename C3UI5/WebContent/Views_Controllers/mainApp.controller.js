sap.ui.controller("C3UI5.Views_Controllers.mainApp", {
	
	

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf dashboard.mainApp
*/
onInit: function() {},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf dashboard.mainApp
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf dashboard.mainApp
*/
onAfterRendering: function() {/*

//	To set the logo according to the ASP
	var sservice = '/sap/opu/odata/sap/ZC3_SEND_DEFECTIVE_PCBA_SRV/';//Service to get the customer details
	var model = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZUSR_TYPE_VIEWS_SRV/",true);//Service to get type of the user
	var oModel_txt = new sap.ui.model.odata.ODataModel(sservice,true,null,null,null,null,null);//Initializing the model for the above service
    
	oModel_txt.read('/dealercodeSet',//Reading the service for ASP Details
    		false,
    		null,
    		true,
    		function(res){
					 	   var txt1 = res.results[0].DealerName;// ASP name 
					 	   var txt2 = res.results[0].DealerCode;// ASP ID
					 	   var xcore = sap.ui.getCore();
					        var txt_dis = xcore.getElementById('txt_asp');
					        txt_dis.setText("Welcome "+txt1+"("+txt2+")");//Setting the details of text
					        }
    );
    
    model.read("/prtnr_asgnSet('')",null,null,null,function(oData){//Reading the type of the user
		var type = oData.Type;// Reading the type of ASP from the response
		logo = sap.ui.getCore().getElementById("lavaLogo");//Getting the image control
		if(type == "A"){//Lava
		var src = './Images/lava-mobiles-logo.png';
		logo.setSrc(src); 
		//window.location.href = '/sap/bc/ui5_ui5/sap/z_c3app/Home.html';
			}
		else if(type == "B"){//Xolo
		var src = './Images/xolo-logo.gif';
		logo.setSrc(src); 
		}
		else if(type == "C"){//MWH
		window.location.href = '/sap/bc/ui5_ui5/sap/z_rf_dashboard/index.html';
		}
		else if(type == "D"){//CFA
			
		}
		else if(type == "E"){//ASM
			
		}
		else if(type == "F"){
			
		}
		else if(type == "G"){
			
		}
	},function(oData){
		var asp = sap.ui.getCore().getElementById("tile_not_assigned");
		tile_con.addTile(asp);
	});
	*/},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf dashboard.mainApp
*/
//	onExit: function() {
//
//	}
	
	back:function(){
		var btnHome = sap.ui.getCore().getElementById("btnHome");
		btnHome.setVisible(false);
		var mainText = sap.ui.getCore().getElementById("mainText");
		mainText.setText("Dashboard");
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		    router.navTo("mainDashboard", false);
		    
		//sap.ui.core.UIComponent.getRouterFor(view_gv).navTo("mainDashboard",false,"flip");
		//sap.ui.core.UIComponent.navTo("mainDashboard");
		var tile_con = sap.ui.getCore().getElementById("app1");
		var tile_page = sap.ui.getCore().getElementById("page1");
		
		//tile_con.to(tile_page,"flip");		
		
		//this.setDisplayBlock(true);
		//tile_con.rerender();
		
		//tile_con.focus();
		//location.reload(false);
		//tile_con.scrollIntoView(1, true);
	},
	logout:function(){
		document.cookie = "app=LOGOUT";
		window.location.href = '/sap/bc/ui5_ui5/sap/z_c3app/Logout.html';
		
	}
	

});