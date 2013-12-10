<?php
header('Access-Control-Allow-Origin: *'); 
$json = "{'games': [{'game': 'voetbal','color': '#00ff00','materials': [{'name': 'doel','url': 'url/to/img'},{'name': 'bal','url': 'url/to/img'}]},{'game': 'handbal','color': '#0000ff','materials': [{'name': 'doel','url': 'url/to/img'},{'name': 'bal','url': 'url/to/img'}]}]}"; 
echo json_encode($json);