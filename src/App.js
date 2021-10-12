import React from 'react';
import Layout from './components/layout/Layout';
import JokeBoard from './pages/jokes/JokeBoard';
import 'normalize-css';
import './App.scss';

function App() {
  return (
    <Layout>
      <JokeBoard />
    </Layout>
  );
}

export default App;
