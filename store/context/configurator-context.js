import React, { createContext, useState } from "react";

export const configuratorContext = createContext({
  compatibilities: {
    CPU: [],
    GPU: [],
    RAM: [],
    Memory: [],
  },
  createdSets: [],
  pcSet: {
    name: "",
    parts: [],
  },
  updateCompatibilities: (compatibilities) => {},
  updatePcSet: (pcSet) => {},
});

const ConfiguratorContextProvider = ({ children }) => {
  const [currCompatibilities, setCurrCompatibilities] = useState({
    CPU: [],
    GPU: [],
    RAM: [],
    Memory: [],
  });
  const [currPcSet, setCurrPcSet] = useState({
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
