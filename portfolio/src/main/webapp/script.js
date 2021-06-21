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

// function to generate JSON list of favorite movies
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

 //function to generate random number
 function randoPick(ele) {
     //calls math.random 
     const val = ele[Math.floor(Math.random()*(ele.length))];
     return val;
 }
// function to create list
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

function translateLanguage() {

    // gets inner text from About Me paragraph
    var text = document.getElementById('me').innerText;
    //gets language that was chosen from select button
    const languageCode = document.getElementById('language').value;

    //where translated message will appear
    const resultContainer = document.getElementById('result');

    //way in which the text will be translated in the servlet
    const params = new URLSearchParams();
    params.append('text', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
    method:'POST',
    body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
        resultContainer.innerText = translatedMessage;
    });

}

