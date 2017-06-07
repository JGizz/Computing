//CLASS

class Bus {
    contructor (name, stops, colour, monFriTimes, friTimes) {
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;
    }

    getStops() {
        console.log("This function will get all stops" + this.name)
        console.log(this.stops)
    }
}

var milson = new Bus ("Milson", milsonStops, '#f69238', milsonTimesMonFri, milsonTimesFri)

var roslyn = new Bus ("Milson", roslynStops, '#f69238', roslynTimesMonFri, roslynTimesFri)

var awapuni = new Bus ("Milson", awapuniStops, '#f69238', awapuniTimesMonFri, awapuniTimesFri)

var rugby = new Bus ("Milson", rugbyStops, '#f69238', rugbyTimesMonFri, rugbyTimesFri)

var rhodes = new Bus ("Milson", rhodesStops, '#f69238', rhodesTimesMonFri, rhodesTimesFri)

var takaro = new Bus ("Milson", takaroStops, '#f69238', takaroTimesMonFri, takaroTimesFri)

var highbury = new Bus ("Milson", highburyStops, '#f69238', highburyTimesMonFri, highburyTimesFri)

var brightwater = new Bus ("Milson", brightwaterStops, '#f69238', brightwaterTimesMonFri, brightwaterTimesFri)

var fernlea = new Bus ("Milson", fernleaStops, '#f69238', fernleaTimesMonFri, fernleaTimesFri)

var heights = new Bus ("Milson", heightsStops, '#f69238', heightsTimesMonFri, heightsTimesFri)



milson.getStops();
//OBJECTS



//JQUERY STUFF
$(document).ready(function(){



});
