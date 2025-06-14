// App Bar
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Workspaces from './Menus/Workspace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Profiles from './Menus/Profiles'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color:'primary.main' }}
            fontSize="small"
          >
          </SvgIcon>
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
        </Box>
        <Workspaces/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size="small"/>
        <ModeSelect/>
        <Tooltip title="Notificatiion" sx={{ cursor: 'pointer' }}>
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon sx={{ color: 'primary.main'}}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor: 'pointer' }}>
          <HelpOutlineIcon sx={{ color: 'primary.main'}}></HelpOutlineIcon>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default AppBar