import { Box } from "@mui/material";
import { mainStyle } from "./main-style";

interface MainProps {
  children: React.ReactNode;
  openNav: boolean;
}

export default function Main({ children, openNav }: MainProps) {
  return (
    <Box
      component={"main"}
      sx={mainStyle(openNav)}
      style={{ transitionDuration: '200ms' }}
    >
      { children }
    </Box>
  )
}