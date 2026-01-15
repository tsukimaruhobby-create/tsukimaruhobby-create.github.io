<head>

    省略    

    <script type="text/javascript" src="https://unpkg.com/japan-map-js@1.0.1/dist/jpmap.min.js"></script>　//追記
    <script type="text/javascript" src="dist/jpmap.min.js"></script>　//追記
</head>
<div id="my-map"></div>
<script>
var d = new jpmap.japanMap(document.getElementById("my-map"), {
    onSelect: function(data){
      alert(data.name);
  }
});
</script>
