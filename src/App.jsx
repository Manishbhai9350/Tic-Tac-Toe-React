import { useEffect } from 'react'
import './App.css'
import useTicTacToe from './hooks/useTacToe'

function App() {

  const {board,handleClick,getStatus,resetGame} = useTicTacToe()

  return (
   <main className='main'>
      <div className="status">
        <p>{getStatus()}</p>
        <div onClick={resetGame} className="btn">Reset Game</div>
      </div>
      <div className="board">
        {
          board.map((b,i) => {
            return <div disabled={b !== null} onClick={() => handleClick(i)} key={i} className='board-item'>
                      <p>{b}</p>
                </div>
          })
        }
      </div>
   </main>
  )
}

export default App
