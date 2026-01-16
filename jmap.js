<script type="text/javascript" src="dist/jpmap.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/japan-map-js@1.0.1/dist/jpmap.min.js"></script>
<div id="my-map"></div>
var d = new jpmap.japanMap(document.getElementById("my-map"), {
  showsPrefectureName: true,
  width: 1000,
  movesIslands: true,
  lang: 'en',
  onSelect: function(data){
    alert(data.name);
  }
});
