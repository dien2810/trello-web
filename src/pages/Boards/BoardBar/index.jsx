import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Face'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main',
  bgColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #0bbfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="TrungquanDev MERN Stack Board"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
          max={4}>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://res.cloudinary.com/dv0ehr5z7/image/upload/v1747729269/kindergarten/student/photos/xyixcphyenjkqljpbljg.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://res.cloudinary.com/dv0ehr5z7/image/upload/v1747729269/kindergarten/student/photos/xyixcphyenjkqljpbljg.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://res.cloudinary.com/dv0ehr5z7/image/upload/v1747729269/kindergarten/student/photos/xyixcphyenjkqljpbljg.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://res.cloudinary.com/dv0ehr5z7/image/upload/v1747729269/kindergarten/student/photos/xyixcphyenjkqljpbljg.jpg" />
          </Tooltip>
          <Tooltip title="trungquandev">
            <Avatar
              alt="trungquandev"
              src="https://res.cloudinary.com/dv0ehr5z7/image/upload/v1747729269/kindergarten/student/photos/xyixcphyenjkqljpbljg.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar