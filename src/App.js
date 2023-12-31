import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return(
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page/:pageNumber" element={<Home />} />
  </Routes>
</Router>) ;
}

export default App;
