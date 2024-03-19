const divImg = document.getElementsByClassName("card_content_img");
const cardTitle = document.getElementsByClassName("card_top_title");
const titleIndex = document.getElementsByClassName("main_content_title");
const cardScore = document.getElementsByClassName("card_top_score");
const games = document.getElementById("games");
const quantCards = Math.random() * 30;
for (let i = 0; i < quantCards; i++) {
  const newCard = document.createElement("div");
  newCard.classList.add("main_content_games_card");
  newCard.innerHTML = `
      <div class="card_top">
        <div class="card_top_title"></div>
        <div class="card_top_score"></div>
      </div>
      <div class="card_content">
        <div class="card_content_img"></div>
        <div class="card_content_description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    `;
  games.appendChild(newCard);
}

titleIndex[0].innerHTML = `<p>${cardTitle.length} Games available</p>`;

for (var i = 0; i < divImg.length; i++) {
  const uniqueParam = `?random=${Math.random() * 10000}`;
  const imageUrl = `https://source.unsplash.com/random/1080x1080${uniqueParam}`;
  divImg[i].innerHTML = `<img src="${imageUrl}"/>`;
}
for (var i = 0; i < cardTitle.length; i++) {
  cardTitle[i].innerHTML = `<p>Game Title #${i + 1}</p>
    <p class="card_top_author">by Dev#${i + 1}</p>`;
}
for (var i = 0; i < cardScore.length; i++) {
  const random = Math.floor(Math.random() * 10000);
  cardScore[i].innerHTML = `<p>#scores submitted: ${random}</p>`;
}
