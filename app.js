window.addEventListener('load', function() {
    var articles = document.querySelectorAll('ul li a');
    var articleContent = document.getElementById('article-content');
    var searchForm = document.getElementById('search-form');
    var searchInput = document.getElementById('search-input');
  
    // Attach click event listeners to each article link
    articles.forEach(function(article) {
      article.addEventListener('click', function(e) {
        e.preventDefault();
        var articleName = article.innerText;
        // You can fetch the article content from a database or API
        var articleContentText = "This is the content of " + articleName;
        articleContent.innerHTML = '<h2>' + articleName + '</h2><p>' + articleContentText + '</p>';
      });
    });
  
    // Attach submit event listener to the search form
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var searchTerm = searchInput.value;
      // Perform search logic here, e.g., fetch search results from a database or API
      var searchResults = "Search results for '" + searchTerm + "'";
      articleContent.innerHTML = '<h2>Search Results</h2><p
  