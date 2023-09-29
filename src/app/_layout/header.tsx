import { SearchBar } from "@/components/SearchBar";
import { Box, Grid } from "@mui/joy";

export const Header = () => {
  return (
    <Box position="fixed" top={0} width="100%" height="75px">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Grid>Logo</Grid>
        <Grid>
          <Grid container>
            <Grid>Hello</Grid>
            <Grid>Hello</Grid>
            <Grid>Hello</Grid>
          </Grid>
        </Grid>
        <Grid>
          {/* <LightMode sx={{ color: "black" }} /> */}
          {/* <DarkMode sx={{ color: "black" }} /> */}
          <SearchBar />
        </Grid>
      </Grid>
    </Box>
  );
};
