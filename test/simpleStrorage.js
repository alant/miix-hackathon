var Registration = artifacts.require("./Registration.sol");
require('truffle-test-utils').init();

contract('Registration', function(accounts) {
  it("...should start with the value 0.", async function() {
    let registration = await Registration.deployed();
    let result = await registration.registerOrg("testa","collage A");
    assert.web3Event(result, {
      event: 'RegisterOrgEvent',
        args: {
          param_1: 'Some value',
          param_2: 0x123456 // No need for toNumber hassle
      }
    }, 'The event is emitted');
    // console.log(await registration.orgs(id.valueOf()))
    // assert.equal(registration.valueOf(), 0, "0 wasn't stored in contract");
  });
  // it("...should store the value 89.", async function() {
  //   let Registration = await Registration.deployed();
  //   await Registration.set(89, {from: accounts[0]});
  //   let storedData = await Registration.storedData_();
  //   assert.equal(storedData.valueOf(), 89, "89 wasn't stored in contract");
  // });
})
