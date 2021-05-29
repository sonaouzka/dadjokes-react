import React, { useState } from 'react';
import { render } from 'react-dom';
import Joke from './Joke/joke';

// 14.úkol

// const App = () => {
//  const [likes, setLikes] = useState(0);
//  const [dislikes, setDislikes] = useState(0);


//  const clickUp = () => {
//   setLikes(likes + 1);
//  };


//  const clickDown = () => {
//   setDislikes(dislikes + 1);
//  };

//  return (
//   <div className="container">
//     <div class="joke">
//         <div class="joke__body">
//           <div class="joke__user">
//             <img class="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
//             <p class="user-name">Neroxx</p>
//           </div>

//           <p class="joke__text">
//             The secret service isn't allowed to yell "Get down!" anymore when
//             the president is about to be attacked. Now they have to yell
//             "Donald, duck!"
//           </p>
//         </div>
//         <div class="joke__likes">
//           <button id="btn-up" class="btn-like btn-like--up" onClick={clickUp}></button>
//           <span id="likes-up" class="likes-count likes-count--up">{likes}</span>
//           <button id="btn-down" class="btn-like btn-like--down" onClick={clickDown}></button>
//           <span id="likes-down" class="likes-count likes-count--down">{dislikes}</span>
//         </div>
//       </div>
//   </div>
// );
// };

// render(<App />, document.querySelector('#app'));



// :::::::::::::::::::::::::::::: 

// 15.úkol

const jokes = [
  {
    id: 'user01',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png',
    name: 'Neroxx',
    text:
      'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
    likes: 13,
    dislikes: 24,
  },
  {
    id: 'user02',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user02.png',
    name: 'wetcxjfsj',
    text:
      "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    likes: 50,
    dislikes: 10,
  },
  {
    id: 'user03',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user03.png',
    name: 'Oracimaru',
    text:
      "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
    likes: 30,
    dislikes: 2,
  },
  {
    id: 'user04',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user04.png',
    name: 'radnaros',
    text:
      'Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.',
    likes: 15,
    dislikes: 8,
  },
  {
    id: 'user05',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user05.png',
    name: 'liness',
    text:
      'My daughter screeched, "Daaaaaad, you haven\'t listened to one word I\'ve said, have you!?" What a strange way to start a conversation with me...',
    likes: 90,
    dislikes: 44,
  },
  {
    id: 'user06',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user06.png',
    name: 'JIy4H',
    text:
      'My wife tried to unlatch our daughter\'s car seat with one hand and said, "How do one armed mothers do it?" Without missing a beat I replied, "Single handedly."',
    likes: 38,
    dislikes: 1,
  },
  {
    id: 'user07',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user07.png',
    name: 'Klina',
    text:
      "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
    likes: 66,
    dislikes: 35,
  },
  {
    id: 'user08',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user08.png',
    name: 'eho22',
    text:
      'My friend keeps saying "cheer up man it could be worse, you could be stuck underground in a hole full of water." I know he means well.',
    likes: 27,
    dislikes: 18,
  },
  {
    id: 'user09',
    avatar: 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user09.png',
    name: 'GreatEvil',
    text:
      'The fattest knight at King Arthur’s round table was Sir Cumference. He acquired his size from too much pi.',
    likes: 42,
    dislikes: 9,
  },
];


const App = () => {
 
  return jokes.map((joke) => (
    <Joke
    key={joke.id}
    userAvatar={joke.avatar}
    userName={joke.name}
    text={joke.text}
    likes={joke.likes}
    dislikes={joke.dislikes}
  />
  ));
 };
 
 render(<App />, document.querySelector('#app'));