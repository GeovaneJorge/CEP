


function consultaEndereco() {
    let cep = document.querySelector('#cep').value;

    if (cep.length !== 8) {
        alert('CEP Invalido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            mostrarEndereco(data);
        })

    });

}
function mostrarEndereco(dados) {
    let resultado = document.querySelector('#resultado');
    if (dados.erro) {
        resultado.innerHTML = "Endereço não localizado!" 
    } else {
        resultado.innerHTML = `
                         <p> CEP: ${dados.cep}</p>
                         <p> Enderço: ${dados.logradouro}</p>
                         <p> Complemento: ${dados.complemento}</p>
                         <p> Unidade: ${dados.unidade}</p>
                         <p> Bairro: ${dados.bairro}</p>
                         <p> Cidade: ${dados.localidade}-${dados.uf}</p>
                         <p> SIAFI: ${dados.siafi}</p>
                         <p> Região: ${dados.regiao}</p>
                         <p> Guia: ${dados.guia}</p>
                         <p> Unidade: ${dados.unidade}</p> `
    }
}