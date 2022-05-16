import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';

import Footer from './Components/Footer';
import React from 'react';

function App() {
  return (
    <section className="body" >
      <main  className="app-container">
          <Header />
          <Form />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
