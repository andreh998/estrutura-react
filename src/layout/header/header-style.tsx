import type { SxProps, Theme } from "@mui/material";

export const headerStyle: SxProps<Theme> = {
  display: 'flex',
  height: '70px',
  backgroundColor: '#fff'
}

export const toolbarStyle: SxProps<Theme> = {
  display: 'flex',
  height: '70px',
  backgroundColor: '#fff'
}

export const headerBoxStyle: SxProps<Theme> = {
  width: '240px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const menuButtonStyle: SxProps<Theme> = {
  mr: 2,
  width: '34px',
  height: '34px',
  color: '#4527A0',
  backgroundColor: '#EDE7F6',
  borderRadius: '8px',
  ":hover": {
    color: '#fff',
    backgroundColor: '#4527A0',
    transition: '500ms',
  }
}