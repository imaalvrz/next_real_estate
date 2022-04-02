import { useState } from 'react';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyIcon from '@mui/icons-material/Key';
import useStyles from '../utils/styles';

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
            <NextLink href="/" passHref>
              <Link underline="none">
                <Typography className={classes.title}>
                  Real Estate
                </Typography>
              </Link>
            </NextLink>

          <div className={classes.grow}></div>
          <div>
            <Button
              aria-controls="simple menu"
              aria-haspopup="true"
              onClick={loginClickHandler}
              className={classes.navbarButton}
            >
              <IconButton color="primary" aria-label="menu">
                <MenuIcon sx={{ fontSize: '33px' }} />
              </IconButton>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={loginMenuCloseHandler}
            >
              <MenuItem onClick={loginMenuCloseHandler}>
                <NextLink href="/" passHref>
                  <Link underline="none">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <HomeIcon />
                      </Box>
                      <Typography variant="h6" sx={{ ml: 1 }}>
                        Home
                      </Typography>
                    </Box>
                  </Link>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={loginMenuCloseHandler}>
                <NextLink href="/search" passHref>
                  <Link underline="none">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <SearchIcon />
                      </Box>
                      <Typography variant="h6" sx={{ ml: 1 }}>
                        Search
                      </Typography>
                    </Box>
                  </Link>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={loginMenuCloseHandler}>
                <NextLink href="/search?purpose=for-sale" passHref>
                  <Link underline="none">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <ShoppingCartIcon />
                      </Box>
                      <Typography variant="h6" sx={{ ml: 1 }}>
                        Buy Property
                      </Typography>
                    </Box>
                  </Link>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={loginMenuCloseHandler}>
                <NextLink href="/search?purpose=for-rent" passHref>
                  <Link underline="none">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <KeyIcon />
                      </Box>
                      <Typography variant="h6" sx={{ ml: 1 }}>
                        Rent Property
                      </Typography>
                    </Box>
                  </Link>
                </NextLink>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
  );
}
