import React from 'react';
export const GlobalContext = createContext(null);
const GlobalState = () => {

     const stateInfo = {}
     return (
          <div>
               <GlobalContext.provider value={stateInfo}></GlobalContext.provider>
          </div>
     );
};

export default GlobalState;