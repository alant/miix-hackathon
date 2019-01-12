// var Registration = artifacts.require("./Registration.sol");
var RegistrationSlim = artifacts.require("./RegistrationSlim.sol");
// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = async function(deployer) {
  // deployer.deploy(Registration);
  deployer.deploy(RegistrationSlim);
  // await deployer.deploy(SimpleStorage);
};
