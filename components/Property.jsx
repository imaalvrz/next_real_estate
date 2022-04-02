import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import DefaultImage from '../assets/images/house.jpeg';
import millify from 'millify';

export default function Property({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) {
  return (
    <Card elevation={10} sx={{ minWidth: 345, maxWidth: 345, mb: 5 }}>
      <NextLink href={`/property/${externalID}`} passHref>
        <Link>
          <CardMedia
            component="img"
            height="180"
            image={coverPhoto ? coverPhoto.url : DefaultImage}
            alt="house"
          />
        </Link>
      </NextLink>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
            {isVerified && <GoVerified style={{ color: 'green' }} />} AED{' '}
            {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Typography>
          <Avatar src={agency?.logo?.url} sx={{ width: 96, height: 96, boxShadow:3 }} />
        </Box>
        <Typography variant="body1" sx={{ my: 1 }}>
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
          <BsGridFill />
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textTransform="uppercase"
        >
          {title.length > 100 ? `${title.substring(0, 100)}...` : title}
        </Typography>
      </CardContent>
    </Card>
  );
}