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


const addNumber = number => number + 1




// righe e celle

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Variabile di conteggio usata per impedire di azionare il bottone piu volte
let count = 0;

// aggiungo azione dopo aver cliccato sul bottone

button.addEventListener('click', function(){

button.innerText = 'Restart';
grid.innerHTML = ' ';



        // creo celle
    for(let i = 0; i < totalCells; i++){

        // creo cella nel html 
        const cell = createCell();
        cell.className = 'cell';

        //Inserisco il numero all'interno della cella
        const numero = addNumber(i);
        cell.innerText = numero;
     

        cell.addEventListener('click', function(){
            
            if(cell.classList.contains('clicked')) return;

            cell.classList.add('clicked');
            console.log(numero);
            //aumento il punteggio e lo stampo in maggina man mano che aumenta
            displayScore.innerText = 'Score:' + (++score);
        })


        grid.appendChild(cell);
    }
    


})


