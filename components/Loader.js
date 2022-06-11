import { Box, CircularProgress } from "@mui/material";

export function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress
        sx={{
          color: "#fcd469",
        }}
      />
    </Box>
  );
}
