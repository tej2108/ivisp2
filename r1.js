function hideshow(z) {
    var div2014 = document.getElementById("viz2014");
    var div2009 = document.getElementById("viz2009");
    var div2004 =document.getElementById("viz2004");
    var div2000=document.getElementById("viz2000");
    div2014.style.display = "none";
    div2009.style.display = "none";
    div2004.style.display ="none";
    div2000.style.display= "none";
    switch (z)
    {
        case '2014': div2014.style.display = "block"; break;
        case '2009': div2009.style.display = "block"; break;
        case '2004': div2004.style.display = "block";break;
        case '2000': div2000.style.display =  "block";break;
    }
}
var data2000=[

  {
   "cc": "saarg",
   "country": "Argentina",
   "TOTAL": "1,079",
   "Married": "572",
   "Living together as married": "84",
   "Divorced": "24",
   "Separated": 42,
   "Widowed": 99,
   "Single": 254,
   "Sex-Male": "514",
   "Sex-Female": "565"

 },
 {
   "cc": "ocaus",
   "country": "Australia",
   "TOTAL": "2,048",
   "Married": "1,036",
   "Living together as married": "138",
   "Divorced": "118",
   "Separated": 75,
   "Widowed": 135,
   "Single": 540,
   "Sex-Male": "1,009",
   "Sex-Female": "1,039"

 },
 {
   "cc": "aschn",
   "country": "China",
   "TOTAL": "1,500",
   "Married": "1,208",
   "Living together as married": "11",
   "Divorced": "12",
   "Separated": 5,
   "Widowed": 39,
   "Single": 225,
   "Sex-Male": "799",
   "Sex-Female": "701"

 },
 {
   "cc": "sacol",
   "country": "Colombia",
   "TOTAL": "2,996",
   "Married": "1,258",
   "Living together as married": "549",
   "Divorced": "25",
   "Separated": 162,
   "Widowed": 66,
   "Single": 936,
   "Sex-Male": "1,570",
   "Sex-Female": "1,426"

 },
 {
   "cc": "asgeo",
   "country": "Georgia",
   "TOTAL": "2,008",
   "Married": "1,209",
   "Living together as married": "28",
   "Divorced": "56",
   "Separated": 15,
   "Widowed": 174,
   "Single": 526,
   "Sex-Male": "901",
   "Sex-Female": "1,107"

 },
 {
   "cc": "eudeu",
   "country": "Germany",
   "TOTAL": "1,009",
   "Married": "596",
   "Living together as married": "90",
   "Divorced": "72",
   "Separated": 14,
   "Widowed": 84,
   "Single": 150,
   "Sex-Male": "465",
   "Sex-Female": "544"

 },
 {
   "cc": "asind",
   "country": "India",
   "TOTAL": "2,040",
   "Married": "1,579",
   "Living together as married": "-",
   "Divorced": "16",
   "Separated": 11,
   "Widowed": 57,
   "Single": 377,
   "Sex-Male": "1,120",
   "Sex-Female": "920"

 },
 {
   "cc": "askor",
   "country": "South Korea",
   "TOTAL": "1,249",
   "Married": "829",
   "Living together as married": "16",
   "Divorced": "16",
   "Separated": 1,
   "Widowed": 32,
   "Single": 351,
   "Sex-Male": "612",
   "Sex-Female": "637"

 },
 {
   "cc": "namex",
   "country": "Mexico",
   "TOTAL": "1,510",
   "Married": "716",
   "Living together as married": "147",
   "Divorced": "53",
   "Separated": 47,
   "Widowed": 65,
   "Single": 473,
   "Sex-Male": "751",
   "Sex-Female": "737"


 },
 {
   "cc": "afnga",
   "country": "Nigeria",
   "TOTAL": "1,996",
   "Married": "1,142",
   "Living together as married": "67",
   "Divorced": "20",
   "Separated": 8,
   "Widowed": 28,
   "Single": 730,
   "Sex-Male": "1,005",
   "Sex-Female": "991"

 },
 {
   "cc": "aspak",
   "country": "Pakistan",
   "TOTAL": "733",
   "Married": "553",
   "Living together as married": "-",
   "Divorced": "-",
   "Separated": 2,
   "Widowed": 8,
   "Single": 169,
   "Sex-Male": "375",
   "Sex-Female": "358"

 },
 {
   "cc": "saper",
   "country": "Peru",
   "TOTAL": "1,211",
   "Married": "537",
   "Living together as married": "184",
   "Divorced": "13",
   "Separated": 45,
   "Widowed": 35,
   "Single": 395,
   "Sex-Male": "597",
   "Sex-Female": "614"

 },
 {
   "cc": "asphl",
   "country": "Philippines",
   "TOTAL": "1,200",
   "Married": "800",
   "Living together as married": "28",
   "Divorced": "-",
   "Separated": 6,
   "Widowed": 43,
   "Single": 323,
   "Sex-Male": "600",
   "Sex-Female": "600"

 },
 {
   "cc": "eupol",
   "country": "Poland",
   "TOTAL": "1,153",
   "Married": "705",
   "Living together as married": "17",
   "Divorced": "33",
   "Separated": 20,
   "Widowed": 170,
   "Single": 207,
   "Sex-Male": "527",
   "Sex-Female": "626"

 },
 {
   "cc": "afzaf",
   "country": "South Africa",
   "TOTAL": "2,935",
   "Married": "1,390",
   "Living together as married": "277",
   "Divorced": "63",
   "Separated": 60,
   "Widowed": 186,
   "Single": 960,
   "Sex-Male": "1,398",
   "Sex-Female": "1,537"

 },
 {
   "cc": "euesp",
   "country": "Spain",
   "TOTAL": "1,211",
   "Married": "748",
   "Living together as married": "33",
   "Divorced": "8",
   "Separated": 19,
   "Widowed": 88,
   "Single": 314,
   "Sex-Male": "582",
   "Sex-Female": "629"

 },
 {
   "cc": "euswe",
   "country": "Sweden",
   "TOTAL": "1,009",
   "Married": "532",
   "Living together as married": "172",
   "Divorced": "55",
   "Separated": 7,
   "Widowed": 37,
   "Single": 206,
   "Sex-Male": "515",
   "Sex-Female": "494"

 },
 {
   "cc": "astur",
   "country": "Turkey",
   "TOTAL": "1,907",
   "Married": "1,459",
   "Living together as married": "5",
   "Divorced": "10",
   "Separated": 6,
   "Widowed": 54,
   "Single": 348,
   "Sex-Male": "957",
   "Sex-Female": "951"

 },
 {
   "cc": "nausa",
   "country": "United States",
   "TOTAL": "1,542",
   "Married": "925",
   "Living together as married": "61",
   "Divorced": "121",
   "Separated": 29,
   "Widowed": 123,
   "Single": 278,
   "Sex-Male": "744",
   "Sex-Female": "798"

 }
]
var data2004= [
  {
    "cc": "saarg",
    "country": "Argentina",
    "total": "1,280",
    "Married": "608",
    "Living together": "141",
    "Divorced": "26",
    "Separated": "68",
    "Widowed": 101,
    "Single": "337",
    "Sex-Male": "599",
    "Sex-Female": "681"
  },
  {
    "cc": "aschn",
    "country": "China",
    "total": "1,000",
    "Married": "869",
    "Living together": "3",
    "Divorced": "9",
    "Separated": "1",
    "Widowed": 22,
    "Single": "93",
    "Sex-Male": "494",
    "Sex-Female": "506"
  },
  {
    "cc": "asind",
    "country": "India",
    "total": "2,002",
    "Married": "1,568",
    "Living together": "137",
    "Divorced": "7",
    "Separated": "10",
    "Widowed": 96,
    "Single": "184",
    "Sex-Male": "1,137",
    "Sex-Female": "865"
  },
  {
    "cc": "askor",
    "country": "South Korea",
    "total": "1,200",
    "Married": "823",
    "Living together": "7",
    "Divorced": "14",
    "Separated": "6",
    "Widowed": 27,
    "Single": "323",
    "Sex-Male": "604",
    "Sex-Female": "596"
  },
  {
    "cc": "namex",
    "country": "Mexico",
    "total": "1,535",
    "Married": "933",
    "Living together": "96",
    "Divorced": "24",
    "Separated": "41",
    "Widowed": 83,
    "Single": "350",
    "Sex-Male": "729",
    "Sex-Female": "806"
  },
  {
    "cc": "saper",
    "country": "Peru",
    "total": "1,501",
    "Married": "616",
    "Living together": "254",
    "Divorced": "16",
    "Separated": "62",
    "Widowed": 27,
    "Single": "521",
    "Sex-Male": "733",
    "Sex-Female": "768"
  },
  {
    "cc": "afzaf",
    "country": "South Africa",
    "total": "3,000",
    "Married": "1,141",
    "Living together": "327",
    "Divorced": "64",
    "Separated": "34",
    "Widowed": 128,
    "Single": "1,307",
    "Sex-Male": "1,622",
    "Sex-Female": "1,379"
  },
  {
    "cc": "euesp",
    "country": "Spain",
    "total": "1,209",
    "Married": "668",
    "Living together": "52",
    "Divorced": "18",
    "Separated": "27",
    "Widowed": 97,
    "Single": "346",
    "Sex-Male": "583",
    "Sex-Female": "626"
  },
  {
    "cc": "euswe",
    "country": "Sweden",
    "total": "1,014",
    "Married": "475",
    "Living together": "152",
    "Divorced": "72",
    "Separated": "-",
    "Widowed": 32,
    "Single": "228",
    "Sex-Male": "503",
    "Sex-Female": "510"
  },
  {
    "cc": "astur",
    "country": "Turkey",
    "total": "3,401",
    "Married": "2,475",
    "Living together": "11",
    "Divorced": "32",
    "Separated": "12",
    "Widowed": 118,
    "Single": "753",
    "Sex-Male": "1,720",
    "Sex-Female": "1,682"
  },
  {
    "cc": "nausa",
    "country": "United States",
    "total": "1,200",
    "Married": "578",
    "Living together": "87",
    "Divorced": "128",
    "Separated": "31",
    "Widowed": 49,
    "Single": "326",
    "Sex-Male": "600",
    "Sex-Female": "600"
  },
  {
    "cc": "asjor",
    "country": "Jordan",
    "total": "1,223",
    "Married": "824",
    "Living together": "-",
    "Divorced": "6",
    "Separated": "4",
    "Widowed": 41,
    "Single": "348",
    "Sex-Male": "594",
    "Sex-Female": "630"
  },
  {
    "cc": "aspak",
    "country": "Pakistan",
    "total": "2,000",
    "Married": "1,321",
    "Living together": "-",
    "Divorced": "-",
    "Separated": "-",
    "Widowed": 32,
    "Single": "647",
    "Sex-Male": "1,041",
    "Sex-Female": "959"
  },
  {
    "cc": "asphl",
    "country": "Philippines",
    "total": "1,200",
    "Married": "889",
    "Living together": "26",
    "Divorced": "4",
    "Separated": "12",
    "Widowed": 50,
    "Single": "220",
    "Sex-Male": "600",
    "Sex-Female": "600"
  },
  {
    "cc": "afegy",
    "country": "Egypt",
    "total": "3,000",
    "Married": "2,028",
    "Living together": "-",
    "Divorced": "34",
    "Separated": "12",
    "Widowed": 205,
    "Single": "721",
    "Sex-Male": "1,540",
    "Sex-Female": "1,460"
  }
]

var data2009= [
  {
  "cc": "saarg",
  "country": "Argentina",
  "total": "1,002",
  "Married": 411,
  "Living together": 152,
  "Divorced": 28,
  "Separated": 54,
  "Widowed": 93,
  "Single": "265",
  "Sex-Male": 473,
  "Sex-Female": 529
},
{
  "cc": "aschn",
  "country": "China",
  "total": "1,991",
  "Married": "1,572",
  "Living together": 24,
  "Divorced": 24,
  "Separated": 12,
  "Widowed": 55,
  "Single": "289",
  "Sex-Male": 1016,
  "Sex-Female": 975
},
{
  "cc": "asind",
  "country": "India",
  "total": "2,001",
  "Married": "1,611",
  "Living together": 78,
  "Divorced": 5,
  "Separated": 7,
  "Widowed": 84,
  "Single": "215",
  "Sex-Male": 1137,
  "Sex-Female": 861
},
{
  "cc": "askor",
  "country": "South Korea",
  "total": "1,200",
  "Married": 807,
  "Living together": "5",
  "Divorced": 19,
  "Separated": 6,
  "Widowed": 62,
  "Single": "300",
  "Sex-Male": 593,
  "Sex-Female": 607
},
{
  "cc": "namex",
  "country": "Mexico",
  "total": "1,560",
  "Married": 853,
  "Living together": 163,
  "Divorced": 30,
  "Separated": 70,
  "Widowed": 83,
  "Single": "361",
  "Sex-Male": 767,
  "Sex-Female": 793
},
{
  "cc": "saper",
  "country": "Peru",
  "total": "1,500",
  "Married": 538,
  "Living together": 369,
  "Divorced": 10,
  "Separated": 50,
  "Widowed": 54,
  "Single": "479",
  "Sex-Male": 735,
  "Sex-Female": 765
},
{
  "cc": "afzaf",
  "country": "South Africa",
  "total": "2,988",
  "Married": "1,050",
  "Living together": 317,
  "Divorced": 61,
  "Separated": 32,
  "Widowed": 186,
  "Single": "1,342",
  "Sex-Male": 1495,
  "Sex-Female": 1493
},
{
  "cc": "euesp",
  "country": "Spain",
  "total": "1,200",
  "Married": 699,
  "Living together": 54,
  "Divorced": 18,
  "Separated": 24,
  "Widowed": 92,
  "Single": "309",
  "Sex-Male": 582,
  "Sex-Female": 618
},
{
  "cc": "euswe",
  "country": "Sweden",
  "total": "1,003",
  "Married": 466,
  "Living together": 175,
  "Divorced": 88,
  "Separated": 47,
  "Widowed": 37,
  "Single": "185",
  "Sex-Male": 505,
  "Sex-Female": 498
},
{
  "cc": "astur",
  "country": "Turkey",
  "total": "1,346",
  "Married": 894,
  "Living together": 1,
  "Divorced": 19,
  "Separated": 2,
  "Widowed": 31,
  "Single": "399",
  "Sex-Male": 675,
  "Sex-Female": 671
},
{
  "cc": "nausa",
  "country": "United States",
  "total": "1,249",
  "Married": 669,
  "Living together":0,
  "Divorced": 160,
  "Separated": 35,
  "Widowed": 71,
  "Single": "314",
  "Sex-Male": 603,
  "Sex-Female": 646
},
{
    "cc": "sabra",
    "country": "Brazil",
    "total": "1,500",
    "Married": 625,
    "Living together": 249,
    "Divorced": 51,
    "Separated": 83,
    "Widowed": 87,
    "Single": "402",
    "Sex-Male": 714,
    "Sex-Female": 786

  },
  {
    "cc": "egeo",
    "country": "Georgia",
    "total": "1,500",
    "Married": "1,005",
    "Living together": 7,
    "Divorced": 32,
    "Separated": 16,
    "Widowed": 150,
    "Single": "288",
    "Sex-Male": 706,
    "Sex-Female": 794

  },
  {
    "cc": "ocaus",
    "country": "Australia",
    "total": "1,421",
    "Married": 847,
    "Living together": 109,
    "Divorced": 93,
    "Separated": 45,
    "Widowed": 96,
    "Single": "217",
    "Sex-Male": 639,
    "Sex-Female": 772

  },
  {
    "cc": "asjor",
    "country": "Jordan",
    "total": "1,200",
    "Married": 849,
    "Living together": 1,
    "Divorced": 7,
    "Separated": 3,
    "Widowed": 42,
    "Single": "298",
    "Sex-Male": 597,
    "Sex-Female": 603

  },
  {
    "cc": "asmys",
    "country": "Malaysia",
    "total": "1,201",
    "Married": 599,
    "Living together": 26,
    "Divorced": 13,
    "Separated": 9,
    "Widowed": 17,
    "Single": "535",
    "Sex-Male": 599,
    "Sex-Female": 602

  },
  {
    "cc": "eunld",
    "country": "Netherlands",
    "total": "1,050",
    "Married": 502,
    "Living together": 145,
    "Divorced": 54,
    "Separated": 16,
    "Widowed": 67,
    "Single": "251",
    "Sex-Male": 513,
    "Sex-Female": 537

  },
  {
    "cc": "eupol",
    "country": "Poland",
    "total": "1,000",
    "Married": 581,
    "Living together": 26,
    "Divorced": 40,
    "Separated": 8,
    "Widowed": 88,
    "Single": "479",
    "Sex-Male": 476,
    "Sex-Female": 524

  },
  {
    "cc": "afegy",
    "country": "Egypt",
    "total": "3,051",
    "Married": "2,358",
    "Living together": "-",
    "Divorced": 25,
    "Separated": 15,
    "Widowed": 298,
    "Single": "354",
    "Sex-Male": 1557,
    "Sex-Female": 1494

  },
  {
    "cc": "euukr",
    "country": "Ukraine",
    "total": "1,000",
    "Married": 559,
    "Living together": 39,
    "Divorced": 65,
    "Separated": 15,
    "Widowed": 134,
    "Single": "180",
    "Sex-Male": 450,
    "Sex-Female": 550

  }


]
  var data2014 = [
   {
     "cc": "saarg",
     "Country": "Argentina",
     "total": "1,030",
     "Married": "359",
     "Living together": "179",
     "Divorced": 39,
     "Separated": 66,
     "Widowed": 84,
     "Single": "302",
     "Male": "1,030",
     "Female": "477"
   },
   {
     "cc": "ocaus",
     "Country": "Australia",
     "total": "1,477",
     "Married": "783",
     "Living together": "160",
     "Divorced": 76,
     "Separated": 40,
     "Widowed": 62,
     "Single": "344",
     "Male": "1,477",
     "Female": "756"
   },
   {
     "cc": "sabra",
     "Country": "Brazil",
     "total": "1,486",
     "Married": "618",
     "Living together": "270",
     "Divorced": 60,
     "Separated": 79,
     "Widowed": 94,
     "Single": "358",
     "Male": "1,486",
     "Female": "709"
   },
   {
     "cc": "aschn",
     "Country": "China",
     "total": "2,300",
     "Married": "1,922",
     "Living together": "20",
     "Divorced": 30,
     "Separated": 4,
     "Widowed": 75,
     "Single": "250",
     "Male": "2,300",
     "Female": "1,169"
   },
   {
     "cc": "sacol",
     "Country": "Colombia",
     "total": "1,512",
     "Married": "438",
     "Living together": "446",
     "Divorced": 26,
     "Separated": 110,
     "Widowed": 58,
     "Single": "434",
     "Male": "1,512",
     "Female": "750"
   },
   {
     "cc": "asgeo",
     "Country": "Georgia",
     "total": "1,202",
     "Married": "744",
     "Living together": "32",
     "Divorced": 39,
     "Separated": 15,
     "Widowed": 136,
     "Single": "235",
     "Male": "1,202",
     "Female": "553"
   },
   {
     "cc": "eudeu",
     "Country": "Germany",
     "total": "2,046",
     "Married": "1,015",
     "Living together": "159",
     "Divorced": 199,
     "Separated": 36,
     "Widowed": 180,
     "Single": "433",
     "Male": "2,046",
     "Female": "1,000"
   },
   {
     "cc": "asind",
     "Country": "India",
     "total": "4,078",
     "Married": "3,486",
     "Living together": "51",
     "Divorced": 9,
     "Separated": 14,
     "Widowed": 95,
     "Single": "423",
     "Male": "1,000",
     "Female": "455"
   },
   {
     "cc": "askaz",
     "Country": "Kazakhstan",
     "total": "1,502",
     "Married": "886",
     "Living together": "49",
     "Divorced": 115,
     "Separated": 17,
     "Widowed": 125,
     "Single": "309",
     "Male": "4,078",
     "Female": "2,290"
   },
   {
     "cc": "asjor",
     "Country": "Jordan",
     "total": "1,200",
     "Married": "859",
     "Living together": "-",
     "Divorced": 13,
     "Separated": 4,
     "Widowed": 44,
     "Single": "280",
     "Male": "1,502",
     "Female": "703"
   },
   {
     "cc": "askor",
     "Country": "South Korea",
     "total": "1,200",
     "Married": "753",
     "Living together": "12",
     "Divorced": 28,
     "Separated": 6,
     "Widowed": 69,
     "Single": "324",
     "Male": "1,200",
     "Female": "600"
   },
   {
     "cc": "aslbn",
     "Country": "Lebanon",
     "total": "1,200",
     "Married": "585",
     "Living together": "6",
     "Divorced": 37,
     "Separated": 7,
     "Widowed": 44,
     "Single": "521",
     "Male": "1,200",
     "Female": "593"
   },
   {
     "cc": "aflby",
     "Country": "Libya",
     "total": "2,131",
     "Married": "1,172",
     "Living together": "10",
     "Divorced": 34,
     "Separated": 4,
     "Widowed": 46,
     "Single": "863",
     "Male": "1,200",
     "Female": "588"
   },
   {
     "cc": "asmys",
     "Country": "Malaysia",
     "total": "1,300",
     "Married": "891",
     "Living together": "5",
     "Divorced": 22,
     "Separated": 3,
     "Widowed": 25,
     "Single": "354",
     "Male": "2,131",
     "Female": "1,115"
   },
   {
     "cc": "namex",
     "Country": "Mexico",
     "total": "2,000",
     "Married": "909",
     "Living together": "365",
     "Divorced": 46,
     "Separated": 112,
     "Widowed": 77,
     "Single": "491",
     "Male": "1,300",
     "Female": "668"
   },
   {
     "cc": "eunld",
     "Country": "Netherlands",
     "total": "1,902",
     "Married": "1,019",
     "Living together": "206",
     "Divorced": 130,
     "Separated": 33,
     "Widowed": 134,
     "Single": "347",
     "Male": "2,000",
     "Female": "999"
   },
   {
     "cc": "afnga",
     "Country": "Nigeria",
     "total": "1,759",
     "Married": "907",
     "Living together": "51",
     "Divorced": 5,
     "Separated": 3,
     "Widowed": 53,
     "Single": "740",
     "Male": "1,902",
     "Female": "884"
   },
   {
     "cc": "aspak",
     "Country": "Pakistan",
     "total": "1,200",
     "Married": "882",
     "Living together": "-",
     "Divorced": 2,
     "Separated": 6,
     "Widowed": 16,
     "Single": "295",
     "Male": "1,759",
     "Female": "904"
   },
   {
     "cc": "saper",
     "Country": "Peru",
     "total": "1,210",
     "Married": "392",
     "Living together": "295",
     "Divorced": 28,
     "Separated": 62,
     "Widowed": 52,
     "Single": "381",
     "Male": "1,200",
     "Female": "618"
   },
   {
     "cc": "asphl",
     "Country": "Philippines",
     "total": "1,200",
     "Married": "841",
     "Living together": "91",
     "Divorced": 4,
     "Separated": 37,
     "Widowed": 70,
     "Single": "158",
     "Male": "1,210",
     "Female": "607"
   },
   {
     "cc": "eupol",
     "Country": "Poland",
     "total": "966",
     "Married": "555",
     "Living together": "44",
     "Divorced": 39,
     "Separated": 11,
     "Widowed": 105,
     "Single": "207",
     "Male": "1,200",
     "Female": "600"
   },
   {
     "cc": "asqat",
     "Country": "Qatar",
     "total": "1,060",
     "Married": "730",
     "Living together": "-",
     "Divorced": 24,
     "Separated": 11,
     "Widowed": 45,
     "Single": "250",
     "Male": "966",
     "Female": "453"
   },
   {
     "cc": "assgp",
     "Country": "Singapore",
     "total": "1,972",
     "Married": "1,227",
     "Living together": "54",
     "Divorced": 42,
     "Separated": 10,
     "Widowed": 49,
     "Single": "588",
     "Male": "1,060",
     "Female": "486"
   },
   {
     "cc": "afzaf",
     "Country": "South Africa",
     "total": "3,531",
     "Married": "1,194",
     "Living together": "349",
     "Divorced": 47,
     "Separated": 21,
     "Widowed": 238,
     "Single": "1,682",
     "Male": "1,972",
     "Female": "849"
   },
   {
     "cc": "euesp",
     "Country": "Spain",
     "total": "1,189",
     "Married": "591",
     "Living together": "105",
     "Divorced": 50,
     "Separated": 34,
     "Widowed": 84,
     "Single": "324",
     "Male": "3,531",
     "Female": "1,707"
   },
   {
     "cc": "euswe",
     "Country": "Sweden",
     "total": "1,206",
     "Married": "493",
     "Living together": "214",
     "Divorced": 74,
     "Separated": 56,
     "Widowed": 61,
     "Single": "291",
     "Male": "1,189",
     "Female": "577"
   },
   {
     "cc": "astur",
     "Country": "Turkey",
     "total": "1,605",
     "Married": "1,099",
     "Living together": "13",
     "Divorced": 44,
     "Separated": 8,
     "Widowed": 73,
     "Single": "369",
     "Male": "1,206",
     "Female": "602"
   },
   {
     "cc": "euukr",
     "Country": "Ukraine",
     "total": "1,500",
     "Married": "804",
     "Living together": "56",
     "Divorced": 146,
     "Separated": 21,
     "Widowed": 227,
     "Single": "246",
     "Male": "1,200",
     "Female": "610"
   },
   {
     "cc": "afegy",
     "Country": "Egypt",
     "total": "1,523",
     "Married": "1,015",
     "Living together": "-",
     "Divorced": 9,
     "Separated": 10,
     "Widowed": 117,
     "Single": "372",
     "Male": "1,605",
     "Female": "814"
   },
   {
     "cc": "nausa",
     "Country": "United States",
     "total": "2,232",
     "Married": "1,213",
     "Living together": "220",
     "Divorced": 215,
     "Separated": 51,
     "Widowed": 104,
     "Single": "429",
     "Male": "1,500",
     "Female": "675"
   }

  ]
