const api = store => next => action => {
    debugger;
    if (typeof action === 'function') {
        action(store);
    }

    next(action);
}

export default api;