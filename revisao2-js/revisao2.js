


// a promessa será executada e ira "resolver" o console.log se nao for rejeitada.

const fetchData = () => {
    const promisse = new Promise((resolve, reject) =>
    
    //funcao assincrona
setTimeout (() => {
   resolve (console.log('Olá, mundo!'))
}, 2000)


}
//funcao sincrona

console.log('Olá')
console.log('Hello')




fetchData();

/* fetch com then - pode ser utilizado em requisições simples

para requisicoes assincronas mais complexas, o idela é async + await . Esse no caso, trabalha no sentido contraário ao .then, 
em que a requisição é feita de tras para frente, conforme exemplo abaixo:


*/



