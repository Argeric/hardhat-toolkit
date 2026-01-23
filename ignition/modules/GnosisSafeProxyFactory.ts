import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("GnosisSafeProxyFactoryModule", (m) => {
  const counter = m.contract("GnosisSafeProxyFactory");

  return { counter };
});
