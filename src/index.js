import store from './store';
import { BUG_ADD, BUG_REMOVE, BUG_RESOLVE } from './actions';
// state = reduer(state,action)
// notify the subscribers

// ui components should suscribed to the store so that they can know the store has changed

const unsubscribe = store.subscribe(() => {
    console.log('store has changed!', store.getState());
})

store.dispatch(BUG_ADD('Bug 1'));

store.dispatch(BUG_RESOLVE(1))

// unsubscribe();
// // re-dispatch

// store.dispatch(BUG_REMOVE(id));

console.log(store.getState(1))