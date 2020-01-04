
function makePage(id1,id2){
    var comp1=composants[id1];
    var comp2=composants[id2];
    if(comp1 != undefined && comp2 != undefined ){
        var titre=document.createElement("h1");
        var div=document.createElement("div");
        var table=document.createElement("table");
        var lignes=[];
        var score1=0;
        var score2=0;
        //
        if(comp1.type=="cpu"){
            // 0=categorie 1=valeur comp1 2=unite comp1 3=a comparer/type comparaison 4=valeur comp2 5=unite comp2
            var liste=[
                ["Type"                 ,"Processeur"               ,""     ,false  ,"Processeur"               ,""     ],
                ["Nom"                  ,comp1.nom                  ,""     ,false  ,comp2.nom                  ,""     ],
                ["Prix"                 ,comp1.prix                 ," €"   ,"nb2"  ,comp2.prix                 ," €"   ],
                ["Marque"               ,comp1.marque               ,""     ,false  ,comp2.marque               ,""     ],
                ["Socket"               ,comp1.socket               ,""     ,false  ,comp2.socket               ,""     ],
                ["Micro-Architecture"   ,comp1.micro_architecture   ,""     ,false  ,comp2.micro_architecture   ,""     ],
                ["Nombre de coeurs"     ,comp1.nbcoeurs             ,""     ,"nb"   ,comp2.nbcoeurs             ,""     ],
                ["Nombre de threads"    ,comp1.nbthreads            ,""     ,"nb"   ,comp2.nbthreads            ,""     ],
                ["Frequence de base"    ,comp1.base_clock           ," Ghz" ,"nb"   ,comp2.base_clock           ," Ghz" ],
                ["Frequence boot"       ,comp1.boost_clock          ," Ghz" ,"nb"   ,comp2.boost_clock          ," Ghz" ],
                ["Finnesse de gravure"  ,comp1.fin_gravure          ," nm"  ,"nb2"  ,comp2.fin_gravure          ," nm"  ],
                ["Cache L1"             ,comp1.cacheL1              ," KB"  ,"nb"   ,comp2.cacheL1              ," KB"  ],
                ["Cache L2"             ,comp1.cacheL2              ," MB"  ,"nb"   ,comp2.cacheL2              ," MB"  ],
                ["Cache L3"             ,comp1.cacheL3              ," MB"  ,"nb"   ,comp2.cacheL3              ," MB"  ],
                ["TDP"                  ,comp1.TDP                  ," W"   ,"nb2"  ,comp2.TDP                  ," W"   ],
                ["Température Max"      ,comp1.temp_max             ," °C"  ,"nb2"  ,comp2.temp_max             ," °C"  ],
                ["Date de lancement"    ,comp1.date_lancement       ,""     ,"date" ,comp2.date_lancement       ,""     ]
            ];
        }
        //
        if(comp1.type=="gpu"){
            // 0=categorie 1=valeur comp1 2=unite comp1 3=a comparer/type comparaison 4=valeur comp2 5=unite comp2
            var liste=[
                ["Type"                                         ,"Carte Graphique"                                                  ,""         ,false  ,"Carte Graphique"                                                  ,""         ],
                ["Nom"                                          ,comp1.nom                                                          ,""         ,false  ,comp2.nom                                                          ,""         ],
                ["Prix"                                         ,comp1.prix                                                         ," €"       ,"nb2" ,comp2.prix                                                         ," €"       ],
                ["Marque"                                       ,comp1.marque                                                       ,""         ,false  ,comp2.marque                                                       ,""         ],
                ["Architecture"                                 ,comp1.architecture                                                 ,""         ,false  ,comp2.architecture                                                 ,""         ],
                ["Nombre de coeurs"                             ,comp1.nb_cores                                                     ,""         ,"nb"   ,comp2.nb_cores                                                     ,""         ],
                ["Fréquence de base"                            ,comp1.base_clock                                                   ," Mhz"     ,"nb"   ,comp2.base_clock                                                   ," Mhz"     ],
                ["Fréquence boost"                              ,comp1.boost_clock                                                  ," Mhz"     ,"nb"   ,comp2.boost_clock                                                  ," Mhz"     ],
                ["Vitesse mémoire"                              ,comp1.vit_mem                                                      ," Gbps"    ,"nb"   ,comp2.vit_mem                                                      ," Gbps"    ],
                ["Taille mémoire"                               ,comp1.taille_mem                                                   ," GB"      ,"nb"   ,comp2.taille_mem                                                   ," GB"      ],
                ["Taille interface mémoire"                     ,comp1.taille_int_mem                                               ,"-bit"     ,"nb"   ,comp2.taille_int_mem                                               ,"-bit"     ],
                ["Bande passante de ma mémoire"                 ,comp1.bande_passante_mem                                           ," Go/sec"  ,"nb"   ,comp2.bande_passante_mem                                           ," Go/sec"  ],
                ["Derniere version de directX supportée"        ,comp1.directX                                                      ,""         ,"nb"   ,comp2.directX                                                      ,""         ],
                ["Derniere version de opengl supportée"         ,comp1.vopengl                                                      ,""         ,"nb"   ,comp2.vopengl                                                      ,""         ],
                ["Résolution Maximale"                          ,comp1.res_max[0]+"x"+comp1.res_max[1]+" à "+comp2.res_max[2]+" Hz" ,""         ,"res"  ,comp2.res_max[0]+"x"+comp2.res_max[1]+" à "+comp1.res_max[2]+" Hz" ,""         ],
                ["Connecteurs"                                  ,comp1.connecteurs_aff.join(",")                                    ,""         ,"len"  ,comp2.connecteurs_aff.join(",")                                    ,""         ],
                ["Température maximale"                         ,comp1.temp_max                                                     ," °C"      ,"nb2"  ,comp2.temp_max                                                     ," °C"      ],
                ["Consommation"                                 ,comp1.consomation                                                  ," W"       ,"nb2"  ,comp2.consomation                                                  ," W"       ],
                ["Connecteurs d'alimentation supplémentaires "  ,comp2.connecteurs_alim_sup                                         ,""         ,false  ,comp1.connecteurs_alim_sup                                         ,""         ]
            ];
        }
        //
        tpc="1"
        for(el of liste){
            var mc=0; //0=pas comparé 1=comp1 est meilleur 2=comp2 est meilleur 3=égalité
            if(! el[3]==false ){
                if(el[3]=="nb"){    
                    score1+=el[1];
                    score2+=el[4];
                    if(el[1]>el[4]){ mc=1; }
                    else if(el[1]<el[4]){ mc=2; }
                    else{ mc=3; }
                }
                else if(el[3]=="nb2"){
                    //score1-=el[1];
                    //score2-=el[4];
                    if(el[1]<el[4]){ mc=1; }
                    else if(el[1]>el[4]){ mc=2; }
                    else{ mc=3; }
                }
                else if(el[3]=="prix"){
                    //score1-=el[1];
                    //score2-=el[4];
                    if(el[1]<el[4]){ mc=1; }
                    else if(el[1]>el[4]){ mc=2; }
                    else{ mc=3; }
                }
                else if(el[3]=="len"){
                    score1+=el[1].length;
                    score2+=el[4].length;
                    if(el[1].length>el[4].length){ mc=1; }
                    else if(el[1].length<el[4].length){ mc=2; }
                    else{ mc=3; }
                }
                else if(el[3]=="res"){
                    score1+=el[1][0]*el[1][1];
                    score2+=el[4][0]*el[4][1];
                    if( el[1][0]*el[1][1] > el[4][0]*el[4][1] ){ mc=1; }
                    else if( el[1][0]*el[1][1] < el[4][0]*el[4][1] ){ mc=2; }
                    else{ mc=3; }
                }
                else if(el[3]=="date"){
                    dt1=el[1].split("/");
                    dt2=el[4].split("/");
                    dtt1=parseInt(dt1[2]+dt1[1]+dt1[0]);
                    dtt2=parseInt(dt2[2]+dt2[1]+dt2[0]);
                    if(dtt1>dtt2){
                        mc=1;
                    }
                    else if(dtt1<dtt2){
                        mc=2;
                    }
                    else{
                        mc=3;
                    }
                }
            }
            var ligne=document.createElement("tr");
            var c1=document.createElement("td");
            var c2=document.createElement("td");
            var c3=document.createElement("td");
            var c4=document.createElement("td");
            if(tpc=="1"){
                tpc="2";
                var cg="cg1";
                var cp="cp1";
                c1.setAttribute("class","c11");
                c2.setAttribute("class","c21");
                c3.setAttribute("class","c21");
                c4.setAttribute("class","c21");
            }
            else{
                tpc="1";
                var cp="cp2";
                var cg="cg2";
                c1.setAttribute("class","c12");
                c2.setAttribute("class","c22");
                c3.setAttribute("class","c22");
                c4.setAttribute("class","c22");
            }
            var pc1=document.createElement("p");
            var pc2=document.createElement("p");
            var pc3=document.createElement("p");
            var pc4=document.createElement("p");
            if( mc==1 ){
                pc3.innerHTML=comp1.nom;
                c2.setAttribute("class",cg);
                c4.setAttribute("class",cp);
            }
            else if( mc==2 ){
                pc3.innerHTML=comp2.nom;
                c2.setAttribute("class",cp);
                c4.setAttribute("class",cg);
            }
            else if( mc==3 ){
                pc3.innerHTML="égal";
            }
            pc1.innerHTML=el[0];
            pc2.innerHTML=el[1]+el[2];
            pc4.innerHTML=el[4]+el[5];
            
            c1.appendChild(pc1);
            c2.appendChild(pc2);
            c3.appendChild(pc3);
            c4.appendChild(pc4);
            ligne.appendChild(c1);
            ligne.appendChild(c2);
            ligne.appendChild(c3);
            ligne.appendChild(c4);
            lignes.push(ligne);
            
        }
        //
        var le=document.createElement("tr");
        var c1=document.createElement("td");
        var c2=document.createElement("td");
        var c3=document.createElement("td");
        var c4=document.createElement("td");
        c1.setAttribute("class","ce");
        c2.setAttribute("class","ce");
        c3.setAttribute("class","ce");
        c4.setAttribute("class","ce");
        var t1=document.createElement("p");
        var t2=document.createElement("p");
        var t3=document.createElement("p");
        var t4=document.createElement("p");
        t1.innnerHTML="Caractéristiques";
        t2.innerHTML="Valeur de "+comp1.nom;
        t3.innerHTML="Le meilleur";
        t4.innerHTML="Valeur de "+comp2.nom;
        c1.appendChild(t1);
        c2.appendChild(t2);
        c3.appendChild(t3);
        c4.appendChild(t4);
        le.appendChild(c1);
        le.appendChild(c2);
        le.appendChild(c3);
        le.appendChild(c4);
        table.appendChild(le);
        for(l of lignes){
            table.appendChild(l);
        }
        //
        titre.innerHTML=comp1.nom+" vs "+comp2.nom;
        var img1=document.createElement("img");
        img1.setAttribute("src",comp1.image);
        var img2=document.createElement("img");
        img2.setAttribute("src",comp2.image);
        div.appendChild(titre);
        div.appendChild(img1);
        div.appendChild(img2);
        div.append(table);
        //
        //score1=score1/comp1.prix;
        //score2=score2/comp2.prix;
        ts1=document.createElement("h2");
        ts1.innerHTML="score de "+comp1.nom+" : "+score1;
        ts2=document.createElement("h2");
        ts2.innerHTML="score de "+comp2.nom+" : "+score2;
        tcomp=document.createElement("h1");
        if(score1>score2){
            tcomp.innerHTML=comp1.nom+" est meilleur que "+comp2.nom+".";
        }
        else if(score2>score1){
            tcomp.innerHTML=comp2.nom+" est meilleur que "+comp1.nom+".";
        }
        else{
            tcomp.innerHTML="Les deux composants se valent.";
        }
        div.append(ts1);
        div.append(ts2);
        div.append(tcomp);
        //
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
    var temp1 = parameters[0].split("=");
    id1 = unescape(temp1[1]);
    var temp2 = parameters[1].split("=");
    id2 = unescape(temp2[1]);
    makePage(id1,id2);
}

processUser();

