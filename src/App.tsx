import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.tsx'
import './App.css'
import { useCountStore } from './zustand.ts'

function App() {
  const count = useCountStore(s => s.count);
  const setCount = useCountStore(s => s.setCount);
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={appLogo} className="logo" alt="vite-pwa logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola VitePWA! con localStorage</h1>
      <div className="card">
        <button onClick={() => setCount(1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  )
}

export default App
