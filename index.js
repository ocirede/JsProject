const prompt = require('prompt-sync')({ sigint: true });
const colors = require(`colors`)
const gameIntroduction = "\n\nIntroducing our exciting new quiz game, `Categories of Knowledge!`\n\nGet ready to test your wits and explore a world of diverse topics. In this engaging game, we have gathered a wide array of intriguing categories, from science and history to entertainment and beyond. Your mission? Choose a category and prove your expertise by answering a series of challenging questions.With Categories of Knowledge, you'll embark on a journey of curiosity, learning,and fun. Sharpen your mind, expand your horizons, and compete with friends or challenge yourself to become a category master.Dive into the world of trivia and see how your knowledge stacks up across a variety of subjects. Categories of Knowledge is your passport to endless entertainment and a chance to discover something new every time you play. So, are you up for the challenge? Lets begin the quest for knowledge and fun.";

const introduction = prompt(console.log(gameIntroduction.cyan))

const userInput = prompt("Press any key to randomly pick a Player.\n ");
  if (userInput !== null) {
    pickingDciStudent();
  }

function pickingDciStudent() {
    const students = [
      "Kostas", "Issa", "Omolara", "Tyhe", "Ilker",
      "Ibrahim", "Katada", "Garen", "Ghassan", "Ashraf", "Alkis", "Jamilya"
    ];
  
    const randomIndex = Math.floor(Math.random() * students.length);
    const randomName = students[randomIndex];
    console.log(`The chosen player for today is: ${randomName}\n`);

  }


let findUser = prompt(`Let's write down your name: `);
console.log();

while(true){

let question = prompt(`Are you ready to play ${findUser}?: Y/N `).toLowerCase()
if(question === "n"){
  console.log(`You are exiting the game`)  
  return;
}else if (question === "y"){
  console.log(`\nGreat!! let's continue.`)
} else {
  question = prompt(`Invalid input, please ${findUser} press: Y/N `).toLowerCase()
    }



const categories = ["Science", "History", "Entertainment\n"];
const difficulties = ["Easy", "Medium", "Advanced"]

console.log("\nCategories:\n");
for (let i = 0; i < categories.length; i++){
    console.log((i +1) + ".", categories[i] )
}

const input = prompt(`Choose a category: `).toLowerCase()
console.log();
console.log("\nDifficulty:\n");
for(let i = 0; i < difficulties.length; i++){
  console.log((i + 1) + ".", difficulties[i])
}
console.log();
const level = prompt(`Choose difficulty level: `).toLowerCase()
console.log();
const questions = [
                  { id: 1,
                    category: "science",
                   difficulty: 1,
                    question: "What is Earth's only natural satellite?",
                    choices: ["The moon", "The sun",  "Jupiter"],
                    correctAnswer: 1}, 

                    { id: 1,
                      category: "science",
                      difficulty: 1,                    
                      question: "Which British naturalist is credited for the theory of natural selection and famous for his contribution to the science of evolution", 
                      choices: ["Bugs Bunny", "Charles Darwin", "Alfred Russel Wallace"],
                      correctAnswer: 2}, 

                    { id: 1,
                      category: "science",
                      difficulty: 1,
                    question:"Who developed the theory of relativity?",
                      choices: ["Albert Einstein", "Stephen Hawking", "Sigmund Freud"],
                      correctAnswer:  1}, 

                    {id: 1,
                      category: "science",
                    difficulty:1,
                    question: "A Brief History of Time is a biographical documentary about which famous scientist?",
                      choices: ["Werner Heisenberg", "Isaac Newton", "Stephen Hawking"],
                    correctAnswer:  3 }, 

                    {id: 1,
                      category: "science",
                    difficulty: 1,
                    question:"Which chemical element has O as a symbol?",
                     choices: ["Oxygen", "Water", "Carbon dioxide"],
                    correctAnswer:  1},

                    {
                      id: 1,
                      category: "science",
                      difficulty: 2,
                      question: "What is the largest organ in the human body?",
                      choices: ["Heart", "Brain", "Skin", "Liver"],
                      correctAnswer: 3
                    },
                    
                      {
                        id: 1,
                        category: "science",
                        difficulty: 2,
                        question: "What is the process by which plants convert sunlight into energy?",
                        choices: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
                        correctAnswer: 1
                      },
                      
  
                      {
                        id: 1,
                        category: "science",
                        difficulty: 2,
                        question: "Which particle is responsible for carrying an electrical charge in an atom's nucleus?",
                        choices: ["Neutron", "Electron", "Proton", "Photon"],
                        correctAnswer:3
                      },
                      
                      {
                        id: 1,
                        category: "science",
                        difficulty: 2,
                        question: "Which gas is most abundant in Earth's atmosphere?",
                        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
                        correctAnswer: 2
                      }, 
  
                      {
                        id: 1,
                        category: "science",
                        difficulty: 2,
                        question: "What is the process by which plants release water vapor into the atmosphere?",
                        choices: ["Transpiration", "Respiration", "Condensation", "Photosynthesis"],
                        correctAnswer: 1
                      },
                      

                    { id: 2,
                      category: "history",
                    difficulty:1,
                     question: "Who discovered the Americas in 1492?",
                     choices: ["Alexander the great", "Christopher Columbus",  "no one, it exsited already"],
                     correctAnswer: 2}, 
 
                     { id: 2,
                      category: "history",
                     difficulty: 1,
                     question: "Which dictator ruled over Spain from 1939 to 1975? ", 
                       choices: ["Francisco Franco", "Federico Garcia Lorca", "Augusto Pinochet"],
                       correctAnswer: 1}, 
 
                     { id: 2,
                      category: "history",
                     difficulty:1,
                     question:"Who was the first man to land on the moon?",
                       choices: ["Jurij Gagarin", "Valentina Tereshkova ", "Neil Armstrong"],
                       correctAnswer:  3}, 
 
                     { id: 2,
                      category: "history",
                     difficulty: 1,
                     question: "Which historical event is also known as The Shoah?",
                       choices: ["The Holocaust", "Armenian genocide", "World war II"],
                     correctAnswer:  1}, 
 
                     {id: 2,
                      category: "history",
                     difficulty:1,
                     question:"What was Mussolini's, who founded the National Fascist Pary of Italy, first name? ",
                      choices: ["Giovanni", "Benito", "Ignazio"],
                     correctAnswer:  2},

                     {
                      id: 2,
                      category: "history",
                      difficulty: 2,
                      question: "Who was the first President of the United States?",
                      choices: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
                      correctAnswer: 2
                    },

                    {
                      id: 2,
                      category: "history",
                      difficulty: 2,
                      question: "What event marked the start of World War I?",
                      choices: ["The sinking of the Lusitania", "The assassination of Archduke Franz Ferdinand", "The signing of the Treaty of Versailles", "The invasion of Poland"],
                      correctAnswer: 2
                    },

                    {
                      id: 2,
                      category: "history",
                      difficulty: 2,
                      question: "Which ancient civilization is known for building the Great Wall of China?",
                      choices: ["The Egyptians", "The Greeks", "The Romans", "The Chinese"],
                      correctAnswer: 4
                    },
                    
                    {
                      id: 2,
                      category: "history",
                      difficulty: 2,
                      question: "Who wrote the 'Declaration of Independence' for the United States?",
                      choices: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
                      correctAnswer: 2
                    },

                    {
                      id: 2,
                      category: "history",
                      difficulty: 2,
                      question: "Which war was fought between the North and South regions of the United States from 1861 to 1865?",
                      choices: ["The American Revolution", "The Civil War", "World War I", "The War of 1812"],
                      correctAnswer: 2
                    },
                    
                     { id: 3,
                      category: "Entertainment",
                     difficulty:1,
                      question: "Which director was the creative mind behind Pulp Fiction, Django Unchained and Kill Bill? ",
                      choices: ["Tim Burton", "Martin Scorsese",  "Quentin Tarantino"],
                      correctAnswer: 3}, 
  
                      { id: 3,
                        category: "Entertainment",
                      difficulty: 1,
                      question: "What was the first studio album recorded by The Beatles? ", 
                        choices: ["The dark side of the moon", "Please Please Me", "The Rolling Stones"],
                        correctAnswer: 2}, 
  
                      { id: 3,
                        category: "Entertainment",
                      difficulty:1,
                      question:"Which country has won Eurovision the highest number of times, collecting a total of seven wins?",
                        choices: ["Sweden", "The Netherlands ", "Ireland"],
                        correctAnswer:  3}, 
  
                      {id: 3,
                         category: "Entertainment",
                      difficulty: 1,
                      question: "Which of the following historical events is not mentioned in Forrest Gump?",
                        choices: ["The assassination of JFK", "Montgomery bus boycott", "The moon landing"
                      ],
                      correctAnswer:  2}, 
  
                      {id: 3,
                      category: "Entertainment",
                      difficulty: 1,
                      question:"In which city is The Godfather set? ",
                       choices: ["San Francisco", "Austin", "New York"],
                      correctAnswer:  3},

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 2,
                        question: "Who played the character of Jack Dawson in the movie 'Titanic'?",
                        choices: ["Brad Pitt", "Leonardo DiCaprio", "Tom Hanks", "Johnny Depp"],
                        correctAnswer: 2
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 2,
                        question: "Which British author is famous for creating the 'Harry Potter' book series?",
                        choices: ["J.K. Rowling", "George Orwell", "Charles Dickens", "Jane Austen"],
                        correctAnswer: 1
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 2,
                        question: "Which animated film features a young lion named Simba as the main character?",
                        choices: ["The Little Mermaid", "Beauty and the Beast", "The Lion King", "Aladdin"],
                        correctAnswer: 3
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 2,
                        question: "Which famous rock band released the album 'The Dark Side of the Moon'?",
                        choices: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
                        correctAnswer: 3
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 2,
                        question: "Which actor played the iconic character James Bond in the film 'Casino Royale' (2006)?",
                        choices: ["Pierce Brosnan", "Daniel Craig", "Roger Moore", "Sean Connery"],
                        correctAnswer: 2
                      }
                      
                      
                      
                      
                      

                  ];

function filteredQuestions (input, level){
  return questions.filter(question => question.id === parseInt(input) && question.difficulty === parseInt(level))
}

const selectedQuestion = filteredQuestions(input, level)

function randomizeQuestion(){
  const randomIndex = Math.floor(Math.random() * selectedQuestion.length)
  const pickedQuestion = selectedQuestion.splice(randomIndex, 1)[0]
  return pickedQuestion
  
}

let score = 0;
let count = 0;

while(selectedQuestion.length > 0 ){
count++
const chosenQuestions = randomizeQuestion()
console.log(`Question ${count}: ${chosenQuestions.question}`);
console.log();
if(chosenQuestions){
chosenQuestions.choices.forEach((choice, index) => {
console.log(`${index + 1} ${choice}`)
})}
console.log();
const answer = prompt(`Your answer is: `)
if(parseInt(answer) === chosenQuestions.correctAnswer){
  score++;
  console.log(`Correct!`)
  console.log();
  if(selectedQuestion.length > 1){
  console.log(`Your current score is: ${score}\n`)
}}

else{
  console.log(`Wrong answer`)
  console.log(`The correct answer is the number ${chosenQuestions.correctAnswer}\n`)

}}

console.log(`${findUser} Your final score is: ${score}\n`)
const percentage = (score/count) * 100
if(score >= 0.5 * count){
console.log(`Congratulations, with ${percentage}% final result you have access to the next level  `)
let playAgain = prompt(`Would you like to keep playing: Y/N `).toLowerCase()
if (playAgain !== "y"){
  console.log("\x1b[34m\n----------Game Over---------\n\x1b[0m")

 return

}
  }else{
    console.log(`Your ${percentage}% is not a bad result but you have to get better at this level before jumping on the next one. Don't give up!!`)
    console.log()
    console.log("\x1b[34m\n----------Game Over---------\n\x1b[0m")

    return

  }}







  
  



















