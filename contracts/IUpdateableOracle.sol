pragma solidity >=0.5.0;

interface IUpdateableOracle {
  function core (  ) external view returns ( address );
  function duration (  ) external view returns ( uint256 );
  function fei (  ) external view returns ( address );
  function feiBalance (  ) external view returns ( uint256 );
  function isOutdated (  ) external view returns ( bool );
  function pair (  ) external view returns ( address );
  function pause (  ) external;
  function paused (  ) external view returns ( bool );
  function priorCumulative (  ) external view returns ( uint256 );
  function priorTimestamp (  ) external view returns ( uint32 );
  function setCore ( address core ) external;
  function setDuration ( uint256 _duration ) external;
  function tribe (  ) external view returns ( address );
  function tribeBalance (  ) external view returns ( uint256 );
  function unpause (  ) external;
  function update (  ) external returns ( bool );
}
