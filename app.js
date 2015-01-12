var handlebars = require('handlebars'),
	us = require('underscore'),
	sources = {        subject_full_name: ["Tipsy", "Lyin' Darla's","Captain Crank's",  "Dave the Donk-Man's", "Mama Fieri's", "Tequila Abuelita's", "Low-Rent Don's", "Slippery Sal's",   "Rasta Ron's", "Short-Change Sue's", "Moonshine Mike's",  "Upside-down","Backwards Clem's", "Inside-out", "Punk Rock Reggie's", "Hip-Hop","Double scorched","Kissing Cousin's","Horny","Jackhammer", "Backwards", "Drunken","Lady Moonshine's", "Doctor Django's",  "Java guava","Cedar plank","Third circle of hell","Itchy Pedro's", "Two-Buck Rodney's", "Adjunct Professor Andrew's", "Card Shark Kramer's", "Eskimo","Steven Seagal's", "Nawlins"],        what: [            "skillet-splattering", "crispy","extra-saucy", "double-crispy","thrice-doused","Louisiana bastard","rajun Cajun","Taiwanese","Guy-talian", "Nor-Cal","Tex-Mex","French-Canadien","honking", "double-down","crunchy","creamy","salty","extra-sweet","teriyaki","smothered","backwards","honey-kissed","crayfish-topped","bacon-wrapped","hellzablazing","fancy French-style","saltimbocca","triple X","nitro", "hippie"],         who: [            "sirloin","tri-tip","Rocky Mountain oysters","bull scraps","pork honk","chicken shooters","goat nuggets","sausage snaps","venison nibbles","beef thumbs","cow bacon","belly bumps","chicken chucks","venison cracklers","pork poppers", "Hangtown beefers", "pork scooters", "chicken scratchers","porterhouse crispers","clam paws","doggie snappers","canary bites","armadillo kickers" ],            where: ["wonton","crème brûlée","Guy-Talian","habanero","ghost pepper","brontosaurs","Harlem renaissance","Yolo","DTOPBWL","XYLTPDK","wasabi","Fresno-style","round-the-world-in-80-days","eighth-wonder-of-the-world","hootin-n-hollerin","nuthin fancy","loco moco","Jack Daniels","eleven dollar","super soggy","sweet-and-sour","agrodulce","chimichurri","al dente","General Tso's","Santa Fe-style","Olde Chicago-style","Rochester-style","Milwaukee-style","twice-baked","tempura","Tuscan-style","Jurassic-style", "thrice-fried","Westchester County-style","Kung-Fu style","Guylaysian","Tokyo prime time-style","mad dog-style", "Texarkana" ],        how: ["onion screamers","creamed walnuts","potato tippers","spinach knots","carrot shooters","beef taffy","cauliflower rings","lettuce knuckles", "zucchini shots","guac balls", "mini-calzones", "broccoli rolls", "taco tails", "gorgonzola crunchers","pinto pops", "chimichangas","corn scratchers","Suzycakes","cuke hoops", "yam hammers"  ]    },
	output = "{{{subject_full_name}}} {{{what}}} {{{who}}} with {{{where}}} {{{how}}}.",
	selected_strings = {
		subject_full_name: us.sample(sources.subject_full_name),
		what: us.sample(sources.what),
		who: us.sample(sources.who),
		where: us.sample(sources.where),
		how: us.sample(sources.how)
	};

console.log(handlebars.compile(output)(selected_strings));


