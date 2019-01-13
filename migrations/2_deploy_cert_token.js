// var CertToken = artifacts.require("./CertToken.sol");
var CertToken = artifacts.require("./CertTokenSlim.sol");
var Registration = artifacts.require("./RegistrationSlim.sol");

module.exports = function(deployer) {
  // deployer.deploy(CertToken);
  deployer.deploy(CertToken);
  deployer.deploy(Registration);
};
