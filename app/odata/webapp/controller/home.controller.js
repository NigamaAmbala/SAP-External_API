sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.app.odata.controller.home", {
        onInit: function () {

        },
        onAdd:async function(){
            this.oDialog ??=await this.loadFragment({
                name:"com.app.odata.fragments.create"
            })
            this.oDialog.open();
        },
 
        // closing the DialogBox
        onCancel:function(){
            this.oDialog.close();
        },
        onCreate:function(){
            var oModel = this.getView().getModel();
            // creating the data
            var that = this;
            oModel.create("/ZTOTECNFWCSTOSAPSet",{
                
            HUNumber:this.byId("idHUnumber").getValue(),
            Scanner_Id:this.byId("idScannerIdInput12").getValue(),
            Transfer_Location_Update:this.byId("idTransferLocationUpdatenput12").getValue(),
            Measured_Weight:this.byId("idMeasuredWeightInput12").getValue(),
            Expected_Weight:this.byId("idExpectedWeightt12").getValue(),
            Diversion_Reason:this.byId("idDiversionReasonInput12").getValue()
 
            },
            {
                success:function(oData){
                    sap.m.MessageToast.show(`Hu No Successfully Created!!`);
                    oModel.refresh(true);
                },
                error:function(oError){
                    sap.m.MessageBox.error("Error occurs Unable to create HU");
 
                }
           
            })
        },
        onRead:function(){
           var oModel= this.getView().getModel();
            oModel.read("/ZTOTECNFWCSTOSAPSet",{
                success:function(oData){
                    console.log(oData);
 
                },error:function(oError){
                    console.log(oError);
 
                }
            })
        }
    });
});
