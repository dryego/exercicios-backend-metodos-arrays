const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontre(nomes, posicao) {
    const encontro = nomes.slice(posicao, -1);
    return encontro;
}

console.log(encontre(nomes, posicao));