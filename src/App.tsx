import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '@/Routes'
import { store } from '@/redux'
import { AuthProvider } from '@/contexts/auth.provider'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  )
}

export default App
