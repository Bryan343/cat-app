import 'styles/App.css';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import Index from 'pages/Index';
import CuteCat from 'pages/CuteCat';
import Layout from 'layouts/Layout';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/cute-cat" element={<CuteCat />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
