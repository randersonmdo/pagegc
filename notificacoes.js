document.addEventListener("DOMContentLoaded", function () {
  const notificacoesContainer = document.getElementById("notificacoes");

  const nomesEmpresas = [
    "João Souza",
    "Maria Costa",
    "Carlos Pereira",
    "Ana Maria",
    "Pedro Henrique",
    "Paulo Oliveira",
    "Fernanda Rodrigues",
    "Marcelo Costa",
    "Carolina Santos",
    "Ricardo Almeida",
    "Juliana Pereira",
    "André Martins",
    "Luísa Mendes",
    "Guilherme Gomes",
    "Isabel Carvalho",
    "Lucas Silva",
    "Beatriz Ferreira",
    "Miguel Gonçalves",
    "Lara Ribeiro",
    "Eduardo Alves",
    "Letícia Rodrigues",
    "Hugo Oliveira",
    "Amanda Costa",
    "Gustavo Pereira",
    "Manuela Santos",
    "Rafael Santos",
    "Lívia Martins",
    "Daniel Rodrigues",
    "Isabella Pereira",
    "Enzo Carvalho",
    "Soluções Acumen",
    "Inovações NovaTech",
    "Sistemas CoreTech",
    "Sistemas de Precisão",
    "Dinâmica Quântica",
    "Empreendimentos Visionários",
    "Tecnologias InovateX",
    "Soluções AlphaTech",
    "Sinergia Inovações",
    "Grupo Global Nexus",
    "Análises Apex",
    "Soluções Infiniti",
    "Empreendimentos Echelon",
    "Serviços OptimaTech",
    "Indústrias VentureWave",
  ];

  const mensagens = [
    "Iniciou o período de teste!",
    "Adquiriu nossa nova solução!",
    // Adicione mais mensagens aqui
  ];

  let notificacoesExibidas = new Set();
  let notificacoesExibidasCount = 0;

  function exibirNotificacao() {
    if (notificacoesExibidasCount >= 10) {
      return; // Já exibiu 10 notificações
    }

    let nomeOuEmpresaAleatorio;
    do {
      nomeOuEmpresaAleatorio =
        nomesEmpresas[Math.floor(Math.random() * nomesEmpresas.length)];
    } while (notificacoesExibidas.has(nomeOuEmpresaAleatorio));

    notificacoesExibidas.add(nomeOuEmpresaAleatorio);
    notificacoesExibidasCount++;

    const mensagemAleatoria =
      mensagens[Math.floor(Math.random() * mensagens.length)];

    const notificacao = document.createElement("div");
    notificacao.className = "notificacao";
    notificacao.textContent = `${nomeOuEmpresaAleatorio} ${mensagemAleatoria}`;

    notificacoesContainer.appendChild(notificacao);

    setTimeout(function () {
      notificacoesContainer.removeChild(notificacao);
      setTimeout(exibirNotificacao, 5000); // Chama a próxima notificação após 5 segundos
    }, 5000);
  }

  exibirNotificacao(); // Inicia o ciclo de exibição
});
