
function Gerar(){
    let GerarNovamente = window.document.getElementById('Gerar');
    let Resultado = window.document.getElementById('Resultado');
    let password = Math.random().toString(36).substr(2);
    password = password.substr(0, 10);
    GerarNovamente.value = `GERAR NOVAMENTE`;
    Resultado.value = `${password.toLocaleUpperCase()}`;

}
function Copiar(){
    let Copiado = window.document.getElementById('Copiar');
    let SenhaGerada = window.document.getElementById('Resultado');
    Copiado.value = `COPIADO!`;
    SenhaGerada.select();
    document.execCommand('copy');
    
}

function Sair(){
    let Copiar = window.document.getElementById('Copiar');
    Copiar.value = `COPIAR`;
    
}