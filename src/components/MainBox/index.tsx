import { Box } from "@mui/material";
import { mainBoxStyle } from "./main-box-style";

export default function MainBox({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={ mainBoxStyle }>
      { children }
    </Box>
  );
}