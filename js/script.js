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

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

//variabile bombe totali
const totBombs = 16;

//creo il punteggio massimo
const maxPoints = totalCells - totBombs ;

//genero le bombe
const bombs = generateBombs(totalCells, totBombs);
console.log(bombs);


// aggiungo azione dopo aver cliccato sul bottone

button.addEventListener('click', function(){

    let gameOver = false;

button.innerText = 'Restart';
grid.innerHTML = ' ';
displayScore.innerText = 'Score:';



        // creo celle
    for(let i = 1; i <= totalCells; i++){

        // creo cella nel html 
        const cell = createCell();
        cell.className = 'cell';

        //Inserisco il numero all'interno della cella
        const numero = addNumber(i);
        cell.innerText = numero;
     

        cell.addEventListener('click', function(){

            if(gameOver) return;

            if(cell.classList.contains('clicked')) return;

            cell.classList.add('clicked');
            console.log(i);
            

            //creo variabile bomba beccata
            const hitBomb = bombs.includes(i);
            
            if(hitBomb){
                cell.classList.add('bomb');
                alert('Hai preso la bomba, HAI PERSO !!!! Il tuo punteggio è:' + ' ' + score);
                gameOver = true;
            }else{

            //aumento il punteggio e lo stampo in maggina man mano che aumenta
            displayScore.innerText = 'Score:' + (++score);

            if(score === maxPoints){
                alert('Hai vinto Complimenti !!!');
                gameOver = true;
            }

            }

         
           
        })
   


        grid.appendChild(cell);
    }
    


})


