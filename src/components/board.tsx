import { useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import Square from "./square";

export default function Board() {
  const [nextPlayer, setNextPlayer] = useState("X")
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(""))

  const setWinner = (squares: String[]) => {
    const moves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < moves.length; i++) {
      const [a, b, c] = moves[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return true;
      }
    };

    return false;

  }

  const setDrawn = () => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == '') {
        return false;
      }
    };
    return true;
  }

  const handleClick = (i: number) => {
    if (squares[i] != "" || setWinner(squares)) return;
    
    const nextSquares = squares.slice();
    if ( xIsNext ) {
      nextSquares[i] = "X";
      setNextPlayer("O")
    } else {
      nextSquares[i] = "O";
      setNextPlayer("X")
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = setWinner(squares);
  let statusGame = "Game in progress";
  let variantAlert = "primary";
  
  if (winner) {
    statusGame = `Completed game - Winner: ${ xIsNext ? 'O' : 'X'}`;
    variantAlert = "success";
  } else {
    const drawn = setDrawn();
    console.log( drawn )
    if ( drawn ) {
      statusGame = `Completed game - ¡DRAWN!`;
      variantAlert = "warning"; 
    }
  }

  return (
    <Container className="mt-5">
      <Col md="12">
        <Alert variant={variantAlert}>
          <p className="text-center">{ statusGame }</p>
          <p className="text-center">Next Player: { nextPlayer }</p>
        </Alert>
      </Col>
      <Card bg="dark"
          key="dark"
          text='light'
          className="mb-2">
      <Card.Header className="text-center">Board</Card.Header>
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col md="5">
              <Row>
                <Square onSquareClick={ () => handleClick(0) } value={ squares[0] }></Square>
                <Square onSquareClick={ () => handleClick(1) } value={ squares[1] }></Square>
                <Square onSquareClick={ () => handleClick(2) } value={ squares[2] }></Square>
                <Square onSquareClick={ () => handleClick(3) } value={ squares[3] }></Square>
                <Square onSquareClick={ () => handleClick(4) } value={ squares[4] }></Square>
                <Square onSquareClick={ () => handleClick(5) } value={ squares[5] }></Square>
                <Square onSquareClick={ () => handleClick(6) } value={ squares[6] }></Square>
                <Square onSquareClick={ () => handleClick(7) } value={ squares[7] }></Square>
                <Square onSquareClick={ () => handleClick(8) } value={ squares[8] }></Square>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted text-center"> Development with ♥ by <a href="https://github.com/metariaqer">MetaRiaqer</a></Card.Footer>
      </Card>
    </Container>
  );
}