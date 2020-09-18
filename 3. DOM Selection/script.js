// DOM Selection

// // Document.getElementById() => Element
// const judul = document.getElementById('judul');
// judul.style.color = 'orange';
// judul.style.backgroundColor = '#eee';
// judul.innerHTML = 'Fraza Aditya Wiguna';

// // Document.getElementsByYagName() => HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'darkorange';
//     p[i].style.color = 'white';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // Document.getElementsByClassName() => HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = "Element ini diubah dari JavaScript"

// // Document.querySelector() => Element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'greenyellow';

// // Document.querySelectorAll() => NodeList
// const p = document.querySelectorAll('p');
// p[2].style.backgroundColor = 'purple';



// Mengubah Default document (mempersempit scope pencarian)
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'gray';