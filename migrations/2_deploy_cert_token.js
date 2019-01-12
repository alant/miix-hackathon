var CertToken = artifacts.require("./CertToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CertToken);
};
