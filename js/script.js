// recupero il bottone
const button = document.querySelector('.btn');

// recupero la griglia

const grid = document.getElementById('grid');

//recupero il div del punteggio
const displayScore = document.getElementById('score');


//variabile del conteggio 

let score = 0;

//funzioni

function createCell () {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cell;
    return cell;
}


const addNumber = number => number



const generateBombs = (maxBombsNumber, totalBombs) => {

    const bombs = [];

    while (bombs.length < totalBombs) {
        const randomNumber = Math.floor(Math.random() * maxBombsNumber) + 1;
        
        if(!bombs.includes(randomNumber)){
            bombs.push(randomNumber);
        }

        
    }
    return bombs;
}


// righe e celle

const rows = 3;
const cols = 3;
const totalCells = rows * cols;

//variabile bombe totali
const totBombs = 1;

//genero le bombe
const bombs = generateBombs(totalCells, totBombs);
console.log(bombs);


// aggiungo azione dopo aver cliccato sul bottone

button.addEventListener('click', function(){

button.innerText = 'Restart';
grid.innerHTML = ' ';



        // creo celle
    for(let i = 1; i <= totalCells; i++){

        // creo cella nel html 
        const cell = createCell();
        cell.className = 'cell';

        //Inserisco il numero all'interno della cella
        const numero = addNumber(i);
        cell.innerText = numero;
     

        cell.addEventListener('click', function(){

            if(cell.classList.contains('clicked')) return;

            cell.classList.add('clicked');
            console.log(i);
            

            //creo variabile bomba beccata
            const hitBomb = bombs.includes(i);
            
            if(hitBomb){
                console.log('Hai preso la bomba! HAI PERSO !!!!')
            }

            //aumento il punteggio e lo stampo in maggina man mano che aumenta
            displayScore.innerText = 'Score:' + (++score);
           
        })
   


        grid.appendChild(cell);
    }
    


})


