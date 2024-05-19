function adicionar(){
  const texto = document.getElementById('texto').value;
  localStorage.setItem("local-texto", JSON.stringify(texto))
  alert("Texto Salvo");
}

function excluir(){
  const remover_texto = document.getElementById('texto').value;
  localStorage.removeItem("local-texto", JSON.stringify(remover_texto))
  document.getElementById("texto").value = "";
  alert("Texto Removido");
}

document.getElementById("texto").value = JSON.parse(localStorage.getItem("local-texto"));