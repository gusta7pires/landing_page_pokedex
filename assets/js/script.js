const controls = document.querySelectorAll('.control')

let currentCard = 0

const cards = document.querySelectorAll('.card')

const maxCards = cards.length

controls.forEach(control => {
    control.addEventListener('click',() => {
        const isLeft = control.classList.contains("arrow-left")

        if (isLeft){
            currentCard -= 1
        } else{
            currentCard += 1
        }

        if (currentCard >= maxCards){
            currentCard = 0
        } else if (currentCard < 0){
            currentCard = maxCards - 1
        }

        cards.forEach(card => card.classList.remove('current-card'))

        cards[currentCard].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })

        cards[currentCard].classList.add('current-card')
    })
})