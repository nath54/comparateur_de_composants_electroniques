


function nettoie_results(){
    var boite = document.getElementById("divresults");
    while( boite.firstChild) {
        // La liste n'est pas une copie, elle sera donc réindexée à chaque appel
        boite.removeChild( boite.firstChild);
    }
}

function add_result_page( results ){
    nettoie_results();
    if(results[0]!=null){
        for(r of results ){
            var a=document.createElement("a");
            var d=document.createElement("div");
            d.setAttribute("class","result");
            d.setAttribute("onClick","Javascript:window.open('comp.html?composant="+r+"');");
            var comp=composants[r];
            var d1=document.createElement("div");
            d1.setAttribute("class","div_img");
            var d2=document.createElement("div");
            d2.setAttribute("class","div_texte");
            var titre=document.createElement("h2");
            titre.innerHTML=comp.nom;
            titre.setAttribute("class","txt1");
            var texte1=document.createElement("p");
            texte1.innerHTML=comp.type;
            var pp=document.createElement("p");
            pp.setAttribute("class","flotte");
            var img=document.createElement("img");
            img.setAttribute("src",comp.image);
            pp.appendChild(img);
            d1.appendChild(pp);
            d2.appendChild(titre);
            d2.appendChild(texte1);
            d.appendChild(d1);
            d.appendChild(d2);
            document.getElementById("divresults").appendChild(d);
        }
    }
    else{
        var p=document.createElement("p");
        p.innerHTML="Result Not Found";
        document.getElementById("divresults").appendChild(p);
    }
}




function searche(){
    var tas=document.getElementById("isearch").value;
    var liste_comp=[];
    for( c of composants ){
        if(c.nom.toLowerCase().includes(tas.toLowerCase())){
            liste_comp.push(composants.indexOf(c));
        }
    }
    add_result_page( liste_comp );
}

//nettoie_results();

