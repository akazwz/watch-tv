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
import { Avatar, Button, Drawer, ListItemAvatar, Container } from '@mui/material'

const ChannelCateCard = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
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
            flexDirection: 'column'
          }}
        >
          drawer
        </Container>
      </Drawer>
    </>
  )
}

const ChannelsCate = (props: { cateChan: Map<any, any>, setUrl: any, setChannelName: any }) => {
  const { cateChan, setUrl, setChannelName } = props
  console.log(cateChan)
  const [openScience, setOpenScience] = useState<boolean>(false)
  const [openAnimation, setOpenAnimation] = useState<boolean>(false)
  const [openXXX, setOpenXXX] = useState<boolean>(false)

  const [ScienceChan, setScienceChan] = useState<ReactElement>(<></>)
  const [AnimationChan, setAnimationChan] = useState<ReactElement>(<></>)
  const [XXXChan, setXXXChan] = useState<ReactElement>(<></>)

  const setChanElement = () => {
    if (cateChan.get('Science')) {
      const channels = cateChan.get('Science').slice(0, 1000)
      if (channels) {
        const element = channels.map((item: Channel) => {
          return (
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {
                setUrl(item.url)
                setChannelName(item.name)
                setOpenAnimation(false)
                setOpenXXX(false)
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
        setScienceChan(element)
      }
    }

    if (cateChan.get('Animation')) {
      const channels = cateChan.get('Animation').slice(0, 1000)
      if (channels) {
        const element = channels.map((item: Channel) => {
          return (
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {
                setUrl(item.url)
                setChannelName(item.name)
                setOpenXXX(false)
                setOpenScience(false)
              }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </List>
          )
        })
        setAnimationChan(element)
      }
    }

    if (cateChan.get('XXX')) {
      const channels = cateChan.get('XXX').slice(0, 1000)
      if (channels) {
        const element = channels.map((item: Channel) => {
          return (
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {
                setUrl(item.url)
                setChannelName(item.name)
                setOpenScience(false)
                setOpenAnimation(false)
              }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </List>
          )
        })
        setXXXChan(element)
      }
    }
  }

  useEffect(() => {
    setChanElement()
  }, [cateChan, setChannelName, setUrl])

  return (
    <>
      <ChannelCateCard />
    </>
  )
}

export default ChannelsCate
