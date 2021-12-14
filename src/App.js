import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Charts from './pages/Charts';
import Data from './pages/Data';
import Message1 from './pages/Message1';
import Message2 from './pages/Message2';
import Messages from './pages/Messages';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Revenue from './pages/Revenue';
import Support from './pages/Support';
import Tables from './pages/Tables';
import Team from './pages/Team';
import Users from './pages/Users';
import './App.css';

function App() {
  return (
    <Router>
        <Sidebar />
        <Routes>
          <Route path='/overview' exact element={<Overview />} />
          <Route path='/reports/charts' exact element={<Charts />} />
          <Route path='/reports/data' exact element={<Data />} />
          <Route path='/messages/message1' exact element={<Message1 />} />
          <Route path='/messages/message2' exact element={<Message2 />} />
          <Route path='/messages' exact element={<Messages />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/reports' exact element={<Reports />} />
          <Route path='/overview/revenue' exact element={<Revenue />} />
          <Route path='/support' exact element={<Support />} />
          <Route path='/reports/tables' exact element={<Tables />} />
          <Route path='/team' exact element={<Team />} />
          <Route path='/overview/users' exact element={<Users />} />
        </Routes>
    </Router>
  );
}

export default App;
