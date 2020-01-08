import React from 'react';
import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 350,
    },
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">React App</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="sm" disableGutters>
        <Paper className={classes.paper}>
          <Typography component="p">
            Edit <code>src/App.tsx</code> and save to reload.
          </Typography>
          <Link href="https://reactjs.org" variant="body2">
            Learn React
          </Link>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
