document.addEventListener('DOMContentLoaded',() =>
{
    const cardArray = [
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'thing',
            img:'images/thing.png'
        },
        {
            name:'thing',
            img:'images/thing.png'
        },
        {
            name:'thing2',
            img:'images/thing2.png'
        },
        {
            name:'thing2',
            img:'images/thing2.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },

        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'milkshake.png',
            img:'images/milkshake.png'
            
        }
        ,
        {
            name:'milkshake.png',
            img:'images/milkshake.png'
            
        },
        {
            name:'pizza.png',
            img:'images/pizza.png'
        },
        
        {
            name:'pizza.png',
            img:'images/pizza.png'     
        }
        ,
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        }
        ,
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        }
      

    ]
    cardArray.sort( () => 0.5 - Math.random())
    var chosenCards = []
    var chosenId = []
    var matchingCards = []

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    
    function createBoard(){
        
        for(let i=0;i<cardArray.length;i++){

            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)

        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const cardOneId = chosenId[0]
        const cardTwoId = chosenId[1]

        if(chosenCards[0] === chosenCards[1]){
            alert('You found a Match')
            cards[cardOneId].setAttribute('src','images/white.png')
            cards[cardTwoId].setAttribute('src','images/white.png')
            cards[cardOneId].style.pointerEvents='none'
            cards[cardTwoId].style.pointerEvents='none'
            cards[cardOneId].style.opacity = '0.4'
            cards[cardTwoId].style.opacity='0.4'
            matchingCards.push(chosenCards)
            resultDisplay.textContent = matchingCards.length
     
        } 
        else{
           alert('This cards dont match')
            cards[cardOneId].setAttribute('src','images/blank.png')
            cards[cardTwoId].setAttribute('src','images/blank.png')
            
        }
        if(matchingCards.length === cardArray.length/2){
            resultDisplay.textContent= 'Congratulations! You found them all'
        }
        chosenCards = []
        chosenId = []
        


    }
    function flipCard(){
        setTimeout
        var cardId = this.getAttribute('id')
        chosenCards.push(cardArray[cardId].name)
        chosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        this.style.pointerEvents='none'
        if(chosenCards.length ===2){
            setTimeout(checkForMatch,50)
        }


    }
    createBoard()
    
    

})
