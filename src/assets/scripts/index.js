const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

const navItems = document.querySelectorAll('li');
console.log(navItems);
