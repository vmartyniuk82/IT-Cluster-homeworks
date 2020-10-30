const myInfo = {
    name: 'Василь',
    age: 38
}
function showMyInfo () {
    for (const property in myInfo) {
        if (`${property}` == 'name') console.log(`Привіт, мене звати ${myInfo[property]}.`);
        if (`${property}` == 'age') console.log(`Мені ${myInfo[property]} років.`);
    }
}
showMyInfo ();