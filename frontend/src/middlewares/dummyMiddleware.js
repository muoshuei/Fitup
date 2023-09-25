
export const dummyMiddleware = (store) => (next) => async (action) => {
    const state = store?.getState();
    const token = state.auth?.accessToken;
    return next(action);
}