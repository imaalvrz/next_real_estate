import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import NextImage from 'next/image';
import { Box, IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mr: 1,
      }}
    >
      <IconButton>
        <ArrowLeftIcon
          onClick={() => scrollPrev()}
          d={['none', 'none', 'none', 'block']}
          sx={{ fontSize: '40px' }}
        />
      </IconButton>
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ml: 1,
      }}
    >
      <IconButton>
        <ArrowRightIcon
          onClick={() => scrollNext()}
          d={['none', 'none', 'none', 'block']}
          sx={{ fontSize: '40px' }}
        />
      </IconButton>
    </Box>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: 'hidden' }}
  >
    {data.map((item) => (
      <Box
        key={item.id}
        itemId={item.id}
        sx={{ width: '910px', overflow: 'hidden', p: 1 }}
      >
        <NextImage
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
