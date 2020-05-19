import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(START_LOADING, (action) => action);
export const finishLoading = createAction(FINISH_LOADING, (action) => action);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, { payload: action }) => ({
      ...state,
      [action]: true,
    }),
    [FINISH_LOADING]: (state, { payload: action }) => ({
      ...state,
      [action]: false,
    }),
  },
  initialState
);

export default loading;
