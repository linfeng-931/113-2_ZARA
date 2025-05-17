import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
import { AuthProvider } from "./contexts/authContext";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  </Provider>,
)
