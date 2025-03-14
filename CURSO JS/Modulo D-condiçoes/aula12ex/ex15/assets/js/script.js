function carregar() {
	var msg = document.getElementById("msg")
    var msg2 =  document.querySelector('div#msg2')
	var img = document.getElementById("imagem")
	var data = new Date()
	var hora = data.getHours()
	msg.innerText = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'assets/img/fotomanha.jpg'
        msg2.innerText = `Bom dia!`
    }else if( hora >= 12 && hora<18){
        img.src = 'assets/img/fototarde.jpg'
        msg2.innerText = `Boa tarde!`
    }else{
        img.src = 'assets/img/fotonoite.jpg'
        msg2.innerText = `Boa noite!`
    }
}
