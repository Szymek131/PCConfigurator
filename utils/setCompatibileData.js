import { RAMS } from "../data/rams";
import { CASES } from "../data/cases";
import { COOLERS } from "../data/coolers";
import { GPUS } from "../data/gpus";
import { CPUS } from "../data/cpus";
import { POWER_SUPPLIES } from "../data/powerSupplies";
import { MEMORIES } from "../data/memories";
import { MOTHERBOARDS } from "../data/motherboards";

export const setCompatibileData = (compatibilities, categoryId, data) => {
  switch (categoryId) {
    case 1:
      return MOTHERBOARDS.filter((mb) => {
        return (
          compatibilities.Case.MotherboardType.includes(
            mb.compatibilities.motherboard.format
          ) &&
          compatibilities.CPU.socket === mb.compatibilities.CPU.socket &&
          mb.compatibilities.GPU.includes(compatibilities.GPU.input) &&
          mb.compatibilities.RAM.slots >= compatibilities.RAM.slots &&
          mb.compatibilities.RAM.type === compatibilities.RAM.type &&
          mb.name !== data.name
        );
      });
    case 2:
      return GPUS.filter((gpu) => {
        return (
          compatibilities.motherboard.GPUSocket.includes(
            gpu.compatibilities.GPU.input
          ) &&
          gpu.compatibilities.GPU.length <= compatibilities.Case.MaxGPULength &&
          gpu.compatibilities.PowerSupply <=
            compatibilities.PowerSupply.power &&
          gpu.name !== data.name
        );
      });
    case 3:
      return CPUS.filter((cpu) => {
        return (
          cpu.compatibilities.CPU.socket ===
            compatibilities.motherboard.CPUSocket && cpu.name !== data.name
        );
      });
    case 4:
      return RAMS.filter((ram) => {
        return (
          compatibilities.RAM.slots >= ram.compatibilities.RAM.number &&
          compatibilities.RAM.type === ram.compatibilities.RAM.type &&
          ram.name !== data.name
        );
      });
    case 5:
      return POWER_SUPPLIES.filter((ps) => {
        return (
          compatibilities.PowerSupply.recommended <= ps.compatibilities.power &&
          ps.name !== data.name
        );
      });
    case 6:
      return MEMORIES;
    case 7:
      return COOLERS.filter((cooler) => {
        return (
          cooler.compatibilities.height <=
            compatibilities.Case.MaxCoolerHeight && cooler.name !== data.name
        );
      });
    case 8:
      return CASES.filter((c) => {
        return (
          c.compatibilities.motherboard.includes(
            compatibilities.motherboard.format
          ) &&
          c.compatibilities.GPULength >= compatibilities.GPU.length &&
          c.compatibilities.CoolerHeight >= compatibilities.Cooler.height &&
          c.name !== data.name
        );
      });
    default:
      return null;
  }
};
