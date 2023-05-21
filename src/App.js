import './App.css';
import Banner from './Components/Banner';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ContactPage from './Pages/Contact'
import DataPage from './Pages/AddDatas'
import { Toaster } from 'react-hot-toast'
import EditTodo from './Components/EditTodo';
import Context from './Context/Context'
import { useContext } from 'react';

function App() {

  const { edit } = useContext(Context)

  return (
    <div className="App">
      <Banner />
      <Router>
        <Routes>
          <Route element={<DashBoard />} >

            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='add-data' element={<DataPage />} />

          </Route>
        </Routes>
      </Router>
      {edit && <EditTodo />}
      <Toaster />
    </div>
  );
}

export default App;
