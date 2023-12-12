import React, { createContext, useState } from "react";

export const configuratorContext = createContext({
  compatibilities: {
    motherboard: {
      format: "",
    },
    CPU: {
      socket: "",
    },
    GPU: {
      input: [],
      lenght: 0,
    },
    RAM: {
      type: "",
      slots: 0,
    },
    Memory: {},
    cooler: {
      height: 0,
    },
    PowerSupply: {
      recommended: 0,
    },
    case: {},
  },
  updateCompatibilities: (compatibilities) => {},
  updatePcSet: (pcSet) => {},
});

const ConfiguratorContextProvider = ({ children }) => {
  const [currCompatibilities, setCurrCompatibilities] = useState({
    motherboard: {
      format: "",
    },
    CPU: {
      socket: "",
    },
    GPU: {
      input: [],
      lenght: 0,
    },
    RAM: {
      type: "",
      slots: 0,
    },
    Memory: {},
    cooler: {
      height: 0,
    },
    PowerSupply: {
      recommended: 0,
    },
    case: {},
  });
  const [currPcSet, setCurrPcSet] = useState({
    id: "",
    name: "",
    parts: [{}, {}, {}, {}, {}, {}, {}, {}],
  });
  const [createdSets, setCreatedSets] = useState([]);

  const updateCompatibilities = (compatibilities) => {
    setCurrCompatibilities(compatibilities);
  };

  const updatePcSet = (pcSet) => {
    setCurrPcSet(pcSet);
  };

  const value = {
    compatibilities: currCompatibilities,
    pcSet: currPcSet,
    updateCompatibilities: updateCompatibilities,
    updatePcSet: updatePcSet,
  };

  return (
    <configuratorContext.Provider value={value}>
      {children}
    </configuratorContext.Provider>
  );
};

export default ConfiguratorContextProvider;
