const form = document.getElementById('form-agenda')
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atulizarTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-pessoa');
    const inputNumeroContato = document.getElementById('numero-pessoa');
    
    if (inputNumeroContato.value.length < 8 ) {
        alert("O numero do contato deve ter no mínimo 8 dígitos.");
    } else if(contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserida`);
    }else {
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha =  `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atulizarTabela() {
    const corpoTabela =document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}