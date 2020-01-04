
function makePage(id){
    var comp=composants[id];
    if(comp != null){
        var titre=document.createElement("h1");
        var div=document.createElement("div");
        var table=document.createElement("table");
        var lignes=[];
        //
        if(comp.type=="cpu"){
            var liste=[["Nom",comp.nom],["Marque",comp.marque],["Socket",comp.socket],["Micro-Architecture",comp.micro_architecture],["Nombre de coeurs",comp.nbcoeurs],["Nombre de threads",comp.nbthreads]];
            tpc="1"
            for(el of liste){
                var ligne=document.createElement("tr");
                var c1=document.createElement("td");
                var c2=document.createElement("td");
                if(tpc=="1"){
                    tpc="2";
                    c1.setAttribute("class","c11");
                    c2.setAttribute("class","c21");
                }
                else{
                    tpc="1";
                    c1.setAttribute("class","c12");
                    c2.setAttribute("class","c22");
                }
                var pc1=document.createElement("p");
                var pc2=document.createElement("p");
                pc1.innerHTML=el[0];
                pc2.innerHTML=el[1];
                c1.appendChild(pc1);
                c2.appendChild(pc2);
                ligne.appendChild(c1);
                ligne.appendChild(c2);
                lignes.push(ligne);
            }
            //
        }
        //
        for(l of lignes){
            table.appendChild(l);
        }
        //
        titre.innerHTML=comp.nom;
        var img=document.createElement("img");
        img.setAttribute("src",comp.image);
        div.appendChild(titre);
        div.appendChild(img);
        div.append(table);
        document.getElementById("contenu").appendChild(div);
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

