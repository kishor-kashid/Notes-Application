import { useState } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';


type Props =  {
  setVisibility :()=> void | any; 
}

export default function NavBar({ setVisibility }: Props) {
  
  function appBarLabel(label: string) {
    return (
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={ setVisibility}>
          <MenuIcon  />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#ffff00',
      },
    },
  });

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="primary">
        {appBarLabel('My Notes')}
      </AppBar>
    </ThemeProvider>
  </Stack>
  );
}