import { useState, useEffect, useContext } from "react";
import { GPUS } from "../../data/gpus";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const GPUStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;
  const partData = route.params.data;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  console.log(
    "current compatibilities GPU Step",
    compatibilities.GPU,
    GPUS[1].compatibilities.GPU
  );
  const [image, setImage] = useState(
    require("D:/PracaInz/PCConfigurator/assets/images/categories/KartaGraficzna.png")
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
    navigation.navigate("RAMStep", {
      isChoosed: false,
      image: "",
    });
    updateSet();
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 2,
      data: GPUS.filter((gpu) => {
        const gpuCompatibility = gpu.compatibilities?.GPU;
        return (
          gpuCompatibility &&
          compatibilities.GPU.some((value) => gpuCompatibility.includes(value))
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
