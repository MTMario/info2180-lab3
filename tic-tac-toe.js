window.onload =  function() {

     let squares = document.querySelectorAll("#board div");
     for (let sqr = 0; sqr <squares.length; sqr++ ) {
        squares[sqr].classList.add("square");
      }

    let playerX = "X";
    let playerO = "O";
    let whoseTurn = playerX

    let boardSqr = Array(squares.length);
    boardSqr.fill(null);


    const gameStart = () => {
        squares.forEach(square => square.addEventListener("click", clicked))
    }

    function clicked(e) {
        if(!boardSqr[0]) {
            boardSqr[0] = whoseTurn
            e.target.innerText = whoseTurn
            whoseTurn = whoseTurn == playerX ? playerO : playerX
        }
    }

    // let newGame = document.getElementsByClassName("btn")
    // newGame.addEventListener("click", newgame)

    
    // function newgame()


    gameStart()



    // const winner = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    //   ];

}
