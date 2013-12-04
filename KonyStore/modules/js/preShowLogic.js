
/**
****************************************************************
*	Name    : preShowProduct
*	Author  : Kony Solutions
*	Purpose : This function is Product preshow to handle the form pre show logic.
****************************************************************
*/
function preShowProduct(){
	
	hbxSearch.setVisibility(false);
}

/**
****************************************************************
*	Name    : preShowSubcat
*	Author  : Kony Solutions
*	Purpose : This function is subcategory preshow to handle the form pre show logic.
****************************************************************
*/
function preShowSubCat(){
	
	
	hbxSearch.setVisibility(true);
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
	
	//#ifdef iphone
		hbxSearch.setVisibility(false); //setting the search hbox in the form header to false
	//#endif
	if(frmProdDetails.lblReview.text=="")
	{
		frmProdDetails.lblReview.text="No Reviews";	
		frmProdDetails.imgReview.setVisibility(false);
	}	
	if( frmProdDetails.lblDesc.text == undefined)
	frmProdDetails.lblDesc.text = "";
}

/**
****************************************************************
*	Name    : preShowProdDetailsIpad
*	Author  : Kony Solutions
*	Purpose : This function is preshow for product details to handle the form pre show logic for Ipad.
****************************************************************
*/
function preShowProdDetailsIpad(){
	//#ifdef windows8
	frmProdDetails.title="Kony BestBuy";
	//#else
		hbxSearch.setVisibility(false);
	//#endif
	
	if(frmProdDetails.lblReview.text=="")
	{
		frmProdDetails.lblReview.text="No Reviews";	
		frmProdDetails.imgReview.setVisibility(false);
	}
	if( frmProdDetails.lblDesc.text == undefined)
	frmProdDetails.lblDesc.text = "";	
}


