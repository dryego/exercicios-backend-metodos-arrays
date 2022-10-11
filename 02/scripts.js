const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

formargrupo(nomes, 4);

function formargrupo(nomes, tamanhoDoGrupo) {
    if (nomes.length > tamanhoDoGrupo) {
        let grupo = 0;
        let integrantes = "";

        for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
            integrantes = nomes.slice(i, (i + tamanhoDoGrupo)).join(", ")
            grupo++
            console.log(`grupo ${grupo}: ${integrantes}`);

        }
    } else {
        console.log("tamanho invalido.")
    }
}