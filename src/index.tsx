import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Calculator from './Calculator';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(<Calculator />, document.getElementById('calcdiv') as HTMLElement);
registerServiceWorker();
