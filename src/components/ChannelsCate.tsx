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
import MusicVideoIcon from '@mui/icons-material/MusicVideo'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { Channel } from '../pages/HomePage'

const ChannelsCate = (props: { cateChan: Map<any, any>, setUrl: any }) => {
  const { cateChan, setUrl } = props
  console.log(cateChan)
  const [openXXX, setOpenXXX] = useState<boolean>(false)
  const [openScience, setOpenScience] = useState<boolean>(false)
  const [ScienceChan, setScienceChan] = useState<ReactElement>(<></>)
  const [XXXChan, setXXXChan] = useState<ReactElement>(<></>)

  useEffect(() => {
    if (cateChan.get('XXX')) {
      const channels = cateChan.get('XXX').slice(0, 1000)
      if (channels) {
        const element = channels.map((item: Channel) => {
          return (
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {
                setUrl(item.url)
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

    if (cateChan.get('Science')) {
      const channels = cateChan.get('Science').slice(0, 1000)
      if (channels) {
        const element = channels.map((item: Channel) => {
          return (
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {
                setUrl(item.url)
              }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </List>
          )
        })
        setScienceChan(element)
      }
    }

  }, [cateChan, setUrl])

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Channels Group By Categories
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => setOpenScience(!openScience)}>
        <ListItemIcon>
          <ScienceIcon />
        </ListItemIcon>
        <ListItemText primary="Science" />
        {openScience ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openScience} timeout="auto" unmountOnExit>
        {ScienceChan}
      </Collapse>
      <ListItemButton onClick={() => setOpenXXX(!openXXX)}>
        <ListItemIcon>
          <DoDisturbAltIcon />
        </ListItemIcon>
        <ListItemText primary="XXX" />
        {openXXX ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openXXX} timeout="auto" unmountOnExit>
        {XXXChan}
      </Collapse>
    </List>
  )
}

export default ChannelsCate
