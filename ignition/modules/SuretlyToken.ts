import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SuretlyTokenModule", (m) => {
  const counter = m.contract("SuretlyToken");

  return { counter };
});
