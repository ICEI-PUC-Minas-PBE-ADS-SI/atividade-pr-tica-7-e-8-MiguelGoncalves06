const dados = [
    {
      id: "japao",
      titulo: "Pacote Japão",
      descricao: "5 dias explorando cultura e tecnologia oriental japonesa.",
      conteudo: "Explore a cultura milenar, templos históricos e a modernidade vibrante de Tóquio, Kyoto e Osaka.",
      imagem: "img/japao.jpg",
      extras: `
        <ul>
          <li><strong>Clima:</strong> Primavera amena, ideal para passeios.</li>
          <li><strong>Acomodações:</strong> Hotel 4 estrelas em Tóquio.</li>
          <li><strong>Atividades:</strong> Compras em Akihabara, visita a templos e museus.</li>
          <li><strong>Moeda:</strong> Iene (¥) | <strong>Idioma:</strong> Japonês</li>
        </ul>
      `
    },
    {
      id: "rio",
      titulo: "Pacote Rio de Janeiro",
      descricao: "4 dias de pura diversão na Cidade Maravilhosa.",
      conteudo: "Visite o Cristo Redentor, Pão de Açúcar e relaxe nas praias de Copacabana e Ipanema.",
      imagem: "img/rio.jpg",
      extras: `
        <ul>
          <li><strong>Clima:</strong> Tropical quente, ótimo para praia.</li>
          <li><strong>Acomodações:</strong> Hotel com vista para o mar.</li>
          <li><strong>Atividades:</strong> Passeio de bondinho, noite na Lapa.</li>
          <li><strong>Moeda:</strong> Real (R$) | <strong>Idioma:</strong> Português</li>
        </ul>
      `
    },
    {
      id: "egito",
      titulo: "Pacote Egípcio",
      descricao: "7 dias imersivos nos mistérios das pirâmides egípcias.",
      conteudo: "Descubra as pirâmides de Gizé, o Rio Nilo e a história fascinante dos faraós egípcios.",
      imagem: "img/egito.jpg",
      extras: `
        <ul>
          <li><strong>Clima:</strong> Seco e quente, leve roupas leves.</li>
          <li><strong>Acomodações:</strong> Hotel com vista para as pirâmides.</li>
          <li><strong>Atividades:</strong> Cruzeiro no Nilo, visita ao Museu Egípcio.</li>
          <li><strong>Moeda:</strong> Libra Egípcia (EGP) | <strong>Idioma:</strong> Árabe</li>
        </ul>
      `
    }
  ];
  
  // Aplica somente se for a página de detalhes
  if (window.location.pathname.includes("detalhes.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const item = dados.find(d => d.id === id);
  
    const container = document.getElementById("detalhes-container");
    const extras = document.getElementById("extras-container");
  
    if (item) {
      container.innerHTML = `
        <h1 class="mb-3 text-center">${item.titulo}</h1>
        <img src="${item.imagem}" alt="${item.titulo}" class="img-fluid mb-3">
        <p><strong>Resumo:</strong> ${item.descricao}</p>
        <p>${item.conteudo}</p>
      `;
      extras.innerHTML = `<h4>Informações Extras</h4>${item.extras}`;
    } else {
      container.innerHTML = `<p>Pacote não encontrado.</p>`;
      extras.style.display = "none";
    }
  }
  
  // HOME
  if (document.getElementById("container-cards")) {
    const container = document.getElementById("container-cards");
  
    dados.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
          <img src="${item.imagem}" alt="${item.titulo}">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn btn-detalhes mt-2">Ver detalhes</a>
        `;
      container.appendChild(card);
    });
  }
  
  //LOOP
  card.innerHTML = `
    <div class="card">
      <img src="${destino.imagem}" alt="${destino.nome}">
      <div class="card-body">
        <h5>${destino.nome}</h5>
        <p>${destino.descricao}</p>
        <a href="detalhes.html?id=${destino.id}" class="btn btn-primary">Ver Detalhes</a>
      </div>
    </div>
  `;
  
  
  
  
  
  