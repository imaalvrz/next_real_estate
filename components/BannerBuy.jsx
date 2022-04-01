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
    'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008';
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        elevation={20}
        sx={{ display: 'inline-flex', flexWrap: 'wrap', mt: 2, p: 2 }}
      >
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Box sx={{ ml: 5 }}>
          <Typography variant="h4" gutterBottom>
            {purpose}
          </Typography>
          <Typography variant="h2" gutterBottom>
            {title1} <br /> {title2}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {desc1} <br /> {desc2}
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
