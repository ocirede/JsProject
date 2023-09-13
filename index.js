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

                      {
                        id: 1,
                        category: "science",
                        difficulty: 3,
                        question: "What is the Heisenberg Uncertainty Principle, and how does it relate to quantum mechanics?",
                        choices: [
                          "It's a principle in thermodynamics. It states that energy cannot be created or destroyed.",
                          "It's a principle in chemistry. It explains the behavior of gases at high pressures.",
                          "It's a principle in quantum mechanics. It states that you cannot simultaneously know the exact position and momentum of a particle.",
                          "It's a principle in relativity. It explains the bending of light in a gravitational field."
                        ],
                        correctAnswer: 3
                      },

                      {
                        id: 1,
                        category: "science",
                        difficulty: 3,
                        question: "What is the Higgs boson, and why is its discovery significant in the field of particle physics?",
                        choices: [
                          "It's a type of dark matter that makes up most of the universe's mass.",
                          "It's a subatomic particle that gives other particles mass through the Higgs field. Its discovery confirmed the Standard Model of particle physics.",
                          "It's a fundamental particle that carries the strong nuclear force responsible for holding atomic nuclei together.",
                          "It's a theoretical particle that travels faster than the speed of light, challenging our understanding of physics."
                        ],
                        correctAnswer: 2
                      },

                      {
                        id: 1,
                        category: "science",
                        difficulty: 3,
                        question: "Explain the concept of Schrödinger's cat in quantum physics and the implications of the thought experiment.",
                        choices: [
                          "It's a cat that can predict the weather accurately.",
                          "It's a cat that can see in the dark due to quantum vision.",
                          "It's a thought experiment involving a cat in a sealed box with a radioactive atom. It illustrates the paradoxes of quantum superposition and measurement.",
                          "It's a cat that can travel through time and space."
                        ],
                        correctAnswer: 3
                      },

                      {
                        id: 1,
                        category: "science",
                        difficulty: 3,
                        question: "What is the concept of quantum entanglement, and how does it challenge our understanding of particle physics?",
                        choices: [
                          "It's the idea that particles can communicate faster than the speed of light. It supports the theory of determinism.",
                          "It's a phenomenon where particles become linked and share properties, regardless of distance. It challenges the classical concepts of locality and realism.",
                          "It's a theory that explains how particles can exist in multiple places at the same time. It aligns with the concept of hidden variables.",
                          "It's the idea that particles can tunnel through solid barriers, defying the laws of classical physics."
                        ],
                        correctAnswer: 2
                      },

                      {
                        id: 1,
                        category: "science",
                        difficulty:3,
                        question: "What is the Fermi Paradox, and what are some proposed solutions or explanations for it?",
                        choices: [
                          "It's the idea that aliens have visited Earth in the past. Proposed solutions include conspiracy theories.",
                          "It's the question of why we haven't detected any signs of extraterrestrial civilizations, despite the vast number of stars and planets in the universe. Proposed explanations include the possibility of self-destruction or the existence of a cosmic 'zoo'.",
                          "It's the concept that time travel is possible through wormholes. Proposed solutions include building time machines.",
                          "It's the idea that the universe is constantly expanding. Proposed solutions include the Big Crunch theory."
                        ],
                        correctAnswer: 2
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

                    {
                      id:2,
                      category: "history",
                      difficulty: 3,
                      question: "What were the main causes and consequences of the Peloponnesian War in ancient Greece?",
                      choices: [
                        "It was a war over control of the Mediterranean Sea, leading to the rise of Alexander the Great.",
                        "It was a conflict between Athens and Sparta caused by territorial disputes and power struggles, resulting in the decline of ancient Greece.",
                        "It was a series of battles between Rome and Carthage, leading to the expansion of the Roman Empire.",
                        "It was a war between Egypt and Persia, resulting in the establishment of the Persian Empire."
                      ],
                      correctAnswer: 2
                    },

                    {
                      id: 2,
                      category: "history",
                      difficulty: 3,
                      question: "Explain the impact of the Industrial Revolution on society, economy, and politics in the 18th and 19th centuries.",
                      choices: [
                        "It had no significant impact on any aspect of society.",
                        "It led to the decline of industry and the rise of agriculture.",
                        "It transformed society through urbanization, technological advancements, and the emergence of new economic and political ideologies.",
                        "It primarily affected the arts and culture."
                      ],
                      correctAnswer: 3
                    },

                    {
                      id:2,
                      category: "history",
                      difficulty: 3,
                      question: "Discuss the major factors and consequences of the Cuban Missile Crisis during the Cold War.",
                      choices: [
                        "It was a diplomatic disagreement between the United States and France over the control of Cuba.",
                        "It was a conflict between Cuba and the Soviet Union over missile technology, resulting in the Cuban Revolution.",
                        "It was a standoff between the United States and the Soviet Union over the placement of nuclear missiles in Cuba, with potential global nuclear war as a consequence.",
                        "It was a crisis caused by China's attempt to assert dominance in the Caribbean region."
                      ],
                      correctAnswer: 3
                    },
                    {
                      id: 2,
                      category: "history",
                      difficulty: 3,
                      question: "Examine the causes and consequences of the Treaty of Versailles following World War I.",
                      choices: [
                        "It was a treaty that led to the division of Germany into East and West. Its consequences included the rise of the European Union.",
                        "It was a treaty that officially ended World War I. Its consequences included imposing harsh penalties on Germany, which contributed to economic hardship and the outbreak of World War II.",
                        "It was a treaty that established the United Nations. Its consequences included the spread of democracy worldwide.",
                        "It was a treaty that dissolved the Ottoman Empire. Its consequences included the establishment of Israel."
                      ],
                      correctAnswer: 2
                    },

                    {
                      id: 2,
                      category: "history",
                      difficulty: 3,
                      question: "Discuss the impact of the Renaissance period on art, culture, and science in Europe during the 14th to 17th centuries.",
                      choices: [
                        "It had no significant impact on any aspect of European society.",
                        "It marked a period of isolationism and cultural stagnation in Europe.",
                        "It was a period of rebirth and innovation, leading to advancements in art, literature, science, and philosophy, including the works of Leonardo da Vinci and Galileo Galilei.",
                        "It primarily influenced politics and warfare in Europe."
                      ],
                      correctAnswer: 3
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
                      },
                      
                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 3,
                        question: "In film history, what is the significance of the French New Wave movement, and who were some notable directors associated with it?",
                        choices: [
                          "It introduced the first 3D movies. Notable directors included Alfred Hitchcock and Cecil B. DeMille.",
                          "It revolutionized cinema with innovative storytelling and filmmaking techniques. Notable directors included François Truffaut and Jean-Luc Godard.",
                          "It marked the beginning of the Hollywood studio system. Notable directors included Orson Welles and Stanley Kubrick.",
                          "It was a musical revolution in film, with directors like Steven Spielberg and George Lucas leading the way."
                        ],
                        correctAnswer: 2
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty:3,
                        question: "What is the concept of auteur theory in filmmaking, and how does it influence the interpretation of a director's work?",
                        choices: [
                          "It's a theory that directors have no significant influence on the making of a film.",
                          "It's a theory that emphasizes the role of the producer in filmmaking.",
                          "It's a theory that regards the director as the primary creative force in a film and examines their recurring themes and styles.",
                          "It's a theory that focuses on the role of the screenwriter in shaping a film's narrative."
                        ],
                        correctAnswer: 3
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 3,
                        question: "What is the concept of method acting, and which famous actors are known for practicing it in their performances?",
                        choices: [
                          "It's a style of acting that relies on memorizing lines perfectly. Notable actors include Meryl Streep and Anthony Hopkins.",
                          "It's a style of acting that emphasizes physical fitness and agility. Notable actors include Tom Cruise and Angelina Jolie.",
                          "It's a style of acting that involves fully immersing oneself in a character's emotions and experiences. Notable actors include Marlon Brando and Daniel Day-Lewis.",
                          "It's a style of acting that focuses on vocal techniques and diction. Notable actors include Morgan Freeman and Judi Dench."
                        ],
                        correctAnswer: 3
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 3,
                        question: "Discuss the role of streaming platforms in changing the landscape of television and film consumption. How have these platforms influenced content creation, viewer preferences, and the traditional TV and movie industry?",
                        choices: [
                          "Streaming platforms have had minimal impact on the entertainment industry.",
                          "They have led to the resurgence of traditional television, with cable networks regaining dominance.",
                          " Streaming platforms have transformed how people consume content, with a shift towards on-demand, personalized viewing experiences. This shift has also prompted increased investment in original programming by both traditional studios and streaming services.",
                          "Streaming platforms have primarily affected the music industry, not television and film."
                        ],
                        correctAnswer: 3
                      },

                      {
                        id: 3,
                        category: "entertainment",
                        difficulty: 3,
                        question: "How has the digital age influenced the gaming industry, particularly in the context of virtual reality (VR) technology, and what implications has it had for gameplay experiences?",
                        choices: [
                          "The digital age had no significant impact on the film industry.",
                          "It led to the decline of traditional gaming due to the overuse of VR technology. Classic games remained dominant.",
                          "It revolutionized the gaming industry by introducing advanced VR technology, enhancing immersive gameplay experiences, and opening up new possibilities in game design. It also raised challenges related to motion sickness and affordability.",
                          "The digital age primarily affected the film industry, not gaming."
                        ],
                        correctAnswer: 3
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
  }if(selectedQuestion.length > 1){
    console.log(`Your current score is: ${score}\n`)
  }

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







  
  



















