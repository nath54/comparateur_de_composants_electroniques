//                                                                                     en nm        en Kb    en Mb     en Mb                                en Ghz    e Ghz       en W     en °C    j/m/a               en € 
var cpu= {nom:"?",type:"cpu",image:"?",marque:"?",socket:"?",micro_architecture:"?",fin_gravure:0,cacheL1:0,cacheL2:0,cacheL3:0,nbcoeurs:0,nbthreads:0,base_clock:0,boost_clock:0,TDP:0,temp_max:0,date_lancement:"?",prix:0}

var cpu1={nom:"AMD Ryzen™ 5 3600",type:"cpu",image:"imgs/r53600.jpg",marque:"AMD",socket:"AM4",micro_architecture:"Zen2",fin_gravure:7,cacheL1:384,cacheL2:3,cacheL3:32,nbcoeurs:6,nbthreads:12,base_clock:3.6,boost_clock:4.2,TDP:65,temp_max:95,date_lancement:"07/07/2019",prix:218.41}
var cpu2={nom:"AMD Ryzen™ 3 1200",type:"cpu",image:"imgs/r31200.jpg",marque:"AMD",socket:"AM4",micro_architecture:"ZenAVX2",fin_gravure:14,cacheL1:384,cacheL2:2,cacheL3:8,nbcoeurs:4,nbthreads:4,base_clock:3.1,boost_clock:3.4,TDP:65,temp_max:95,date_lancement:"27/07/2017",prix:55.82}
var cpu3={nom:"AMD Ryzen™ 3 1300X",type:"cpu",image:"imgs/r31300x.jpg",marque:"AMD",socket:"AM4",micro_architecture:"ZenAVX2",fin_gravure:14,cacheL1:384,cacheL2:2,cacheL3:8,nbcoeurs:4,nbthreads:4,base_clock:3.5,boost_clock:3.7,TDP:65,temp_max:95,date_lancement:"27/07/2017",prix:118.41}

//                                                              Mhz       Mhz           Gbps           GB           -bit            Go/sec                                      X Y FPS 
var gpu={nom:"?",type:"gpu",image:"?",marque:"?",nb_cores:0,base_clock:0,boost_clock:0,vit_mem:0,taille_mem:0,taille_int_mem:0,bande_passante_mem:0,directX:0,vopengl:0,res_max:[0,0,0],connecteurs_aff:[],temp_max:0,consomation:0,connecteurs_alim_sup:"?"}

var gpu1={nom:"NVIDIA GEFORCE GTX 1060 3GB",type:"gpu",image:"imgs/gtx1060.png",marque:"NVIDIA",architecure:"Pascal",nb_cores:1152,base_clock:1506,boost_clock:1708,vit_mem:8,taille_mem:3,taille_int_mem:192,bande_passante_mem:192,directX:12,vopengl:4.5,res_max:[7680,4320,60],connecteurs_aff:["Display Port 1.4","HDMI 2.0b","Dual Link-DVI"],temp_max:97,consomation:120,connecteurs_alim_sup:"6-pin",date:"19/07/2016",prix:129}
var gpu2={nom:"NVIDIA GEFORCE GTX 1060 6GB",type:"gpu",image:"imgs/gtx1060.png",marque:"NVIDIA",architecure:"Pascal",nb_cores:1280,base_clock:1506,boost_clock:1708,vit_mem:8,taille_mem:6,taille_int_mem:192,bande_passante_mem:192,directX:12,vopengl:4.5,res_max:[7680,4320,60],connecteurs_aff:["Display Port 1.4","HDMI 2.0b","Dual Link-DVI"],temp_max:97,consomation:120,connecteurs_alim_sup:"6-pin",date:"19/07/2016",prix:129}


const composants=[cpu1,cpu2,cpu3,gpu1,gpu2];




