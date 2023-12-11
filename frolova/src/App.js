import './css/style.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './pages/Main'
import Account from './pages/Account'
import Catalog from './pages/Catalog'
import Community from './pages/Community'
import Media from './pages/Media'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/media' element={<Media/>}/>
        </Routes>        
        <Footer/>
      </Router>      
    </div>
  );
}

export default App;
