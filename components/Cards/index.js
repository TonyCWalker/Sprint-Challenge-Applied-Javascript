// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function createCard(article){
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    newCard.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add("author");
    newCard.appendChild(author);

    const imgDiv= document.createElement('div');
    imgDiv.classList.add("img-container");
    author.appendChild(imgDiv);

    const img = document.createElement('img');
    img.src = article.authorPhoto;
    imgDiv.appendChild(img);

    const authorName = document.createElement('span');
    authorName.textContent = 'By ' + article.authorName;
    author.appendChild(authorName);

    return newCard;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
    let articleData = response.data.articles;
    const cards = document.querySelector('.cards-container');
    console.log(articleData);

    articleData.javascript.forEach(data => {
        cards.appendChild(createCard(data));
    });

    articleData.bootstrap.forEach(data => {
        cards.appendChild(createCard(data));
    });

    articleData.jquery.forEach(data => {
        cards.appendChild(createCard(data));
    });

    articleData.node.forEach(data => {
        cards.appendChild(createCard(data));
    });

    articleData.technology.forEach(data => {
        cards.appendChild(createCard(data));
    });
})