let a1, a2, a3, b1, b2, b3, c1, c2, c3;
a1 = document.getElementById('a1');
a2 = document.getElementById('a2');
a3 = document.getElementById('a3');
b1 = document.getElementById('b1');
b2 = document.getElementById('b2');
b3 = document.getElementById('b3');
c1 = document.getElementById('c1');
c2 = document.getElementById('c2');
c3 = document.getElementById('c3');
buttonValue = document.getElementsByClassName('button').value;
button = document.getElementsByClassName('button').innerHTML;



const determineWinner= () => {



console.log(b1.innerHTML);
    if ((a1.innerHTML === "X" && a2.innerHTML === "X"  && a3.innerHTML === "X") ||
        (a1.innerHTML === "X" && b1.innerHTML === "X"  && c1.innerHTML === "X") ||
        (a2.innerHTML === "X" && b2.innerHTML === "X"  && c2.innerHTML === "X") ||
        (b1.innerHTML === "X" && b2.innerHTML === "X"  && b3.innerHTML === "X") ||
        (a3.innerHTML === "X" && b3.innerHTML === "X"  && c3.innerHTML === "X") ||
        (c1.innerHTML === "X" && c2.innerHTML === "X"  && c3.innerHTML === "X") ||
        (a3.innerHTML === "X" && b2.innerHTML === "X"  && c1.innerHTML === "X") ||
        (a1.innerHTML === "X" && b2.innerHTML === "X"  && c3.innerHTML === "X") ){

        let winner = `X`;
        let message = " is the winner!"
        document.getElementById('winner').innerHTML = winner;
        document.getElementById('message').innerHTML = message;
        
        
    }else if((a1.innerHTML === "O" && a2.innerHTML === "O"  && a3.innerHTML === "O") ||
            (a1.innerHTML === "O" && b1.innerHTML === "O"  && c1.innerHTML === "O") ||
            (a2.innerHTML === "O" && b2.innerHTML === "O"  && c2.innerHTML === "O") ||
            (b1.innerHTML === "O" && b2.innerHTML === "O"  && b3.innerHTML === "O") ||
            (a3.innerHTML === "O" && b3.innerHTML === "O"  && c3.innerHTML === "O") ||
            (c1.innerHTML === "O" && c2.innerHTML === "O"  && c3.innerHTML === "O") ||
            (a3.innerHTML === "O" && b2.innerHTML === "O"  && c1.innerHTML === "O") ||
            (a1.innerHTML === "O" && b2.innerHTML === "O"  && c3.innerHTML === "O")){
           
        let winner = 'O';
        let message = " is the winner!"
        document.getElementById('winner').innerHTML = winner;
        document.getElementById('message').innerHTML = message;
    }

}

// Functions to swap between characters on board
const swapBox1 = () => {
    if (a1.innerHTML == "-") a1.innerHTML = 'X';
    else if (a1.innerHTML == 'X') a1.innerHTML = 'O';
    else a1.innerHTML = '-';
    return a1.innerHTML;
    // console.log(a1.innerHTML);
}

const swapBox2 = () => {
    if (a2.innerHTML == "-") a2.innerHTML = 'X';
    else if (a2.innerHTML == 'X') a2.innerHTML = 'O';
    else a2.innerHTML = '-';
    return a2.innerHTML;
    // console.log(a2.innerHTML);
}
const swapBox3 = () => {
    if (a3.innerHTML == "-") a3.innerHTML = 'X';
    else if (a3.innerHTML == 'X') a3.innerHTML = 'O';
    else a3.innerHTML = '-';
    return a3.innerHTML;
    // console.log(a3.innerHTML);
}
const swapBox4 = () => {
    if (b1.innerHTML == "-") b1.innerHTML = 'X';
    else if (b1.innerHTML == 'X') b1.innerHTML = 'O';
    else b1.innerHTML = '-';
    return b1.innerHTML;
}
const swapBox5 = () => {
    if (b2.innerHTML == "-") b2.innerHTML = 'X';
    else if (b2.innerHTML == 'X') b2.innerHTML = 'O';
    else b2.innerHTML = '-';
    return b2.innerHTML;
}
const swapBox6 = () => {
    if (b3.innerHTML == "-") b3.innerHTML = 'X';
    else if (b3.innerHTML == 'X') b3.innerHTML = 'O';
    else b3.innerHTML = '-';
    return b3.innerHTML;
}
const swapBox7 = () => {
    if (c1.innerHTML == "-") c1.innerHTML = 'X';
    else if (c1.innerHTML == 'X') c1.innerHTML = 'O';
    else c1.innerHTML = '-';
    return c1.innerHTML;
}
const swapBox8 = () => {
    if (c2.innerHTML == "-") c2.innerHTML = 'X';
    else if (c2.innerHTML == 'X') c2.innerHTML = 'O';
    else c2.innerHTML = '-';
    return c2.innerHTML;
}

const swapBox9 = () => {
    if (c3.innerHTML == "-") c3.innerHTML = 'X';
    else if (c3.innerHTML == 'X') c3.innerHTML = 'O';
    else c3.innerHTML = '-';
    return c3.innerHTML;
}

// Function to reset board
const reset = () => {
    a1.innerHTML = '-';
    a2.innerHTML = '-';
    a3.innerHTML = '-';
    b1.innerHTML = '-';
    b2.innerHTML = '-';
    b3.innerHTML = '-';
    c1.innerHTML = '-';
    c2.innerHTML = '-';
    c3.innerHTML = '-';
    document.getElementById('winner').innerHTML = '';
    document.getElementById('message').innerHTML = '';
}




