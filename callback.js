function greeting(person, persons) {
    greetingHandler(persons);   
}
// const name =('halim mama') 
 function greetingHandler(persons){
    console.log('Good morning', persons);
 }
greeting(greetingHandler, 5)