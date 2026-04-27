window.addEventListener('scroll', () => {
    const cardList = document.querySelector('.skill-cards');
    const scrollY = window.scrollY;
    
    // 1. 무한 루프를 위한 너비 계산 (한 세트 너비)
    // gap까지 포함된 실제 너비를 계산하기 위해 scrollWidth의 절반을 사용합니다.
    const firstSetWidth = cardList.scrollWidth / 2;
    
    // 2. 좌우 이동 속도 조절 (0.5를 키우면 더 빨리 지나가고, 줄이면 천천히 지나갑니다)
    let moveDistance = (scrollY * 0.6) % firstSetWidth;
    cardList.style.transform = `translateX(${-moveDistance}px)`;
    
    // 3. 넓은 타원형 궤도 계산
    const cards = cardList.querySelectorAll('li');
    const screenCenterX = window.innerWidth / 2;

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        
        // 화면 중앙으로부터의 거리
        const distanceFromCenter = screenCenterX - cardCenterX;
        
        /* 핵심 수치 조정:
           - 0.00015: 이 숫자가 작을수록 원이 커지고 완만해집니다.
           - 숫자를 키우면 급격한 U자형이 됩니다.
        */
        const translateY = Math.pow(distanceFromCenter, 2) * 0.00015; 
        
        // 4. 위치 적용 (카드의 모양은 유지하고 위치만 이동)
        card.style.transform = `translateY(${translateY}px)`;
    });
});


