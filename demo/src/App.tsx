import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page from '@demo/components/Page';
import store from '@demo/store';
import '@demo/styles/common.scss';
import '@arco-design/web-react/dist/css/arco.css';
import { history } from './utils/history';

const HomePromise = import('@demo/pages/Home');
const EditorPromise = import('@demo/pages/Editor');
const Home = React.lazy(() => HomePromise);

const Editor = React.lazy(() => EditorPromise);

function App() {
  return (
    <Provider store={store}>
      <Page>
        <Suspense
          fallback={
            <div
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 24,
                  color: 'rgba(0, 0, 0, 0.65)',
                }}
              >
                Please wait a moment.
              </p>
            </div>
          }
        >
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Editor} />
              {/* <Route path="/editor" component={Editor} /> */}
            </Switch>
          </Router>
        </Suspense>
      </Page>
    </Provider>
  );
}

export default App;
