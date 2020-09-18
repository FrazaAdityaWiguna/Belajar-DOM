// Event Handle
// const closeX = document.querySelector('.close');
// const card = document.querySelector('.card');
// closeX.addEventListener('click', function() {
//     card.style.display = 'none';

//     return;

// });

// DOM Traversal
// const closeX = document.querySelectorAll('.close');

// for (let i = 0; i < closeX.length; i++) {
//     closeX[i].addEventListener('click', function(e) {
//         // closeX[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// };

// closeX.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         // memhilangkan fungsi default element
//         e.preventDefault();
//         // menghentikan fungsi Bubbling
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {

//     });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});