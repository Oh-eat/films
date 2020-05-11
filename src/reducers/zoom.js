import { createAction, handleActions } from "redux-actions";

const INITIALIZE_STATE = "zoom/INITIALIZE_STATE";
const SHOW_ZOOM = "zoom/SHOW_ZOOM";

export const initializeState = createAction(INITIALIZE_STATE);
export const showZoom = createAction(SHOW_ZOOM, (path) => path);

const initialiState = {
  path: null,
  visible: false,
};

const zoom = handleActions(
  {
    [INITIALIZE_STATE]: () => initialiState,
    [SHOW_ZOOM]: (state, { payload: path }) => ({
      ...state,
      path,
      visible: true,
    }),
  },
  initialiState
);

export default zoom;
