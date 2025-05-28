import type { SxProps, Theme } from "@mui/material";

export const mainStyle = (openNav: boolean): SxProps<Theme> => ({
  flexGrow: 1,
  display: 'flex',
  marginTop: `90px`,
  marginLeft: openNav? `270px` : '20px',
  marginRight: '20px',
  marginBottom: '20px',
  backgroundColor: 'rgb(238, 242, 246)',
  minHeight: `calc(100vh - 150px)`,
  padding: '20px',
  borderRadius: '12px',
})