import { useState } from 'react';
import { useRouter } from 'next/router';
import { filterData, getFilterValues } from '../utils/filterData';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SearchFilters = () => {
  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState(filterData);

  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => { 
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  return (
    <Grid container
      sx={{
        justifyContent: 'space-evenly',
      }}
    >
      {filters.map((filter) => (
        <Grid item xs={5}
          key={filter.queryName}
          sx={{ minWidth: 160, mb:3 }}
        >
          <FormControl fullWidth>
            <InputLabel>{filter.placeholder}</InputLabel>
            <Select
              variant="standard"
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchFilters;
