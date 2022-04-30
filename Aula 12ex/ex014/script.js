function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var bom = window.document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        document.body.style.background = '#ff9756'
        img.src = 'fotomanha.png'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#f2ba7e'
        
    }else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#10141d'
        //boa noite
    }
 }