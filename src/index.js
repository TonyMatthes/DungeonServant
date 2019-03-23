import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const enhancers = []
// this allows you to use
// Redux dev tools from the chrome store.
if (process.env.NODE_ENV === 'development') {
    // tslint:disable-next-line
    const devToolsExtension = (window).devToolsExtension
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(
        devToolsExtension({
          maxAge: 5,
        })
      )
    }
  }

const composedEnhancers = compose(applyMiddleware(...middlewareList), ...enhancers)
const store = createStore(rootReducer, {}, composedEnhancers)

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#df78ef',
      main: '#ab47bc',
      dark: '#790e8b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#bdf478',
      main: '#8ac148',
      dark: '#599014',
      contrastText: '##000000',
    },
  },
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('react-root'),
);
