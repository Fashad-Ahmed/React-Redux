import { produce } from 'immer';

let book = Map({ title: 'harry potter'});

function publish(book) {
    return produce(book,  draftBook => {
        draftBook.isPublished = true;
    });
    // book.isPublished = true;
    // return book.set('isPublished', true);
}

let updated = publish(book);
console.log(book);
console.log(updated);