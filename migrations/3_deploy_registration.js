var CertToken = artifacts.require("./CertToken.sol");
var Registration = artifacts.require("./Registration.sol");
var RegistrationSlim = artifacts.require("./RegistrationSlim.sol");

module.exports = function(deployer) {
  deployer.deploy(Registration,CertToken.address);
  // deployer.deploy(RegistrationSlim)
};

