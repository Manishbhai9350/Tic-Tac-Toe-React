import { useState } from "react"

const initialBoard  = new Array(9).fill(null)
const useTicTacToe = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [board, setBoard] = useState(initialBoard)

    const WINNING_PATTERNS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    const resetGame = () => {
        setBoard(initialBoard)
        setCurrentPlayer(prev => {
            return prev === 'X'? 'O' : 'X'
        })
    }

    const getStatus = () => {
        if (calculateWinner(board)) return `${currentPlayer } won` 
        if (!board.includes(null)) return `its a draw`
        else  return `${currentPlayer} turn`
    }

    const calculateWinner = currentBoard => {
        const myBoard = [...currentBoard]
        for (let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a , b , c] = [...WINNING_PATTERNS[i]] 
            const currentElem = myBoard[a] 
            const prevElem = myBoard[b]
            const nextElem = myBoard[c]
            // console.log(currentElem , prevElem , nextElem)
            if (currentElem && currentElem == prevElem && currentElem == nextElem ) {
                setTimeout(() => {
                    resetGame()
                }, 1000);
                return true
            }
        }
    }

    const handleClick = i => {
        if (board[i] == null && !calculateWinner(board)) {
        calculateWinner(board)
        const newBoard = [...board]
        newBoard[i] = currentPlayer
        setBoard(newBoard)
        const winner = calculateWinner(newBoard)
        if (!winner) {
            setCurrentPlayer(prev => {
                return prev == 'X'? 'O' : 'X'
            })
        } 
        }
    }

    return {board , handleClick , getStatus , resetGame}
}

export default useTicTacToe