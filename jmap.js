<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>月丸マップ</title>

<link rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./jmap.js"></script>

<style>
#jmap {
  width: 100%;
  height: 500px;
}
</style>

<script>
$(function(){
  $('#jmap').jmap();
});
</script>
</head>

<body>
<h2 style="text-align:center">月丸マップ</h2>
<div id="jmap"></div>
</body>
</html>
