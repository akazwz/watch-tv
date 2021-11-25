import { useEffect, useState, ReactElement } from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ScienceIcon from '@mui/icons-material/Science'
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt'
import PetsIcon from '@mui/icons-material/Pets'
import MusicVideoIcon from '@mui/icons-material/MusicVideo'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { Channel } from '../pages/HomePage'
import { Avatar, Button, Drawer, ListItemAvatar, Container, ListItem } from '@mui/material'

const ChannelList = () => {
  return (
    <>
      <List sx={{ minWidth: '300px' }} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt="A" variant="rounded" sx={{ width: '50px', height: '25px' }} />
          </ListItemAvatar>
          <ListItemText primary="TV" />
        </ListItemButton>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt="A" variant="rounded" sx={{ width: '50px', height: '25px' }} />
          </ListItemAvatar>
          <ListItemText primary="TV" />
        </ListItemButton>
      </List>
    </>
  )
}

const ChannelsCate = (props: { cateChan: Map<any, any>, setUrl: any, setChannelName: any }) => {
  const { cateChan, setUrl, setChannelName } = props

  const [open, setOpen] = useState<boolean>(false)
  const [channelListData, setChannelListData] = useState<any>([])

  if (cateChan.get('Science')) {
    const channels = cateChan.get('Science').slice(0, 1000)
    if (channels) {
      const element = channels.map((item: Channel) => {
        return (
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => {
              setUrl(item.url)
              setChannelName(item.name)
            }}>
              <ListItemAvatar>
                {
                  item.logo === null ?
                    <Avatar
                      alt={item.name ?? ''}
                      variant="square"
                      sx={{ width: 56, height: 21 }}
                    >
                      {item.name?.slice(0, 1)}
                    </Avatar>
                    :
                    <Avatar
                      alt={item.name ?? ''}
                      variant="square"
                      sx={{ width: 56, height: 21 }}
                      src={item.logo}
                    />
                }
              </ListItemAvatar>
              <ListItemText primary={item.name} sx={{ ml: '5px' }} />
            </ListItemButton>
          </List>
        )
      })
    }
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setOpen(true)
          const cateChanData = cateChan.get('Music')
          setChannelListData(cateChanData)
        }}
      >
        Music
      </Button>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: '50vh',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <ChannelList />
        </Container>
      </Drawer>
    </>
  )
}

export default ChannelsCate
