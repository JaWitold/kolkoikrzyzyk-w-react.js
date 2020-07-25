import React from 'react';
import Tile from './Components/Tile'
import Statusbar from './Components/Statusbar'
import Restart from './Components/restart'
import './App.css';

class App extends React.Component {
  
  constructor()
  {
    super()
    let tmpBoard = new Array(9)
    tmpBoard.fill("")
    this.state = {board: tmpBoard, turn: 'x', isFinished: false}
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  checkBoard(board)
  {
    return((
      (board[0] === board[4] && board[0] === board[8] && board[0] !== "")||
      (board[2] === board[4] && board[2] === board[6] && board[2] !== "")||
      (board[0] === board[1] && board[0] === board[2] && board[0] !== "")||
      (board[3] === board[4] && board[3] === board[5] && board[3] !== "")||
      (board[6] === board[7] && board[6] === board[8] && board[6] !== "")||
      (board[0] === board[3] && board[0] === board[6] && board[0] !== "")||
      (board[1] === board[4] && board[1] === board[7] && board[1] !== "")||
      (board[2] === board[5] && board[2] === board[8] && board[2] !== "")))
  }

  isDraw(board)
  {
    let isDraw = true;
    board.map(item => item === "" && (isDraw = false))
    return isDraw;
  }

  handleOnClick(id)
  {
    if(this.state.board[id] !== "" || this.state.isFinished)
      return
    this.setState(prevState => {
      const newBoard = prevState.board.map((tile, index) => {
        return (id === index) ? prevState.turn : tile 
      })

      const result = this.checkBoard(newBoard);
      let newTurn = prevState.turn === 'x' ? 'o' : 'x';
      this.isDraw(newBoard) && (newTurn = "draw")
      return {board: newBoard, turn: result ? prevState.turn : newTurn, isFinished: result}
    })
  }

  handleRestart()
  {
    let tmpBoard = new Array(9)
    tmpBoard.fill("")
    this.setState({board: tmpBoard, turn: 'x', isFinished: false})
  }

  render() {
    console.log(this.isDraw(this.state.board))
    const board = this.state.board.map((element,index) => {
      const target = {status: element, id: index, handleOnClick: this.handleOnClick}
      return <Tile key={index} target={target}/>
    })
    return (
      <div className="App">
        <Statusbar target={{turn: this.state.turn, isFinished: this.state.isFinished}}/>
        {board}
        <Restart target={{handleRestart: this.handleRestart}}/>
      </div>
    )}
}

export default App;
