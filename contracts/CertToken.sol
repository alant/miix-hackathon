pragma solidity ^0.4.23;
contract CertToken {
    struct Cert {
        string registerInfo;
        uint256 tokenId;
        address issuer;
        address owner;
        string registerInfoHash;
    }
    event Mint(address _to, uint256 _tokenId, string _registerInfo, address _issuer, string _hash);
    event Burn(address owner, uint256 _tokenId);

    address owner;
    address controller;

    mapping(uint256 => address) public tokenOwner;
    mapping(address => uint256) public addressCert;
    mapping(uint256 => Cert) public certs;
    mapping(address => uint256) public issuers;
    uint256 public tokenId_;
    uint256 public issuerId_;

    constructor() public {
        owner = msg.sender;
    }

    function SetController(address _address) public {
        require(_address != address(0));
        require(msg.sender == owner);
        controller = _address;
        issuerId_++;
        issuers[msg.sender] = issuerId_;
    }

    function mint(address _to, string _registerInfo, string _hash) public {
        require(issuers[msg.sender] != 0);

        tokenId_++;
        tokenOwner[tokenId_] = _to;
        Cert memory _cert = Cert({registerInfo:_registerInfo, tokenId:tokenId_, issuer:msg.sender, owner:_to, registerInfoHash:_hash});
        certs[tokenId_] = _cert;
        addressCert[_to] = tokenId_;
        emit Mint(_to, tokenId_, _registerInfo, msg.sender, _hash);
    }

    function burn(address _owner, uint256 _tokenId) public {
        require(msg.sender == owner);
        require(tokenOwner[_tokenId] == _owner);
        tokenOwner[_tokenId] = address(0);
        Cert storage _cert = certs[_tokenId];
        _cert.owner = address(0);
        delete addressCert[_owner];
        emit Burn(owner, _tokenId);
    }

    function addIssuer(address _issuer) public {
        require(msg.sender == owner);
        issuerId_++;
        issuers[_issuer] = issuerId_;
    }

}

