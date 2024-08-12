import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavBar } from './layout';
import "./index.css";
import { TicketList } from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



export default function App() {
  return (
    <div>
      <NavBar />
      <TicketList />
    </div>
  )
}
