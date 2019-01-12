var Registration = artifacts.require("./Registration.sol");

module.exports = function(deployer) {
  deployer.deploy(Registration);
};
