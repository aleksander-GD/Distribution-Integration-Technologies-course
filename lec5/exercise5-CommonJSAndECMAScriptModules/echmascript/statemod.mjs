let innerState;
export function reset() { innerState = undefined }
export function setState(newState) { innerState = newState; }
export function getState() { return innerState; }

export default { reset, setState, getState }