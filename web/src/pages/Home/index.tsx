import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <Link to="/">
            <img src={logo} alt="Ecoleta" />
          </Link>
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos as pessoas a encontrarem pontos de coleta de forma
            eficiente
          </p>
          <Link to="/createPoint">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
