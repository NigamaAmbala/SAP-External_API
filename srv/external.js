const cds = require("@sap/cds");
module.exports = cds.service.impl(async function() {
    const bp = await cds.connect.to("gw_client_data_13E457B793C61EEF91840F1052ED1AB5");
    this.on("READ", "ZTOTECNFWCSTOSAP", async req => {
        return bp.run(req.query);
    })
})