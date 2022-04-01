import Image from 'next/image';
import NextLink from 'next/link';
import { Button, Box, Card, Link, Typography } from '@mui/material';

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
    'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4';
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        elevation={20}
        sx={{ display: 'inline-flex', flexWrap: 'wrap', mt: 2, p: 1 }}
      >
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Box sx={{ mt:1, mx: 3 }}>
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
      </Card>
    </div>
  );
}
