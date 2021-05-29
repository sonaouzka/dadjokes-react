import React, {useState } from 'react';
import { render } from 'react-dom';
import './style.css';


const App = () => {
 const [likeUp, setLikeUp] = useState(0);
 const [likeDown, setLikeDown] = useState(0);


 const clickUp = () => {
  setLikeUp(likeUp + 1);
 };


 const clickDown = () => {
  setLikeDown(likeDown + 1);
 };

 return (
  <div className="container">
    <div class="joke">
        <div class="joke__body">
          <div class="joke__user">
            <img class="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
            <p class="user-name">Neroxx</p>
          </div>

          <p class="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div class="joke__likes">
          <button id="btn-up" class="btn-like btn-like--up" onClick={clickUp}></button>
          <span id="likes-up" class="likes-count likes-count--up">{likeUp}</span>
          <button id="btn-down" class="btn-like btn-like--down" onClick={clickDown}></button>
          <span id="likes-down" class="likes-count likes-count--down">{likeDown}</span>
        </div>
      </div>
  </div>
);
};

render(<App />, document.querySelector('#app'));
