
// ResultContext.js

import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

export const useResultContext = () => {
  return useContext(ResultContext);
};

export const ResultProvider = ({ children }) => {
  const [selectedResultId, setSelectedResultId] = useState(null);

  const handleResultClick = (resultId) => {
    setSelectedResultId(resultId);
  };

  return (
    <ResultContext.Provider
      value={{
        selectedResultId,
        handleResultClick,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};
