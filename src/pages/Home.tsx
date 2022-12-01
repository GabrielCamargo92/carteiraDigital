import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExibeEntrada from '../components/Carteira/ExibeEntrada';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { somaEntrada, somaSaida } from '../store/Modules/saldoSlice';
import { addTransaction, selectTransactions } from '../store/Modules/TransacoesSlice';

const Home: React.FC = () => {
  const SaldoRedux = useAppSelector(state => state.saldo.saldo);
  const dispatch = useAppDispatch();
  const TransactionsRedux = useAppSelector(selectTransactions);

  const [Entradas, setEntradas] = useState<string>('');
  const [Saidas, setSaidas] = useState<string>('');
  const [Saldo, setSaldo] = useState<string>('');
  const hoje = new Date();

  // const inputEntrada = useRef<HTMLInputElement | undefined>();
  // const inputSaida = useRef<HTMLInputElement | undefined>();

  // const saldoReducer = dispatch(somaEntrada(Entradas));
  const Somar = () => {
    dispatch(somaEntrada(Number(Entradas)));
  };

  const Diminuir = () => {
    dispatch(somaSaida(Number(Saidas)));
  };

  const handleAddEntrada = () => {
    dispatch(
      addTransaction({
        id: Math.floor(Date.now() / 10000),
        valor: Number(Entradas),
        Data: 'hoje',
        Remetente: 'login'
      })
    );
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container
        maxWidth="lg"
        fixed
        sx={{
          backgroundColor: 'bisque',
          paddingBottom: '20px',
          marginTop: '50px'
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h4">Carteira Digital</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h3">Saldo</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4">{SaldoRedux}</Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              onChange={evt => setEntradas(evt.target.value)}
              id="outlined-basic"
              label="Entrada"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={evt => setSaidas(evt.target.value)}
              id="outlined-basic"
              label="Saida"
              variant="outlined"
            />
          </Grid>

          <Grid item lg={6} xs={12}>
            <Button variant="contained" onClick={handleAddEntrada}>
              Entradas
            </Button>

            <Paper elevation={2} sx={{ padding: '5px' }}>
              {TransactionsRedux.map(item => {
                return (
                  <>
                    <ExibeEntrada />
                    <Grid container xs={12} key={item.id}>
                      <Grid xs={2}>{item.id}</Grid>
                      <Grid xs={3}>{item.valor}</Grid>
                      <Grid xs={3}>{item.Data}</Grid>
                      <Grid xs={3}>{item.Remetente}</Grid>
                    </Grid>
                  </>
                );
              })}
            </Paper>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Button variant="contained" onClick={Diminuir}>
              Saidas
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
