function registroDeCombate(vitoria, derrota) {
    let saldo = vitoria - derrota;
    let nivel;

    if (vitoria < 10) {
        nivel = "Ferro";
    } else if (vitoria <= 20) {
        nivel = "Bronze";
    } else if (vitoria <= 50) {
        nivel = "Prata";
    } else if (vitoria <= 80) {
        nivel = "Ouro";
    } else if (vitoria <= 90) {
        nivel = "Diamante";
    } else if (vitoria <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {
        saldo: saldo,
        nivel: nivel
    };
}

let jogadores = [
    { vitoria: 5, derrota: 2 },
    { vitoria: 15, derrota: 5 },
    { vitoria: 55, derrota: 10 },
    { vitoria: 90, derrota: 20 }
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = registroDeCombate(
        jogadores[i].vitoria,
        jogadores[i].derrota
    );

    console.log(`O Herói tem saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);
}