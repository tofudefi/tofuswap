pragma solidity >=0.5.0;

interface ITofuswapV2Callee {
    function tofuswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
