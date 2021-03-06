pragma solidity ^0.4.23;

contract ICert{
    function mint(address _to, string _registerInfo, string _hash) public;
}
contract Registration {
    event RegistOrgEvent(
        uint id,
        string name
    );

    event IssueEvent(
        uint id, //数组索引
        string orgName,
        string name
    );
    event RegistEvent(
        uint eventId, //数组索引
        string eventName,
        address user
    );
    event RegistSuccess(address user, string registInfo);

    
    //报名的target
    struct Organisation {
        uint id; //数组索引
        string name;
        string info;
        address admin;
    }
    struct EventToSignIn {
        uint id; //数组索引
        uint orgId;
        string name;
        string pubKey;
        string info;
        uint status; //0 尚未开始 1 报名进行中， 2 结束
        uint deadLineHeight;//报名截止高度
        address admin;//有权限查看信息
        address[] registor;//报名者
        mapping(address => string) registInfo; //个人地址及其，报名信息，存储加密后的字符串
    }
    struct User {
        uint id;
        //存储加密后的个人信息 encryto(json), 将来可细化，复用，细力度的直接授权给组织方，而不用每次填写
        //string info
        uint[] events; //个人参加的活动
        uint[] certs; //个人参加的活动
    }

    address public owner;
    address receiptAddress;
    Organisation[] public orgs;
    EventToSignIn[] public targets;
    mapping(address => User) users;
    uint public userCount;//used for user id
    uint public certCount;//used for certId when minting
    mapping(address => string) public registry;
    constructor(address receiptContract) public {
        receiptAddress = receiptContract;
        owner = msg.sender;

        //初始化数据，仅在此Demo中，
    }

    modifier onlyAdmin() {
        require(
            msg.sender == owner
        );
        _;
    }

    function setReceiptAddress(address receipt)public onlyAdmin{
        receiptAddress = receipt;
    }

    function registerOrg(string name, string info) public onlyAdmin {
        uint id = orgs.length;
        orgs.push(Organisation({
            id: id,
            name: name, 
            info: info,
            admin: msg.sender
        }));
        emit RegistOrgEvent(id,name);
    }

    function addEvent(string name, string info, string pubKey, uint orgId) public onlyAdmin {
        require(msg.sender == orgs[orgId].admin);
        uint id = targets.length;
        targets.push(EventToSignIn({
            id: id,
            name: name,
            info: info,
            orgId: orgId,
            admin: msg.sender,
            pubKey: pubKey,
            status: 1, //默认添加即开启
            deadLineHeight: block.number+20000,
            registor: new address[](0)
        }));

        emit IssueEvent(id,orgs[orgId].name, name);
    }

    function regist(uint eventId, string registInfo)public {
        if (users[msg.sender].id == 0){
            userCount = userCount + 1;
            users[msg.sender] = User({
                id: userCount,
                events: new uint[](0),
                certs: new uint[](0)
            });
        }
        certCount = certCount+1;
        users[msg.sender].events.push(eventId);
        users[msg.sender].events.push(certCount);
        targets[eventId].registor.push(msg.sender);
        targets[eventId].registInfo[msg.sender] = registInfo;
        
        emit RegistEvent(eventId,targets[eventId].name,msg.sender);
        //TODO add hash for verification
        ICert(receiptAddress).mint(msg.sender,registInfo,"mock hash");
    }

    function getEventRegistor(uint eventId)public view returns (string){
        return targets[eventId].registInfo[msg.sender];
    }
    
    function register(uint eventId, string registInfo) public {
        // if (users[msg.sender].id == 0){
        //     userCount = userCount + 1;
        // }
        registry[msg.sender] = registInfo;
        emit RegistEvent(eventId,"hackathon placeholder",msg.sender);
    }

}

