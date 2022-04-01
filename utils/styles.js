import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: grey[200],
  },
  title: {
    color: '#1769aa',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
});

export default useStyles;
