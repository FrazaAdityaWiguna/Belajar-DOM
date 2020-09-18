const button = document.getElementById('tombolUbahWarna')

function ubahWarna() {
    document.body.classList.toggle('warna');
}

button.onclick = ubahWarna;

// tombol baru
const btn = document.createElement('button');
const textBtn = document.createTextNode('Button Javascript');
btn.setAttribute('type', 'button');
btn.appendChild(textBtn);

button.after(btn);

btn.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// slider Warna 1
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + h + ',' + b + ')';
});

// slider Warna 2
// const warna = document.querySelectorAll("input[type='range']");
// warna.forEach(function(slider) {
//     slider.addEventListener("input", function() {
//         const r = document.querySelector("input[name='merah']").value;
//         const g = document.querySelector("input[name='hijau']").value;
//         const b = document.querySelector("input[name='biru']").value;
//         console.log(r, g, b);
//         document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
//     })
// });

;