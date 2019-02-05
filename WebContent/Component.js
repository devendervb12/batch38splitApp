
sap.ui.core.UIComponent.extend("smax.batch38.Product.Component", {
	metadata : {
		manifest : "json"
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
		
	}
})