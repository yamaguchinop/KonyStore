/*****************************************************************
*	Name    : createAppMenu
*	Author  : Kony 
*	Purpose : To create app menu programatically.
******************************************************************/

function createAppMenu() 
{
	kony.print("entered app menu ********************************************************************************  ")
	var homeMItem = ["homeId", "Home", "home_ico_f.png", function homeMenuCallBack(){frmHome.show()}];
	var appMenu= [homeMItem];
    kony.application.createAppMenu("ksAppMenu", appMenu, "appMenu", "");
	kony.application.setCurrentAppMenu("ksAppMenu");
    kony.print("Exited app menu ********************************************************************************  ")
}

/**
****************************************************************
*	Name    : preShowProduct
*	Author  : Kony Solutions
*	Purpose : This function is Product preshow to handle the form pre show logic.
****************************************************************
*/
function preShowProduct(){
	if(kony.os.deviceInfo().name == "thinclient")
	{
		hbxWinTtl.lblSubCatTtl.text = "Products";
	}
	hbxSearch.setVisibility(false);
	if(kony.os.deviceInfo().name =="blackberry")
	{
		hbxSearch.txtbxSrch.setVisibility(false);
	}
}

/**
****************************************************************
*	Name    : preShowSubcat
*	Author  : Kony Solutions
*	Purpose : This function is subcategory preshow to handle the form pre show logic.
****************************************************************
*/
function preShowSubCat()
{
	
	hbxSearch.setVisibility(true);
	if(kony.os.deviceInfo().name == "thinclient")
	{
		hbxWinTtl.lblSubCatTtl.text = "Product Category";
	}
	if(kony.os.deviceInfo().name =="blackberry")
	{
		hbxSearch.txtbxSrch.setVisibility(true);
	}
	hbxSearch.txtbxSrch.text="";
	
}

/**
****************************************************************
*	Name    : preShowProdDetails
*	Author  : Kony Solutions
*	Purpose : This function is preshow for product details to handle the form pre show logic.
****************************************************************
*/
function preShowProdDetails(){

	if(kony.os.deviceInfo().name == "thinclient")
	{
		hbxWinTtl.lblSubCatTtl.text = "Product Details";
	}

	
	hbxSearch.setVisibility(false); //setting the search hbox in the form header to false
	if(kony.os.deviceInfo().name =="blackberry")
	{
		hbxSearch.txtbxSrch.setVisibility(false);
	}
	if(frmProdDetails.lblReview.text=="")
	{
		frmProdDetails.lblReview.text="No Reviews";	
		frmProdDetails.imgReview.setVisibility(false);
	}	
	if( frmProdDetails.lblDesc.text == undefined)
	frmProdDetails.lblDesc.text = "";
}
/*
*	Name    : preShowProdDetailsIpad
*	Author  : Kony Solutions
*	Purpose : This function is preshow for product details to handle the form pre show logic for Ipad.
****************************************************************

function preShowProdDetailsIpad(){
	// For windows8 	frmProdDetails.title="Kony BestBuy";
	hbxSearch.setVisibility(false);
	
	if(frmProdDetails.lblReview.text=="")
	{
		frmProdDetails.lblReview.text="No Reviews";	
		frmProdDetails.imgReview.setVisibility(false);
	}
	if( frmProdDetails.lblDesc.text == undefined)
	frmProdDetails.lblDesc.text = "";	
}
*/

