import { Map } from 'immutable';

let book = Map({ title: 'harry potter'});

function publish(book) {
    // book.isPublished = true;
    return book.set('isPublished', true);
}

book = publish(book);
console.log(book.toJS());