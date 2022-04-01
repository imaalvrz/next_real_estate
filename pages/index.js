import BannerRent from '../components/BannerRent';
import BannerBuy from '../components/BannerBuy';
import Property from '../components/Property';
import { baseURL, fetchAPI } from '../utils/fetchAPI';
import Box from '@mui/material/Box';

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <>
      <BannerRent
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        linkName="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          mt: 5,
        }}
      >
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Box>

      <BannerBuy
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        linkName="/search?purpose=for-sale"
        buttonText="Explore Buying"
      />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          mt: 8,
        }}
      >
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
