import { AppBar, Box, IconButton, Toolbar, Tooltip } from "@mui/material"
import { headerBoxStyle, headerStyle, toolbarStyle } from "./header-style"
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from "../../contexts/ThemeContext";
import { Brightness2, Brightness7, Logout } from "@mui/icons-material";

interface OpenNavProp {
  onOpenNav?: () => void
}

export default function Header({onOpenNav}: OpenNavProp) {
    const { mode, toggleTheme } = useThemeContext();
  
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
            color="primary"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box>
          <Tooltip title={`Mudar para tema ${mode === 'light' ? 'escuro' : 'claro'}`}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === 'light' ? <Brightness2 color="primary"/> : <Brightness7 color="primary" />}
            </IconButton>
          </Tooltip>
          
          <IconButton color="inherit">
            {mode === 'light' ? <Logout color="primary"/> : <Logout color="primary" />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}