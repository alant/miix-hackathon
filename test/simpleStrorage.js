var Registration = artifacts.require("./Registration.sol");

contract('Registration', function(accounts) {
  it("...should start with the value 0.", async function() {
    let registration = await Registration.deployed();
    let result = await registration.registerOrg("testa","collage A");
    let org = await registration.orgs(0);
    console.log(org.id.toNumber());
    result = await registration.addEvent("testevent","testinfo","mockpubkey",org.id.toNumber());
    let evt = await registration.targets(0);
    console.log(evt);
    result = await registration.regist(evt.id.toNumber(),"encrypted data");
    console.log(evt);
    
    // console.log(evt);
    // console.log("id",orgId)
    // es =  await tronWeb.getEventByTransactionID(result);
    // let evtId;
    // es.forEach(element => {
    //   evtId = element.result.id
    //     assert.equal(element.result.name,"testevent");
    //     assert.equal(element.result.orgName,"collage A");
    //     assert.equal(element.name,"IssueEvent");
    // });
  });
})
