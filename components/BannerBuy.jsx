import Image from 'next/image';
import NextLink from 'next/link';
import { Button, Box, Container, Grid, Link, Typography } from '@mui/material';

export default function Banner({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) {
  const imageUrl =
  'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008';
  return (
    <Container>
      <Grid container spacing={3} sx={{ justifyContent: 'center'}}>
        <Grid item sx={12}>
          <Image src={imageUrl} width={500} height={300} alt="banner" />
        </Grid>
        <Grid item sx={{ justifyContent: 'center' }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              {purpose}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {title1} <br /> {title2}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {desc1} {desc2}
            </Typography>
            <Button variant="outlined" size="large" sx={{ mt: 1 }}>
              <NextLink href={linkName} passHref>
                <Link underline="none">{buttonText}</Link>
              </NextLink>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
