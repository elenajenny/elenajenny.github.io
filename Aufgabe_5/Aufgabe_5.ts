var Header : string = "In Zusammenarbeit mit Anna Wagner und Sophie Campbell"
var Überschrift : string = "Carbon Dioxide Emissions";

var Leerzeichen : string = " "
var Überschrift2 : string = "EUROPA"
var Europa2018 : number = 4209.3;
var Europa2008 : number = 4965.7;

var südamerika : string = "SÜDAMERIKA"
var SouthAmerica2008 : number = 1132.6

var africa : string = "AFRIKA"
var Africa2008 : number = 1028

var nordamerika : string = "NORDAMERIKA"
var NorthAmerica2008 : number = 6600.4 

var asien : string = "ASIEN"
var Asia2008 : number = 12954.7

var australien : string = "AUSTRALIEN"
var Australia2008 : number = 1993

var Africa2018 : number = 1235.5;
var SouthAmerica2018 : number = 1261.5;
var Europe2018 : number = 4209.3;
var NorthAmerica2018 : number = 6035.6;
var Asia2018 : number = 16274.1; 
var Australia2018 : number = 2100.5;
var EmmiGesamt : number = (Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018);
console.log(Überschrift);
console.log(Leerzeichen);
console.log(Überschrift2);

console.log("Die Emission von Europa im Jahr 2018 beträgt: " + Europa2018 + " KG CO2");
console.log("Relativ zur Gesamtemission verursacht Europa damit " + (Europa2018 / EmmiGesamt) *100 + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + ((Europa2018 - Europa2008) / Europa2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (Europa2018 - Europa2008) + "KG CO2" );

console.log(Leerzeichen); 
console.log(südamerika);
console.log("Die Emission von Südamerika im Jahr 2018 beträgt: " + SouthAmerica2018 + "KG CO2");
console.log("Relativ zur Gesamtemission verursacht Südamerika damit " + (SouthAmerica2018 / EmmiGesamt) * 100 + "%" );
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (SouthAmerica2018 - SouthAmerica2008) / SouthAmerica2008 * 100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (SouthAmerica2018 - SouthAmerica2008) + "KG CO2");

console.log(Leerzeichen);
console.log(africa);
console.log("Die Emmission von Afrika im Jahr 2018 beträgt: " + Africa2018 + "KG CO2");
console.log("Relativ zur Gesamtemission verursacht Afrika damit " + (Africa2018 / EmmiGesamt) * 100 + "%");
console.log("Für Afrika hat sich im Jahr 2018 im Vergleich zu 2008 die Emission um " + (Africa2018 - Africa2008) / Africa2008 * 100 + "% verändert" );
console.log("2018 im Vergleich zu 2008 sind das " + (Africa2018 - Africa2008) + "KG CO2");

console.log(Leerzeichen);
console.log(nordamerika);
console.log("Die Emission von Nordamerika im Jahr 2018 beträgt: " + NorthAmerica2018 + "KG CO2");
console.log("Relativ zur Gesamtemission verursacht Nordamerika damit " + (NorthAmerica2018 / EmmiGesamt) * 100 + "%" );
console.log("Für Nordamerika hat sich im Jahr 2018 im Vergleich zu 2008 die Emission um " + (NorthAmerica2018 - NorthAmerica2008) / NorthAmerica2008 * 100 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + (NorthAmerica2018 - NorthAmerica2008) + "KG CO2");

console.log(Leerzeichen);
console.log(asien);
console.log("Die Emission von Asien im Jahr 2018 beträgt " + Asia2018 + "KG CO");
console.log("Relativ zur Gesamtemission verursacht Asien damit " + (Asia2018 / EmmiGesamt) * 100 + "%" );
console.log("Für Asien hat sich im Jahr 2018 im Vergleich zu 2008 die Emission um " + (Asia2018 - Asia2008) / Asia2008 * 100 + "% verändert" );
console.log("2018 im Vergleich zu 2008 sind das " + (Asia2018 - Asia2008) + "KG CO2" );

console.log(Leerzeichen);
console.log(australien);
console.log("Die Emission von Australien im Jahr 2018 beträgt " + Australia2018 + "KG CO2");
console.log("Relativ zur Gesamtemission verursacht Australien damit " + (Australia2018 / EmmiGesamt) * 100 + "%" );
console.log("Für Australien hat sich im Jahr 2018 im Vergleich zu 2008 die Emission um " + (Australia2018 - Australia2008) / Australia2008 * 100 + "% veränder" );
console.log("2018 im Vergleich zu 2008 sind das " + (Australia2018 - Australia2008) + "KG CO2" );




















 








 










