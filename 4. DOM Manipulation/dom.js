/* 
 * element.innerHTML
 * element.style.property
 * element.setAttribute()
 */

/*
 * element.classList.add()
 * element.classList.remove()
 * element.classList.toggle()
 * element.classList.item()
 * element.classList.contains()
 * element.classList.replace()
 */

// Tangkap element parent
// AppendChild()
const sectionA = document.getElementById('a');
// buat elemen baru
const paragrafBaru = document.createElement('p');
const teksParagrafBaru = document.createTextNode('paragraf baru');
// tambahkan element baru appendChild()
paragrafBaru.appendChild(teksParagrafBaru);
sectionA.appendChild(paragrafBaru);

// InsertBefore(elementbaru, sebelum element ...)
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// replaceChild(new child, old child)
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const teksH2 = document.createTextNode('Judul Baru');
h2.appendChild(teksH2);

sectionB.replaceChild(h2, p4);

// element Baru
paragrafBaru.style.backgroundColor = 'orange';
liBaru.style.backgroundColor = 'greenyellow';
h2.style.backgroundColor = 'red';

// reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model