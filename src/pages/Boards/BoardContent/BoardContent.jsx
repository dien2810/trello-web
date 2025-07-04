import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      p: '10px 0'
    }}>
      <ListColumns columns={ orderedColumns}/>
    </Box>
  )
}

export default BoardContent