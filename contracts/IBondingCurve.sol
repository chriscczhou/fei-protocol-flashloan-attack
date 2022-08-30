pragma solidity ^0.6.6;
//pragma solidity >=0.4.0 >=0.6.0 <0.7.0 >=0.6.0 <0.8.0 >=0.6.2 <0.7.0 >=0.6.2 <0.8.0;
/**
 * @title Bonding Curve Interface
 * @dev A bonding curve is a method for continous token minting / burning.
 */
interface IBondingCurve {
  function allocate (  ) external; 
  function purchase ( address to, uint256 amountIn ) external payable returns ( uint256 amountOut );
}
