"use strict";

document.getElementById("button").addEventListener('click', function (event) {
    var ville = document.getElementById("ville").value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=e120e9651af4e47ba6c9ca62e0d5d311";
    getMeteo(url, ville);
});

function retriever(temp) {
    var d = document.getElementById("response");
    var p = document.createElement("p");
    p.setAttribute("id", "presponse");
    p.innerHTML = (temp + " °C");
    // var pRemove = document.getElementById('presponse').remove();
    d.appendChild(p);
}

function getMeteo(url, ville) {
    var xhr = new XMLHttpRequest();
    if (xhr) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    var temp = (Math.round((data.main.temp - 273) * 100))/100;
                    retriever(temp);
                }
                else {
                    alert('Une erreur s’est produite.');
                }
            }
        }
        xhr.open("GET", url, false);
        xhr.send();
    }
};


