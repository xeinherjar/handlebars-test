var data = {
  brewers : [
  { name: "Creature Comforts",
    location: "Athens, GA",
    beer : [{ name: "TROPICÁLIA", price: 5},
            { name: "RECLAIMED RYE", price: 6},
           ],
  },
  { name: "Orpheus Brewing",
    location: "Atlanta, GA",
    beer : [{ name: "ATALANTA", price: 5},
            { name: "SYKOPHANTES", price: 8},
            ],
  },
  ]
};

var beerMenu = document.getElementById('beer-menu');
var beerMenuUL = beerMenu.getElementsByTagName('ul')[0];
var beerTemplate = Handlebars.templates.beer;
beerMenuUL.innerHTML =  beerTemplate(data);

var beerMenu2 = document.getElementById('beer-menu-2');
var beerMenu2UL = beerMenu2.getElementsByTagName('ul')[0];
var beerMenu2Template = document.getElementById('beer-template');
var beerTemplate2 = Handlebars.compile(beerMenu2Template.innerHTML);
beerMenu2UL.innerHTML = beerTemplate2(data);
