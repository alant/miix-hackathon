var CertToken = artifacts.require("./CertToken.sol");
var Registration = artifacts.require("./Registration.sol");
// var RegistrationSlim = artifacts.require("./RegistrationSlim.sol");
// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
    deployer.deploy(Registration,CertToken.address).then(async function(registration){
        let result = await registration.registerOrg("testa","collage A");
        let org = await registration.orgs(0);
        console.log(org.id.toNumber());
        result = await registration.addEvent("testevent","testinfo","mockpubkey",org.id.toNumber());
        let evt = await registration.targets(0);
        console.log(evt);
        result = await registration.regist(evt.id.toNumber(),"encrypted data");
        let r = await registration.getEventRegistor(evt.id.toNumber());
        console.log("registor info:",r);
        let certId = await registration.certCount();
        console.log("certCount:",certId);
        result = await certToken.certs(certId.toNumber());
        console.log(result);
    });
};

