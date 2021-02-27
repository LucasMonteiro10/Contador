function contar()
{
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let contagem = window.document.getElementById('contagem');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('Por favor, preencha todos os campos!')
    }
    else
    {
        let inicioValor = Number(inicio.value);
        let fimValor = Number(fim.value);
        let passoValor = Number(passo.value);
        
        contagem.innerHTML = 'Contando: ';

        if(inicioValor < fimValor)
        {
            for(let contador = inicioValor; contador <= fimValor; contador += passoValor)
            {
                contagem.innerHTML += `${contador}; `;
            }
        }
        else if(inicioValor > fimValor)
        {
            for(let contador = inicioValor; contador >= fimValor; contador -= passoValor)
            {
                contagem.innerHTML += `${contador}; `;
            }
        }
        else
        {
            window.alert('O valor de início não pode ser igual ao de fim!')
        }
    }
}