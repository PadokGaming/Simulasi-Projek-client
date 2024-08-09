$(document).ready(() => {
    // Fungsi untuk menampilkan dan menyembunyikan menu
    $('.menuOpen').click(() => {
        $('.menu-wrapper').addClass('active');
    });

    $('.menuClose').click(() => {
        $('.menu-wrapper').removeClass('active');
    });

    // Fungsi untuk menampilkan dan menyembunyikan menu pencarian
    $('.icon').click(() => {
        $('.search-menu').toggle(); // Toggle menu pencarian
    });

    // Fungsi untuk menutup menu pencarian saat klik di luar elemen pencarian
    $(document).mouseup(function(e) {
        var container = $(".search-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });

    // Fungsi untuk menampilkan navbar saat discroll
    $(document).scroll(function () {
        if ($(this).scrollTop() > $('.navbar').height()) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });

    $(document).ready(() => {
        var swiperHome = new Swiper(".mySwiperHome", {
            slidesPerView: "auto",
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
            autoplay: {
                delay: 2000
            },
            on: {
                slideChange: function () {
                    // Perbarui bullet pagination setelah perpindahan slide
                    this.pagination.update();
                }
            }
        });
    });
    
    

    // Inisialisasi Swiper slider untuk halaman produk
    var swiperProduct = new Swiper(".mySwiperProduct", {
        slidesPerView: "auto",
        spaceBetween: 60,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            }
        }
    });

    // Tambahkan event listener pada setiap tautan di navbar
    const navLinks = document.querySelectorAll('.navbar .menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Ambil semua elemen yang terkait dengan pop-up
    const popups = document.querySelectorAll('.popup');
    const popupButtons = document.querySelectorAll('.popup-btn');
    const popupOverlays = document.querySelectorAll('.popup-overlay');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Fungsi untuk menampilkan pop-up
    popupButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = button.dataset.target;
            const targetPopup = document.getElementById(targetId);
            targetPopup.style.display = 'block';
            popupOverlays.forEach(overlay => {
                overlay.style.display = 'block';
            });
        });
    });

    // Fungsi untuk menutup pop-up
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            popups.forEach(popup => {
                popup.style.display = 'none';
            });
            popupOverlays.forEach(overlay => {
                overlay.style.display = 'none';
            });
        });
    });

    // Fungsi untuk menutup pop-up saat overlay diklik
    popupOverlays.forEach(overlay => {
        overlay.addEventListener('click', function () {
            popups.forEach(popup => {
                popup.style.display = 'none';
            });
            this.style.display = 'none';
        });
    });
});
