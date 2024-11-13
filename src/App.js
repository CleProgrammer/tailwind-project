import LogoSite from "./images/logo-site.png"
import ImgCarro from "./images/carro.png"
import './App.css';

function App() {
  return (
    <section className="bg-gray-100 w-screen h-screen flex flex-col items-center">
      <header className="bg-white w-screen h-10 flex justify-center items-center">
        <div className="w-80 h-full flex justify-between">
          <img src={LogoSite} className="w-32 mobile:hidden" />
          <nav className="w-80 mobile:w-full h-16 justify-items-end">
            <ul className="w-40 mobile:w-full h-full flex justify-between place-items-center text-gray-500">
              <li className="hover:text-black hover:cursor-pointer">Home</li>
              <li className="hover:text-black hover:cursor-pointer">About</li>
              <li className="hover:text-black hover:cursor-pointer">Cars</li>
              <li className="hover:text-black hover:cursor-pointer">Localization</li>
              <li className="hover:text-black hover:cursor-pointer">Contacts</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-gray-100 w-80 h-80 flex mobile:flex-col">
        <div className="w-1/2 mobile:w-full h-full mobile:h-1/2 flex flex-col justify-center items-center">
          <div className="w-full h-1/6 mobile:h-1/2 flex justify-left items-center text-5xl mobile:text-4xl font-black text-gray-500">VENHA COMPRAR O SEU CARRO!</div>
          <div className="w-full h-10 mobile:h-1/4 flex justify-left items-center text-3xl mobile:text-2xl font-black text-orange-700">OFERTAS A PARTIR DE R$45.000!</div>
        </div>
        <div className="w-1/2 mobile:w-full h-full mobile:h-1/2 flex justify-center items-center">
          <img src={ImgCarro} className="mobile:w-full"/>
        </div>
      </div>
    </section>
  );
}

export default App;
