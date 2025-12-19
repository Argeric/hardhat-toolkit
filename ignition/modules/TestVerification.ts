import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TestVerificationModule", (m) => {
  const testVerification = m.contract("TestVerification");

  return { testVerification };
});
