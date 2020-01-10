//                                                                                     en nm        en Kb    en Mb     en Mb                                en Ghz    e Ghz       en W     en °C    j/m/a               en € 
var cpu= {nom:"?",type:"cpu",image:"?",marque:"?",socket:"?",chipsets_comp:[],micro_architecture:"?",type_ram:"?",fin_gravure:0,cacheL1:0,cacheL2:0,cacheL3:0,nbcoeurs:0,nbthreads:0,base_clock:0,boost_clock:0,TDP:0,temp_max:0,date_lancement:"?",prix:0};

var cpu1={nom:"AMD Ryzen™ 5 3600",type:"cpu",image:"imgs/r53600.jpg",marque:"AMD",socket:"AM4",chipsets_comp:["x570"],micro_architecture:"Zen2",type_ram:"DDR4",fin_gravure:7,cacheL1:384,cacheL2:3,cacheL3:32,nbcoeurs:6,nbthreads:12,base_clock:3.6,boost_clock:4.2,TDP:65,temp_max:95,date_lancement:"07/07/2019",prix:218.41};
var cpu2={nom:"AMD Ryzen™ 3 1200",type:"cpu",image:"imgs/r31200.jpg",marque:"AMD",socket:"AM4",chipsets_comp:["b450","x470"],micro_architecture:"ZenAVX2",type_ram:"DDR4",fin_gravure:14,cacheL1:384,cacheL2:2,cacheL3:8,nbcoeurs:4,nbthreads:4,base_clock:3.1,boost_clock:3.4,TDP:65,temp_max:95,date_lancement:"27/07/2017",prix:55.82};
var cpu3={nom:"AMD Ryzen™ 3 1300X",type:"cpu",image:"imgs/r31300x.jpg",marque:"AMD",socket:"AM4",chipsets_comp:["b450","x470"],micro_architecture:"ZenAVX2",type_ram:"DDR4",fin_gravure:14,cacheL1:384,cacheL2:2,cacheL3:8,nbcoeurs:4,nbthreads:4,base_clock:3.5,boost_clock:3.7,TDP:65,temp_max:95,date_lancement:"27/07/2017",prix:118.41};
var cpu4={nom:"Processeur Intel® Core™ i5-9600K",type:"cpu",image:"imgs/i59600k.jpg",marque:"Intel",socket:"Z390",chipsets_comp:[],type_ram:"DDR4",micro_architecture:"Coffee Lake Refresh",type_ram:"DDR4",fin_gravure:14,cacheL1:384,cacheL2:1.5,cacheL3:9,nbcoeurs:6,nbthreads:6,base_clock:3.7,boost_clock:4.6,TDP:95,temp_max:100,date_lancement:"19/08/2018",prix:249.9};
var cpu5= {nom:"AMD Ryzen™ 7 3800",type:"cpu",image:"?",marque:"AMD",socket:"AM4",chipsets_comp:["x570"],micro_architecture:"Zen2",type_ram:"DDR4",fin_gravure:7,cacheL1:384,cacheL2:0,cacheL3:0,nbcoeurs:8,nbthreads:16,base_clock:0,boost_clock:0,TDP:0,temp_max:0,date_lancement:"?",prix:0};
var cpu= {nom:"AMD Ryzen™ 9 3900",type:"cpu",image:"?",marque:"AMD",socket:"AM4",chipsets_comp:["x570"],micro_architecture:"Zen2",type_ram:"DDR4",fin_gravure:7,cacheL1:384,cacheL2:0,cacheL3:0,nbcoeurs:16,nbthreads:32,base_clock:0,boost_clock:0,TDP:0,temp_max:0,date_lancement:"?",prix:0};


//                                                              Mhz       Mhz           Gbps           GB           -bit            Go/sec                                      X Y FPS 
var gpu={nom:"?",type:"gpu",image:"?",marque:"?",architecture:"?",nb_cores:0,base_clock:0,boost_clock:0,vit_mem:0,taille_mem:0,taille_int_mem:0,bande_passante_mem:0,directX:0,vopengl:0,res_max:[0,0,0],connecteurs_aff:[],temp_max:0,consomation:0,connecteurs_alim_sup:"?",date:"?",prix:0};

var gpu1={nom:"NVIDIA GEFORCE GTX 1060 3GB",type:"gpu",image:"imgs/gtx1060.png",marque:"NVIDIA",architecture:"Pascal",nb_cores:1152,base_clock:1506,boost_clock:1708,taille_mem:3,taille_int_mem:192,bande_passante_mem:192,directX:12,vopengl:4.5,res_max:[7680,4320,60],connecteurs_aff:["Display Port 1.4","HDMI 2.0b","Dual Link-DVI"],temp_max:97,consomation:120,connecteurs_alim_sup:"6-pin",date:"19/07/2016",prix:129};
var gpu2={nom:"NVIDIA GEFORCE GTX 1060 6GB",type:"gpu",image:"imgs/gtx1060.png",marque:"NVIDIA",architecture:"Pascal",nb_cores:1280,base_clock:1506,boost_clock:1708,taille_mem:6,taille_int_mem:192,bande_passante_mem:192,directX:12,vopengl:4.5,res_max:[7680,4320,60],connecteurs_aff:["Display Port 1.4","HDMI 2.0b","Dual Link-DVI"],temp_max:97,consomation:120,connecteurs_alim_sup:"6-pin",date:"19/07/2016",prix:129};
var gpu3={nom:"NVIDIA Titan RTX",type:"gpu",image:"imgs/titanrtx.webp",marque:"NVIDIA",architecture:"Turing",nb_cores:4352,base_clock:1350,boost_clock:1770,taille_mem:24,taille_int_mem:384,bande_passante_mem:672,directX:12,vopengl:4.6,res_max:null,connecteurs_aff:["DisplayPort","DisplayPort","DisplayPort","DisplayPort USB Type C","HDMI"],temp_max:89,consomation:280,connecteurs_alim_sup:"2x8-pin",date:"?",prix:2699};
var gpu4={nom:"NVIDIA Geforce GTX titan Xp",type:"gpu",image:"?",marque:"NVIDIA",architecture:"Pascal",nb_cores:0,base_clock:0,boost_clock:0,vit_mem:0,taille_mem:12,taille_int_mem:0,bande_passante_mem:0,directX:12,vopengl:4.5,res_max:[0,0,0],connecteurs_aff:[],temp_max:0,consomation:0,connecteurs_alim_sup:"8-pin + 6-pin",date:"?",prix:0};

//
var mb={nom:"",type:"mb",image:"",marque:"",socket:"",chipset:"",format:"",nbcpu:0,nbmaxram:0,fmem:"",vitmaxmem:0,capmaxmemslot:0,capmaxmemtot:0,connectiques:[],prix:0};

//
var ram={nom:"",type:"ram",image:"",marque:"",typeram:"",freqmax:0,cl:0,nbbar:0,taillebar:0,tailletot:0,prix:0};

//
var fan={nom:"",type:"fan",image:"",marque:"",taille:0,minrpm:0,maxrpm:0,nbpin:0,nivsonmax:0,prix:0};

//
var aircool={nom:"",type:"ventirad",image:"",marque:"",dim:[],nbvent:0,taille_vent:0,minrpm:0,maxrpm:0,prix:0};

//
var watercool={nom:"",type:"water-cooling",image:"",marque:"",nbvent:0,prix:0};

//
var alim={nom:"",type:"alim",image:"",marque:"",watts:0,prix:0};

//
var boitier={nom:"",type:"boitier",image:"",marque:"",tmbmax:"",nbmax_v:0,v_int:0,dimensions:[0,0,0],prix:0};


//
var stocks={nom:"",type:"stockage",image:"",marque:"",type_stock:"",branchement:"",capacite:0,vit_read:0,vit_write:0,isnvme:0};

//
const composants=[cpu1,cpu2,cpu3,gpu1,gpu2,cpu4,gpu3];


const list_ram=["DDR1","DDR2","DDR3","DDR4"];
const list_garchin=["Maxwell","Pascal","Turing"];
const list_garchia=[];
const list_certs=["80+","80+ bronze","80+ silver","80+ gold","80+ platinium","80+ titanium"];
const list_tmb=["Mini-ITX","Micro-ATX","ATX"];

