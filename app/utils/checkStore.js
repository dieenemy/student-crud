import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
  };
  // mô tả lỗi trong deleoplopment mode và lỗi chung trong production mode. If (error) => error, else => no error
  invariant(
    conformsTo(store, shape), // check object phù hợp với source không return true, false
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
