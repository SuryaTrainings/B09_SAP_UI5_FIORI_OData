sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (oController) {
    'use strict';

    return oController.extend("home.controller.Main", {
        onInit: function () {
            console.log("OnInit method is executed");
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