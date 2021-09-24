sap.ui.jsview("home.view.Main",
{
    
    getControllerName:function(){
        return "home.controller.Main"
    },

    createContent:function(oController){
        var oInp = new sap.m.Input("idInput",{
            maxLength: 10
        });

        var oButton = new sap.m.Button("idButton",{
            text:"Animate",
            press: oController.onAnimatePress
        });
        
        return [oInp, oButton];
    }
})