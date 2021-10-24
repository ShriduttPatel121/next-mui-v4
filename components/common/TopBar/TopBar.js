import React from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu as  MenuIcon } from '@material-ui/icons';
import { useRouter } from 'next/router';

function TopBar(props) {

    const router = useRouter();
    const homeClickHandler = () => {
        router.push("/");
    }
    

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={homeClickHandler} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
            NextJs
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default TopBar;