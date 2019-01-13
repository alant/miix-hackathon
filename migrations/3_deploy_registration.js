var CertToken = artifacts.require("./CertToken.sol");
var Registration = artifacts.require("./Registration.sol");
// var RegistrationSlim = artifacts.require("./RegistrationSlim.sol");
// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
    // var cert,regist,registAddr;
    // deployer.then(function() {
    //   return CertToken.new();
    // }).then(function(instance) {
    //   cert = instance;
    //   return Registration.deployed(instance.address);
    // }).then(function(instance) {
    //   regist = instance;
    //   registAddr = regist.address;
    //   return cert.addIssuer(regist.address);
    // }).then(function(){
    //   return cert.issuers(registAddr)
    // }).then(function(i){
    //   console.log(i);
    // });
    deployer.deploy(Registration,CertToken.address);
};

