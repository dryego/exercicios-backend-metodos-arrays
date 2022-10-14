const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const atendimento = "atender"; //"atender" "agendar";
const nome = "Dryego";

function fila(pacientes, atendimento, nome) {
    if (atendimento == "atender") {
        pacientes.shift();
    } else if (atendimento == "agendar") {
        pacientes.push(nome);
    }
    const formatarLista = pacientes.join(", ");

    return formatarLista;
}

console.log(fila(pacientes, atendimento, nome));
