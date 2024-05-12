function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    //var hora = 22
    msg.innerHTML=`Agora são ${hora} horas! BOM DIA 0/`
    if( hora >= 0 && hora < 12 ) {
        img.src = "dia.png"
        document.body.style.background = '#e2cd9f'
        //BOM DIA
    } else if ( hora >= 12 && hora < 18) {
        msg.innerHTML=`Agora são ${hora} horas! BOA TARDE 0/`
        img.src = "tarde.png"
        document.body.style.background = '#b9846f'
        //Boa tarde
    } else {
        msg.innerHTML=`Agora são ${hora} horas! BOA NOITE 0/`
        img.src = "noite.png"
        document.body.style.background = '#515154'
        //Boa noite
    }
}