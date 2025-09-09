 function toggleFolder(id, btn) {
      const folder = document.getElementById(id);
      const arrow = btn.querySelector('.arrow');
      if (folder.style.display === "block") {
        folder.style.display = "none";
        arrow.classList.remove('rotate');
      } else {
        folder.style.display = "block";
        arrow.classList.add('rotate');
      }
    }

const rotas = {
  "acabamento": "Acabamento.html",
  "triagem": "Triagem.html",
  "expedição": "Expedição.html",
  "envelopamento": "Envelopamento.html",
  "embalagem Cheque Contínuo": "EmbalagemCheque.html",
  "fluxo de processo": "Fluxo_de_Processo.html",
  "relatorio de pendencia": "Relátorio.html",
  "sistema de processamento": "Sistema_de_Processamento.html",
  "cheque comum continuo": "Cheque_Comum_Continuo.html",
  "cheque comum pessoa fisica": "Cheque_Comum_Pessoa_Fisica.html",
  "cheque comum pessoa fisica correio": "Cheque_Comum_Correio.html",
  "cheque op": "Cheque_OP.html",
};

function redirecionarPorPalavraChave() {
  const termo = document.getElementById('searchInput').value.trim().toLowerCase();

  if (termo in rotas) {
    window.location.href = rotas[termo];
  } else {
    alert("Nenhuma página encontrada para: " + termo);
  }
}

document.getElementById('searchBtn').addEventListener('click', redirecionarPorPalavraChave);

document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    redirecionarPorPalavraChave();
  }
});
