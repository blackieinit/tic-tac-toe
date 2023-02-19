import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './components/game'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
)
