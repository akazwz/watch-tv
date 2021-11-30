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
  ListItemText,
} from '@mui/material'
import ReactCountryFlag from 'react-country-flag'
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
                return item.name.concat(' ')
              })}
              {item.countries.map((item) => {
                let code = item.code
                if (code === 'uk') {
                  code = 'gb'
                }
                return (
                  <ReactCountryFlag
                    key={code}
                    countryCode={code}
                    svg
                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                    cdnSuffix="svg"
                  />
                )
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
        itemSize={100}
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

const Channels = (props: { channels: Map<any, any>, choices: string[], setUrl: any, setChannelName: any }) => {
  const { channels, choices, setUrl, setChannelName } = props
  const [open, setOpen] = useState<boolean>(false)
  const [channelListData, setChannelListData] = useState<any>([])

  return (
    <>
      <Box sx={{ mt: '10px' }}>
        {choices.map((item, index) => {
          return (
            <Button
              key={index}
              variant="outlined"
              onClick={() => {
                setOpen(true)
                const cateChanData = channels.get(item)
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

export default Channels
