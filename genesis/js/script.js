// 페이지 로드 후 실행되도록 보장
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Swiper 초기화
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 1800,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });

    // 2. AOS 초기화
    AOS.init({
        duration: 1500, // 애니메이션 속도
        once: true,     // 한 번만 실행
    });

    // 3. 모바일 메뉴 제어
    const menuBtn = document.querySelector('.hamburger'); // img:last-child 대신 명확하게 클래스로 선택
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.menu-close');

    if (menuBtn && mobileMenu && closeBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});