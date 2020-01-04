
function makePage(id){
    var comp=composants[id];
    if(comp != null){
        var titre=document.createElement("h1");
        titre.innerHTML=comp.nom;
        var img=document.createElement("img");
        img.setAttribute("src",comp.image);
        document.getElementById("contenu").appendChild(titre);
        document.getElementById("contenu").appendChild(img);
    }
    else{
        var p = document.createElement("p");
        p.innerHTML="Page Not Found";
        document.getElementById("contenu").appendChild(p);
    }
}


function processUser(){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    id = unescape(temp[1]);
    makePage(id);
}

processUser();

