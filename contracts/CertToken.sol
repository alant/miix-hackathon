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
    mapping(address => mapping(uint256 => address)) public addressCerts;
    mapping(uint256 => Cert) public certs;

    constructor() public {
        owner = msg.sender;
    }

    function SetController(address _address) public {
        require(_address != address(0));
        controller = _address;
    }

    function mint(address _to, uint256 _tokenId, string _registerInfo, address _issuer, string _hash) public {
        require(msg.sender == controller);
        require(_to != address(0));
        tokenOwner[_tokenId] = _to;
        Cert memory _cert = Cert({registerInfo:_registerInfo, tokenId:_tokenId, issuer:_issuer, owner:_to, registerInfoHash:_hash});
        certs[_tokenId] = _cert;
        addressCerts[_to][_tokenId] = _to;
        emit Mint(_to, _tokenId, _registerInfo, _issuer, _hash);
    }

    function burn(address _owner, uint256 _tokenId) public {
        require(msg.sender == controller);
        require(tokenOwner[_tokenId] == _owner);
        tokenOwner[_tokenId] = address(0);
        Cert storage _cert = certs[_tokenId];
        _cert.owner = address(0);
        delete addressCerts[_owner][_tokenId];
        emit Burn(owner, _tokenId);
    }
}

