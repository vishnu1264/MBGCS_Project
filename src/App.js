import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './routes/home/home.component';
import ServiceStatusPage from './routes/service-status/service-status-page.component';
import { Routes, Route } from 'react-router-dom';
import Services from './routes/services/services.component'
import ServiceForm from './routes/service-form/service-form.component';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>} />
        <Route path='status' element={<ServiceStatusPage/>} />
        <Route path='/status/form' element={<ServiceForm/>}/>
        <Route path='services' element={<Services/>}/>
      </Route>
    </Routes>
  );
}

export default App;
