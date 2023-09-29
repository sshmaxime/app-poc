import { Search } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/joy";

export const SearchBar = () => {
  return (
    <Box
      height="35px"
      width="200px"
      bgcolor="background.level1"
      borderRadius="12.5px"
      pl="10px"
      pr="10px"
      border="1px solid"
      borderColor="background.level2"
      boxShadow="5px 5px 5px background.level2"
    >
      <Grid container height="100%" alignItems="center">
        <Search sx={{ color: "black", fontSize: "20px" }} />

        <Grid pl="5px" sx={{ opacity: "75%" }}>
          <Typography fontSize="14px">Search...</Typography>
        </Grid>

        <Grid flexGrow={1} />

        <Box
          bgcolor="background.body"
          fontSize="14px"
          borderRadius="5px"
          px="4px"
          py="1.5px"
          border="1px solid"
          borderColor="background.level2"
        >
          <Typography fontSize="12px" fontWeight={800}>
            ⌘K
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
