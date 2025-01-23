import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '@/Routes'
import { store } from '@/redux'
import { AuthProvider } from '@/contexts/auth.provider'
function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  )
}

export default App
