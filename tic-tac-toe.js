window.onload =  function() {
    //let board = document.getElementsByClassName("board");
    let squares = document.querySelectorAll("#board div");
    for (let sqr in squares) {
        squares[sqr].classList.add("square");
    }
}