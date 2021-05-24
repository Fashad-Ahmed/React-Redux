const num = [1,2,3]

// adding
const index = num.indexOf(2);
const added = [...num.slice(0,index), 4, ...num.slice(index)];

// removed
const removed  = num.filter(n => n !== 2 );

// updated
const updated = num.map(n => (n === 2 ? 20:n ));
console.log(updated); 