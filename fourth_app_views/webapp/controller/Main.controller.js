sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (oController, JSONModel) {
    'use strict';

    return oController.extend("home.controller.Main", {
        onInit: function () {
            console.log("OnInit method is executed");

            //Step - 1 : Dummy data - data file 
            var oJsonData = {
                "students":
                {
                    "name": "Kondal Rao",
                    "class": 10,
                    "status": false,
                    "marks": 450,
                    "id": "001"
                }
            } 

            //Step - 2 : Create JSON Model 
            var oJSONModel = new JSONModel(oJsonData);

            //Step - 3 : Assign model to view 
            this.getView().setModel(oJSONModel);

            this.getView().setBindingMode("OneWay");

            // data ended
            console.log(oJSONModel); 
        },
                onExit: function () {
                    console.log("onExit method is executed");

    },
        onBeforeRendering: function () {
            console.log("On Before rendering method is executed");

        },
        onAfterRendering: function () {
            console.log("On After rendering method is executed");

        },

        onAnimatePress: function () {
            var i = 0;
            for (i = 0; i < 5; i++) {
                $("#idInput").fadeOut(2000).fadeIn(2000);
            }
        }

        // We can our own method based on actions 

    });
});