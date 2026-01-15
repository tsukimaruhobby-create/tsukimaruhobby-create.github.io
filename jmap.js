var d = new jpmap.japanMap(document.getElementById("my-map"), {
  showsPrefectureName: true,
  width: 1000,
  movesIslands: true,
  lang: 'en',
  onSelect: function(data){
    alert(data.name);
  }
});
