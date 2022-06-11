import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "#EBF5EE",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
