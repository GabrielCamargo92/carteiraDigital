import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';

const ExibeSaida: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container xs={12}>
        <Grid xs={2}>id</Grid>
        <Grid xs={3}>valor</Grid>
        <Grid xs={3}>Data</Grid>
        <Grid xs={3}>Destinatário</Grid>
      </Grid>
      <Divider variant="inset" />
    </Box>
  );
};
export default ExibeSaida;
