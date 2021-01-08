pragma solidity =0.5.14;

import '../TofuswapV2ERC20.sol';

contract ERC20 is TofuswapV2ERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
