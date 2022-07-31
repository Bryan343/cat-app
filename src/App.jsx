import 'styles/App.css';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import Index from 'pages/Index';
import CuteCat from 'pages/CuteCat';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/cute-cat" element={<CuteCat />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
