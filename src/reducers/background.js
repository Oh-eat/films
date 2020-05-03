import { createAction, handleActions } from "redux-actions";

const INITIALIZE_STATE = "background/INITIALIZE_STATE";
const SET_BACKGROUND = "background/SET_BACKGROUND";
const SET_BRIGHTNESS = "background/SET_BRIGHTNESS";
const SET_LOADED = "background/SET_LOADED";

export const initializeState = createAction(INITIALIZE_STATE);
export const setBackground = createAction(
  SET_BACKGROUND,
  ({ path, brightness }) => ({ path, brightness })
);
export const setBrightness = createAction(
  SET_BRIGHTNESS,
  (brightness) => brightness
);
export const setLoaded = createAction(SET_LOADED, (loaded) => loaded);

const initialiState = {
  path: null,
  brightness: null,
  loaded: false,
};

const background = handleActions(
  {
    [INITIALIZE_STATE]: () => initialiState,
    [SET_BACKGROUND]: (state, { payload: { path, brightness } }) => ({
      ...state,
      path,
      brightness,
      loaded: false,
    }),
    [SET_BRIGHTNESS]: (state, { payload: brightness }) => ({
      ...state,
      brightness,
    }),
    [SET_LOADED]: (state, { payload: loaded }) => ({
      ...state,
      loaded,
    }),
  },
  initialiState
);

export default background;
