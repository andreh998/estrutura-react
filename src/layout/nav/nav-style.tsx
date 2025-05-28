import type { SxProps, Theme } from "@mui/material";
import { DRAWER_WIDTH, HEADER_HEIGHT } from "../../constants/layout";

export const navStyle: SxProps<Theme> = {
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    border: 0,
    width: `${DRAWER_WIDTH}px`,
    boxSizing: 'border-box',
    marginTop: `${HEADER_HEIGHT}px`
  }
}

export const navListCollapsedStyle: SxProps<Theme> = {
  marginLeft: '20px'
}