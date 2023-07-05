import { REDUCER_ACTION_TYPE, ReducerAction } from "./actions";
import { initialState } from "../context/globalContext";

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.TOOGLE:
      return { ...state, toogle: !state.toogle };
    case REDUCER_ACTION_TYPE.TOOGLEDEFAULT:
      return { ...state, toogle: false };
    default:
      throw new Error();
  }
};

export default reducer;
