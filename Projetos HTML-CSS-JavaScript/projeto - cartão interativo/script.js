var nome = document.getElementById('tname')
var cartao = document.getElementById('cnumber')
var mes = document.getElementById('dmes')
var ano = document.getElementById('dano')
var cvc = document.getElementById('tcvc')

function inserir() { //Função para a substituição de dados no cartão pelos dados do input
    var nomec = document.getElementById('nametit')
    nomec.innerHTML = nome.value
    if (nome.value === '') {
        nomec.innerHTML = 'Maria Rosa'
    }

    var meseano = document.getElementById('mesano')
    meseano.innerHTML = `${mes.value}/${ano.value}`
    if (mes.value === '' && ano.value === '') {
        meseano.innerHTML = '00/00'
    } else if(mes.value === '') {
        meseano.innerHTML = `00/${ano.value}`
    } else if(ano.value === '') {
        meseano.innerHTML = `${mes.value}/00`
    }

    var ccvc = document.getElementById('tccvc')
    ccvc.innerHTML = `${cvc.value}`
    if (cvc.value === '') {
        ccvc.innerHTML = '000'
    }

    //Comandos de limitação de dados no input 
    if(mes.value.length > 2){
        window.alert('O mês está invalido, utilize apenas 2 digitos')
        mes.value = mes.value.slice(0, 2)
    } else if(mes.value > 12) {
        window.alert('Mês invalido, Por favor adicione um mês a partir do 01 ao 12')
    } else if (ano.value.length > 2) {
        window.alert('O Ano está invalido, utilize apenas 2 digitos')
        ano.value = ano.value.slice(0, 2)
    } else if (cvc.value.length > 3) {
        window.alert('Código de verificação invalido, maximo: 3 Digitos')
        cvc.value = cvc.value.slice(0, 3)
    }
}

function dados () {
    var numcard1 = document.getElementById('numcard1')
    numcard1.innerHTML = `${cartao.value.replace(/(\d{4})/g, '$1 ')}` // o Comando: ".replace(/(\d{4})/g, '$1 ')" foi utilizado para adicionar 1 espaço a cada 4 caracteres inseridos no input
    
    if(cartao.value === '') {
        numcard1.innerHTML = '0000 0000 0000 0000'
    } else if(cartao.value.length > 16) { //Aqui limitei o input para que o usuario seja impossibilitado de adicionar mais que 16 digitos no input
        window.alert('Número de Cartão invalido, 16 Dígitos excedidos!') 
        cartao.value = cartao.value.slice(0, 15)
    }
}
/*(Alternativa: Substring) EXEMPLO DE USO DE SUBSTRING:
function dados(cartao) {
    
    var numcard1 = document.getElementById('numcard1')
    var numcard2 = document.getElementById('numcard2')
    var numcard3 = document.getElementById('numcard3') 
    var numcard4 = document.getElementById('numcard4')

    if(cartao.value != '') {
    var cartaovalue = cartao.substring(0, 16)//Função substring: Utilizada para selecionar dados especificos de uma sequencia de caracteres.
    numcard1.innerHTML = cartaovalue.substring(0, 4);
    numcard2.innerHTML = cartaovalue.substring(4, 8);
    numcard3.innerHTML = cartaovalue.substring(8, 12);
    numcard4.innerHTML = cartaovalue.substring(12, 16);

    } else if(cartao.value === '') {
    numcard1.innerHTML = '0000'
    numcard2.innerHTML = '0000'
    numcard3.innerHTML = '0000'
    numcard4.innerHTML = '0000'
    }
    //for (var i = 0; i < numc.length; i++) {
        //numc[i].innerHTML = cartao.value
    //}  Exemplo de Substituição de Varias Tags com o mesmo input ao mesmo tempo
}
*/

/* Função que dispara os alertas e realiza a troca de telas após a validação dos dados
    1 - Alerts de Dados não inseridos corretamente;
    2 - Mundança de Telas através da propriedade display no CSS. */
function confirmar() {
    if(nome.value === '') {
        window.alert('Por favor preencha o campo do Nome do Titular.')
    } else if(cartao.value === '') {
        window.alert('Por favor Preencha o campo de Número do Cartão')
    } else if(mes.value === '') {
        window.alert('Por favor Insira o Mês de validade')
    } else if(ano.value === '') {
        window.alert('Por favor Insira o Ano de validade')
    } else if(cvc.value === '') {
        window.alert('Por favor Insira o código CVC')
    } else {
        window.alert('Dados inseridos com sucesso!')
        document.getElementById('pessoais').style.display ='none'
        document.getElementById('data').style.display = 'none'

        document.getElementById('telaconfirm').style.display='flex'
    }
}
