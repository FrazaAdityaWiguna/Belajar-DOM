// EventHandle
const p3 = document.querySelector('.p3');


// Inner HTML
function ubahWarnaP3() {
    p3.style.backgroundColor = 'orange';
}

// Method
function ubahWarnaP2() {
    p2.style.backgroundColor = 'yellowgreen';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

// addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru!');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});

// Perbedaan EventHandle dan addEventListener()
const p1 = document.querySelector('.p1');

// event handle
// p1.onclick = function() {
//     p1.style.backgroundColor = '#eee';
// }
// p1.onclick = function() {
//     p1.style.color = 'red';
// }

// addEventListener()
// p1.addEventListener('mouseover', function() {
//         p1.style.backgroundColor = '#eee';
//     })
// p1.addEventListener('mouseleave', function() {
//     p1.style.color = 'red';
// })

// Kesimpulan
/**
 * 1. Event Listener apabila terdapat 2 atau lebih events maka event yang pertama akan ditimpa oleh event yang baru sehingga tidak berjalan
 * 2. addEventListener() apabila ada 2 atau lebih events maka events tersebut akan dijalankan
 * Reference event List: https://developer.mozilla.org/en-US/docs/Web/Events
 */