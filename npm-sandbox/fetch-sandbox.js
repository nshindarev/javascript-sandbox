import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicoe.com/todos/1');

promise
    .then(res => res.json())
    .then(user => console.log('🤪', user.title))
    .catch(err => console.error('🤬', err));

console.log('👑 Synchronous');