import { useState } from 'react';
import { useRouter } from 'next/router';
import { baseURL, fetchAPI } from '../utils/fetchAPI';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
// import noresult from '../assets/images/noresult.svg';

import { Box, Button, Typography } from '@mui/material';

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Search properties {router.query.purpose}:
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={{my:1}}
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          View Filters
        </Button>
        {searchFilters && <SearchFilters />}

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          mt: 4,
        }}
      >
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Box>
      {properties.length === 0 && <h1>No results Found</h1>}
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  //DEFAULT VALUE IN LEFT SIDE
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
