import type { SxProps, Theme } from "@mui/material";

export const navStyle: SxProps<Theme> = {
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    border: 0,
    width: `250px`,
    boxSizing: 'border-box',
    marginTop: `70px`
  }
}