function calcularNivel(vitorias, derrotas) {
    const saldo = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}


const vitoriasJogador = 75;
const derrotasJogador = 20;
const saldoVitorias = vitoriasJogador - derrotasJogador;
const nivelJogador = calcularNivel(vitoriasJogador, derrotasJogador);

console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivelJogador}.`);
