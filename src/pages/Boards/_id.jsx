// Boards Details'
import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'

function Board() {
  return (
    <Box sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar board={mockData?.board}/>
      <BoardContent board={mockData?.board}/>
    </Box>
  )
}

export default Board