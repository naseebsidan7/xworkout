import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack  sx={{ alignItems: 'center', justifyContent:'space-between', display:'flex' }} direction='row' flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
        <Typography variant="h2" sx={{ fontSize: { lg: '18px', xs: '10px' }, color:'red' }} mt="41px" textAlign="center" pb="40px">© Goldgym</Typography>
    </Stack>
   
  </Box>
);

export default Footer;