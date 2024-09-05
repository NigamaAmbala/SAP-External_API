using { gw_client_data_13E457B793C61EEF91840F1052ED1AB5 as external } from './external/gw_client_data_13E457B793C61EEF91840F1052ED1AB5';

service externalService { 

    entity ZTOTECNFWCSTOSAPSet as projection on external.ZTOTECNFWCSTOSAPSet {
            HUNumber,
            Scanner_Id,
            Transfer_Location_Update,
            Expected_Weight,
            Measured_Weight,
            Diversion_Reason
    }

}