pragma solidity ^0.4.23;

contract RegistrationSlim {
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

    address public owner;
    address receiptAddress;
    uint userCount;
    mapping(address => string) public registry;

    constructor() public {
        owner = msg.sender;
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

    function register(string registInfo) public {
        // if (users[msg.sender].id == 0){
        //     userCount = userCount + 1;
        // }
        registry[msg.sender] = registInfo;
        emit RegistSuccess(msg.sender, registInfo);
    }

}