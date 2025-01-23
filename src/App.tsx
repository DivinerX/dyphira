import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { store } from './redux'
function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
