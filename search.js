
var comparateur=new Array();

function nettoie_results(){
    var boite = document.getElementById("divresults");
    enfants=boite.childNodes;
    for(e of enfants){
        // La liste n'est pas une copie, elle sera donc réindexée à chaque appel
        boite.removeChild(e);
    }
    while(boite.firstChild){
        boite.removeChild(boite.firstChild);
    }
}

function add_result_page( results ){
    nettoie_results();
    if(results[0]!=null){
        for(r of results ){
            var a=document.createElement("a");
            var d=document.createElement("div");
            d.setAttribute("class","result");
            //d.setAttribute("onClick","Javascript:window.open('comp.html?composant="+r+"');");
            var comp=composants[r];
            var d1=document.createElement("div");
            d1.setAttribute("class","div_img");
            var d2=document.createElement("div");
            d2.setAttribute("class","div_texte");
            var d3=document.createElement("div");
            d3.setAttribute("class","div_button");
            var titre=document.createElement("h2");
            titre.innerHTML=comp.nom;
            titre.setAttribute("class","txt1");
            var aa=document.createElement("a");
            aa.setAttribute("href","comp.html?id="+r)
            aa.appendChild(titre);
            var texte1=document.createElement("p");
            texte1.innerHTML=comp.type;
            var pp=document.createElement("p");
            pp.setAttribute("class","flotte");
            var img=document.createElement("img");
            img.setAttribute("src",comp.image);
            var bt=document.createElement("button");
            bt.setAttribute("onClick","add_comparateur("+r+");");
            bt.setAttribute("class","but_compa");
            bt.innerHTML="+";
            pp.appendChild(img);
            d1.appendChild(pp);
            d2.appendChild(aa);
            d2.appendChild(texte1);
            d3.appendChild(bt);
            d.appendChild(d1);
            d.appendChild(d2);
            d.appendChild(d3);
            d.className="result";
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

function aff_comparateur(){
    i1=document.getElementById("eac1");
    t1=document.getElementById("teac1");
    i2=document.getElementById("eac2");
    t2=document.getElementById("teac2");
    i1.setAttribute("src","");
    i2.setAttribute("src","");
    t1.innerHTML="Element a comparer n°1";
    t2.innerHTML="Element a comparer n°2";
    
    if(comparateur.length>=1){
        i1.setAttribute("src",composants[comparateur[0]].image);
        t1.innerHTML=composants[comparateur[0]].nom;
    }
    if(comparateur.length==2){
        i2.setAttribute("src",composants[comparateur[1]].image);
        t2.innerHTML=composants[comparateur[1]].nom;
    }
}

function add_comparateur(id){
    if(comparateur.length<2){
        comparateur.push(id);
    }
    else{
        alert("On ne peut pas comparer plus de 2 éléments à la fois")
    }
    aff_comparateur()
}

function compare(){
    if(comparateur.length==2){
        if(composants[comparateur[0]].type==composants[comparateur[1]].type ){
            Javascript:window.open('comparateur.html?id1='+comparateur[0]+'&id2='+comparateur[1]);
        }
        else{
            alert("Il faut que les deux composants soient tous les deux dans la même catégorie pour pouvoir les comparer !");
        }
    }
    else{
        alert("Il faut au moin deux composants de même catégorie pour comparer");
    }
}

function remove_comparison(nb){
    if(nb==1){
        if(comparateur.length>=1){
            comparateur.splice(0, 1);
        }
    }
    else if(nb==2){
        if(comparateur.length==2){
            comparateur.splice(1, 1);
        }
    }
    aff_comparateur()
}

nettoie_results();
searche();

