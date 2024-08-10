import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



export default function App() {
  return (
    <div>
      <h1 className=''>TypeScript Bug Tracker</h1>
    </div>
  )
}
