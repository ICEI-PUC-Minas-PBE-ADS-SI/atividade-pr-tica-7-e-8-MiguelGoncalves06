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