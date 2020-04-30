import createRequestSaga from "./createRequestSaga";

export default function createAsyncAction(actionType, api) {
  const REQUEST = `${actionType}_REQUEST`;
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const SAGA = createRequestSaga({ REQUEST, SUCCESS, FAILURE }, api);
  return { REQUEST, SUCCESS, FAILURE, SAGA };
}
