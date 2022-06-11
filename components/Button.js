import { Button as MuiButton } from "@mui/material";

export function Button({ sx, ...props }) {
  return (
    <MuiButton
      variant="contained"
      sx={{
        backgroundColor: "#fcd469",
        color: "#22272b",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: "#fcd469",
          color: "#22272b",
        },
        ...sx,
      }}
      {...props}
    >
      {props.children}
    </MuiButton>
  );
}
