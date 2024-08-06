function calcularComissao() {
    try {
        const salarioBase = parseFloat(document.getElementById('salarioBase').value);
        const valorComissao = parseFloat(document.getElementById('valorComissao').value);
        const numeroVendas = parseInt(document.getElementById('numeroVendas').value);

        // Ensure valid numeric input
        if (isNaN(salarioBase) || isNaN(valorComissao) || isNaN(numeroVendas)) {
            throw new Error('Invalid input');
        }

        // Calculate total commission and total salary
        const comissaoTotal = numeroVendas * valorComissao;
        const salarioTotal = salarioBase + comissaoTotal;

        // Update labels with formatted output
        document.getElementById('comissaoTotalLabel').innerText = `Comissão total: R$ ${comissaoTotal.toFixed(2)}`;
        document.getElementById('salarioTotalLabel').innerText = `Salário total: R$ ${salarioTotal.toFixed(2)}`;
    } catch (error) {
        // Handle invalid input (e.g., non-numeric input)
        document.getElementById('comissaoTotalLabel').innerText = 'Entrada inválida';
        document.getElementById('salarioTotalLabel').innerText = '';
    }
}

function calcularLucroTotal(custoFixo, custoVariavel, precoVenda, quantidadeVendida) {
    const lucroUnitario = precoVenda - custoVariavel;
    const lucroTotal = (lucroUnitario * quantidadeVendida) - custoFixo;
    return lucroTotal;
}

function calcularPontoEquilibrio(custoFixo, custoVariavel, precoVenda) {
    const pontoEquilibrio = custoFixo / (precoVenda - custoVariavel);
    return pontoEquilibrio;
}

function calcular() {
    try {
        const custoFixo = parseFloat(document.getElementById('custoFixo').value);
        const custoVariavel = parseFloat(document.getElementById('custoVariavel').value);
        const precoVenda = parseFloat(document.getElementById('precoVenda').value);
        const quantidadeVendida = parseInt(document.getElementById('quantidadeVendida').value);

        // Ensure valid numeric input
        if (isNaN(custoFixo) || isNaN(custoVariavel) || isNaN(precoVenda) || isNaN(quantidadeVendida)) {
            throw new Error('Invalid input');
        }

        // Calculate total profit and break-even point
        const lucroTotal = calcularLucroTotal(custoFixo, custoVariavel, precoVenda, quantidadeVendida);
        const pontoEquilibrio = calcularPontoEquilibrio(custoFixo, custoVariavel, precoVenda);

        // Update labels with formatted output
        document.getElementById('lucroTotalLabel').innerText = `Lucro total: R$ ${lucroTotal.toFixed(2)}`;
        document.getElementById('pontoEquilibrioLabel').innerText = `Ponto de equilíbrio: ${pontoEquilibrio.toFixed(2)} unidades`;
    } catch (error) {
        // Handle invalid input (e.g., non-numeric input)
        document.getElementById('lucroTotalLabel').innerText = 'Entrada inválida';
        document.getElementById('pontoEquilibrioLabel').innerText = '';
    }
}

function calcularTarifa() {
    const consumoInput = document.getElementById('consumo');
    const resultadoTarifaElement = document.getElementById('resultadoTarifa');
  
    if (!consumoInput || !resultadoTarifaElement) {
      console.error('Elementos HTML não encontrados');
      return;
    }
  
    const consumo = parseFloat(consumoInput.value);
  
    if (isNaN(consumo) || consumo < 0) {
      resultadoTarifaElement.textContent = 'Entrada inválida. Por favor, insira um valor numérico positivo.';
      return;
    }
  
    let tarifa;
    if (consumo <= 100) {
      tarifa = 0.50 * consumo;
    } else if (consumo <= 200) {
      tarifa = 50 + 0.75 * (consumo - 100);
    } else {
      tarifa = 125 + 1.00 * (consumo - 200);
    }
  
    resultadoTarifaElement.textContent = `Tarifa total: R$ ${tarifa.toFixed(2)}`;
  }