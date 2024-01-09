import { useState, useEffect, useContext } from "react";
import { GPUS } from "../../data/gpus";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const GPUStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;
  const partData = route.params.data;
  const GPUCompatibilities = route.params.compatibilities;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  console.log("current compatibilities GPU Step", compatibilities);
  const [image, setImage] = useState(
    require("../../assets/images/categories/KartaGraficzna.png")
  );
  const [componentName, setComponentName] = useState("Płyta główna");
  const [isNextStepAvailable, setIsNextStepAvailable] = useState(false);

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setComponentName(choosedName);
      setIsNextStepAvailable(true);
    } else {
      setComponentName("Karta graficzna");
    }
  }, [choosedImage]);

  const updateGPUCompatibilities = () => {
    const updatedGPUCompatibilities = {
      ...compatibilities,
      GPU: {
        ...compatibilities.GPU,
        length: GPUCompatibilities.GPU.length,
        input: GPUCompatibilities.GPU.input,
      },
      PowerSupply: {
        ...compatibilities.PowerSupply,
        recommended: GPUCompatibilities.PowerSupply,
      },
    };
    updateCompatibilities(updatedGPUCompatibilities);
  };

  const updateSet = () => {
    const updatedSet = {
      ...pcSet,
    };
    const updatedParts = [...pcSet.parts];
    updatedParts[2] = partData;
    updatedSet.parts = updatedParts;

    updatePcSet(updatedSet);
  };

  const nextStepHandler = () => {
    updateGPUCompatibilities();
    updateSet();
    navigation.navigate("RAMStep", {
      isChoosed: false,
      image: "",
    });
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 2,
      data: GPUS.filter((gpu) => {
        const gpuCompatibility = gpu.compatibilities?.GPU.input;
        return (
          gpuCompatibility &&
          compatibilities.motherboard.GPUSocket.some((value) =>
            gpuCompatibility.includes(value)
          )
        );
      }),
      name: "Karty graficzne",
      isConfigurating: true,
      componentNavigation: "GPUStep",
    });
  };

  return (
    <ConfiguratorStep
      image={image}
      headerTitle="Wybierz kartę graficzna"
      nextStepHandler={nextStepHandler}
      componentName={componentName}
      categoryItemHandler={categoryItemHandler}
      isNextStepAvailable={isNextStepAvailable}
    />
  );
};

export default GPUStep;
