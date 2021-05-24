import * as actions from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === actions.BUG_ADD)
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            }
        ];

    else if (action.type === actions.BUG_REMOVE)
        return state.filter(bug =>
            bug.id !== action.payload.id
        )

    else if (action.type === actions.BUG_RESOLVE)
        return state.map(bug =>
            bug.id !== actions.payload.id ? bug : { ...bug, resolve: true })
    return state;

}