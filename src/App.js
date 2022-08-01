import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='./' element={NavBar}>
            <Route index element={HomePage}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
