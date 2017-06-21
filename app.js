// OBJECT TEMPLATE

class Bus {
    contructor (name, stops, colour, monFriTimes, friTimes) {
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;
        this.friTimes = friTimes;
    }
}

// OBJECTS

var awapuni = new Bus ("Awapuni", awapuniStops, '#f79239', awapuniTimesMonFri, awapuniTimesFri)
var rugby = new Bus ("Rugby", rugbyStops, '#009e58', rugbyTimesMonFri, rugbyTimesFri)
var highbury = new Bus ("Highbury", highburyStops, '#00aeef', highburyTimesMonFri, highburyTimesFri)
var takaro = new Bus ("Takaro", takaroStops, '#ed1b2f', takaroTimesMonFri, takaroTimesFri)
var cloverlea = new Bus ("Cloverlea", cloverleaStops, '#883d97', cloverleaTimesMonFri, cloverleaTimesFri)
var milson = new Bus ("Milson", milsonStops, '#ef59a1', milsonTimesMonFri, milsonTimesFri)
var rhodes = new Bus ("Rhodes", rhodesStops, '#0053a0', rhodesTimesMonFri, rhodesTimesFri)
var roslyn = new Bus ("Roslyn", roslynStops, '#c68812', roslynTimesMonFri, roslynTimesFri)
var rangiora = new Bus ("Rangiora", rangioraStops, '#005140', rangioraTimesMonFri, rangioraTimesFri)
var brightwater = new Bus ("Brightwater", brightwaterStops, '#fcb655', brightwaterTimesMonFri, brightwaterTimesFri)
var fernlea = new Bus ("Fernlea", fernleaStops, '#008c99', fernleaTimesMonFri, fernleaTimesFri)
var heights = new Bus ("Heights", heightsStops, '#f1573e', heightsTimesMonFri, heightsTimesFri)


//JQUERY STUFF
$(document).ready(function(){

});

//awapuniBus.onclick = function() {
  //  console.log("WORKING")

//var awapuniStops = awapuni.getStops();

//console.log(awapuniStops);  //logs 20.97


//    getStops() {
//        console.log("This function will get all stops" + this.name)
//        console.log(this.stops)
//    }
