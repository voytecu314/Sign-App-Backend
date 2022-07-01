import { useState } from 'react';
import MyContext from './MyContext';

export const MyProvider = ( {children} ) => {

    const [auth, setAuth] = useState(false);

  return (
    <MyContext.Provider value={{auth, setAuth}}>
        {children}
    </MyContext.Provider>
  )
}
