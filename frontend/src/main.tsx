import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import { Header } from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import TicketList from './pages/TicketList'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {

  return (
    <>
      <Sidebar />
      <Header />
      <TicketList />
    </>
  )
}

export default App
