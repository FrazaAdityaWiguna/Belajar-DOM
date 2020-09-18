const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    console.log(e.target);

    if (e.target.className == 'thumb') {

        // Menge-cek apakah yang di click class thumb
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            // if (thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // };

            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});