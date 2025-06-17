document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.slider-button.prev-button');
    const nextBtn = document.querySelector('.slider-button.next-button');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    let itemsPerView = 3;
    let isAnimating = false;

    function updateItemsPerView() {
        if (window.innerWidth <= 767) {
            itemsPerView = 1;
        } else if (window.innerWidth <= 992) {
            itemsPerView = 2;
        } else {
            itemsPerView = 3;
        }
    }

    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const totalItems = document.querySelectorAll('.testimonial-item').length;
        const totalSlides = Math.ceil(totalItems / itemsPerView);
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                if (isAnimating || currentIndex === i) return;
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(targetIndex) {
        if (isAnimating) return;
        isAnimating = true;
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const totalItems = testimonialItems.length;
        const totalSlides = Math.ceil(totalItems / itemsPerView);

        // Smooth transition for desktop/tablet
        if (itemsPerView > 1) {
            slider.style.transition = 'transform 0.55s cubic-bezier(.4,0,.2,1)';
        } else {
            slider.style.transition = '';
        }

        currentIndex = targetIndex;
        updateSlider();

        setTimeout(() => {
            isAnimating = false;
        }, 550);
    }

    function updateSlider() {
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        if (testimonialItems.length === 0 || !slider) return;

        const itemStyle = getComputedStyle(testimonialItems[0]);
        const itemMarginLeft = parseFloat(itemStyle.marginLeft);
        const itemMarginRight = parseFloat(itemStyle.marginRight);
        const itemWidthWithMargin = testimonialItems[0].offsetWidth + itemMarginLeft + itemMarginRight;

        if (itemsPerView === 1) {
            testimonialItems[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            slider.style.transform = '';
        } else {
            let offset = -currentIndex * itemWidthWithMargin;
            slider.style.transform = `translateX(${offset}px)`;
        }

        if (dotsContainer) {
            document.querySelectorAll('.dot').forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        testimonialItems.forEach((item, index) => {
            item.classList.remove('active-slide');
            if (index >= currentIndex && index < currentIndex + itemsPerView) {
                item.classList.add('active-slide');
            }
        });
    }

    if (slider && prevBtn && nextBtn) {
        updateItemsPerView();
        createDots();
        updateSlider();

        prevBtn.addEventListener('click', () => {
            if (isAnimating) return;
            const totalItems = document.querySelectorAll('.testimonial-item').length;
            const totalSlides = Math.ceil(totalItems / itemsPerView);
            let target = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            goToSlide(target);
        });

        nextBtn.addEventListener('click', () => {
            if (isAnimating) return;
            const totalItems = document.querySelectorAll('.testimonial-item').length;
            const totalSlides = Math.ceil(totalItems / itemsPerView);
            let target = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            goToSlide(target);
        });

        slider.addEventListener('scroll', () => {
            if (itemsPerView === 1) {
                const scrollLeft = slider.scrollLeft;
                const itemWidth = slider.querySelector('.testimonial-item').offsetWidth + parseFloat(getComputedStyle(slider.querySelector('.testimonial-item')).marginLeft) + parseFloat(getComputedStyle(slider.querySelector('.testimonial-item')).marginRight);
                const newIndex = Math.round(scrollLeft / itemWidth);
                if (newIndex !== currentIndex) {
                    currentIndex = newIndex;
                    updateSlider();
                }
            }
        }, { passive: true });

        window.addEventListener('resize', () => {
            updateItemsPerView();
            createDots();
            updateSlider();
        });
    }
});