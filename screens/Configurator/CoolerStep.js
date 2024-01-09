import { useState, useEffect, useContext } from "react";
import { COOLERS } from "../../data/coolers";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const CoolerStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;
  const partData = route.params.data;
  const CoolerCompatibilities = route.params.compatibilities;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  const [image, setImage] = useState(
    require("../../assets/images/categories/Chlodzenie.png")
  );
  const [componentName, setComponentName] = useState("Płyta główna");
  const [isNextStepAvailable, setIsNextStepAvailable] = useState(false);

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setComponentName(choosedName);
      setIsNextStepAvailable(true);
    } else {
      setComponentName("Chłodzenie");
    }
  }, [choosedImage]);

  const updateCoolerCompatibilities = () => {
    const updatedCoolerCompatibilities = {
      ...compatibilities,
      Cooler: {
        height: CoolerCompatibilities.height,
      },
    };
    updateCompatibilities(updatedCoolerCompatibilities);
  };

  const updateSet = () => {
    const updatedSet = {
      ...pcSet,
    };
    const updatedParts = [...pcSet.parts];
    updatedParts[5] = partData;
    updatedSet.parts = updatedParts;

    updatePcSet(updatedSet);
  };

  const nextStepHandler = () => {
    navigation.navigate("PowerSupplyStep", {
      isChoosed: false,
      image: "",
    });
    updateCoolerCompatibilities();
    updateSet();
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 7,
      data: COOLERS.filter((cooler) => {
        return cooler.compatibilities.CPU.includes(compatibilities.CPU.socket);
      }),
      name: "Chłodzenie",
      isConfigurating: true,
      componentNavigation: "CoolerStep",
    });
  };

  return (
    <ConfiguratorStep
      image={image}
      headerTitle="Chłodzenie"
      nextStepHandler={nextStepHandler}
      componentName={componentName}
      categoryItemHandler={categoryItemHandler}
      isNextStepAvailable={isNextStepAvailable}
    />
  );
};

export default CoolerStep;
