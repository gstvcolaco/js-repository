var agora = new Date()
var hora = agora.getHours()
if (hora < 12){
    console.log(`Bom dia! ja são ${hora} horas da manha`)
}else if(hora<=20){
    console.log(`Boa tarde! ja são ${hora} horas da tarde`)
}else{
    console.log(`Boa noite! ja são ${hora} hora`)
}