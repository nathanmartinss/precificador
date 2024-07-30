function obterValorItem() {
  const valorItemInput = document.getElementById("valorItem");
  const valorItem = parseFloat(valorItemInput.value);
  if (isNaN(valorItem) || valorItem <= 0) {
    alert("Por favor, insira um valor válido para o item.");
    return null;
  }
  return valorItem;
}

function obterPorcentagemLucro() {
  const porcentagemLucroInput = document.getElementById("porcentagemLucro");
  const porcentagemLucro = parseFloat(porcentagemLucroInput.value);
  if (isNaN(porcentagemLucro) || porcentagemLucro < 0) {
    alert("Por favor, insira uma porcentagem de lucro válida.");
    return null;
  }
  return porcentagemLucro;
}

function calcularValorLucro(valorItem, porcentagemLucro) {
  return (valorItem * porcentagemLucro) / 100;
}

function calcularPrecoFinal() {
  const valorItem = obterValorItem();
  const porcentagemLucro = obterPorcentagemLucro();

  if (valorItem !== null && porcentagemLucro !== null) {
    const valorLucro = calcularValorLucro(valorItem, porcentagemLucro);
    const precoFinal = valorItem + valorLucro;
    alert(`O preço final do item é: R$ ${precoFinal.toFixed(2)}`);
  }
}
