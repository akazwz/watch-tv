import { Box, Container } from '@mui/material'
import notFound from '../resources/404.svg'

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="sm"
        >
          <img src={notFound} height="100%" width="100%" alt="404 not found" />
        </Container>
      </Box>
    </>
  )
}

export default NotFound
