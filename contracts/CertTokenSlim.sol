pragma solidity ^0.4.23;
contract CertTokenSlim {
    event Mint(address _to, uint256 _tokenId, string _registerInfo, address _issuer, string _hash);
    event Burn(address owner, uint256 _tokenId);

    address owner;

    mapping(uint256 => address) public tokenOwner;
    mapping(address => uint256) public addressCert;
    mapping(uint256 => string) public certs;
    mapping(uint256 => string) public certsHash;
    mapping(address => uint256) public issuers;
    uint256 public tokenId_;
    uint256 public issuerId_;

    constructor() public {
        owner = msg.sender;
        issuerId_++;
        issuers[msg.sender] = issuerId_;
    }

    function mint(address _to, string _registerInfo, string _hash) public {
        require(issuers[msg.sender] != 0);

        tokenId_++;
        tokenOwner[tokenId_] = _to;
        certs[tokenId_] = _registerInfo;
        certsHash[tokenId_] = _hash;
        addressCert[_to] = tokenId_;
        emit Mint(_to, tokenId_, _registerInfo, msg.sender, _hash);
    }

    function addIssuer(address _issuer) public {
        require(msg.sender == owner);
        issuerId_++;
        issuers[_issuer] = issuerId_;
    }

}

