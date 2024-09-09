import logo from './logo.svg';
import './App.css';
// Eu preciso importar o componente
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeDetail';
// Importar o pacote que cuida das rotas
import { BrowserRouter as Router, Route, Routes }
  from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeList />} />        
        <Route path="/anime/:id" element={<AnimeDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
