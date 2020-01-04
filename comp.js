
function makePage(id){
    var comp=composants[id];
    if(comp != null){
        var titre=document.createElement("h1");
        var div=document.createElement("div");
        var table=document.createElement("table");
        var lignes=[];
        //ligne du nom
        var ligne1=document.createElement("tr"); 
        var l1c1=document.createElement("td");
        var l1c2=document.createElement("td");
        var pl1c1=document.createElement("p");
        l1c1.setAttribute("class","c11");
        l1c2.setAttribute("class","c21");
        pl1c1.innerHTML="Nom";
        var pl1c2=document.createElement("p");
        pl1c2.innerHTML=comp.nom;
        l1c1.appendChild(pl1c1);
        l1c2.appendChild(pl1c2);
        ligne1.appendChild(l1c1);
        ligne1.appendChild(l1c2);
        lignes.push(ligne1);
        //ligne de la marque
        var ligne2=document.createElement("tr"); 
        var l2c1=document.createElement("td");
        var l2c2=document.createElement("td");
        var pl2c1=document.createElement("p");
        l2c1.setAttribute("class","c12");
        l2c2.setAttribute("class","c22");
        pl2c1.innerHTML="Marque";
        var pl2c2=document.createElement("p");
        pl2c2.innerHTML=comp.marque;
        l2c1.appendChild(pl2c1);
        l2c2.appendChild(pl2c2);
        ligne2.appendChild(l2c1);
        ligne2.appendChild(l2c2);
        lignes.push(ligne2);
        //
        if(comp.type=="cpu"){
            //ligne du socket
            var ligne3=document.createElement("tr"); 
            var l3c1=document.createElement("td");
            var l3c2=document.createElement("td");
            var pl3c1=document.createElement("p");
            l3c1.setAttribute("class","c11");
            l3c2.setAttribute("class","c21");
            pl3c1.innerHTML="Socket";
            var pl3c2=document.createElement("p");
            pl3c2.innerHTML=comp.socket;      
            l3c1.appendChild(pl3c1);
            l3c2.appendChild(pl3c2);
            ligne3.appendChild(l3c1);
            ligne3.appendChild(l3c2);
            lignes.push(ligne3);
            //ligne de la micro architecture
            var ligne4=document.createElement("tr"); 
            var l4c1=document.createElement("td");
            var l4c2=document.createElement("td");
            var pl4c1=document.createElement("p");
            l4c1.setAttribute("class","c12");
            l4c2.setAttribute("class","c22");
            pl4c1.innerHTML="Micro-Architecture";
            var pl4c2=document.createElement("p");
            pl4c2.innerHTML=comp.micro_architecture;
            l4c1.appendChild(pl4c1);
            l4c2.appendChild(pl4c2);
            ligne4.appendChild(l4c1);
            ligne4.appendChild(l4c2); 
            lignes.push(ligne4);
            //ligne du nombre de coeurs
            var ligne5=document.createElement("tr"); 
            var l5c1=document.createElement("td");
            var l5c2=document.createElement("td");
            var pl5c1=document.createElement("p");
            l5c1.setAttribute("class","c11");
            l5c2.setAttribute("class","c21");
            pl5c1.innerHTML="Nombre de coeurs";
            var pl5c2=document.createElement("p");
            pl5c2.innerHTML=comp.nbcoeurs;      
            l5c1.appendChild(pl5c1);
            l5c2.appendChild(pl5c2);
            ligne5.appendChild(l5c1);
            ligne5.appendChild(l5c2);
            lignes.push(ligne5);
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

