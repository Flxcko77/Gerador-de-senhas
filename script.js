
function Gerar(){
    let GerarNovamente = window.document.getElementById('Gerar');
    let Resultado = window.document.getElementById('Resultado');
    let password = Math.random().toString(36).substr(2);
    password = password.substr(0, 10);
    GerarNovamente.value = `GERAR NOVAMENTE`;
    Resultado.innerHTML = `${password}`;

}
function Copiar(){
    let Copiado = window.document.getElementById('Copiar');
    let SenhaGerada = window.document.getElementById('Resultado');
    let SenhaCopiada = SenhaGerada.innerText;
    Copiado.value = `COPIADO!`;
    alert(`Senha copiada ${SenhaCopiada}`);
    
    SenhaCopiada.select();
    document.execCommand('copy');

}

function Sair(){
    let Copiar = window.document.getElementById('Copiar');
    Copiar.value = `COPIAR`;
    
}