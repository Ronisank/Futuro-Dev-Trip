async function getUserInfo() {
    console.log('Buscando informações do usuário...');
    // setTimeout(() => {
    var user = {
        name: 'Roni',
        lastName: 'Rodrigues',
        age: 39,
        email: 'roni@email.com'
    }
    return user;
    // }, 5000);
}
getUserInfo();
setTimeout(() => {
    user()
    
}, 5000);

async function user() {
    const name = await getUserInfo();
    console.log(name);

}



// const promise = new Promise((resolve, reject) => {
//     if (getUserInfo()) {
//         resolve(user);
//     } else {
//         reject('Não foi possível encontrar o usuário');
//     }
// }).then((resposta) => {
//     console.log(resposta);
// }).catch((erro) => {
//     console.log(erro);
// });
