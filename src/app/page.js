export default function Home() {
  return (
    <div className="container page">
      {/* HERO */}
      <section className="card hero">
        <div className="heroBadge">IPAMS Education</div>

        <h1 className="heroTitle">Educação, ciência e inclusão para transformar vidas</h1>

        <p className="heroSubtitle">
          O Instituto Professora Ângela Mathylde Soares (IPAMS) é uma iniciativa educacional e científica
          de alcance nacional e internacional, comprometida com a excelência, a inovação e o desenvolvimento humano.
        </p>

        <div className="heroActions">
          <a className="btn btnPrimary" href="/instituto">
            Conheça o Instituto
          </a>
          <a className="btn btnGhost" href="/contato">
            Fale conosco
          </a>
        </div>
      </section>

      {/* BLOCO INSTITUCIONAL (curto) */}
      <section className="card section">
        <h2 className="sectionTitle">Quem somos</h2>

        <p className="sectionText">
          O IPAMS nasceu do desejo de compartilhar conhecimento e promover a integração entre ciência e humanidades.
          Sua atuação tem impactado a formação de educadores e profissionais, consolidando-se como uma referência
          na capacitação profissional, aliando tradição, modernidade e inclusão social.
        </p>

        <p className="sectionText">
          Acima de tudo, o Instituto tem um compromisso inabalável com o ser humano, sua realização pessoal e seu
          crescimento profissional e econômico — apoiado por uma equipe altamente qualificada e alinhada à missão,
          visão e valores da instituição.
        </p>
      </section>

      {/* PILARES */}
      <section className="grid3">
        <div className="card pillar">
          <div className="pillarTop">
            <span className="dot dotTeal" />
            <h3 className="pillarTitle">Formação e capacitação</h3>
          </div>
          <p className="pillarText">
            Programas e iniciativas voltadas ao desenvolvimento profissional de educadores e estudantes, com foco
            em qualidade, consistência e resultados.
          </p>
        </div>

        <div className="card pillar">
          <div className="pillarTop">
            <span className="dot dotCoral" />
            <h3 className="pillarTitle">Ciência + humanidades</h3>
          </div>
          <p className="pillarText">
            Integração entre pesquisa científica e práticas educacionais para transformar a aprendizagem e apoiar
            decisões pedagógicas eficazes.
          </p>
        </div>

        <div className="card pillar">
          <div className="pillarTop">
            <span className="dot dotBlue" />
            <h3 className="pillarTitle">Excelência e inclusão</h3>
          </div>
          <p className="pillarText">
            Compromisso com a equidade educacional e com uma formação humana, preparada para os desafios do presente
            e do futuro.
          </p>
        </div>
      </section>

      {/* FUNDAÇÃO + PARCERIAS */}
      <section className="card section">
        <h2 className="sectionTitle">Uma trajetória construída com propósito</h2>

        <div className="split">
          <div>
            <h3 className="splitTitle">Fundado em 2018</h3>
            <p className="sectionText">
              O IPAMS surgiu com o propósito de preparar e capacitar profissionais para cursos altamente concorridos
              e, desde então, tem se desenvolvido de forma sustentável.
            </p>
          </div>

          <div>
            <h3 className="splitTitle">Atuação nacional e internacional</h3>
            <p className="sectionText">
              Ao longo da trajetória, consolidou parcerias respeitadas no Brasil e no exterior, ampliando sua atuação
              sem abrir mão da qualidade, da ética e do impacto social.
            </p>
          </div>
        </div>
      </section>

      {/* FUNDADORA */}
      <section className="card section">
        <h2 className="sectionTitle">Dra. Ângela Mathylde</h2>

        <p className="sectionText">
          Referência internacional em educação, neurociências e inclusão, atua como pesquisadora, conferencista e mentora,
          desenvolvendo metodologias que transformam a aprendizagem e promovem equidade educacional.
        </p>

        <p className="sectionText">
          Como fundadora do IPAMS e idealizadora do Congresso Internacional Brain Connection, tem contribuído para a capacitação
          de educadores e para o fortalecimento do diálogo entre ciência e prática pedagógica, no Brasil e no exterior.
        </p>

        <div className="ctaBar">
          <div>
            <div className="ctaTitle">Quer falar com a equipe?</div>
            <div className="ctaText">Entre em contato e tire dúvidas sobre projetos, eventos e parcerias.</div>
          </div>

          <a className="btn btnPrimary" href="/contato">
            Ir para Contato
          </a>
        </div>
      </section>
    </div>
  );
}
