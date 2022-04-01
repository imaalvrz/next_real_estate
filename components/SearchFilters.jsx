import { useState } from 'react';
import { filterData, getFilterValues } from '../utils/filterData';
import { useRouter } from 'next/router';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

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
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {filters.map((filter) => (
        <Box
          key={filter.queryName}
          sx={{ display: 'inline-flex', mt: 2, minWidth: 200 }}
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
        </Box>
      ))}
    </Box>
  );
};

export default SearchFilters;
