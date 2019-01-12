pragma solidity ^0.4.23;

contract SimpleStorage {
  uint nonce;

  event StorageSet(
    uint _val,
    string _message
  );

  uint public storedData_;
  uint public res;

  constructor() public {
    storedData_ = 0;
  }

  function set(uint _x) public {
    storedData_ = _x;

    emit StorageSet(_x, "Data stored successfully!");
  }

  function getOne() public {
    res =  uint(keccak256(abi.encodePacked(now, msg.sender, nonce))) % 101;
    nonce++;
  }
}
