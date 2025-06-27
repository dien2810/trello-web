// Boards Details'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Box sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Box>
  )
}

export default Board