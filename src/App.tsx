import { Grid, createMuiTheme, Card, CardContent } from '@material-ui/core';
import * as React from "react";
import Widget from "./components/Dashboard/Widget";
import MenuBar from './components/UI/header/MenuBar';
import TableLastProducts from './components/Dashboard/TableLastProduct/TableLastProducts';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <MenuBar>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TableLastProducts></TableLastProducts>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Widget value={178} element="Pedidos"></Widget>
              </Grid>
              <Grid item xs={12} md={6}>
                <Widget value={140} element="Finalizado"></Widget>
              </Grid>
              <Grid item xs={12} md={6}>
                <Widget value={28} element="Em separação"></Widget>
              </Grid>
              <Grid item xs={12} md={6}>
                <Widget value={10} element="Pronto para Entrega"></Widget>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MenuBar>
    )
  }
}
