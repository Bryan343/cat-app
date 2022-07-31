import Header from './components/Header.js'
import CatCard from './components/CatCard.js'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="cat-cards-container">
            <CatCard />
        </section>
        <section>

        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
