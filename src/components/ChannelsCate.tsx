import { useState } from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import {
  Avatar,
  Button,
  Drawer,
  ListItemAvatar,
  Container,
  ListItem,
  Box,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { Channel } from '../pages/HomePage'

const renderRow = (props: ListChildComponentProps) => {
  const { index, style, data } = props
  const { listData, setUrl, setChannelName } = data
  let item: Channel = listData[index]
  const handleChannelItemClick = () => {
    setUrl(item.url)
    setChannelName(item.name)
  }

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={handleChannelItemClick}>
        <ListItemAvatar>
          {
            item.logo === null ?
              <Avatar
                alt={item.name ?? ''}
                variant="rounded"
                sx={{ width: 80, height: 40 }}
              >
                {item.name?.slice(0, 1)}
              </Avatar>
              :
              <Avatar
                alt={item.name ?? ''}
                variant="rounded"
                sx={{ width: 80, height: 40 }}
                src={item.logo}
              />
          }
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <div>
              {item.languages.map((item) => {
                return item.name
              })}
            </div>
          }
          sx={{ ml: '10px' }}
        />
      </ListItemButton>
    </ListItem>
  )
}

const ChannelListV = (props: { listData: any, setUrl: any, setChannelName: any, }) => {
  const { listData, setUrl, setChannelName } = props
  return (
    <>
      <FixedSizeList
        itemSize={80}
        itemCount={listData.length}
        height={400}
        width={400}
        itemData={{ listData: listData, setUrl: setUrl, setChannelName: setChannelName }}
      >
        {renderRow}
      </FixedSizeList>
    </>
  )
}

const ChannelsCate = (props: { cateChan: Map<any, any>, categories: string[], langChan: Map<any, any>, languages: string[], setUrl: any, setChannelName: any }) => {
  const { cateChan, categories, langChan, languages, setUrl, setChannelName } = props
  const [open, setOpen] = useState<boolean>(false)
  const [channelListData, setChannelListData] = useState<any>([])

  return (
    <>
      <Box sx={{ mt: '10px' }}>
        {languages.map((item, index) => {
          return (
            <Button
              key={index}
              variant="outlined"
              onClick={() => {
                setOpen(true)
                const cateChanData = langChan.get(item)
                setChannelListData(cateChanData)
              }}
              sx={{
                margin: '2px'
              }}
            >
              {item}
            </Button>
          )
        })}
      </Box>
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
          <ChannelListV listData={channelListData} setUrl={setUrl} setChannelName={setChannelName} />
        </Container>
      </Drawer>
    </>
  )
}

export default ChannelsCate
