
/**
****************************************************************
*	Name    : Navigate to home
*	Author  : Kony Solutions
*	Purpose : This function is used to show home form
****************************************************************
*/
function showFrmHome()
{
	frmHome.show();
}


/**
****************************************************************
*	Name    : getCatList
*	Author  : Kony Solutions
*	Purpose : This function invokes BestBuy service.
****************************************************************
*/

function getCatList()
{
	var catList = { serviceID:"getCategories", apiKey:gApiKey };
	var categoryList = appmiddlewareinvokerasync(catList, catListCallback);
	kony.application.showLoadingScreen("loadingSkin","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null);
	
}

/**
****************************************************************
*	Name    : catListCallback
*	Author  : Kony Solutions
*	Purpose : This function is service callback function to fetch Categories list.
****************************************************************
*/
function catListCallback(status, gcList)
{	
	if (status == 400)
	{
		if (gcList["opstatus"] == 0) 
		{
			var tmp =[];
			var childData=[];
			if (gcList["category"] != null || gcList["category"] != undefined )
			{
				for(var i=0;i<gcList["category"].length;i++)
				{
					if(channel=="desktopweb") 
					{
						childData.push({
					            template: hbxDetails,
					            "lblDetails": {
					                "text": gcList["category"][i]["name"],
					                "skin": "lblWhiteMenu"
	           					}
	           					});
	           		}
					else
					{
						tmp.push({
							"categoryName":gcList["category"][i]["name"],
							"categoryID":gcList["category"][i]["id"]
								});
					}
				}	
				if(channel=="desktopweb") 
				{
					 var menudata = {
							        template: hbxProduct,
							        "lblProduct": {
							            "text": "Products",
							            "skin": "lblMenu"
							        },
							        children: childData
								  };
				    frmHome.menucontainer.setDataAt(menudata,0);
				    resulttable=gcList["category"];
				    kony.application.dismissLoadingScreen(); 
				}
				else
				{
					 frmHome.segcatList.setData(tmp);
					 kony.application.dismissLoadingScreen();  
				}
	         }
	     }
	     else
	     {
        	alert("Please check network connection and try again.");    	
			kony.application.dismissLoadingScreen(); 
			return;	                 
	     }
	}
}

/**
****************************************************************
*	Name    : getSubCatList
*	Author  : Kony Solutions
*	Purpose : This function invokes BestBuy service.
****************************************************************
*/

function getSubCatList()
{
	
	var subcatList = { serviceID:"getSubCategories", subCat:scatID , apiKey: gApiKey };
	var subcategoryList = appmiddlewareinvokerasync(subcatList, subCatListCallback);
	kony.application.showLoadingScreen("loadingSkin","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null);
}

function getSubCatList_ipad()
{
	var subcatList = { serviceID:"getSubCategories", subCat:scatID , apiKey: gApiKey };
	var subcategoryList = appmiddlewareinvokerasync(subcatList, subCatListCallbackIpad);
	kony.application.showLoadingScreen("loadingSkin","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null);
}

/**
****************************************************************
*	Name    : subCatListCallback
*	Author  : Kony Solutions
*	Purpose : This function is service callback function to fetch SubCategories list.
****************************************************************
*/
function subCatListCallback(status, gcList)
{	
	
	if (status == 400)
	{
		if (gcList["opstatus"] == 0) 
		{
			var tmp =[];
			if ((gcList["category"] != null|| gcList["category"] != undefined ) && gcList["category"].length > 0)
			{
				frmSubCat.title=scatName;
				if(kony.os.deviceInfo().name=="WindowsPhone")
					hbxWinTtl.lblSubCatTtl.text =scatName;
				for(var i=0;i<gcList["category"].length;i++)
				{
					tmp.push({
						"categoryName":gcList["category"][i]["name"],
						"categoryID":gcList["category"][i]["id"]
							});
				}	
				frmSubCat.segcatList.setData(tmp);
					
			/*	if(kony.os.deviceInfo().name != "iPad")
				{
					frmSubCat.lblSubHeader.text = scatName;
				}
				else
				{
					
					if(frmSubCat.lblSubCat.text == "" || frmSubCat.lblSubCat.text == null || frmSubCat.lblSubCat.text == undefined)
					{
						frmSubCat.lblSubCat.text = scatName;
						frmSubCat.lblSubCat.skin = "lblBlue";
						frmSubCat.lblSubCat.setVisibility(true);
					}
					else if(frmSubCat.lblSubCat2.text == "" || frmSubCat.lblSubCat2.text == null || frmSubCat.lblSubCat2.text == undefined)
					{
						frmSubCat.lblSubCat2.text = scatName;
						frmSubCat.lblSubCat.skin = "lblFoc";
						frmSubCat.lblSubCat2.skin = "lblBlue";
						frmSubCat.lblSubCat2.setVisibility(true);
					}
				
				}
				frmSubCat.lblState.setFocus(true);*/	
				if(kony.application.getCurrentForm().id != "frmSubCat")			
					frmSubCat.show(); 
					 
				previousForm = "frmSubCat";
				kony.application.dismissLoadingScreen();            
	          }
	          else
	          {
	          	var prodList = { serviceID:"getProducts", productID:scatID ,apiKey:gApiKey };
	        	//frmProduct.hboxCat.setVisibility(true);
	            hbxSearch.setVisibility(true);	          		
	          	frmProduct.hbxSrch.setVisibility(false);
				var ProductList = appmiddlewareinvokerasync(prodList, prodListCallback);
				          	          
	          }
	     }
	     else
	     {
            	alert("Please check network connection and try again.");
            	kony.application.dismissLoadingScreen();      	
   				return;	                 
	     }
	                	
	 }
	 								            					
}	

function subCatListCallbackIpad(status, gcList)
{	
	
	if (status == 400){
		if (gcList["opstatus"] == 0) {
			var tmp =[];
			if ((gcList["category"] != null|| gcList["category"] != undefined ) && gcList["category"].length > 0){
				for(var i=0;i<gcList["category"].length;i++){
					tmp.push({
						"categoryName":gcList["category"][i]["name"],
						"categoryID":gcList["category"][i]["id"]
							});
					}	
					frmSubCat.segcatList.setData(tmp);
					
					/*if(frmSubCat.lblSubCat.text == "" || frmSubCat.lblSubCat.text == null || frmSubCat.lblSubCat.text == undefined)
						{
							frmSubCat.lblSubCat.text = scatName;
							frmSubCat.lblSubCat.skin = "lblBlue";
							frmSubCat.lblSubCat.setVisibility(true);
						}
						else if(frmSubCat.lblSubCat2.text == "" || frmSubCat.lblSubCat2.text == null || frmSubCat.lblSubCat2.text == undefined)
						{
							frmSubCat.lblSubCat2.text = scatName;
							frmSubCat.lblSubCat.skin = "lblFoc";
							frmSubCat.lblSubCat2.skin = "lblBlue";
							frmSubCat.lblSubCat2.setVisibility(true);
						}
				
					frmSubCat.lblState.setFocus(true);*/
					frmSubCat.show();  
					kony.application.dismissLoadingScreen();            
	          }
	          else
	          {
	          	var prodList = { serviceID:"getProducts", productID:scatID ,apiKey:gApiKey };
	      	    hbxSearch.setVisibility(true);	          		
	          	frmProduct.hbxSrch.setVisibility(false);
				var ProductList = appmiddlewareinvokerasync(prodList, prodListCallback);
				          	          
	          }
	     }
	     else{
            	alert("Please check network connection and try again.");
            	kony.application.dismissLoadingScreen();      	
   				return;	                 
	     }
	                	
	 }
	 								            					
}      
                