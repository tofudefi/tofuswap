const TofuswapV2Factory = artifacts.require('TofuswapV2Factory')
// const TofuswapV2ERC20 = artifacts.require('TofuswapV2ERC20')
// const TofuswapV2Pair = artifacts.require('TofuswapV2Pair')

module.exports = async function(deployer) {
  const accounts = await web3.eth.getAccounts()
  // use deploy address as the address to collect protocol fee if
  // enabled
  const feeToSetter = accounts[0]
  console.log(`feeToSetter = ${feeToSetter}`)
  await deployer.deploy(TofuswapV2Factory, ...[feeToSetter])
}
