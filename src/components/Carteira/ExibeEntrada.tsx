import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Divider, ListItem, ListItemText } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary
// }));

// id: number;
//   valor: number;
//   Data: number;
//   Remetente: string;

const ExibeEntrada: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container xs={12}>
        <Grid xs={2}>id</Grid>
        <Grid xs={3}>valor</Grid>
        <Grid xs={3}>Data</Grid>
        <Grid xs={3}>Remetente</Grid>
      </Grid>
      <Divider variant="inset" />
    </Box>
  );
};
export default ExibeEntrada;

{
  /* <Item>{Entradas.valor}</Item> */
}
