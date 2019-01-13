var Registration = artifacts.require("./Registration.sol");
var CertToken = artifacts.require("./CertToken.sol");

contract('Registration', function(accounts) {
  it("...should start with the value 0.", async function() {
    let certToken = await CertToken.deployed();
    let registration = await Registration.deployed(certToken.address);
    let result = await registration.registerOrg("testa","collage A");
    let org = await registration.orgs(0);
    console.log(org.id.toNumber());
    result = await registration.addEvent("testevent","testinfo","mockpubkey",org.id.toNumber());
    let evt = await registration.targets(0);
    console.log(evt);
    result = await registration.regist(evt.id.toNumber(),"encrypted data");
    let r = await registration.getEventRegistor(evt.id.toNumber());
    console.log("registor info:",r);
    let certId = await registration.certCount();
    console.log("certCount:",certId);
    result = await certToken.certs(certId.toNumber());
    console.log(result);
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
