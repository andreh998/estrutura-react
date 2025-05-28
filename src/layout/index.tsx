import { Suspense, useState } from "react";
import Header from "./header";
import { Box, CircularProgress } from "@mui/material";
import { layoutBoxStyle } from "./layout-style";
import Nav from "./nav";
import Main from "./main";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [openNav, setOpenNav] = useState(true);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(!openNav)}/>
      
      <Box
        sx= { layoutBoxStyle }
      >
        <Nav openNav={ openNav } />

        <Main openNav={ openNav }>
          <Suspense fallback={<CircularProgress />}>
            { children ? children : <Outlet /> }
          </Suspense>
        </Main>
      </Box>
    </>
  )
}