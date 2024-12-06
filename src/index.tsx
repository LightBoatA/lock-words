import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Home, { Index } from './pages/Index';
import './assets/less/index.less';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';

const App: React.FC = () => {
  return <Index />;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw Error('rootElement is null');
}

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fa8c16',
        }
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
