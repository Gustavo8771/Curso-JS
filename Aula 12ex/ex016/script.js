function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value == 0){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 80){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else
            //idoso
            img.setAttribute('src', 'foto-idoso-m.png')
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade < 80){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else
            //idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}