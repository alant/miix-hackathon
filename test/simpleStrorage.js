var Registration = artifacts.require("./Registration.sol");
var CertToken = artifacts.require("./CertToken.sol");

contract('Registration', function(accounts) {
  it("...should start with the value 0.", async function() {
    let certToken = await CertToken.deployed();
    let registration = await Registration.deployed(certToken.address);
    await certToken.addIssuer(registration.address);
    console.log("registration: ",registration.address);
    console.log("certToken: ",certToken.address);
    await registration.registerOrg("中央美术学院","中央美术学院");
    await registration.registerOrg("中国美术学院","中国美术学院");
    await registration.registerOrg("西安美术学院","西安美术学院");
    await registration.registerOrg("四川美术学院","四川美术学院");
    await registration.registerOrg("鲁迅美术学院","鲁迅美术学院");
    await registration.registerOrg("广州美术学院","广州美术学院");
    await registration.registerOrg("湖北美术学院","湖北美术学院");
    await registration.registerOrg("天津美术学院","天津美术学院");
    await registration.registerOrg("清华大学美术学院","清华大学美术学院");
    await registration.registerOrg("南京艺术学院","南京艺术学院");
    let org = await registration.orgs(0);
    console.log(org.name);
    org = await registration.orgs(9);
    console.log(org.name);
    await registration.addEvent("招生","招生信息","mockpubkey",0);
    await registration.addEvent("招生","招生信息","mockpubkey",1);
    await registration.addEvent("招生","招生信息","mockpubkey",2);
    await registration.addEvent("招生","招生信息","mockpubkey",3);
    await registration.addEvent("招生","招生信息","mockpubkey",4);
    await registration.addEvent("招生","招生信息","mockpubkey",5);
    await registration.addEvent("招生","招生信息","mockpubkey",6);
    await registration.addEvent("招生","招生信息","mockpubkey",7);
    await registration.addEvent("招生","招生信息","mockpubkey",8);
    await registration.addEvent("招生","招生信息","mockpubkey",9);
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
