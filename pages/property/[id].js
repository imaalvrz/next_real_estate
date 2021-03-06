import ImageScrollBar from '../../components/ImageScrollBar';
import { baseURL, fetchAPI } from '../../utils/fetchAPI';
import millify from 'millify';
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
    <Card elevation={10} sx={{ p: 2, mx: 0, mt: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" gutterBottom>
            {isVerified && <GoVerified style={{ color: 'green' }} />} AED{' '}
            {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </Typography>
        </Box>
        <Avatar
          src={agency?.logo?.url}
          sx={{ width: 96, height: 96, boxShadow: 5 }}
        />
      </Box>
      <Typography variant="body1" textTransform="uppercase" sx={{ my: 3 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
      <Box sx={{ color: '#1769aa' }}>
        <Typography
          variant="body1"
          textTransform="uppercase"
          gutterBottom
          sx={{ mt: 3 }}
        >
          type: {type}
        </Typography>
        <Typography variant="body1" textTransform="uppercase" gutterBottom>
          purpose: {purpose}
        </Typography>
        {furnishingStatus && (
          <Typography variant="body1" textTransform="uppercase" gutterBottom>
            furnishing status: {furnishingStatus}
          </Typography>
        )}
      </Box>
      <Box sx={{ mt: 3 }}>
        {amenities.length >= 1 ? (
          <Typography variant="h5">Amenities</Typography>
        ) : (
          <Typography variant="body1" color="text.secondary">
            No information available about the amenities of this property
          </Typography>
        )}
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
                  boxShadow: 2,
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
