import { baseURL, fetchAPI } from '../../utils/fetchAPI';
import millify from 'millify';
import ImageScrollBar from '../../components/ImageScrollBar';
import { Avatar, Box, Card, Typography } from '@mui/material';
import { GoVerified } from 'react-icons/go';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <>
    {photos && <ImageScrollBar data={photos} />}
    <Card elevation={10} sx={{ p: 2, mx: 8, mt: 5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom>
            {isVerified && <GoVerified style={{ color: 'green' }} />} AED{' '}
            {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Typography>
          <Typography variant="h5" sx={{ my: 2 }}>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </Typography>
          <Typography variant="body1" textTransform="uppercase">
            {title}
          </Typography>
        </Box>
        <Avatar src={agency?.logo?.url} sx={{ width: 128, height: 128 }} />
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
        {description}
      </Typography>
      <Box sx={{ color: '#1769aa' }}>
        <Typography variant="h6" textTransform="uppercase" sx={{ mt: 3 }}>
          type: {type}
        </Typography>
        <Typography variant="h6" textTransform="uppercase">
          purpose: {purpose}
        </Typography>
        {furnishingStatus && (
          <Typography variant="h6" textTransform="uppercase">
            furnishing status: {furnishingStatus}
          </Typography>
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        {amenities.length && <Typography variant="h5">Amenities</Typography>}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1.5 }}>
          {amenities.map((item) =>
            item.amenities.map((amenity) => (
              <Typography
                key={amenity.text}
                sx={{
                  p: 1.5,
                  my: 0.5,
                  mr: 1,
                  color: '#1769aa',
                  border: 1,
                  borderRadius: 10,
                  boxShadow: 2
                }}
              >
                {amenity.text}
              </Typography>
            ))
          )}
        </Box>
      </Box>
    </Card>
  </>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchAPI(`${baseURL}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
