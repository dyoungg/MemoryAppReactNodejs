import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import CreateScreen from "./Screens/CreateScreen";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";


import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/create" element={<CreateScreen />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
