// Write your code here!

//remove main#main
const main = document.getElementById('main');
main.remove();


//create new header that points to 'h1#victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'JAMES is the champion';