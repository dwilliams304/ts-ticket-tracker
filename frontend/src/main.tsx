import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Header } from './components/layout/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {

  return (
    <>
      <Header />
    </>
  )
}

export default App
