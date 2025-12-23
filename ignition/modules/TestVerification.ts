import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TestVerificationModule", (m) => {
  const name = "name8";
  const symbol = "symbol8"; // 或者使用当前时间戳
  const decimals = 8;

  const testVerification = m.contract("TestVerification", [
    name,
    symbol,
    decimals,
  ]);

  return {testVerification};
});
