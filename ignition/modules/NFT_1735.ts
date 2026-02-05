import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("NFT_1735Module", (m) => {
  const counter = m.contract("NFT_1735");

  return { counter };
});
