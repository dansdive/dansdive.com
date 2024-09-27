document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var resultBar = document.getElementById('resultBar');
    var results = [
      { name: 'Malapascua Island in the Philippines is renowned for its exceptional diving, especially for thresher shark encounters. It offers rich marine biodiversity, including vibrant coral reefs and diverse marine life. The islands dive sites cater to all levels of divers and feature opportunities for macro photography and wreck diving. With year-round diving conditions, Malapascua is a top destination for unforgettable underwater experiences.' , url:'https://dansdive.com/dansdive_malapascua/#malapascua-island' },
      { name: 'Scuba Diving in Malapascua is a diver’s paradise renowned for its stunning underwater landscapes and unique marine life. This small island offers an unforgettable diving experience, attracting enthusiasts from around the world. Why Dive in Malapascua? 1. Thresher Sharks: One of the main attractions of Malapascua is the opportunity to dive with thresher sharks. These majestic creatures are known for their long tails and are typically seen at Monad Shoal, a famous dive site where they come for cleaning at dawn. 2. Diverse Marine Life: Beyond thresher sharks, Malapascua boasts a rich variety of marine life. Divers can encounter colorful coral reefs, sea turtles, nudibranchs, pygmy seahorses, and a plethora of tropical fish. 3. Wreck Diving: The island is also home to the wreck of the Dona Marilyn, a ferry that sank in 1988. This site offers an exciting dive for those interested in exploring sunken vessels. 4. Gato Island: A short boat ride from Malapascua, Gato Island is another must-visit dive site. Known for its underwater tunnels and caverns, it is home to white-tip reef sharks, sea snakes, and a variety of cephalopods. Diving in Malapascua is possible year-round, but the best time to visit is from November to May when the weather is most favorable. Early morning dives are recommended for the best chance to see thresher sharks.', url:'https://dansdive.com/dansdive_malapascua/#scuba-diving'},
      { name: 'Fundive Sites is offering divers the rare opportunity to encounter majestic thresher sharks at Monad Shoal, one of the few places in the world where these elusive creatures can be seen regularly. The island’s vibrant coral reefs teem with diverse marine life, including colorful nudibranchs, pygmy seahorses, and sea turtles, making every dive a visual feast. For those interested in wreck diving, the sunken Dona Marilyn ferry provides an eerie yet fascinating underwater exploration. Additionally, nearby Gato Island boasts underwater caverns and tunnels filled with white-tip reef sharks, sea snakes, and a myriad of other marine species. Whether you’re a seasoned diver or a beginner, Malapascua promises an unforgettable diving experience.',url:'https://dansdive.com/fundive_malapascua' },
      { name: 'Our scuba diving courses cater to all levels of divers, from beginners to advanced. The Discover Scuba Diving program offers a taste of the underwater world under the guidance of a certified instructor, perfect for those new to diving. For those ready to take the plunge, the Open Water Diver Course provides a comprehensive foundation in diving skills and knowledge, preparing you for safe and confident underwater exploration. The Advanced Open Water Diver Course further enhances your diving abilities, allowing you to gain experience in various environments and specialties. For certified divers looking to refresh their skills, our Scuba Review or Scuba Refresher program ensures you’re ready for your next underwater adventure.',url:'https://dansdive.com/dive_course_malapascua' }
    ];
  
    var filteredResults = results.filter(function(result) {
        return result.name.toLowerCase().includes(searchInput);
    });

    resultBar.innerHTML = '';
    if (filteredResults.length > 0) {
        filteredResults.forEach(function(result) {
            var link = document.createElement('a');
            link.href = result.url;
            link.className = 'result-item';
            link.textContent = result.name;
            resultBar.appendChild(link);
        });
        resultBar.style.display = 'block';
    } else {
        resultBar.style.display = 'none';
    }
});
