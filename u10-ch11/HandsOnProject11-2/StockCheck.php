<?php
$TickerSymbol = $_GET["t"];
header("Cache-Control: no-cache");
header("Content-Type: text/csv");
$Quote = "https://api.iextrading.com/1.0/stock/$TickerSymbol/batch?types=quote,chart";
$QuoteString = file_get_contents($Quote);
echo $QuoteString;
?>