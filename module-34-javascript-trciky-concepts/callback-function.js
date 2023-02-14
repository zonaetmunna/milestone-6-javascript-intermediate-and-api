function welcomeMessage(name){
     
     name();
}
function goodMorning(){
     console.log('this is good morning')
}
function goodEvening(name){
     console.log('this is good evening')
}

welcomeMessage(goodMorning);
welcomeMessage(goodEvening)