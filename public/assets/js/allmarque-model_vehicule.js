var Allmarque = [
  "Abarth","Acura","Alfa Romeo","Aston Martin","Audi","Auverland" ,"Bentley","BMW","Bugatti","Buick","Cadillac","Chevrolet",
  "Chrysler","Citroën","Dacia","Daewoo","Daihatsu","Dodge","DS","Ferrari","Fiat","Ford","Geely","GMC","Honda",
  "Hummer","Hyundai","Infiniti","Isuzu","Jaguar","Jeep","Kia","Lada","Lamborghini","Lancia","Land Rover","Lexus","Lincoln",
  "Lotus","Maserati","Mazda","McLaren","Mercedes","MG","MINI","Mitsubishi","Nissan","Opel","Pagani","Peugeot","Porsche","RAM",
  "Renault","Rolls-Royce","Saab","Seat","Škoda","Smart","SsangYong","Subaru","Suzuki","Tesla","Toyota","Vauxhall","Volkswagen","Volvo"
];

// Modèles chaque marque
var Allmodel_auverland = [
    "A3","A4","A5","A6","A7","A8","A9"
];

var Allmodel_abarth = [
  "500","595","124 Spider","695","F595","Grande Punto"
];

var Allmodel_acura = [
  "Integra","RSX","EL","Vigor","Legend","CL","SLX","NSX","CSX","RL","TSX","TL","ZDX","ILX","TLX","RLX","CDX","RDX","MDX","NSX"
];

var Allmodel_alfaRomeo = [
  "145","146","147","155","156","159","164","166","1750","2600","33","4C","6","75","8C","90","2600","33","4C","6","75","8C","90",
  "ALFASUD","ALFETTA","ARNA","BRERA","Giulia","GIULIETTA","GT","GTV","MITO","MONTREAL","SPIDER","STELVIO","TONALE","ZAGATO"
];

var Allmodel_audi = [
  "A3","Q3","A1","A4","Q5","Q2","A5","TT","A6","S3","E-TRON","Q7","A7","RS3","R8","RS6","SQ5","Q4","S5","S6","RS5","Q8","S4","A8",
  "RS Q3","RS4","SQ8","ALLROAD","SQ7","V8","TTS","A2","S8","80","COUPE","A4","90","100","200"
];

var Allmodel_astonMartin = [
  "Vintage 1.5 litre", "DB1 Vintage 2.0 litre","DB2","DB3","DB2/4","DB Mark III","DB4","DB5","DB6","DBS","DBS V8","V8","AM Vantage",
  "Langoda Taraf","Bulldog","Virage","DB7","Vanquish","DB9","V8 Vantage","Rapide","Rapide E","One-77","Cygnet","Vanquish II","Vanquish Zagato",
  "DB10","Vulcan","DB11","Vantage","DBS Superleggera","DBS GT Zagato","Valkyrie","DBX","Valhalla","AMB 001","V12 Speedster","Victor","DBR22"
];

var Allmodel_bentley = [
  "Continental GT","Flying Spur","Mulsanne","Bentayga","Arnage","Brooklands","Azure","Turbo R","Corniche","Mark","T","Turbo Rt",
  "S1","S2","S3","T1","T2","Continental R","Continental S","Continental T","Continental Azure","Continental GTZ","Eight",
  "Continental GTC","Continental Flying Spur Speed","Continental Supersports","Hunaudières Concept","Type R","Silver Cloud"
];

var Allmodel_bmw = [
  "3/15", "3/20", "303", "309", "315", "315/1", "319", "319/1", "320", "321","325","326","327","328","3,3","316","3,0","330","324","630",
  "328","329","332","335","337","501","503","507","531","600","700","1500","1502","1600","1600","1800","735","635","733","732","523",
  "1802","2000","2000 GL","2002","2004","L7","M2","M3","M4","M5","M6","M8","M535","M635","XM","I3","323","1602","1502","1802","725","628",
  "SERIE 3(SUITE)","SERIE 5","SERIE 7","SERIE 3","SERIE 8","SERIE 8","SERIE 1 III","SERIE 1","SERIE 2","520","524","523","528","525",
  "SERIE 3 VII","SERIE 6","SERIE 1 II","SERIE 3 VI","SERIE 4","SERIE 4 II","SERIE 2 II","SERIE 7 VII",
  "X1","X2","X3","X4","X4 I","X4 II","X5","X6","X7","X6 III", "X5 IV","IX","X1 III","Z1","Z3","Z4","Z8"
];

var Allmodel_citroen = [
  "Ami", "AX", "Berlingo", "BX", "C1", "C2", "C3", "C3 Aircross", "C3 Pluriel", "C4", "C4 Cactus",
  "C4 Picasso", "C5", "C5 Aircross", "C6", "C8", "CX", "DS", "DS3", "DS4", "DS5", "E-Mehari", "Evasion",
  "Grand C4 Picasso", "GS", "GSA", "ID", "Jumper", "Jumpy", "Mehari", "Nemo", "Saxo", "SM", "SpaceTourer",
  "Traction Avant", "Visa", "Xantia", "XM", "Xsara", "ZX"
];


//lister dans select option
var selectMarque = $('#marque');
var selectModelAbarth = $('#model-abarth');
var selectModelAcura = $('#model-acura');
var selectModelAlfaRomeo = $('#model-alfaRomeo');
var selectModelAuverland = $('#model-auverland');
var selectModelAudi = $('#model-audi');
var selectModelAstonMartin = $('#model-astonMartin');
var selectModelBentley = $('#model-bentley');
var selectModelBmw = $('#model-bmw');
var selectModelBugatti = $('#model-bugatti');
var selectModelBuick = $('#model-buick');
var selectModelCitroen = $('#model-citroen');

for (var y = 0; y < Allmarque.length; y++) {
  var marqueVehicule = Allmarque[y];
  var optionMarque = $("<option>").val(marqueVehicule).text(marqueVehicule);
    selectMarque.append(optionMarque);
}
for (var y = 0; y < Allmodel_abarth.length; y++) {
  var modelAbarth = Allmodel_abarth[y];
  var optionModelAbarth = $("<option>").val(modelAbarth).text(modelAbarth);
    selectModelAbarth.append(optionModelAbarth);
}
for (var y = 0; y < Allmodel_acura.length; y++) {
  var modelAcura = Allmodel_acura[y];
  var optionModelAcura = $("<option>").val(modelAcura).text(modelAcura);
    selectModelAcura.append(optionModelAcura);
}
for (var y = 0; y < Allmodel_alfaRomeo.length; y++) {
  var modelAlfaRomeo = Allmodel_alfaRomeo[y];
  var optionModelAlfaRomeo = $("<option>").val(modelAlfaRomeo).text(modelAlfaRomeo);
    selectModelAlfaRomeo.append(optionModelAlfaRomeo);
}
for (var y = 0; y < Allmodel_auverland.length; y++) {
  var modelAuverland = Allmodel_auverland[y];
  var optionModelAuverland = $("<option>").val(modelAuverland).text(modelAuverland);
    selectModelAuverland.append(optionModelAuverland);
}
for (var y = 0; y < Allmodel_audi.length; y++) {
  var modelAudi = Allmodel_audi[y];
  var optionModelAudi = $("<option>").val(modelAudi).text(modelAudi);
    selectModelAudi.append(optionModelAudi);
}
for (var y = 0; y < Allmodel_astonMartin.length; y++) {
  var modelAstonMartin = Allmodel_astonMartin[y];
  var optionModelAstonMartin = $("<option>").val(modelAstonMartin).text(modelAstonMartin);
  selectModelAstonMartin.append(optionModelAstonMartin);
}
for (var y = 0; y < Allmodel_bentley.length; y++) {
  var modelBentley = Allmodel_bentley[y];
  var optionModelBentley = $("<option>").val(modelBentley).text(modelBentley);
    selectModelBentley.append(optionModelBentley);
}
for (var y = 0; y < Allmodel_bmw.length; y++) {
  var modelBmw = Allmodel_bmw[y];
  var optionModelBmw = $("<option>").val(modelBmw).text(modelBmw);
    selectModelBmw.append(optionModelBmw);
}
for (var y = 0; y < Allmodel_bugatti.length; y++) {
  var modelBugatti = Allmodel_bugatti[y];
  var optionModelBugatti = $("<option>").val(modelBugatti).text(modelBugatti);
    selectModelBugatti.append(optionModelBugatti);
}
for (var y = 0; y < Allmodel_buick.length; y++) {
  var modelBuick = Allmodel_buick[y];
  var optionModelBuick = $("<option>").val(modelBuick).text(modelBuick);
    selectModelBuick.append(optionModelBuick);
}
for (var y = 0; y < Allmodel_citroen.length; y++) {
  var modelCitroen = Allmodel_citroen[y];
  var optionModelCitroen = $("<option>").val(modelCitroen).text(modelCitroen);
    selectModelCitroen.append(optionModelCitroen);
}