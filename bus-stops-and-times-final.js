var buses = ["awapuni", "rugby", "highbury", "takaro", "cloverlea", "milson", "rhodes", "roslyn", "rangiora", "brightwater", "fernlea", "heights"]

//=============================================================================AWAPUNI ROUTE
var awapuniStops = [
                "Depart MST",
                "Park Rd",
                "College Street",
                "Pitman Rd",
                "Maxwells Line",
                "College Street",
                "Rugby Street",
                "Ferguson Street",
                "Arrive MST"];
var awapuniTimesMonFri = [
                      [7.00,7.08,7.11,7.13,7.15,7.19,7.22,7.25,7.35],
                      [7.40,7.48,7.51,7.53,7.55,7.59,8.02,8.05,8.15],
                      [8.20,8.28,8.31,8.33,8.35,8.39,8.42,8.45,8.55],
                      [9.00,9.08,9.11,9.13,9.15,9.19,9.22,9.25,9.35],
                      [10.20,10.28,10.31,10.33,10.35,10.39,10.42,10.45,10.55],
                      [11.40,11.48,11.51,11.53,11.55,11.59,12.02,12.05,12.15],
                      [13.00,13.08,13.11,13.13,13.15,13.19,13.22,13.25,13.35],
                      [14.20,14.28,14.31,14.33,14.35,14.39,14.42,14.45,14.55],
                      [15.20,15.28,15.31,15.33,15.35,15.39,15.42,15.45,15.55],
                      [16.00,16.08,16.11,16.13,16.15,16.19,16.22,16.25,16.35],
                      [16.40,16.48,16.51,16.53,16.55,16.59,17.02,17.05,17.15],
                      [17.20,17.28,17.31,17.33,17.35,17.39,17.42,17.45,17.55],
  		              [18.00,18.08,18.11,18.13,18.15,18.19,18.22,18.25,18.35]
                     ];
var awapuniTimesFri = [8.20]; //HOME ONLY?
var awapuniTimesSat = [
                    [9.00,9.08,9.11,9.13,9.15,9.19,9.22,9.25,9.35],
                   [11.40,11.48,11.51,11.53,11.55,11.59,12.02,12.05,12.15],
                   [14.20,14.28,14.31,14.33,14.35,14.39,14.42,14.45,14.55],
                   [15.00,15.08,15.11,15.13,15.15,15.19,15.22,15.25,15.35],
                   [16.20]
                  ];
var awapuniTimesSun= [
    [8.20,8.28,8.31,8.33,8.35,8.39,8.42,8.45,8.55],
                  [12.20,12.28,12.31,12.33,12.35,12.39,12.42,12.45,12.55],
                  [16.20] //HOME ONLY
                  ];

//=============================================================================RUGBY ROUTE
var rugbyStops = ["Depart MST",
               "West St",
               "Rugby St",
               "College st",
               "Maxwells Line",
               "Pitama Rd",
               "Botanical Rd",
               "Park Rd",
               "Arrive MST"]
var rugbyTimesMonFri = [
                     [6.40,6.46,6.49,6.52,6.55,6.58,7.02,7.05,7.15],
                     [7.20,7.26,7.29,7.32,7.35,7.38,7.42,7.45,7.55],
                     [8.00, 8.06, 8.09, 8.12, 8.15, 8.18, 8.22, 8.25, 8.35],
                     [8.40,8.46,8.49,8.52,8.55,8.58,9.02,9.05,9.15],
                     [9.40,9.46,9.49,9.52,9.55,10.58,10.02,10.05,10.15],
                     [11.00,11.06,11.09,11.12,11.15,11.18,11.22,11.25,11.35],
                     [12.20,12.26,12.29,12.32,12.35,12.38,12.42,12.45,12.55],
                     [13.40,13.46,13.49,13.52,13.55,13.58,13.02,13.05,13.15],
                     [15.00,15.06,15.09,15.12,15.15,15.18,15.22,15.25,15.35],
                     [15.40,15.46,15.49,15.52,15.55,15.58,16.02,16.05,16.15],
                     [16.20,16.26,16.29,16.32,16.35,16.38,16.42,16.45,16.55],
                     [17.00,17.06,17.09,17.12,17.15,17.18,17.22,17.25,17.35],
                     [17.40,17.46,17.49,17.52,17.55,17.58,18.02,18.05,18.15]
                     ];
var rubgyTimesFri = [
                     [18.40,18.46,8.49,18.52,18.55,18.58,19.02,19.05,19.15],
                     [20.20]]
var rugbyTimesSat = [
                  [10.20,10.26,10.29,10.32,10.35,10.38,10.42,10.45,10.55],
                  [13.40,13.46,13.49,13.51,13.55,13.58,14.02,14.05,14.15],
                  [16.20]] //HOME ONLY
var rugbyTimesSun = [
                  [10.20,10.26,10.29,10.32,10.35,10.38,10.42,10.45,10.55],
                  [15.40,15.46,15.49,15.51,15.55,15.58,15.02,15.05,15.15],
                  [16.20]] //HOME ONLY

//=============================================================================HIGHBURY ROUTE
var highburyStops = ["Depart MST",
               "Cuba St",
               "Highbury Ave Monrad Park",
               "Amberley Ave",
               "OT Reserve Pembroke St",
               "Havelock Ave",
               "Botanical Rd",
               "Feasterton St",
               "Arrive MST"
              ];
var highburyTimesMonFri = [
                [6.40, 6.46, 6.49, 6.52, 6.55, 6.58, 7.02, 7.05, 7.15],
				[7.20, 7.26, 7.29, 7.32, 7.35, 7.38, 7.42, 7.45, 7.55],
				[8.00, 8.06, 8.09, 8.12, 8.15, 8.18, 8.22, 8.25, 8.35],
                [8.40, 8.46, 8.49, 8.52, 8.55, 8.58, 9.02, 9.05, 9.15],
  				[9.40, 9.46, 9.49, 9.52, 9.55, 9.58, 10.02, 10.05, 10.15],
  				[11.00, 11.06, 11.09, 11.12, 11.15, 11.18, 11.22, 11.25, 11.35],
  				[12.20, 12.26, 12.29, 12.32, 12.35, 12.38, 12.42, 12.45, 12.55],
				[13.40, 13.46, 13.49, 13.52, 13.55, 13.58, 14.02, 14.05, 14.15],
  				[15.00, 15.06, 15.09, 15.12, 15.15, 15.18, 15.22, 15.25, 15.35],
  				[15.40, 15.46, 15.49, 15.52, 15.55, 15.58, 16.02, 16.05, 16.15],
  				[16.20, 16.26, 16.29, 16.32, 16.35, 16.38, 16.42, 16.45, 16.55],
  				[17.00, 17.06, 17.09, 17.12, 17.15, 17.18, 17.22, 17.25, 17.35],
  				[17.40, 17.46, 17.49, 17.52, 17.55, 17.58, 18.02, 18.05, 18.15]
                ];
var highburyFridayEveningTimes = [] //TODO: Fri
//TODO: Weekends

//=============================================================================TAKARO ROUTE
var takaroStops = [
  "Depart MST",
  "Featherston St (98)",
  "Botanical Rd (10)",
  "Havelock Ave (88)",
  "Pembroke Ave (52)",
  "Amberley Ave (103)",
  "Ronberg St (37)",
  "Chelwood St (51)",
  "Arrive MST"
];
var takaroTimesMonFri = [
  [7.00, 7.07, 7.10, 7.13, 7.15, 7.19, 7.23, 7.26, 7.35],
  [7.40, 7.47, 7.50, 7.53, 7.55, 7.59, 8.03, 8.06, 8.15],
  [8.20, 8.27, 8.30, 8.33, 8.35, 8.39, 8.43, 8.46, 8.55],
  [9.00, 9.07, 9.10, 9.13, 9.15, 9.19, 9.23, 9.26, 9.35],
  [10.20, 10.27, 10.30, 10.33, 10.35, 10.39, 10.43, 10.46, 10.55],
  [11.40, 11.47, 11.50, 11.53, 11.55, 11.59, 12.03, 12.06, 12.12],
  [13.00, 13.07, 13.10, 13.13, 13.15, 13.19, 13.23, 13.26, 13.35],
  [14.20, 14.27, 14.30, 14.33, 14.35, 14.39, 14.43, 14.46, 14.55],
  [15.20, 15.27, 15.30, 15.33, 15.35, 15.39, 15.43, 15.49, 15.55],
  [15.40, 15.47, 15.50, 15.53, 15.55, 15.59, 16.03, 16.06, 16.15],
  [16.20, 16.27, 16.30, 16.33, 16.35, 16.39, 16.43, 16.46, 16.55],
  [17.00, 17.07, 17.10, 17.13, 17.15, 17.19, 17.23, 17.29, 17.35],
  [17.40, 17.47, 17.50, 17.53, 17.55, 17.59, 18.04, 18.09, 18.15]
]
var takaroTimesFri = [8.20] //HOME ONLY?
var takaroTimesSat =[
  [9.40, 9.47, 9.50, 9.53, 9.55, 9.59, 10.03, 10.06, 10.15],
  [12.20, 12.27, 12.30, 12.33, 12.35, 12.39, 12.43, 12.46, 12.55],
  [15.40, 15.47, 15.50, 15.56, 15.55, 15.59, 16.03, 16.06, 16.15],
  [4.20] //HOME ONLY
]
var takaroTimesSun = [
  [11.00, 11.07, 11.10, 11.13, 11.15, 11.19, 11.23, 11.26, 11.35],
  [4.20] //HOME ONLY
]

//=============================================================================CLOVERLEA ROUTE
var cloverleaStops = ["Depart MST",
                "Featherston Street",
                "Tremaine Ave",
                "Benmore Ave",
                "Bennett Street",
                "Aspiring Ave",
                "Fairs Road",
                "Ruahine Street",
                "Arrive MST"];
var cloverleaTimesMonFri = [
                      [6.40,6.45,6.49,6.52,6.55,7.00,7.04,7.10,7.15],
                      [7.00,7.05,7.09,7.12,7.15,7.20,7.24,7.30,7.35],
                      [7.20,7.25,7.29,7.32,7.35,7.40,7.44,7.50,7.55],
                      [7.40,7.45,7.49,7.52,7.55,8.00,8.04,8.10,8.15],
                      [8.00,8.05,8.09,8.12,8.15,8.20,8.24,8.30,8.35],
                      [8.20,8.25,8.29,8.32,8.35,8.35,8.40,8.44,8.50,8.55],
                      [8.40,8.45,8.49,8.52,8.55,9.00,9.04,9.10,9.15],
                      [9.00,9.05,9.09,9.12,9.15,9.20,9.24,9.30,9.35],
                      [10.20,10.25,10.29,10.32,10.35,10.40,10.44,10.50,10.55],
                      [11.40,11.45,11.49,11.52,11.55,12.00,12.04,12.10,12.15],
                      [13.00,13.05,13.09,13.12,13.15,13.20,13.24,13.30,13.35],
                      [14.20,14.25,14.29,14.32,14.35,14.40,14.44,14.50,14.55],
                      [15.10,15.15,15.19,15.22,15.25,15.30,15.34,15.40,15.45],
                      [15.50,15.55,15.59,16.02,16.05,16.10,16.14,16.20,16.25],
                      [16.10,16.15,16.19,16.22,16.25,16.30,16.34,16.40,16.45],
				      [16.30,16.35,16.39,16.42,16.45,16.50,16.54,17.00,17.05],
				      [16.50,16.55,16.59,17.02,17.05,17.10,17.14,17.20,17.25],
				      [17.10,17.15,17.19,17.22,17.25,17.30,17.34,17.40,17.45],
                      [17.30,17.35,17.39,17.42,17.45,17.50,17.54,18.00,18.05],
				      [17.50,17.55,17.59,18.02,18.05,18.10,18.14,18.20,18.25]];
var cloverleaTimesFriOnly = [
                        [6.40,6.45,6.49,6.52,6.55,7.00,7.04,7.10,7.15],
                        [8.20]];
var cloverleaTimesSat = [
                   [8.20,8.25,8.29,8.32,8.35,8.40,8.44,8.50,8.55],
                   [11.00,11.05,11.09,11.12,11.15,11.20,11.24,11.30,11.35],
                   [14.20,14.25,14.29,14.32,14.35,14.40,14.44,14.50,14.55],
                   [16.20]];
var cloverleaTimesSun= [
                  [8.20,8.25,8.29,8.32,8.35,8.40,8.44,8.50,8.55],
                  [14.20,14.25,14.29,14.32,14.35,14.40,14.44,14.50,14.55],
                  [16.20] //HOME ONLY
                  ];

//=============================================================================MILSON ROUTE
var milsonStops = [
  "Depart MST",
  "Ruahine St (202)",
  "Langley Ave (70)",
  "Bennett St (7)",
  "Bennett St (4)",
  "Benmore Ave (26)",
  "Tremaine Ave (375)",
  "Featherston St (101)",
  "Arrive MST",
];
var milsonTimesMonFri = [
[6.50, 6.55, 7.00, 7.03, 7.05, 7.08, 7.11, 7.14, 7.25],
  [7.10, 7.15, 7.20, 7.23, 7.25, 7.28, 7.31, 7.34, 7.45],
  [7.30, 7.35, 7.40, 7.43, 7.45, 7.48, 7.51, 7.54, 8.05],
  [7.50, 7.55, 8.00, 8.03, 8.05, 8.08, 8.11, 8.14, 8.25],
  [8.10, 8.15, 8.20, 8.23, 8.25, 8.28, 8.31, 8.34, 8.45],
  [8.30, 8.35, 8.40, 8.43, 8.45, 8.48, 8.51, 8.54, 9.05],
  [8.50, 8.55, 9.00, 9.03, 9.05, 9.08, 9.11, 9.14, 9.25],
  [9.40, 9.45, 9.50, 9.53, 9.55, 9.58, 10.01, 10.04, 10.15],
  [11.00, 11.05, 11.10, 11.13, 11.15, 11.18, 11.21, 11.24, 11.35],
  [12.20, 12.25, 12.30, 12.33, 12.35, 12.38, 12.41, 12.44, 12.55],
  [13.40, 13.45, 13.50, 13.53, 13.55, 13.58, 14.01, 14.0, 14.15],
  [15.00, 15.05, 15.10, 15.13, 15.15, 15.18, 15.21, 15.24, 15.35],
  [15.20, 15.25, 15.30, 15.33, 15.35, 15.38, 15.41, 15.44, 15.55],
  [15.40, 15.45, 15.50, 15.53, 15.55, 15.58, 16.01, 16.04, 16.15],
  [16.00, 16.05, 16.10, 16.13, 16.15, 16.18, 16.21, 16.24, 16.35],
  [16.20, 16.25, 16.30, 16.33, 16.35, 16.38, 16.41, 16.44, 16.55],
  [16.40, 16.45, 16.50, 16.53, 16.55, 16.58, 17.01, 17.04, 17.15],
  [17.00, 17.05, 17.10, 17.13, 17.15, 17.18, 17.21, 17.24, 17.25],
  [17.20, 17.25, 17.30, 17.33, 17.35, 17.38, 17.41, 17.44, 17.55],
  [17.40, 17.45, 17.50, 17.53, 17.55, 17.58, 18.01, 18.04, 18.15],
  [18.00, 18.05, 18.10, 18.13, 18.15, 18.18, 18.21, 18.24, 18.35]
];
var milsonTimesFri = [20.20]; //HOME ONLY
var milsonTimesSat = [
  [9.40, 9.45, 9.50, 9.53, 9.55, 9.58, 10.01, 10.04, 10.15],
  [12.20, 12.25, 12.30, 12.33, 12.35, 12.38, 12.41, 12.44, 12.55],
  [15.40, 15.45, 15.50, 15.53, 15.55, 15.58, 16.01, 16.04, 16.15],
  [16.20]//HOME ONLY
];
var milsonTimesSun = [
  [11.00, 11.05, 11.10, 11.13, 11.15, 11.18, 11.21, 11.24, 11.35],
  [16.20] //HOME ONLY
];

//==============================================================================RHODES ROUTE
var rhodesStops = ["Depart MST",
               "Rangitiket St",
               "Tremaine Ave",
               "Kelvin Grove",
               "Rhodes Dr",
               "Kelvin Grove",
               "Vogel St",
               "Featherson St",
               "Arrive MST"]
var rhodesTimesMonFri = [
                     [6.40,6.45,6.50,6.54,6.55,7.00,7.05,7.08,7.15],
                     [7.20,7.25,7.30,7.34,7.35,7.40,7.45,7.48,7.55],
                     [8.00, 8.05, 8.10, 8.14, 8.15, 8.20, 8.25, 8.28, 8.35],
                     [8.40,8.45,8.50,8.54,8.55,9.00,9.05,9.08,9.15],
                     [9.40,9.45,9.50,9.54,9.55,10.00,10.05,10.08,10.15],
                     [11.00,11.05,11.10,11.14,11.15,11.20,11.25,11.28,11.35],
                     [12.20,12.25,12.30,12.34,12.35,12.40,12.45,12.48,12.55],
                     [13.40,13.45,13.50,13.54,13.55,14.00,14.05,14.08,14.15],
                     [15.00,15.05,15.10,15.14,15.15,15.20,15.25,15.28,15.35],
                     [15.40,15.45,15.50,15.54,15.55,16.00,16.05,16.08,16.15],
                     [16.20,16.25,16.30,16.34,16.35,16.40,16.45,16.48,16.55],
                     [17.00,17.05,17.10,17.14,17.15,17.20,17.25,17.28,17.35],
                     [17.40,17.45,17.50,17.54,17.55,18.00,18.05,18.08,18.15]
                    ];
var rhodesTimesSat = [
                  [8.20,8.25,8.30,8.34,8.35,8.40,8.45,8.48,8.55],
                  [10.20,10.25,10.30,10.34,10.35,10.40,10.45,10.48,10.55],
                  [11.00,11.05,11.10,11.14,11.15,11.20,11.25,11.28,11.35],
                  [14.20,14.25,14.30,14.34,14.35,14.40,14.45,14.48,14.55],
                  [15.00,15.05,15.10,15.14,15.15,15.20,15.25,15.28,15.35],
                  [16.20]]
var rhodesTimesSun = [
                  [9.40,9.45,9.50,9.54,9.55,10.00,10.05,10.13,10.15],
                  [15.00,15.05,15.10,15.14,15.15,15.20,15.25,15.28,15.35],
                  [16.20]]

//=============================================================================ROSLYN ROUTE
var roslynStops = [
	"Depart MST",
  "Featherston St (321)",
  "Featherston St (507)",
  "Vogel St (62)",
  "OT Rhodes Dr (23)",
  "McLeavey Dr (26)",
  "Tremaine Ave (1026)",
  "Tremaine Ave (716)",
  "Arrive MST",
];
var roslynTimesMonFri = [
	[7.00,7.06,7.08,7.10,7.15,7.20,7.25,7.29,7.35],
  [7.40,7.46,7.48,7.50,7.55,8.00,8.05,8.09,8.15],
  [8.20,8.26,8.28,8.30,8.35,8.40,8.45,8.49,8.55],
  [9.00,9.06,9.08,9.10,9.15,9.20,9.25,9.29,9.35],
  [10.20,10.26,10.28,10.30,10.35,10.40,10.45,10.49,10.55],
  [11.40,11.46,11.48,11.50,11.55,12.00,12.05,12.09,12.15],
  [13.00,13.06,13.08,13.10,13.15,13.20,13.25,13.29,13.35],
  [14.20,14.26,14.28,14.30,14.35,14.40,14.45,14.49,14.55],
  [15.20,15.26,15.28,15.30,15.35,15.40,15.45,15.49,15.55],
  [16.00,16.06,16.08,16.10,16.15,16.20,16.25,16.29,16.35],
  [16.40,16.46,16.48,16.50,16.55,17.00,17.05,17.09,17.15],
  [17.20,17.26,17.28,17.30,17.35,17.40,17.45,17.49,17.55],
  [18.00,18.06,18.08,18.10,18.15,18.20,18.25,18.29,18.35]
]
var roslynTimesFriOnly =  [8.20, "HOME ONLY"];
var roslynTimesSaturday = [
  [9.40,9.46,9.48,9.50,9.55,10.00,10.05,10.09,10.15],
  [12.20,12.26,12.28,12.30,12.35,12.40,12.45,12.49,12.55],
  [4.20] //HOME ONLY
]
var roslynTimesSunday = [11.40,11.46,11.48,11.50,11.55,12.00,12.05,12.09,12.15];


//=================================TO DO: ======================================RANGIORA ROUTE



//=============================================================================BIRGHTWATER ROUTE
var brightwaterStops = ["Depart MST",
                   "Albert St (251)",
                   "Ruahine St (550)",
                   "Ruahine St (312)",
                   "Brightwater Tce (66)",
                   "Napier Rd (24)",
                   "Rangiora Ave (138)",
                   "Bradway Ave (338)",
                   "Arive MST"]
var brightwaterTimesMonFri = [
                          [7.00, 7.07, 7.10, 7.12, 7.15, 7.17, 7.21, 7.25, 7.35],
                          [7.40, 7.47, 7.50, 7.52, 7.55, 7.57, 8.01, 8.05, 8.15],
                          [8.20, 8.27, 8.30, 8.33, 8.35, 8.37, 8.41, 8.45, 8.55],
                          [9.00, 9.07, 9.10, 9.12, 9.15, 9.17, 9.21, 9.25, 9.35],
                          [10.20, 10.27, 10.30, 10.32, 10.35, 10.37, 10.41, 10.45, 10.55],
                          [11.40, 11.47, 11.50, 11.52, 11.55, 11.57, 12.01, 12.05, 12.15],
                          [13.00, 13.07, 13.10, 13.12, 13.15, 13.17, 13.21, 13.25, 13.35],
                          [14.20, 14.27, 14.30, 14.32, 14.35, 14.37, 14.41, 14.45, 14.55],
                          [15.20, 15.27, 15.30, 15.33, 15.35, 15.37, 15.41, 15.45, 15.55],
                          [15.40, 15.47, 15.50, 15.53, 15.55, 15.57, 16.01, 16.05, 16.15],
                          [16.20, 16.27, 16.30, 16.33, 16.35, 16.37, 16.41, 16.15, 16.55],
                          [17.00, 17.07, 17.10, 17.13, 17.15, 17.17, 17.21, 17.25, 17.35],
                          [17.40, 17.47, 17.50, 17.53, 17.55, 17.57, 18.01, 18.15, 18.15]
                        ];
var brightwaterTimesFri = [8.20] //HOME ONLY
var brightwaterTimesSat = [
                       [10.20, 10.27, 10.30, 10.35, 10.37, 10.41, 10.45, 10.55],
                       [13.40, 13.44, 13.48, 13.52, 13.55, 13.58, 14.02, 14.05, 14.15],
                       [16.20]
                      ];
var brightwaterTimesSun = [
                       [12.20, 12.24, 12.28, 12.32, 12.35, 12.38, 12.42, 12.45, 12.55],
                       [16.20]
                      ]


//=============================================================================FERNLEA ROUTE

var fernleaStops = [
                "Depart MST",
                "Main ST",
                "Roberts Line (29)",
                "Brooklyn Heights (53)",
                "Roberts Line (124)",
                "Mihaere Drive",
                "Napier Road",
                "Main St",
                "Arrive MST"
                ];
var fernleaTimesMonFri =[
                        [7.00, 7.04, 7.09, 7.12, 7.15, 7.19, 7.23, 7.25, 7.35],
                        [7.40, 7.44, 7.49, 7.52, 7.55, 7.59, 8.03, 8.05, 8.15],
                        [8.20, 8.24, 8.29, 8.32, 8.35, 8.39, 8.43, 8.45, 8.55],
                        [9.00, 9.04, 9.09, 9.12, 9.15, 9.19, 9.23, 9.25, 9.35],
                        [10.20, 10.24, 10.29, 10.32, 10.35, 10.39, 10.43, 10.45, 10.55],
                        [11.40, 11.44, 11.49, 11.52, 11.55, 11.59, 12.03, 12.05, 12.15],
                        [13.00, 13.04, 13.09, 13.12, 13.15, 13.19, 13.23, 13.25, 13.35],
                        [14.20, 14.24, 14.29, 14.32, 14.35, 14.39, 14.43, 14.45, 14.55],
                        [15.20, 15.24, 15.29, 15.32, 15.35, 15.39, 15.43, 15.45, 15.55],
                        [16.00, 16.04, 16.09, 16.12, 16.15, 16.19, 16.23, 16.25, 16.35],
                        [16.40, 16.44, 16.49, 16.52, 16.55, 16.59, 17.03, 17.05, 17.15],
                        [17.20, 17.24, 17.29, 17.32, 17.35, 17.39, 17.43, 17.45, 17.55],
                        [18.00, 18.04, 18.09, 18.12, 18.15, 18.19, 18.23, 18.25, 18.35]
                        ];
var fernleaTimesFri = [8.20]; //EVENING ONLY
var fernleaTimesSat = [
                        [9.00, 9.04,9.09,9.12,9.15,9.19,9.23,9.25,9.35],
                        [9.40, 9.44,9.49,9.52,9.55,9.59,10.03,10.05,10.15],
                        [11.00, 11.04, 11.09, 11.12, 11.15, 11.19, 11.23, 11.25, 11.35],
                        [11.40, 11.44, 11.49, 11.52, 11.55, 11.59, 12.03, 12.05, 12.15],
                        [4.20]
                      ];



//=============================================================================HEIGHTS ROUTE

var heightsStops = [
                "Depart MST",
                "Main ST",
                "Napier Rd Cemetary",
                "Mihaere Dr",
                "Roberts Line",
                "Brooklyn Heights",
                "Roberts Line",
                "Main St",
                "Arrive MST"
                ];
var heightsTimesMonFri =[
                    [6.40, 6.43, 6.46,6.47, 6.55, 7.00, 7.02, 7.05, 7.15],
                    [7.20, 7.23, 7.26, 7.27, 7.35, 7.40, 7.42, 7.45, 7.55],
                    [8.00, 8.03, 8.06, 8.07, 8.15, 8.20, 8.22, 8.23, 8.35],
                    [8.40, 8.43, 8.46, 8.47, 8.55, 9.00, 9.02, 9.05, 9.15],
                    [9.40, 9.43, 9.46, 9.47, 9.55, 10.00, 10.02, 10.05, 10.15],
                    [11.00, 11.03, 11.06, 11.07, 11.15, 11.20, 11.22, 11.25, 11.35],
                    [12.20, 12.23, 12.26, 12.27, 12.35, 12.40, 12.42, 12.45, 12.55],
                    [13.40, 13.43, 13.46, 13.47, 13.55, 14.00, 14.02, 14.05, 14.15],
                    [15.00, 15.02, 15.06, 15.07, 15.15, 15.20, 15.22, 15.25, 15.35],
                    [15.40, 15.43, 15.46, 15.47, 15.55, 16.00, 16.02, 16.05, 16.15],
                    [16.20, 16.23, 16.26, 16.27, 16.35, 16.40, 16.42, 16.45, 16.55],
                    [17.00, 17.03, 17.06, 17.07, 17.15, 17.20, 17.22, 17.25, 17.35],
                    [17.40, 17.43, 17.46, 17.47, 17.55, 18.00, 18.02, 18.05, 18.15]
                    ];
var heightsTimesFri = [
                 [18.40, 18.43, 18.46, 18.47, 18.55, 19.00, 19.02, 19.05, 19.15],
                 [20.20]
                    ];
var heightsSat = [
 		     [13.40, 13.43, 13.46, 13.47, 13.55, 14.00, 14.02, 14.05, 14.15],
  	         [15.00, 15.03, 15.06, 15.07, 15.15, 15.20, 15.22, 15.25, 15.35],
  	         [16.20]
             ];


