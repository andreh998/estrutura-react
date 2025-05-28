import type { SxProps, Theme } from "@mui/material";
import { DEFAULT_MARGIN, DRAWER_WIDTH, HEADER_HEIGHT } from "../../constants/layout";

export const mainStyle = (openNav: boolean): SxProps<Theme> => ({
  flexGrow: 1,
  display: 'flex',
  marginTop: `calc(${HEADER_HEIGHT}px + ${DEFAULT_MARGIN}px)`,
  marginLeft: openNav? `calc(${DRAWER_WIDTH}px + ${DEFAULT_MARGIN}px)` : `${DEFAULT_MARGIN}px`,
  marginRight: `${DEFAULT_MARGIN}px`,
  marginBottom: `${DEFAULT_MARGIN}px`,
  backgroundColor: (theme) => theme.palette.background.paper,
  minHeight: `calc(100vh - 150px)`,
  padding: `${DEFAULT_MARGIN}px`,
  borderRadius: '12px',
})