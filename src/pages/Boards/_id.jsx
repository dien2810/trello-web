// Boards Details'\
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { fetchBoardDetailsAPI } from '~/apis'

function Board() {
  const [board, setBoard] = useState(null)
  useEffect(() => {
    // Tạm thời fix cứng, sau này sử dụng react-router-dom để lấy id từ URL
    const boardId = '6797e36287c1f52b2226f9a0'
    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })
  }, [])
  return (
    <Box sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar board={mockData?.board}/>
      <BoardContent board={mockData?.board}/>
    </Box>
  )
}

export default Board