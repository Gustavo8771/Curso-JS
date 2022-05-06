function contar(){
    let ini = Number.document.getElementsById('txti')
    let fim = Number.document.getElementsById('txtf')
    let passo = Number.document.getElementsById('txtp')
    let res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        window.document.res.innerHTML += `${ini}`
    }
}//eu desisto de fazer esse exercio ta muito dificl vo fazer o da tabuada a antepuniltima exercicio gustavo do futuro? me diz ae se eu desisti desse sonho ou se eu consegui realizar meu sonho