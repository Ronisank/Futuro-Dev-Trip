function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                name: 'Fulano',
                age: 17,
                email: 'fulano@email.com'
            }
            resolve(user);
        }, 5000);
    });
};

async function user() {
    let name = await getUserInfo();
    console.log(name);

}
console.log('Buscando informações do usuário...');
user();