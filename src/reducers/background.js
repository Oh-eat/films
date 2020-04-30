import { createAction, handleActions } from "redux-actions";

const INITIALIZE_STATE = "background/INITIALIZE_STATE";
const SET_BACKGROUND = "background/SET_BACKGROUND";
const SET_BRIGHTNESS = "background/SET_BRIGHTNESS";

export const initializeState = createAction(INITIALIZE_STATE);
export const setBackground = createAction(
  SET_BACKGROUND,
  ({ path, brightness }) => ({ path, brightness })
);
export const setBrightness = createAction(
  SET_BRIGHTNESS,
  (brightness) => brightness
);

const initialiState = {
  path: null,
  brightness: null,
};

const background = handleActions(
  {
    [INITIALIZE_STATE]: () => initialiState,
    [SET_BACKGROUND]: (state, { payload: { path, brightness } }) => ({
      ...state,
      path,
      brightness,
    }),
    [SET_BRIGHTNESS]: (state, { payload: brightness }) => ({
      ...state,
      brightness,
    }),
  },
  initialiState
);

export default background;
