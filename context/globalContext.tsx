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
  toogle: false,
  isNavbarFixed: false
};

const AppContext = createContext({});

const AppProvider = ({ children }: AppProviderProps) => {
  //Reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("is there an issue");

  //UseRef to access Navbar elements to display based on path location
  const elementRef = useRef();

  const navbarToogle = (): void =>
    dispatch({ type: REDUCER_ACTION_TYPE.TOOGLE });

  const toogleDefault = () =>
    dispatch({ type: REDUCER_ACTION_TYPE.TOOGLEDEFAULT });

  const fixNavBar = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) {
        console.log(window.scrollY);
        dispatch({ type: REDUCER_ACTION_TYPE.FIXNAVBAR });
        console.log("Na here we dey");
      } else {
        dispatch({ type: REDUCER_ACTION_TYPE.NAVBARDEF });
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        navbarToogle,
        toogleDefault,
        elementRef,
        fixNavBar
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
