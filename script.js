function generateRandomMoistureContent(min, max, count) {
    let results = [];
    for (let i = 0; i < count; i++) {
      let moistureContent = Math.random() * (max - min) + min;
      results.push(moistureContent.toFixed(2) + '%');
    }
    return results;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let moistureContents = generateRandomMoistureContent(0.9, 3, 30);
    let list = document.getElementById('moistureContentList');
    moistureContents.forEach(function(content) {
      let listItem = document.createElement('li');
      listItem.textContent = content;
      list.appendChild(listItem);
    });
  });