const cards = document.querySelectorAll('.plate');

let currentIndex = 0;

// show first card
cards[currentIndex].classList.add('visible');

cards[0].querySelector('[data-nav="prev"]').remove();

window.addEventListener('click', function(e){
    
    
    //next card
    if(e.target.closest('[data-nav="next"]')){

        if(currentIndex === cards.length - 1){
            return;
        }

        const result = checkOnAnswers(cards[currentIndex]);
        const answersWrapper = cards[currentIndex].querySelector('[data-answers]');

        if(result){
            // hide current card
            cards[currentIndex].classList.remove('visible');
            currentIndex = currentIndex + 1;
            //show next card
            cards[currentIndex].classList.add('visible');
            answersWrapper.classList.remove('required');
        }else{
            answersWrapper.classList.add('required');
        }

    }
    //prev card
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



function checkOnAnswers(card){

    console.log(card);

    const radioButtons = card.querySelectorAll('input[type="radio"]');

    //check radio
    if(radioButtons.length > 0){
        for(let radio of radioButtons){
            if(radio.checked) return true;
        }
    }

    //check checkbox
    const checkboxes = card.querySelectorAll('input[type="checkbox"]');

    if(checkboxes.length > 0){
        for(let checkbox of checkboxes){
            if(checkbox.checked === true) return true;
        }
    }
}

checkOnAnswers();