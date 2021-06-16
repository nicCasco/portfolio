// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */


 async function showServerHello() {
  const responseFromServer = await fetch('/hello');
  //const textFromResponse = await responseFromServer.text();
  const hello = await responseFromServer.json();



  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerHTML='';


 
  helloContainer.appendChild(
      createListElement('Movie #1: ' + hello.movie1));
  helloContainer.appendChild(
      createListElement('Movie #2: ' + hello.movie2));
  helloContainer.appendChild(
      createListElement('Movie #3: ' + hello.movie3));

 }

 function randomMovie() {
    const randoMovies= ['You\'ve Got Mail', 'My Big Fat Greek Wedding', 'Monster\'s University'];
    const pick = randoPick(randoMovies); 

 // Add it to the page.
  const movieContainer = document.getElementById('movie-container');
  movieContainer.innerText = pick;
    
 }

 function randoPick(ele) {
     const val = ele[Math.floor(Math.random()*(ele.length))];
     return val;
 }

 function createListElement(text) {
     const liElement = document.createElement('li'); 
     liElement.innerText = text;
     return liElement;
 }
 
function addRandomGreeting() {
  const greetings =
      ['What\'s up homeskillets!', 'I\'m sweaty and tired.','I just want Einsteins bagels.', 'I wanna get my nails done.','I didn\'t sleep well last night.'];

  // Pick a random greeting.
  const greeting = randoPick(greetings);

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
