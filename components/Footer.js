import { Box, Container, Link, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Real Estate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        p: 3,
        mt: 3,
        backgroundColor: grey[200],
      }}
    >
      <Container
        sx={{ display: 'flex', flexWrap:"wrap", justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="body1">Real Estate App.&nbsp;</Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
