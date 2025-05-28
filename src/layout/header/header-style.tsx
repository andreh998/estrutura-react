import type { SxProps, Theme } from "@mui/material";
import { HEADER_HEIGHT } from "../../constants/layout";

export const headerStyle: SxProps<Theme> = {
  display: 'flex',
  height: `${HEADER_HEIGHT}px`,
  backgroundColor: (theme) => theme.palette.background.paper,
}

export const toolbarStyle: SxProps<Theme> = {
  display: 'flex',
  height: `${HEADER_HEIGHT}px`,
  backgroundColor: (theme) => theme.palette.background.paper,
  justifyContent: 'space-between',
}

export const headerBoxStyle: SxProps<Theme> = {
  // width: '240px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
