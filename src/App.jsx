import "./App.css";

function App() {
  return (
    <div className="max-w-screen-lg space-y-2 sm:p-4 p-2">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-between">
          <img
            src="/logo.svg"
            alt="Logo Professor Davidson 65077"
            className="mb-2 sm:w-56 w-44"
          />
          <div className="flex justify-end gap-2">
            <a href="https://www.facebook.com/share/osu6CErpPHeB5pye/?mibextid=qi2Omg">
              <img
                src="/icon-facebook.svg"
                alt="Presidente da PCdoB S.A."
                className="w-14 rounded-2xl"
              />
            </a>
            <a href="https://www.instagram.com/prof.davidson.65?igsh=MTdha241ZnhodHlnZQ==">
              <img
                src="/icon-instagram.svg"
                alt="Presidente da PCdoB S.A."
                className="w-14 rounded-2xl"
              />
            </a>
          </div>
        </div>
        <div className="flex sm:gap-2 justify-around sm:justify-center">
          <img
            src="/unegro.png"
            alt="Presidente da UNEGRO"
            className="w-40 rounded-2xl shadow-md"
          />
          <img
            src="/pcdob.png"
            alt="Presidente da PCdoB S.A."
            className="w-40 rounded-2xl shadow-md"
          />
        </div>
      </div>

      <div className="bg-white flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap space-y-2 p-2 sm:space-x-2 rounded-lg">
        <img
          src="/davidson.png"
          alt="Foto de Professor Davidson"
          className="rounded-lg sm:w-72 w-auto"
        />
        <p>
          Sou um professor a mais de 25 anos atuando nas redes públicas e
          privadas, sou um homem preto da periferia, passei e conheço de perto
          as dificuldades que nossa gente enfrenta todos os dias. Quero ser
          vereador para lutar por mais igualdade, Cultura e Educação de
          qualidade, e mais oportunidades para todos. Juntos, podemos
          transformar Santo André!
        </p>
      </div>

      <div className="bg-white flex items-center justify-center sm:justify-between flex-wrap sm:flex-nowrap space-y-2 p-2 sm:space-x-2 rounded-lg">
        <p>
          Vamos Juntos Transformar nossa Cidade Eu quero ser vereador de Santo
          André porque eu acredito na força da nossa gente. Sou um homem preto,
          da periferia, e sei o que é lutar por um espaço, por respeito e por
          dignidade. Minha vida toda foi dedicada à educação e à comunidade, e
          eu sei que muita coisa precisa mudar. Quero ampliar a voz daqueles
          que, assim como eu, conhecem de perto as dificuldades, e acreditam que
          podemos ter uma cidade mais justa e mais igual para todos. Como
          vereador, vou lutar por uma cultura que seja de acesso para todos, por
          uma educação melhor, por mais oportunidades para nossos jovens e pais
          e mães que lutam todos os dias por seus filhos, quero participar de
          decisões importantes e direcionamentos de políticas que realmente
          cheguem para aqueles que mais precisam.
        </p>

        <img
          src="/davidson.jpeg"
          alt="Foto de Professor Davidson"
          className="rounded-lg sm:w-72 w-auto"
        />
      </div>

      {/* <div className="bg-white flex items-center p-2 space-x-2 rounded-lg">
        <img
          src="/coletivo.png"
          alt="Coletivo Solidário fundado por Professor Davidson"
        />

        <img src="/palestra.png" alt="Palestra de Professor Davidson UNEGRO" />
      </div> */}
    </div>
  );
}

export default App;
