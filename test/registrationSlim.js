var RegistrationSlim = artifacts.require("./RegistrationSlim.sol");

contract('RegistrationXs', function(accounts) {
  it("...should register a student.", async function() {
    let registration = await RegistrationSlim.deployed();
    await registration.register("hello", {from: accounts[0]});
    let storedData = await registration.registry(accounts[0]);
    console.log("===> storedData: ", storedData);
  });
})