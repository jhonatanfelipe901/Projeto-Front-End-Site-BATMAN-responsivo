const idBatman = 69;

const token = "10207244891555840";
const urlBase = "https://superheroapi.com/api.php/" + token;

window.onload = function(){
    var idEnemy = getRandomInt(1, 200);

    getJSON(urlBase + "/" + idBatman, createBatmanCard);
    getJSON(urlBase + "/" + idEnemy, createEnemyCard);

    $("#generate-combat").click(function() {

        idEnemy = getRandomInt(1, 200);

        getJSON(urlBase + "/" + idEnemy, createEnemyCard);
    });
}

function createBatmanCard(data){

    let left = document.getElementById("batman-card");

    var html = "";
    html += 
    "<ul class='list-group batman-list'>" + 
        "<li class='list-group-item'>" + "<strong>Força</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar' role='progressbar' ";
                 
                data.powerstats.strength != null 
                ? 
                html += "style='width: " + parseInt(data.powerstats.strength) + "%' " 
                : 
                html += "style='width: " + "0%' ";

                html += "aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Inteligência</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar intelligence' role='progressbar' ";
                data.powerstats.intelligence != null
                ?
                html += "style='width: " + parseInt(data.powerstats.intelligence) + "%' " 
                : 
                html += "style='width: " + "0%' ";
                html += "aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Velocidade</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar velocity' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Durabilidade</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar durability' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Poder</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar power' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item last'>" + "<strong>Combate</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar combat' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
    "</ul>";

    left.innerHTML = html;
}

function createEnemyCard(data){

    let cardEnemy = document.getElementById("enemy-card");

    let html = "";

    html += "<div class='card right'>" + 
    "<img class='card-img-top enemy' src='" + data.image.url + "' alt='Enemy Card Image'>" + 
    "<div class='card-body'>" + 
      "<h5 class='card-title-enemy'>" + data.name + "</h5>" +
      "<p class='card-text text-truncate' style='max-width: 260px;'>" + data.work.occupation + "</p>" +
    "</div>";

    html += 
    "<ul class='list-group batman-list'>" + 
        "<li class='list-group-item'>" + "<strong>Força</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar' role='progressbar' ";
                 
                data.powerstats.strength != null 
                ? 
                html += "style='width: " + parseInt(data.powerstats.strength) + "%' " 
                : 
                html += "style='width: " + "0%' ";

                html += "aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Inteligência</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar intelligence' role='progressbar' ";
                data.powerstats.intelligence != null
                ?
                html += "style='width: " + parseInt(data.powerstats.intelligence) + "%' " 
                : 
                html += "style='width: " + "0%' ";
                html += "aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Velocidade</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar velocity' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Durabilidade</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar durability' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item'>" + "<strong>Poder</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar power' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
        "<li class='list-group-item last'>" + "<strong>Combate</strong></li>" +
            "<div class='progress'>" +
                "<div class='progress-bar combat' role='progressbar' style='width: 35%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>" +
                "</div>" +
            "</div>" +
        "</li>" +
    "</ul>";

    cardEnemy.innerHTML = "";
    cardEnemy.innerHTML = html;
}

function getJSON(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function(){
        if (xhr.status === 200){
            callback(xhr.response);
        } else {
            console.warn("Problemas ao conectar com a API: " + xhr.status);
        }
    }
    xhr.send();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}