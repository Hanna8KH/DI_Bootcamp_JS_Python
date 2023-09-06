const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
// 1 

const usernames = newArrOfUsernames() // ["john!", "becky!", "susy!", "tyson!"]
const newArrOfUsernames = () => {
    const usernames = []
    gameInfo.forEach((user, i, arr) => usernames.push(arr[i].username + '!'))
       return usernames
   }

// 2 
const winners = usersWithHighScore() // ["becky", "susy"]
const usersWithHighScore = () => {
    const winners = []
    gameInfo.forEach((user, i, arr) => {
        if (user.score > 6) {
            winners.push(arr[i].username)
        }
        
    })
    return winners
   }

// 2.1 
const winners = gameInfo.filter((user) => user.score > 5)

// 3
const totalScore = getTotalScore1(gameInfo); // 71
function getTotalScore1(user){
   return user.reduce((total, current) => total + current.score, 0)
}
