import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import { headerBoxStyle, headerStyle, menuButtonStyle, toolbarStyle } from "./header-style"
import MenuIcon from '@mui/icons-material/Menu';

interface OpenNavProp {
  onOpenNav?: () => void
}

export default function Header({onOpenNav}: OpenNavProp) {
  
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={headerStyle}
    >
      <Toolbar
        sx={toolbarStyle}
      >
        <Box
          sx={headerBoxStyle}
        >
          <IconButton
            onClick={onOpenNav} 
            edge="end" 
            aria-label="menu" 
            sx={ menuButtonStyle }
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {/* Botão de logout aqui */}
      </Toolbar>
    </AppBar>
  )
}