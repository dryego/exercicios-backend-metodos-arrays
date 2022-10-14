const pacientes = ['José', 'Pedro', 'Maria', 'Dryego', 'João', 'Ana', 'Bárbara', 'Joana'];
const atendimento = "atender"; //"atender" "agendar";
const nome = "Dryego";

function fila(pacientes) {

    const formatarLista = pacientes.join(", ");

    return formatarLista;
}
function agendarPaciente(pacientes, nome) {
    pacientes.push(nome);
    const formatarLista = pacientes.join(", ");

    return formatarLista;

}
function atenderPaciente(pacientes) {
    pacientes.shift();
    const formatarLista = pacientes.join(", ");

    return formatarLista;
}
function cancelarAtendimento(pacientes, nome) {
    //const posiçãoNaFila = pacientes.indexOf("nome");
    //if (posiçãoNaFila > -1) {
    pacientes.splice(pacientes.indexOf(nome), 1);
    //}
    const formatarLista = pacientes.join(", ");

    return formatarLista;
}

console.log(agendarPaciente(pacientes, nome));
console.log(atenderPaciente(pacientes));
console.log(cancelarAtendimento(pacientes, nome));