fetch('json.json')
.then(response=> response.json())
.then(json=>{
    document.getElementById('adn').innerHTML=json.frase1;
    document.getElementById('id').innerHTML=json.frase2;
    document.getElementById('cant').innerHTML=json.cant;
    console.log(json)
})
