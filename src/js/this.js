// const user = {
//     name: "Przemysława" ,
//     score: 0,
//     updateScore(newScore){
//         user.score += newScore;
//     }
// }

function user2 (name) {
    return {
    name: name ,
    score: 0,
    updateScore(newScore){
        this.score += newScore;
    }}
}
user1 = user("Jarosław");
user2 = user("Przemek");

console.log(user1);
console.log(user2);

user2.updateScore(666);
console.log(user2);

