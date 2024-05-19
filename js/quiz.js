const cards = document.querySelectorAll('.plate');

let currentIndex = 0;

// show first card
cards[currentIndex].classList.add('visible');

cards[0].querySelector('[data-nav="prev"]').remove();

window.addEventListener('click', function(e){
    console.log(e.target);
    

    if(e.target.closest('[data-nav="next"]')){
        console.log('next');

        if(currentIndex === cards.length - 1){
            return;
        }

        // hide current card
        cards[currentIndex].classList.remove('visible');

        currentIndex = currentIndex + 1;

        //show next card
        cards[currentIndex].classList.add('visible');
    }

    if(e.target.closest('[data-nav="prev"]')){
        console.log('prev');

        if(currentIndex === 0){
            return;
        }

        cards[currentIndex].classList.remove('visible');

        currentIndex = currentIndex - 1;

        cards[currentIndex].classList.add('visible');
    }
})
