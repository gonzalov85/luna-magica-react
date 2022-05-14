import './App.css';
import Header from './Header';
import Form from './Form';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <section className="body" >
      <main  className="app-container">
          <Header />
          <Form />
          <Card />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
