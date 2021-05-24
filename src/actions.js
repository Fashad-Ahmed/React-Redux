import * as actions from './actionTypes';

export function BUG_ADD(description) {
    return {
        type: actions.BUG_ADD,
        payload: {
            description
        }
    }
}

export function BUG_REMOVE(id) {
    return {
        type: actions.BUG_REMOVE,
        payload: {
            id: id
        }
    }
}

export const BUG_RESOLVE = (id) => ({
    type: actions.BUG_RESOLVE,
    payload: {
        id: id  
    }
}) 