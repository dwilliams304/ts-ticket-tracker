import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Header } from './components/layout/Header'
import FilterMenu from './components/layout/FilterMenu'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {

  return (
    <>
      <Header />
      <FilterMenu />
    </>
  )
}

export default App
