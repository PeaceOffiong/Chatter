import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useRef
} from "react";
import reducer from "../reducer/reducer";
import { REDUCER_ACTION_TYPE } from "../reducer/actions";

type AppProviderProps = {
  children: ReactNode;
};

export const initialState = {
  toogle: false
};

const AppContext = createContext({});

const AppProvider = ({ children }: AppProviderProps) => {
  //Reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //UseRef to access Navbar elements to display based on path location
  const elementRef = useRef();

  const navbarToogle = () => dispatch({ type: REDUCER_ACTION_TYPE.TOOGLE });

  const toogleDefault = () =>
    dispatch({ type: REDUCER_ACTION_TYPE.TOOGLEDEFAULT });

  return (
    <AppContext.Provider
      value={{
        ...state,
        navbarToogle,
        toogleDefault,
        elementRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
