function calcularNotas() {
    // Captura os valores das notas
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Validação das notas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || 
        nota1 < 0 || nota1 > 10 || 
        nota2 < 0 || nota2 > 10 || 
        nota3 < 0 || nota3 > 10) {
        document.getElementById("resultado").innerText = 
            "Por favor, insira valores válidos entre 0 e 10 para todas as notas.";
        return;
    }

    // Calcula a média inicial
    let media = (nota1 + nota2 + nota3) / 3;

    // Determina a situação do aluno
    if (media >= 7) {
        document.getElementById("resultado").innerText = 
            `Parabéns! Você foi aprovado com média final de ${media.toFixed(2)}.`;
    } else if (media >= 5) {
        const notaFinal = prompt("Você está de recuperação. Digite a nota da prova final:");
        if (notaFinal === null || isNaN(notaFinal) || notaFinal < 0 || notaFinal > 10) {
            document.getElementById("resultado").innerText = 
                "Nota final inválida. O cálculo não foi concluído.";
            return;
        }

        // Recalcula a média com a nota da prova final
        media = (media + parseFloat(notaFinal)) / 2;

        if (media >= 5) {
            document.getElementById("resultado").innerText = 
                `Parabéns! Você foi aprovado após a recuperação com média final de ${media.toFixed(2)}.`;
        } else {
            document.getElementById("resultado").innerText = 
                "Infelizmente, você foi reprovado na disciplina.";
        }
    } else {
        document.getElementById("resultado").innerText = 
            "Infelizmente, você foi reprovado na disciplina.";
    }
}
