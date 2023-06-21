//your code here
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Nirvana'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names in lexicographic order excluding articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create the list of band names using <ul> and <li> tags
let ul = document.createElement('ul');
ul.id = 'band';

for (let i = 0; i < bandNames.length; i++) {
  let li = document.createElement('li');
  li.textContent = bandNames[i];
  ul.appendChild(li);
}

// Append the list to the document body or any other element
document.body.appendChild(ul);

