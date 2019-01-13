var CertToken = artifacts.require("./CertToken.sol");
var Registration = artifacts.require("./Registration.sol");

module.exports = function(deployer) {
  // deployer.deploy(CertToken);
  deployer.deploy(CertToken).then(
    function(){
      deployer.deploy(Registration(CertToken.address));
    });
};
