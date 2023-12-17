import { useState, useEffect, useContext } from "react";
import { POWER_SUPPLIES } from "../../data/powerSupplies";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const PowerSupplyStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;
  const partData = route.params.data;
  const PowerSupplyCompatibilities = route.params.compatibilities;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  const [image, setImage] = useState(
    require("D:/PracaInz/PCConfigurator/assets/images/categories/Zasilacz.png")
  );
  const [componentName, setComponentName] = useState("Płyta główna");
  const [isNextStepAvailable, setIsNextStepAvailable] = useState(false);

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setComponentName(choosedName);
      setIsNextStepAvailable(true);
    } else {
      setComponentName("Zasilanie");
    }
  }, [choosedImage]);

  const updatePowerSupplyCompatibilities = () => {
    const updatedPowerSupplyCompatibilities = {
      ...compatibilities,
      PowerSupply: {
        ...compatibilities.PowerSupply,
        power: PowerSupplyCompatibilities.power,
      },
    };
    updateCompatibilities(updatedPowerSupplyCompatibilities);
  };

  const updateSet = () => {
    const updatedSet = {
      ...pcSet,
    };
    const updatedParts = [...pcSet.parts];
    updatedParts[6] = partData;
    updatedSet.parts = updatedParts;

    updatePcSet(updatedSet);
  };

  const nextStepHandler = () => {
    navigation.navigate("CaseStep", {
      isChoosed: false,
      image: "",
    });
    updatePowerSupplyCompatibilities();
    updateSet();
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 5,
      data: POWER_SUPPLIES.filter((ps) => {
        return (
          ps.compatibilities.power >= compatibilities.PowerSupply.recommended
        );
      }),
      name: "Zasilanie",
      isConfigurating: true,
      componentNavigation: "PowerSupplyStep",
    });
  };

  return (
    <ConfiguratorStep
      image={image}
      headerTitle="Zasilanie"
      nextStepHandler={nextStepHandler}
      componentName={componentName}
      categoryItemHandler={categoryItemHandler}
      isNextStepAvailable={isNextStepAvailable}
    />
  );
};

export default PowerSupplyStep;
