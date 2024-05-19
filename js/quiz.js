const cards = document.querySelectorAll('.plate');

let currentIndex = 0; // Для перемещения по карточкам
let currentCard = 0; // Для прогресс бара

// show first card
cards[currentIndex].classList.add('visible');

cards[0].querySelector('[data-nav="prev"]').remove();

// Запускаем прогресс бар
upDateProgressBar();

window.addEventListener('click', function(e){
    
    
    //next card
    if(e.target.closest('[data-nav="next"]')){

        //Запускаем прогресс бар
        

        if(currentIndex === cards.length - 1){
            return;
        }

        const result = checkOnAnswers(cards[currentIndex]);
        const answersWrapper = cards[currentIndex].querySelector('[data-answers]');

        if(result){

            upDateProgressBar('next');

            //Перемещение
            setTimeout(function(){
                // hide current card
                cards[currentIndex].classList.remove('visible');
                currentIndex = currentIndex + 1;
                //show next card
                cards[currentIndex].classList.add('visible');
                answersWrapper.classList.remove('required');

            }, 500);
        }else{
            answersWrapper.classList.add('required');
        }

    }


    //prev card
    if(e.target.closest('[data-nav="prev"]')){
        console.log('prev');

        upDateProgressBar('prev');

        if(currentIndex === 0){
            return;
        }

        setTimeout(function(){
            //Перемещение между карточками
            cards[currentIndex].classList.remove('visible');

            currentIndex = currentIndex - 1;

            cards[currentIndex].classList.add('visible');
        }, 500);
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


function upDateProgressBar(direction = 'start'){

    if(direction === 'next'){
        currentCard = currentCard + 1;
    }else if(direction === 'prev'){
        currentCard = currentCard - 1;
    }

    const progressValue = document.querySelectorAll('.progress__label strong');
    
    const progressLineBar = document.querySelectorAll('.progress__line-bar');
    
    const countableCardsLength = document.querySelectorAll('[data-progress]').length;

    const progress = Math.round((currentCard * 100) / countableCardsLength);
    
    progressValue.forEach(item => {
        item.innerText = progress + '%';
    })

    progressLineBar.forEach(items => {
        items.style.width = progress + '%';
    })
}


