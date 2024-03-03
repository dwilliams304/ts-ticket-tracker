import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Header } from './components/layout/Header'
import TicketList from './pages/TicketList'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {

  return (
    <>
      <Header />
      <TicketList />
    </>
  )
}

export default App
