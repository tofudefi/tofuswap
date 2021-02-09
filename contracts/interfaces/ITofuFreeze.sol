pragma solidity >=0.5.0;

interface ITofuFreeze {
    function balanceOf(address owner) external view returns (uint);
}