import { Home } from "./Pages"

import QR from "../src/Images/QR.png";

function App() {
  return (
    <>
      <div className="display-invalid">
        <div className="container-invalid">
          <div className="title-invalid">:(</div>
          <div className="subtitle-invalid">Este projeto é para resoluções maiores que 1300px</div>
          <div className="box-qr">
          <img src={QR} alt=""/>
          <div className="subtitle-box-qr">Escanei aqui para ver meu portfolio e outros projetos.</div>
          </div>
        </div>
      </div>
      <div className="app">
        <Home />
      </div>
    </>
  );
}

export default App;
