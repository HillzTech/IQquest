const levels = [
  {
     images: [
        require('../assets/Images/fruits/Images1.jpeg'),
        require('../assets/Images/fruits/Image2.jpg'),
        require('../assets/Images/fruits/Images3.jpeg'),
        require('../assets/Images/fruits/Images4.jpg'),
      ],
     word: "FRUIT",
     category: "food",
     definition: "something that sustains man"
   },

   {
    images: [
       require('../assets/Images/fire/fire1.jpg'),
       require('../assets/Images/fire/fire2.jpg'),
       require('../assets/Images/fire/fire3.png'),
       require('../assets/Images/fire/fire4.jpg'),
     ],
    word: "FIRE",
    category: "Elements",
    definition: "Fire is the rapid oxidation of a material in the exothermic chemical process of combustion, releasing heat, light, and various reaction products. At a certain point in the combustion reaction, called the ignition point, flames are produced. The flame is the visible portion of the fire."
  },

  {
    images: [
       require('../assets/Images/wind/wind1.jpg'),
       require('../assets/Images/wind/wind2.jpg'),
       require('../assets/Images/wind/wind3.jpg'),
       require('../assets/Images/wind/wind4.jpg'),
     ],
    word: "AIR",
    category: "Elements",
    definition: "Air is the Earth's atmosphere. Air is a mixture of many gases and tiny dust particles. It is the clear gas in which living things live and breathe. It has an indefinite shape and volume. It has mass and weight, because it is matter. The weight of air creates atmospheric pressure. There is no air in outer space.Earth's atmosphere is composed of about 78 percent nitrogen, 21 percent oxygen, 0.9 percent argon, and 0.1 percent other gases."
  },

  {
    images: [
       require('../assets/Images/earth/earth1.jpg'),
       require('../assets/Images/earth/earth2.jpg'),
       require('../assets/Images/earth/earth3.jpg'),
       require('../assets/Images/earth/earth4.jpg'),
     ],
    word: "EARTH",
    category: "Elements",
    definition: "The earth is full of a wide variety of rocks and minerals which provides the soil to grow vegetation and support life. The two most common elements in the earth's crust are oxygen (46%) and silicon (28%). Because of this, the most abundant mineral in the earth's crust is silica (silicon dioxide)."
  },
  
  {
    images: [
       require('../assets/Images/space/space1.jpg'),
       require('../assets/Images/space/space2.jpg'),
       require('../assets/Images/space/space3.jpg'),
       require('../assets/Images/space/space4.jpg'),
     ],
    word: "SPACE",
    category: "Elements",
    definition: "The space element (akasha in Sanskrit, meaning not visible, space, or sky) is the most subtle of the five elements. Space gives rise to the other elements—air, fire, water, and earth. It is space that makes everything possible. All things arise in it and return to it. We can think of space as expressing in three different but interconnected ways: the infinite, unbounded space of Spirit; the space of individual consciousness defined within the endless field of Spirit; and physical space—which we perceive in our bodies and environment. The main attribute of space is its all-pervasiveness and freedom from obstruction."
  },

  {
    images: [
       require('../assets/Images/water/water1.jpg'),
       require('../assets/Images/water/water2.jpg'),
       require('../assets/Images/water/water3.jpg'),
       require('../assets/Images/water/water4.jpg'),
     ],
    word: "WATER",
    category: "Elements",
    definition: "Water, a substance composed of the chemical elements hydrogen and oxygen and existing in gaseous, liquid, and solid states. It is one of the most plentiful and essential of compounds. A tasteless and odourless liquid at room temperature, it has the important ability to dissolve many other substances. Indeed, the versatility of water as a solvent is essential to living organisms. Life is believed to have originated in the aqueous solutions of the world's oceans, and living organisms depend on aqueous solutions, such as blood and digestive juices, for biological processes."
  },

  

  {
    images: [
       require('../assets/Images/bed/bed1.jpg'),
       require('../assets/Images/bed/bed2.jpg'),
       require('../assets/Images/bed/bed3.jpg'),
       require('../assets/Images/bed/bed4.jpg'),
     ],
    word: "BED",
    category: "Furniture",
    definition: " Bed, a piece of furniture upon which or within which a person sleeps, rests, or stays when not well. the mattress and bedclothes together with the bedstead of a bed."
  },

  {
    images: [
       require('../assets/Images/cabinet/cabinet1.jpg'),
       require('../assets/Images/cabinet/cabinet2.jpg'),
       require('../assets/Images/cabinet/cabinet3.jpg'),
       require('../assets/Images/cabinet/cabinet4.jpg'),
     ],
    word: "CABINET",
    category: "Furniture",
    definition: "A cabinet is a case or cupboard with shelves and/or drawers for storing or displaying items. Some cabinets are stand alone while others are built in to a wall or are attached to it like a medicine cabinet. Cabinets are typically made of wood, coated steel, or synthetic materials."
  },

  {
    images: [
       require('../assets/Images/table/table1.jpg'),
       require('../assets/Images/table/table2.jpg'),
       require('../assets/Images/table/table3.jpg'),
       require('../assets/Images/table/table4.jpg'),
     ],
    word: "TABLE",
    category: "Furniture",
    definition: "Table, a piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working at."
  },

  {
    images: [
       require('../assets/Images/clock/clock1.jpg'),
       require('../assets/Images/clock/clock2.jpg'),
       require('../assets/Images/clock/clock3.jpg'),
       require('../assets/Images/clock/clock4.jpg'),
     ],
    word: "CLOCK",
    category: "Furniture",
    definition: "Clock, a mechanical or electrical device for measuring time, indicating hours, minutes, and sometimes seconds by hands on a round dial or by displayed figures."
  },

  {
    images: [
       require('../assets/Images/chair/chair1.jpg'),
       require('../assets/Images/chair/chair2.jpg'),
       require('../assets/Images/chair/chair3.jpg'),
       require('../assets/Images/chair/chair4.jpg'),
     ],
    word: "CHAIR",
    category: "Furniture",
    definition: "Chair, a chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest. It may be made of wood, metal, or synthetic materials, and may be padded or upholstered in various colors and fabrics."
  },

   {
    images: [
       require('../assets/Images/fruits/Images1.jpeg'),
       require('../assets/Images/fruits/Image2.jpg'),
       require('../assets/Images/fruits/Images3.jpeg'),
       require('../assets/Images/fruits/Images4.jpg'),
     ],
    word: "FRUIT",
    category: "Food",
    definition: "Fruit, the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Thus, apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits. Popularly, however, the term is restricted to the ripened ovaries that are sweet and either succulent or pulpy. For treatment of the cultivation of fruits, see fruit farming. For treatment of the nutrient composition and processing of fruits, see fruit processing."
  },

  {
     images: [
        require('../assets/Images/seafood/shrimp.jpg'),
        require('../assets/Images/seafood/crab.jpg'),
        require('../assets/Images/seafood/fish.jpg'),
        require('../assets/Images/seafood/lobster.jpg'),
      ],
     word: "SEAFOOD",
     category: "Food",
     definition: "Seafood, edible aquatic animals, excluding mammals, but including both freshwater and ocean creatures. Most nontoxic aquatic species are exploited for food by humans. Even those with toxic properties, such as certain blowfish, can be prepared so as to circumvent harm to the consumer"
   },
   {
     images: [
        require('../assets/Images/beverage/smoothie.jpg'),
        require('../assets/Images/beverage/tea.jpg'),
        require('../assets/Images/beverage/soda.jpg'),
        require('../assets/Images/beverage/cocktaail.jpg'),
      ],
     word: "BEVERAGE",
     category: "Food",
     definition: "A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks"
   },
   
   {
     images: [
        require('../assets/Images/diary/milk.jpg'),
        require('../assets/Images/diary/cheese.jpg'),
        require('../assets/Images/diary/custard.jpg'),
        require('../assets/Images/diary/youghurt.jpg'),
      ],
     word: "DIARY",
     category: "Food",
     definition: "Dairy products or milk products, also known as lacticinia, are food products made from milk. The most common dairy animals are cow, water buffalo, nanny goat, and ewe. Dairy products include common grocery store food around the world such as yogurt, cheese, milk and butter."
   },
   {
     images: [
        require('../assets/Images/grain/corn.jpg'),
        require('../assets/Images/grain/oats.jpg'),
        require('../assets/Images/grain/rice.jpg'),
        require('../assets/Images/grain/wheat.jpg'),
      ],
     word: "GRAIN",
     category: "Food",
     definition: "Grain, member of the grass family that yield starchy seeds suitable for food are called grains. Grains are also known as cereal, or cereal grains. The grains most commonly cultivated are barley, corn (maize), millet, oats, rice, rye, sorghum, and wheat."
   },

   {
    images: [
       require('../assets/Images/fish/fish1.jpg'),
       require('../assets/Images/fish/fish2.jpg'),
       require('../assets/Images/fish/fish3.jpg'),
       require('../assets/Images/fish/fish4.jpg'),
     ],
    word: "FISH",
    category: "Animals",
    definition:"A fish is an aquatic, gill-bearing vertebrate animal with swimming fins and a hard skull, but lacking limbs with digits. Fish can be grouped into the more basal jawless fish and the more common jawed fish, the latter including all living cartilaginous and bony fishes, as well as the extinct placoderms and acanthodians. Most fish are cold-blooded, their body temperature varying with the surrounding water, though some large active swimmers like white shark and tuna can hold a higher core temperature. Many fish can communicate acoustically with each other, such as during courtship displays."
  },
  


   {
    images: [
       require('../assets/Images/reptile/reptile1.jpg'),
       require('../assets/Images/reptile/reptile2.jpg'),
       require('../assets/Images/reptile/reptile3.jpg'),
       require('../assets/Images/reptile/reptile4.jpg'),
     ],
    word: "REPTILE",
    category: "Animals",
    definition: "Reptile, any member of the class Reptilia, the group of air breathing vertebrates that have internal fertilization, amniotic development, and epidermal scales covering part or all of their body. The major groups of living reptiles the turtles (order Testudines), tuatara (order Rhynchocephalia [Sphenodontida]), lizards and snakes (order Squamata), and crocodiles (order Crocodylia, or Crocodilia) account for over 8,700 species. Birds (class Aves) share a common ancestor with crocodiles in subclass Archosauria and are technically one lineage of reptiles, but they are treated separately"
  },
  {
   images: [
      require('../assets/Images/Birds/bird1.jpg'),
      require('../assets/Images/Birds/bird2.jpg'),
      require('../assets/Images/Birds/bird3.jpg'),
      require('../assets/Images/Birds/bird4.jpg'),
    ],
   word: "AVES",
   category: "Animals",
   definition: "Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. "
 },

 {
    images: [
       require('../assets/Images/insect/insect1.jpg'),
       require('../assets/Images/insect/insect2.jpg'),
       require('../assets/Images/insect/insect3.jpg'),
       require('../assets/Images/insect/insect4.jpg'),
     ],
    word: "INSECT",
    category: "Animals",
    definition:"Insects are hexapod invertebrates of the class Insecta. They are the largest group within the arthropod phylum. Insects have a chitinous exoskeleton, a three-part body, three pairs of jointed legs, compound eyes, and a pair of antennae."
  },
  {
    images: [
       require('../assets/Images/mammals/mammal1.jpg'),
       require('../assets/Images/mammals/mammal2.jpg'),
       require('../assets/Images/mammals/mammal3.jpg'),
       require('../assets/Images/mammals/mammal4.jpg'),
     ],
    word: "MAMMAL",
    category: "Animals",
    definition:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of milk-producing mammary glands for feeding their young, a neocortex region of the brain, fur or hair, and three middle ear bones."
  },

  
  
  {
    images: [
       require('../assets/Images/europe/europe1.png'),
       require('../assets/Images/europe/europe2.jpg'),
       require('../assets/Images/europe/europe3.jpg'),
       require('../assets/Images/europe/europe4.jpg'),
     ],
    word: "EUROPE",
    category: "Continents",
    definition:"Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east."
  },
  {
    images: [
       require('../assets/Images/africa/africa1.jpg'),
       require('../assets/Images/africa/africa2.jpg'),
       require('../assets/Images/africa/africa3.jpg'),
       require('../assets/Images/africa/africa4.jpg'),
     ],
    word: "AFRICA",
    category: "Continents",
    definition:"Africa is the world's second-largest and second-most populous continent after Asia. At about 30.3 million km² including adjacent islands, it covers 20% of Earth's land area and 6% of its total surface area. With 1.4 billion people as of 2021, it accounts for about 18% of the world's human population."
  },
  {
    images: [
       require('../assets/Images/asia/asia1.jpg'),
       require('../assets/Images/asia/asia2.jpg'),
       require('../assets/Images/asia/asia3.jpg'),
       require('../assets/Images/asia/asia4.jpg'),
     ],
    word: "ASIA",
    category: "Continents",
    definition:"Asia is the largest continent in the world by both land area and population. It covers an area of more than 44 million square kilometers, about 30% of Earth's total land area and 8% of Earth's total surface area."
  },
  {
   images: [
      require('../assets/Images/america/america1.jpg'),
      require('../assets/Images/america/america2.jpg'),
      require('../assets/Images/america/america3.jpg'),
      require('../assets/Images/america/america4.jpg'),
    ],
   word: "AMERICAS",
   category: "Continents",
   definition:"The Americas, sometimes collectively called America, are a landmass comprising the totality of North and South America. The Americas make up most of the land in Earth's Western Hemisphere and comprise the New World."
 },

 {
    images: [
       require('../assets/Images/oceania/oceania1.jpg'),
       require('../assets/Images/oceania/oceania2.jpg'),
       require('../assets/Images/oceania/oceania3.jpg'),
       require('../assets/Images/oceania/oceania4.jpg'),
     ],
    word: "OCEANIA",
    category: "Continents",
    definition:"Oceania is a geographical region comprising Australasia, Melanesia, Micronesia, and Polynesia. Spanning the Eastern and Western Hemispheres, at the centre of the water hemisphere, Oceania is estimated to have a land area of about 9,000,000 square kilometres and a population of around 44.4 million as of 2022."
  },
  {
    images: [
       require('../assets/Images/golf/golf1.jpg'),
       require('../assets/Images/golf/golf2.jpg'),
       require('../assets/Images/golf/golf3.jpg'),
       require('../assets/Images/golf/golf4.jpg'),
     ],
    word: "GOLF",
    category: "Sport",
    definition:"A game played on a large open-air course, in which a small hard ball is struck with a club into a series of small holes in the ground, the object being to use the fewest possible strokes to complete the course."
  },
  
  {
    images: [
       require('../assets/Images/sprint/sprint1.jpg'),
       require('../assets/Images/sprint/sprint2.jpg'),
       require('../assets/Images/sprint/sprint3.jpg'),
       require('../assets/Images/sprint/sprint4.jpg'),
     ],
    word: "SPRINT",
    category: "Sport",
    definition:"Sprint, in athletics (track and field), a footrace over a short distance with an all-out or nearly all-out burst of speed, the chief distances being 100, 200, and 400 metres and 100, 220, and 440 yards.The course for sprint races is usually marked off in lanes within which each runner must remain for the entire race. Originally sprinters used a standing start, but after 1884 sprinters started from a crouched position using a device called a starting block (legalized in the 1930s) to brace their feet (see photograph). Races are begun by a pistol shot; at 55 to 65 metres (60 to 70 yards), top sprinters attain maximum speed, more than 40 km per hour (25 miles per hour). After the 65-metre mark the runner begins to lose speed through fatigue."
  },
  {
    images: [
       require('../assets/Images/soccer/soccer1.jpg'),
       require('../assets/Images/soccer/soccer2.jpg'),
       require('../assets/Images/soccer/soccer3.jpg'),
       require('../assets/Images/soccer/soccer4.jpg'),
     ],
    word: "SOCCER",
    category: "Sport",
    definition:"Soccer is the world's most popular ball game in numbers of participants and spectators. Simple in its principal rules and essential equipment, the sport can be played almost anywhere, from official football playing fields (pitches) to gymnasiums, streets, school playgrounds, parks, or beaches. Football's governing body, the Fédération Internationale de Football Association (FIFA), estimated that at the turn of the 21st century there were approximately 250 million football players and over 1.3 billion people “interested” in football; in 2010 a combined television audience of more than 26 billion watched football's premier tournament, the quadrennial monthlong World Cup finals."
  },
  {
    images: [
       require('../assets/Images/rugby/rugby1.jpg'),
       require('../assets/Images/rugby/rugby2.jpg'),
       require('../assets/Images/rugby/rugby3.jpg'),
       require('../assets/Images/rugby/rugby4.jpg'),
     ],
    word: "RUGBY",
    category: "Sport",
    definition:"Rugby, football game played with an oval ball by two teams of 15 players (in rugby union play) or 13 players (in rugby league play). Both rugby union and rugby league have their origins in the style of football played at Rugby School in England. According to the sport's lore, in 1823 William Webb Ellis, a pupil at Rugby School, defied the conventions of the day (that the ball may only be kicked forward) to pick up the ball and run with it in a game, thus creating the distinct handling game of rugby football. "
  },
  {
   images: [
      require('../assets/Images/baseball/baseball1.jpg'),
      require('../assets/Images/baseball/baseball2.jpg'),
      require('../assets/Images/baseball/baseball3.jpg'),
      require('../assets/Images/baseball/baseball4.jpg'),
    ],
   word: "BASEBALL",
   category: "Sport",
   definition:"Baseball, game played with a bat, a ball, and gloves between two teams of nine players each on a field with four white bases laid out in a diamond (i.e., a square oriented so that its diagonal line is vertical). Teams alternate positions as batters (offense) and fielders (defense), exchanging places when three members of the batting team are “put out.” As batters, players try to hit the ball out of the reach of the fielding team and make a complete circuit around the bases for a “run.” The team that scores the most runs in nine innings (times at bat) wins the game."
 },

 {
    images: [
       require('../assets/Images/jazz/jazz1.jpg'),
       require('../assets/Images/jazz/jazz2.jpg'),
       require('../assets/Images/jazz/jazz3.jpg'),
       require('../assets/Images/jazz/jazz4.jpg'),
     ],
    word: "JAZZ",
    category: "Music",
    definition: "Jazz, musical form, often improvisational, developed by African Americans and influenced by both European harmonic structure and African rhythms. It was developed partially from ragtime and blues and is often characterized by syncopated rhythms, polyphonic ensemble playing, varying degrees of improvisation, often deliberate deviations of pitch, and the use of original timbres."
  },
  {
    images: [
       require('../assets/Images/country/country1.jpg'),
       require('../assets/Images/country/country2.jpg'),
       require('../assets/Images/country/country3.jpg'),
       require('../assets/Images/country/country4.jpg'),
     ],
    word: "COUNTRY",
    category: "Music",
    definition:"Country music, style of American popular music that originated in rural areas of the South and West in the early 20th century. The term country and western music (later shortened to country music) was adopted by the recording industry in 1949 to replace the derogatory label hillbilly music. Ultimately, country music's roots lie in the ballads, folk songs, and popular songs of the English, Scots, and Irish settlers of the Appalachians and other parts of the South. In the early 1920s the traditional string-band music of the Southern mountain regions began to be commercially recorded, with Fiddlin' John Carson garnering the genre's first hit record in 1923."
  },
  
  {
    images: [
       require('../assets/Images/opera/opera1.jpg'),
       require('../assets/Images/opera/opera2.jpg'),
       require('../assets/Images/opera/opera3.jpg'),
       require('../assets/Images/opera/opera4.jpg'),
     ],
    word: "OPERA",
    category: "Music",
    definition:"Opera, a staged drama set to music in its entirety, made up of vocal pieces with instrumental accompaniment and usually with orchestral overtures and interludes. In some operas the music is continuous throughout an act; in others it is broken up into discrete pieces, or “numbers,” separated either by recitative (a dramatic type of singing that approaches speech) or by spoken dialogue. This article focuses on opera in the Western tradition. For an overview of opera and operalike traditions in Asia (particularly in China), see the appropriate sections of Chinese music, Japanese music, South Asian arts, and Southeast Asian arts; see also short entries on specific forms of Chinese opera, such as chuanqi, jingxi, kunqu, and nanxi."
  },
  {
    images: [
       require('../assets/Images/hiphop/hiphop1.jpg'),
       require('../assets/Images/hiphop/hiphop2.jpg'),
       require('../assets/Images/hiphop/hiphop3.jpg'),
       require('../assets/Images/hiphop/hiphop4.jpg'),
     ],
    word: "HIPHOP",
    category: "Music",
    definition:"Hip-hop, cultural movement that attained widespread popularity in the 1980s and 90s and also the backing music for rap, the musical style incorporating rhythmic and/or rhyming speech that became the movement's most lasting and influential art form."
  },
  {
    images: [
       require('../assets/Images/afrobeat/afrobeat1.jpg'),
       require('../assets/Images/afrobeat/afrobeat2.jpg'),
       require('../assets/Images/afrobeat/afrobeat3.jpg'),
       require('../assets/Images/afrobeat/afrobeat4.jpg'),
     ],
    word: "AFROBEAT",
    category: "Music",
    definition:"Afrobeat (also known as Afrofunk) is a Nigerian music genre that involves the combination of West African musical styles from mainly Nigeria such as the traditional Yoruba and Igbo music and highlife with American funk, jazz, and soul influences."
  },
  {
   images: [
      require('../assets/Images/fantasy/fantasy1.jpg'),
      require('../assets/Images/fantasy/fantasy2.jpg'),
      require('../assets/Images/fantasy/fantasy3.jpg'),
      require('../assets/Images/fantasy/fantasy4.jpg'),
    ],
   word: "FANTASY",
   category: "Movies",
   definition:"Fantasy, imaginative fiction dependent for effect on strangeness of setting (such as other worlds or times) and of characters (such as supernatural or unnatural beings). Examples include William Shakespeare's A Midsummer Night's Dream, Jonathan Swift's Gulliver's Travels, J.R.R. Tolkien's The Lord of the Rings, and T.H. White's The Once and Future King. Fantasy is set in an imaginary world and features the magic of mythical beings."
 },

 {
    images: [
       require('../assets/Images/scifi/scifi1.jpg'),
       require('../assets/Images/scifi/scifi2.jpg'),
       require('../assets/Images/scifi/scifi3.jpg'),
       require('../assets/Images/scifi/scifi4.jpg'),
     ],
    word: "SCIFI",
    category: "Movies",
    definition:"Science fiction, popularly shortened as sci-fi, is a genre of fiction that creatively depicts real or imaginary science and technology as part of its plot, setting, or theme. The fiction part of science fiction means, of course, that it's a fictional story—not a real-life account."
  },
  {
    images: [
       require('../assets/Images/horror/horror1.jpg'),
       require('../assets/Images/horror/horror2.jpg'),
       require('../assets/Images/horror/horror3.jpg'),
       require('../assets/Images/horror/horror4.jpg'),
     ],
    word: "HORROR",
    category: "Movies",
    definition:"Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes. Horror films often explore dark subject matter and may deal with transgressive topics or themes. Broad elements include monsters, apocalyptic events, and religious or folk beliefs."
  },
  
  {
    images: [
       require('../assets/Images/action/action1.jpg'),
       require('../assets/Images/action/action2.jpg'),
       require('../assets/Images/action/action3.jpg'),
       require('../assets/Images/action/action4.jpg'),
     ],
    word: "ACTION",
    category: "Movies",
    definition: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, and frantic chases."
  },
  {
    images: [
       require('../assets/Images/musical/musical1.jpg'),
       require('../assets/Images/musical/musical2.jpg'),
       require('../assets/Images/musical/musical3.jpg'),
       require('../assets/Images/musical/musical4.jpg'),
     ],
    word: "MUSICAL",
    category: "Movies",
    definition:"Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by dancing. The songs usually advance the plot or develop the film's characters, but in some cases, they serve merely as breaks in the storyline, often as elaborate production numbers"
  },
  {
    images: [
       require('../assets/Images/ballet/ballet1.jpg'),
       require('../assets/Images/ballet/ballet2.jpg'),
       require('../assets/Images/ballet/ballet3.jpg'),
       require('../assets/Images/ballet/ballet4.jpg'),
     ],
    word: "BALLET",
    category: "Dance",
    definition:"Ballet, theatrical dance in which a formal academic dance technique—the danse d'école—is combined with other artistic elements such as music, costume, and stage scenery. The academic technique itself is also known as ballet. This article surveys the history of ballet."
  },
  {
   images: [
      require('../assets/Images/tango/tango1.jpg'),
      require('../assets/Images/tango/tango2.jpg'),
      require('../assets/Images/tango/tango3.jpg'),
      require('../assets/Images/tango/tango44.jpg'),
    ],
   word: "TANGO",
   category: "Dance",
   definition:"Tango, is a ballroom dance of Latin American origin in ²/₄ time with a basic pattern of step-step-step-step-close and characterized by long pauses and stylized body positions."
 },

 {
    images: [
       require('../assets/Images/belly/belly1.jpg'),
       require('../assets/Images/belly/belly2.jpg'),
       require('../assets/Images/belly/belly3.jpg'),
       require('../assets/Images/belly/belly4.jpg'),
     ],
    word: "BELLY",
    category: "Dance",
    definition:"Belly dance is a Middle Eastern dance that originated in Egypt, which features movements of the hips and torso. It has evolved to take many different forms depending on the country and region, both in costume and dance style; with the Egyptian styles and costumes being the most recognized worldwide due to Egyptian cinema. Belly dancing in its various styles and forms is popular worldwide with many schools around the globe practicing it."
  },
  {
    images: [
       require('../assets/Images/tap/tap1.jpg'),
       require('../assets/Images/tap/tap2.jpg'),
       require('../assets/Images/tap/tap3.jpg'),
       require('../assets/Images/tap/tap4.jpg'),
     ],
    word: "TAP",
    category: "Dance",
    definition:"Tap dance is a form of dance which uses the sounds of tap shoes striking the floor as a form of percussion; it is often accompanied by music. Tap dancing can also be a cappella, with no musical accompaniment; the sound of the taps is its own music.It is an American art form that began with the combination of West African and British dance traditions: British soft-shoe and hard-shoe step dances and a variety of secular and religious African step dances. The fusion of African rhythms and performance styles with European techniques of footwork led to the creation of tap dance. This fusion began in the mid-17th century but did not become popular until the mid-19th century."
  },
  
  {
    images: [
       require('../assets/Images/moonwalk/moonwalk1.jpg'),
       require('../assets/Images/moonwalk/moonwalk2.jpg'),
       require('../assets/Images/moonwalk/moonwalk3.jpg'),
       require('../assets/Images/moonwalk/moonwalk4.jpg'),
     ],
    word: "MOONWALK",
    category: "Dance",
    definition:"The moonwalk, or backslide, is a popping dance move in which the performer glides backwards but their body actions suggest forward motion. It became popular around the world when Michael Jackson performed the move during the performance of Billie Jean on Motown 25: Yesterday, Today, Forever, which was broadcast in 1983. He included the moonwalk in tours and live performances."
  },

  {
    images: [
       require('../assets/Images/chapel/chapel1.jpg'),
       require('../assets/Images/chapel/chapel2.jpg'),
       require('../assets/Images/chapel/chapel3.jpg'),
       require('../assets/Images/chapel/chapel4.jpg'),
     ], 
    word: "CHAPEL",
    category: "Religion",
    definition:"A chapel (from Latin: cappella) is a Christian place of prayer and worship that is usually relatively small. The term has several meanings. First, smaller spaces inside a church that have their own altar are often called chapels; the Lady chapel is a common type of these. Second, a chapel is a place of worship, sometimes interfaith, that is part of a building, complex, or vessel with some other main purpose, such as a school, college, hospital, palace or large aristocratic house, castle, barracks, prison, funeral home, cemetery, airport, or a military or commercial ship."
  },
  {
    images: [
       require('../assets/Images/buddha/buddha1.jpg'),
       require('../assets/Images/buddha/buddha2.jpg'),
       require('../assets/Images/buddha/buddha3.jpg'),
       require('../assets/Images/buddha/buddha4.jpg'),
     ],
    word: "BUDDHA",
    category: "Religion",
    definition:"Siddhartha Gautama, most commonly referred to as the Buddha ('the awakened'), was a wandering ascetic and religious teacher who lived in South Asia during the 6th or 5th century BCE and founded Buddhism. According to Buddhist legends, he was born in Lumbini, in what is now Nepal, to royal parents of the Shakya clan, but renounced his home life to live as a wandering ascetic. After leading a life of mendicancy, asceticism, and meditation, he attained nirvana at Bodh Gaya in what is now India. The Buddha then wandered through the lower Indo-Gangetic Plain, teaching and building a monastic order. He died in Kushinagar, reaching parinirvana, final extinction."
  },
  {
   images: [
      require('../assets/Images/shrine/shrine1.jpg'),
      require('../assets/Images/shrine/shrine2.jpg'),
      require('../assets/Images/shrine/shrine3.jpg'),
      require('../assets/Images/shrine/shrine4.jpg'),
    ],
   word: "SHRINE",
   category: "Religion",
   definition: "A shrine is a sacred or holy space dedicated to a specific deity, ancestor, hero, martyr, saint, daemon, or similar figure of respect, wherein they are venerated or worshipped. Shrines often contain idols, relics, or other such objects associated with the figure being venerated."
 },

 {
    images: [
       require('../assets/Images/cardinal/cardinal1.jpg'),
       require('../assets/Images/cardinal/cardinal2.jpg'),
       require('../assets/Images/cardinal/cardinal3.jpg'),
       require('../assets/Images/cardinal/cardinal4.png'),
     ],
    word: "CARDINAL",
    category: "Religion",
    definition:"A cardinal is a senior member of the clergy of the Catholic Church. Cardinals are created by the pope and typically hold the title for life. Collectively, they constitute the College of Cardinals."
  },
  {
    images: [
       require('../assets/Images/hijab/hijab1.jpg'),
       require('../assets/Images/hijab/hijab2.jpg'),
       require('../assets/Images/hijab/hijab3.jpg'),
       require('../assets/Images/hijab/hijab4.jpg'),
     ],
    word: "HIJAB",
    category: "Religion",
    definition:"Hijab, garment worn by some Muslim women to cover their hair. By the 21st century this meaning had become more familiar in Muslim-minority societies than the broader concept of hijab as a practice observed by both Muslim men and women of wearing conservative clothing."
  },
  
  {
    images: [
       require('../assets/Images/chemist/chemist1.jpg'),
       require('../assets/Images/chemist/chemist2.jpg'),
       require('../assets/Images/chemist/chemist3.jpg'),
       require('../assets/Images/chemist/chemist4.jpg'),
     ],
    word: "CHEMIST",
    category: "Career",
    definition: "A chemist (from Greek chēm(ía) alchemy; replacing chymist from Medieval Latin alchemist) is a graduated scientist trained in the study of chemistry, or an officially enrolled student in the relevant field. Chemists study the composition of matter and its properties. Chemists carefully describe the properties they study in terms of quantities, with detail on the level of molecules and their component atoms. Chemists carefully measure substance proportions, chemical reaction rates, and other chemical properties. In Commonwealth English, pharmacists are often called chemists."
  },
  {
    images: [
       require('../assets/Images/violist/violist1.jpg'),
       require('../assets/Images/violist/violist2.jpg'),
       require('../assets/Images/violist/violist3.jpg'),
       require('../assets/Images/violist/violist4.jpg'),
     ],
    word: "VIOLIST",
    category: "Career",
    definition: "A violist is a person that plays the viola. The viola is a string instrument that is usually bowed. Slightly larger than a violin, it has a lower and deeper sound. Since the 18th century, it has been the middle or alto voice of the violin family, between the violin (which is tuned a perfect fifth higher) and the cello (which is tuned an octave lower). The strings from low to high are typically tuned to C3, G3, D4, and A4."
  },

  {
    images: [
       require('../assets/Images/surgeon/surgeon1.jpg'),
       require('../assets/Images/surgeon/surgeon2.jpg'),
       require('../assets/Images/surgeon/surgeon3.jpg'),
       require('../assets/Images/surgeon/surgeon4.jpg'),
     ],
    word: "SURGEON",
    category: "Career",
    definition: "In modern medicine, a surgeon is a medical doctor who performs surgery. Although there are different traditions in different times and places, a modern surgeon is also a licensed physician or received the same medical training as physicians before specializing in surgery. In some countries and jurisdictions, the title of 'surgeon' is restricted to maintain the integrity of the craft group in the medical profession. A specialist medically trained surgeon is to be distinguished from surgeons in podiatry, dentistry, and veterinary medicine. It is estimated that surgeons perform over 300 million surgical procedures globally each year."
  },

  {
    images: [
       require('../assets/Images/stylist/stylist1.jpg'),
       require('../assets/Images/stylist/stylist2.jpg'),
       require('../assets/Images/stylist/stylist3.jpg'),
       require('../assets/Images/stylist/stylist4.jpg'),
     ],
    word: "STYLIST",
    category: "Career",
    definition: "Stylist, is a person whose job is to arrange, shape, or design something, such as a person's hair or wardrobe."
  },

  {
    images: [
       require('../assets/Images/theater/theater1.jpg'),
       require('../assets/Images/theater/theater2.jpg'),
       require('../assets/Images/theater/theater3.jpg'),
       require('../assets/Images/theater/theater4.jpg'),
     ],
    word: "THEATRE",
    category: "Career",
    definition: "Theatre or theater is a collaborative form of performing art that uses live performers, usually actors or actresses, to present the experience of a real or imagined event before a live audience in a specific place, often a stage. The performers may communicate this experience to the audience through combinations of gesture, speech, song, music, and dance. It is the oldest form of drama, though live theatre has now been joined by modern recorded forms. Elements of art, such as painted scenery and stagecraft such as lighting are used to enhance the physicality, presence and immediacy of the experience."
  },

  {
    images: [
       require('../assets/Images/phoenix/phoenix1.jpg'),
       require('../assets/Images/phoenix/phoenix2.jpg'),
       require('../assets/Images/phoenix/phoenix3.jpg'),
       require('../assets/Images/phoenix/phoenix4.jpg'),
     ],
    word: "PHOENIX",
    category: "Comics",
    definition: "The Phoenix Force is among the most feared beings in all of existence. it can cut, re-grow, or destroy any part of the universe. It has been described as being the embodiment of the very passion of Creation—the spark that gave life to the Universe, the flame that will ultimately consume it."
  },

  {
    images: [
       require('../assets/Images/gotham/gotham1.jpg'),
       require('../assets/Images/gotham/gotham2.jpg'),
       require('../assets/Images/gotham/gotham3.jpg'),
       require('../assets/Images/gotham/gotham4.jpg'),
     ],
    word: "GOTHAM",
    category: "Comics",
    definition: "Gotham City or simply Gotham, is a fictional city appearing in American comic books published by DC Comics, best known as the home of the superhero, Batman, and his allies and foes. Created by writer Bill Finger and artist Bob Kane, the city was first identified as Batman's place of residence in Batman #4 (December 1940) and has since been the primary setting for stories featuring the character. Gotham City is traditionally depicted as being located in the U.S. state of New Jersey. Gotham's look and atmosphere was primarily influenced by New York City. Architect Hugh Ferriss' designs also influenced the look and emotional feel of Gotham City, particularly in its later depictions. Bill Finger said that he chose the name 'Gotham', and not New York, so that all readers in any city could identify with it."
  },

  {
    images: [
       require('../assets/Images/lanterns/lanterns1.jpg'),
       require('../assets/Images/lanterns/lanterns2.jpg'),
       require('../assets/Images/lanterns/lanterns3.jpg'),
       require('../assets/Images/lanterns/lanterns4.jpg'),
     ],
    word: "LANTERNS",
    category: "Comics",
    definition: "The Lantern Corps are organizations that harness the Emotional Electromagnetic Spectrum. Originally just the Green Lantern Corps, it has since expanded with the Red, Orange, Yellow, Blue, Indigo and Violet, as well as the Black, White and Ultraviolet. "
  },

  {
    images: [
       require('../assets/Images/avengers/avengers1.jpg'),
       require('../assets/Images/avengers/avengers2.jpg'),
       require('../assets/Images/avengers/avengers3.jpg'),
       require('../assets/Images/avengers/avengers4.jpg'),
     ],
    word: "AVENGERS",
    category: "Comics",
    definition: "The Avengers Initiative was the brainchild of S.H.I.E.L.D. Director Nick Fury. He first approached Tony Stark with the idea, following Tony's defeat of Obadiah Stane and his subsequent public announcement that he was Iron Man. Fury kept his eye on several potential members, as Bruce Banner struggled with life as the Hulk, the Asgardian Thor appeared on Earth, and Steve Rogers, AKA World War II hero Captain America, was discovered alive decades after his apparent death. In the meantime, some of S.H.I.E.L.D.'s most skilled members, Black Widow (Natasha Romanoff), and Hawkeye (Clint Barton), were making a name for themselves and impressing Fury."
  },

  {
    images: [
       require('../assets/Images/atlantis/atlantis1.jpg'),
       require('../assets/Images/atlantis/atlantis2.jpg'),
       require('../assets/Images/atlantis/atlantis3.jpg'),
       require('../assets/Images/atlantis/atlantis4.jpg'),
     ],
    word: "ATLANTIS",
    category: "Comics",
    definition: "Atlantis is a British fantasy-adventure television programme inspired by Greek mythology and created by Johnny Capps and Julian Murphy with Howard Overman. It premiered on 28 September 2013 on BBC One. In the show, submarine pilot Jason washes up on the shores of legendary Atlantis and must navigate the powerful leaders of the mythological realm. Atlantis was the biggest new Saturday night drama series launch across all BBC channels since 2006, even up on the launch of hit show Merlin. It also managed to draw 1 million viewers away from the highly popular ITV show The X Factor, which aired at the same time in the UK. On 26 October 2013, BBC One ordered a second series of the show, which began airing on 15 November 2014. On 23 January 2015, it was announced that the series had been cancelled"
  },

  {
    images: [
       require('../assets/Images/casual/casual1.jpg'),
       require('../assets/Images/casual/casual2.jpg'),
       require('../assets/Images/casual/casual3.jpg'),
       require('../assets/Images/casual/casual4.jpg'),
     ],
    word: "CASUAL",
    category: "Fashion",
    definition: "Casual wear refers to clothing that is relaxed, comfortable, and suitable for everyday activities, socializing, or informal occasions. It typically includes items like t-shirts, jeans, shorts, sweatshirts, hoodies, sneakers, and sandals. Casual wear is often chosen for its comfort and versatility, allowing individuals to move freely and comfortably while maintaining a relaxed and laid-back appearance."
  },

  {
    images: [
       require('../assets/Images/formal/formal1.png'),
       require('../assets/Images/formal/formal2.jpg'),
       require('../assets/Images/formal/formal3.jpg'),
       require('../assets/Images/formal/formal4.jpg'),
     ],
    word: "FORMAL",
    category: "Fashion",
    definition: "Formal wear refers to clothing that is worn for formal events or occasions that require a more polished and sophisticated appearance. This type of attire is typically reserved for events such as weddings, galas, formal dinners, award ceremonies, or business functions where a certain level of decorum is expected. Formal wear often includes garments such as suits, tuxedos, evening gowns, cocktail dresses."
  },

  {
    images: [
       require('../assets/Images/couture/couture1.jpg'),
       require('../assets/Images/couture/couture2.jpg'),
       require('../assets/Images/couture/couture3.jpg'),
       require('../assets/Images/couture/couture4.jpg'),
     ],
    word: "COUTURE",
    category: "Fashion",
    definition: "Couture is a term used in the fashion industry to refer to high-end, custom-made clothing that is created by skilled artisans and designers. It originates from the French word couture which means sewing or dressmaking. Couture garments are typically handmade with meticulous attention to detail and craftsmanship, using high-quality fabrics, intricate embellishments, and precise tailoring techniques."
  },

  {
    images: [
       require('../assets/Images/gothic/gothic1.jpg'),
       require('../assets/Images/gothic/gothic2.jpg'),
       require('../assets/Images/gothic/gothic3.jpg'),
       require('../assets/Images/gothic/gothic4.jpg'),
     ],
    word: "GOTHIC",
    category: "Fashion",
    definition: "Gothic wear refers to clothing styles associated with the goth subculture, which originated in the late 1970s and early 1980s as a subgenre of post-punk music. Goth fashion is characterized by its dark, dramatic aesthetic and often draws inspiration from Victorian, medieval, and punk styles."
  },

  {
    images: [
       require('../assets/Images/vintage/vintage1.jpg'),
       require('../assets/Images/vintage/vintage2.jpg'),
       require('../assets/Images/vintage/vintage3.jpg'),
       require('../assets/Images/vintage/vintage4.jpg'),
     ],
    word: "VINTAGE",
    category: "Fashion",
    definition: "Vintage Wear, Clothing from previous decades or eras that is considered fashionable and trendy. Vintage wear encompasses a wide range of styles, from retro-inspired garments to authentic pieces from specific time periods."
  },

  {
    images: [
       require('../assets/Images/bohemian/bohemian1.jpg'),
       require('../assets/Images/bohemian/bohemian2.jpg'),
       require('../assets/Images/bohemian/bohemian3.jpg'),
       require('../assets/Images/bohemian/bohemian4.jpg'),
     ],
    word: "BOHEMIAN",
    category: "Fashion",
    definition: "Bohemian fashion, often shortened to is a style inspired by the unconventional and free-spirited lifestyle associated with bohemian culture. Bohemian clothing is characterized by its relaxed, eclectic, and artistic aesthetic, drawing inspiration from various cultures, eras, and natural elements. Key features of bohemian fashion include"
  },


  {
    images: [
       require('../assets/Images/fairy/fairy1.jpg'),
       require('../assets/Images/fairy/fairy2.jpg'),
       require('../assets/Images/fairy/fairy3.jpg'),
       require('../assets/Images/fairy/fairy4.jpg'),
     ],
    word: "FAIRY",
    category: "Creatures",
    definition: "A fairy is a type of mythical being or legendary creature, generally described as anthropomorphic, found in the folklore of multiple European cultures, a form of spirit, often with metaphysical, supernatural, or preternatural qualities."
  },

  {
    images: [
       require('../assets/Images/goblin/goblin1.jpg'),
       require('../assets/Images/goblin/goblin2.jpg'),
       require('../assets/Images/goblin/goblin3.jpg'),
       require('../assets/Images/goblin/goblin4.jpg'),
     ],
    word: "GOBLIN",
    category: "Creatures",
    definition: "Goblins supposedly live in grottoes but attach themselves to households, where they are believed to bang upon pots and pans, snatch nightclothes off the bodies of sleeping people, move furniture at night, and flee after rapping on walls and doors."
  },

  {
    images: [
       require('../assets/Images/dragon/dragon1.jpg'),
       require('../assets/Images/dragon/dragon2.jpg'),
       require('../assets/Images/dragon/dragon3.jpg'),
       require('../assets/Images/dragon/dragon4.jpg'),
     ],
    word: "DRAGON",
    category: "Creatures",
    definition: "A dragon is a magical legendary creature that appears in the folklore of multiple cultures worldwide. Beliefs about dragons vary considerably through regions, but dragons in Western cultures since the High Middle Ages have often been depicted as winged, horned, and capable of breathing fire. Dragons in eastern cultures are usually depicted as wingless, four-legged, serpentine creatures with above-average intelligence. Commonalities between dragons' traits are often a hybridization of feline, reptilian, mammalian, and avian features. Some scholars believe large extinct or migrating crocodiles bear the closest resemblance, especially when encountered in forested or swampy areas, and are most likely the template of modern Asian dragon imagery"
  },

  {
    images: [
       require('../assets/Images/elves/elves1.jpg'),
       require('../assets/Images/elves/elves2.jpg'),
       require('../assets/Images/elves/elves3.jpg'),
       require('../assets/Images/elves/elves4.jpg'),
     ],
    word: "ELVES",
    category: "Creatures",
    definition: "Elves were said to possess supernatural qualities which could be used to create good deeds such as healing, or bad deeds such as creating illnesses. Female elves were seen to have magical qualities and could trap young men through their charms. Elves were often believed to be immortal beings. An elf sitting in a tree."
  },

  {
    images: [
       require('../assets/Images/vampire/vampire1.jpg'),
       require('../assets/Images/vampire/vampire2.jpg'),
       require('../assets/Images/vampire/vampire3.jpg'),
       require('../assets/Images/vampire/vampire4.jpg'),
     ],
    word: "VAMPIRE",
    category: "Creatures",
    definition: "A vampire is a mythical creature that subsists by feeding on the vital essence (generally in the form of blood) of the living. In European folklore, vampires are undead creatures that often visited loved ones and caused mischief or deaths in the neighbourhoods which they inhabited while they were alive. They wore shrouds and were often described as bloated and of ruddy or dark countenance, markedly different from today's gaunt, pale vampire which dates from the early 19th century. Vampiric entities have been recorded in cultures around the world; the term vampire was popularized in Western Europe after reports of an 18th-century mass hysteria of a pre-existing folk belief in Southeastern and Eastern Europe that in some cases resulted in corpses being staked and people being accused of vampirism. "
  },

 

  {
    images: [
       require('../assets/Images/cruise/cruise1.jpg'),
       require('../assets/Images/cruise/cruise2.jpg'),
       require('../assets/Images/cruise/cruise3.jpg'),
       require('../assets/Images/cruise/cruise4.jpg'),
     ],
    word: "CRUISE",
    category: "Lifestyle",
    definition: "A cruise typically refers to a voyage or journey, especially one taken for pleasure or leisure, on a large passenger ship or vessel. These ships are specifically designed to accommodate passengers for extended periods, offering various amenities and facilities for entertainment, dining, and relaxation. Cruises often travel along predetermined routes, visiting multiple destinations, which may include coastal cities, islands, or other scenic locations."
  },

  {
    images: [
       require('../assets/Images/rafting/rafting1.jpg'),
       require('../assets/Images/rafting/rafting2.jpg'),
       require('../assets/Images/rafting/rafting3.jpg'),
       require('../assets/Images/rafting/rafting4.jpg'),
     ],
    word: "RAFTING",
    category: "Lifestyle",
    definition: "Rafting and whitewater rafting are recreational outdoor activities which use an inflatable raft to navigate a river or other body of water. This is often done on whitewater or different degrees of rough water. Dealing with risk is often a part of the experience. This activity as an adventure sport has become popular since the 1950s, if not earlier, evolving from individuals paddling 10 feet (3.0 m) to 14 feet (4.3 m) rafts with double-bladed paddles or oars to multi-person rafts propelled by single-bladed paddles and steered by a person at the stern, or by the use of oars"
  },

  {
    images: [
       require('../assets/Images/workout/workout1.jpg'),
       require('../assets/Images/workout/workout2.jpg'),
       require('../assets/Images/workout/workout3.jpg'),
       require('../assets/Images/workout/workout4.jpg'),
     ],
    word: "WORKOUT",
    category: "Lifestle",
    definition: "A workout, also known as exercise or physical activity, refers to a planned and structured session of physical exertion aimed at improving or maintaining physical fitness, health, and overall well-being. Workouts typically involve various forms of movements, such as cardiovascular exercises (e.g., running, cycling), strength training (e.g., weightlifting, bodyweight exercises), flexibility exercises (e.g., stretching, yoga), or a combination of these."
  },

  {
    images: [
       require('../assets/Images/seminar/seminar1.jpg'),
       require('../assets/Images/seminar/seminar2.jpg'),
       require('../assets/Images/seminar/seminar3.jpg'),
       require('../assets/Images/seminar/seminar4.jpg'),
     ],
    word: "SEMINAR",
    category: "Lifestyle",
    definition: "A seminar is a structured meeting or gathering where individuals come together to discuss a particular topic, exchange ideas, share knowledge, and engage in interactive learning. Seminars are often organized for educational, professional, or informational purposes and may vary in size and format, ranging from small group discussions to larger, more formal presentations."
  },

  {
    images: [
       require('../assets/Images/leisure/leisure1.jpg'),
       require('../assets/Images/leisure/leisure2.jpg'),
       require('../assets/Images/leisure/leisure3.jpg'),
       require('../assets/Images/leisure/leisure4.jpg'),
     ],
    word: "LEISURE",
    category: "Lifestyle",
    definition: "Leisure refers to the time and activities that individuals engage in for relaxation, enjoyment, and personal satisfaction outside of work, responsibilities, or obligations. It encompasses a wide range of recreational, entertainment, and leisurely pursuits that people undertake during their free time. Leisure activities vary greatly from person to person and can be pursued individually or in groups, depending on personal preferences, interests, and available resources."
  },

  {
    images: [
       require('../assets/Images/oscars/oscars1.jpg'),
       require('../assets/Images/oscars/oscars2.jpg'),
       require('../assets/Images/oscars/oscars3.jpg'),
       require('../assets/Images/oscars/oscars4.jpg'),
     ],
    word: "OSCARS",
    category: "Pop-culture",
    definition: "The Oscars, formally known as the Academy Awards, is an annual awards ceremony honoring outstanding achievements in the film industry. Organized by the Academy of Motion Picture Arts and Sciences (AMPAS), the Oscars recognize excellence in various categories, including acting, directing, writing, cinematography, editing, and production design, among others."
  },

  {
    images: [
       require('../assets/Images/rupaul/rupaul1.jpg'),
       require('../assets/Images/rupaul/rupaul2.jpg'),
       require('../assets/Images/rupaul/rupaul3.jpg'),
       require('../assets/Images/rupaul/rupaul4.jpg'),
     ],
    word: "RUPAUL",
    category: "Pop-culture",
    definition: "RuPaul, born RuPaul Andre Charles, is an American drag queen, actor, model, singer, songwriter, and television personality. He is best known for his influential contributions to drag culture and for hosting the reality competition television series RuPaul's Drag Race."
  },

  {
    images: [
       require('../assets/Images/concert/concert1.jpg'),
       require('../assets/Images/concert/concert2.jpg'),
       require('../assets/Images/concert/concert3.jpg'),
       require('../assets/Images/concert/concert4.jpg'),
     ],
    word: "CONCERT",
    category: "Pop-culture",
    definition: "A concert is a live musical performance where musicians, singers, or bands perform in front of an audience. Concerts can vary in scale and format, ranging from small, intimate performances in clubs or coffeehouses to large-scale stadium or arena shows. They provide an opportunity for artists to showcase their talents, connect with fans, and create memorable experiences through music."
  },

  {
    images: [
       require('../assets/Images/premier/premier1.jpg'),
       require('../assets/Images/premier/premier2.jpg'),
       require('../assets/Images/premier/premier3.jpg'),
       require('../assets/Images/premier/premier4.png'),
     ],
    word: "PREMIERE",
    category: "Pop-culture",
    definition: "A premiere refers to the first public presentation or showing of a new movie, television show, play, musical composition, or other artistic work. It is an event that marks the debut or release of the work to the public, often attended by the creators, cast, crew, and invited guests, as well as members of the media and industry professionals."
  },

  {
    images: [
       require('../assets/Images/campaign/campaign1.jpg'),
       require('../assets/Images/campaign/campaign2.jpg'),
       require('../assets/Images/campaign/campaign3.jpg'),
       require('../assets/Images/campaign/campaign4.jpg'),
     ],
    word: "CAMPAIGN",
    category: "Politics",
    definition: "A campaign refers to a coordinated series of planned activities, efforts, or actions undertaken to achieve a specific goal, objective, or outcome within a defined timeframe. Campaigns are commonly used in various contexts, including marketing, advertising, politics, advocacy, fundraising, and social causes, among others. They involve strategic planning, implementation, and evaluation to effectively reach and engage target audiences and drive desired results."
  },

  {
    images: [
       require('../assets/Images/monarch/monarch1.jpg'),
       require('../assets/Images/monarch/monarch2.jpg'),
       require('../assets/Images/monarch/monarch3.jpg'),
       require('../assets/Images/monarch/monarch4.jpg'),
     ],
    word: "MONARCH",
    category: "Politics",
    definition: "A monarch is a ruler who holds supreme authority and power over a state or territory. Monarchs may inherit their position through hereditary means, such as being born into a royal family, or they may acquire it through other means, such as election or appointment. Monarchs can have varying levels of authority, ranging from absolute monarchs who wield unlimited power to constitutional monarchs who serve as ceremonial figureheads with limited or symbolic authority, while the actual governance is carried out by elected officials or a separate branch of government."
  },

  {
    images: [
       require('../assets/Images/ballot/ballot1.jpg'),
       require('../assets/Images/ballot/ballot2.jpg'),
       require('../assets/Images/ballot/ballot3.jpg'),
       require('../assets/Images/ballot/ballot4.jpg'),
     ],
    word: "BALLOT",
    category: "Politics",
    definition: "A ballot is a method used in voting, where individuals cast their votes by marking or selecting choices on a paper, electronic device, or ballot sheet. It's a fundamental tool in democratic elections, allowing citizens to express their preferences for candidates or issues."
  },

  {
    images: [
       require('../assets/Images/nazist/nazist1.png'),
       require('../assets/Images/nazist/nazist2.jpg'),
       require('../assets/Images/nazist/nazist3.jpg'),
       require('../assets/Images/nazist/nazist4.jpg'),
     ],
    word: "NAZISM",
    category: "Politics",
    definition: "Nazism, the ideology and practices associated with the National Socialist German Workers' Party (NSDAP) under Adolf Hitler's leadership in Germany during the 1930s and 1940s. Nazism was characterized by extreme nationalism, authoritarianism, racism, anti-Semitism, and the pursuit of a totalitarian state."
  },

  {
    images: [
       require('../assets/Images/democrat/democrat1.png'),
       require('../assets/Images/democrat/democrat2.jpg'),
       require('../assets/Images/democrat/democrat3.jpg'),
       require('../assets/Images/democrat/democrat4.jpg'),
     ],
    word: "DEMOCRAT",
    category: "Politics",
    definition: "Democrat typically refers to a member or supporter of the Democratic Party, one of the two major political parties in the United States. The Democratic Party is generally associated with positions such as support for social welfare programs, environmental protection, labor rights, and progressive taxation. Democrats often advocate for policies aimed at addressing income inequality, expanding healthcare access, promoting civil rights, and advancing environmental sustainability."
  },

  {
    images: [
       require('../assets/Images/ranch/ranch1.jpg'),
       require('../assets/Images/ranch/ranch2.jpg'),
       require('../assets/Images/ranch/ranch3.jpg'),
       require('../assets/Images/ranch/ranch4.jpg'),
     ],
    word: "RANCH",
    category: "Architecture",
    definition: "A ranch is a large farm, especially in the western United States and Canada, typically devoted to raising cattle or other livestock. Ranches can vary in size from a few hundred acres to thousands of acres and may include land for grazing, as well as facilities for managing and tending to the animals. Ranching often involves activities such as herding, branding, feeding, and caring for the livestock. In addition to cattle, some ranches may also raise horses, sheep, goats, or other animals, and may engage in other agricultural activities or recreational pursuits."
  },

  {
    images: [
       require('../assets/Images/attic/attic1.jpg'),
       require('../assets/Images/attic/attic2.jpg'),
       require('../assets/Images/attic/attic3.jpg'),
       require('../assets/Images/attic/attic4.jpg'),
     ],
    word: "ATTIC",
    category: "Architecture",
    definition: "An attic is a space found directly below the pitched roof of a house or other building. It is typically used for storage or as an extra room, but its usage can vary depending on the design and layout of the building. Attics are often accessed by a hatch or pull-down staircase from the floor below. They may have flooring for storage or even be finished with walls and windows to create additional living space. Attics can be found in a wide range of structures, from single-family homes to apartment buildings and commercial properties."
  },

  {
    images: [
       require('../assets/Images/duplex/duplex1.jpg'),
       require('../assets/Images/duplex/duplex2.jpg'),
       require('../assets/Images/duplex/duplex3.jpg'),
       require('../assets/Images/duplex/duplex4.jpg'),
     ],
    word: "DUPLEX",
    category: "Architecture",
    definition: "A duplex is a residential building that contains two separate housing units, typically side by side, with each unit occupying a separate floor. These units can have separate entrances, or they may share a common entrance and hallway before branching off into their respective living spaces. Each unit usually has its own kitchen, bathroom(s), bedrooms, and living areas. Duplexes are commonly found in urban and suburban areas and offer a form of housing that provides more privacy and space than apartments or condominiums while still being more affordable and compact than single-family homes. They can be owned by one individual or family who rents out the other unit, or each unit can be owned separately by different individuals."
  },

  {
    images: [
       require('../assets/Images/manor/manor1.jpg'),
       require('../assets/Images/manor/manor2.jpg'),
       require('../assets/Images/manor/manor3.jpg'),
       require('../assets/Images/manor/manor4.jpg'),
     ],
    word: "MANOR",
    category: "Architecture",
    definition: "A manor is a large country house, typically with lands and other buildings, often belonging to or associated with a wealthy landowner or noble family. In historical contexts, manors were often centers of agricultural production and administration, with the lord of the manor overseeing the estate and its tenants. Manors were common in feudal societies, particularly in medieval Europe, where they served as the economic and social hubs of rural areas. The term manor can also refer more broadly to the landed estate or the administrative district associated with the manor house."
  },

  {
    images: [
       require('../assets/Images/cottage/cottage1.jpg'),
       require('../assets/Images/cottage/cottage2.jpg'),
       require('../assets/Images/cottage/cottage3.jpg'),
       require('../assets/Images/cottage/cottage4.jpg'),
     ],
    word: "COTTAGE",
    category: "Architecture",
    definition: "A cottage is a small, typically cozy dwelling, often located in a rural or semi-rural setting. Cottages are usually characterized by their modest size, simple design, and rustic charm. They may be single-story or have a small upper level, and they often feature a pitched roof, quaint windows, and sometimes a porch or veranda. Historically, cottages were the homes of agricultural workers, laborers, or fisherfolk, but today they are often used as vacation homes, weekend getaways, or primary residences for those seeking a quieter, more relaxed lifestyle. Cottages can vary widely in appearance and amenities, ranging from basic and traditional to more modern and luxurious interpretations."
  },

  {
    images: [
       require('../assets/Images/eclipse/eclipse1.jpg'),
       require('../assets/Images/eclipse/eclipse2.jpg'),
       require('../assets/Images/eclipse/eclipse3.jpg'),
       require('../assets/Images/eclipse/eclipse4.jpg'),
     ],
    word: "ECLIPSE",
    category: "Astronomy",
    definition: "An eclipse occurs when one celestial body passes into the shadow of another celestial body, resulting in a temporary dimming or blocking of light. There are two main types of eclipses: solar eclipses and lunar eclipses."
  },

  {
    images: [
       require('../assets/Images/comet/comet1.jpg'),
       require('../assets/Images/comet/comet2.jpg'),
       require('../assets/Images/comet/comet3.jpg'),
       require('../assets/Images/comet/comet4.jpg'),
     ],
    word: "COMET",
    category: "Astronomy",
    definition: "Comets are celestial bodies composed of ice, dust, rocky debris, and organic compounds that orbit the Sun in highly elliptical paths. They are often referred to as dirty snowballs or icy dirtballs because of their composition. Comets are thought to be remnants from the early solar system's formation about 4.6 billion years ago."
  },

  {
    images: [
       require('../assets/Images/asteroid/asteroid1.jpg'),
       require('../assets/Images/asteroid/asteroid2.jpg'),
       require('../assets/Images/asteroid/asteroid3.jpg'),
       require('../assets/Images/asteroid/asteroid4.jpg'),
     ],
    word: "ASTEROID",
    category: "Astronomy",
    definition: "An asteroid is a small rocky body that orbits the Sun, primarily found in the asteroid belt, a region located between the orbits of Mars and Jupiter. Asteroids vary in size from tiny rocky fragments to large bodies several hundred kilometers in diameter. They are remnants from the early solar system's formation and are composed primarily of rock and metal, with some containing organic compounds as well."
  },

  {
    images: [
       require('../assets/Images/nebula/nebula1.jpg'),
       require('../assets/Images/nebula/nebula2.jpg'),
       require('../assets/Images/nebula/nebula3.jpg'),
       require('../assets/Images/nebula/nebula4.jpg'),
     ],
    word: "NEBULA",
    category: "Astronomy",
    definition: "A nebula is a cloud of gas and dust in space. These clouds can vary greatly in size, shape, and composition. Some nebulae are the birthplaces of new stars, while others are the remnants of stars that have reached the end of their lives. The term nebula comes from the Latin word for cloud."
  },

  {
    images: [
       require('../assets/Images/meteor/meteor1.jpg'),
       require('../assets/Images/meteor/meteor2.jpg'),
       require('../assets/Images/meteor/meteor3.jpg'),
       require('../assets/Images/meteor/meteor4.jpg'),
     ],
    word: "METEOR",
    category: "Astronomy",
    definition: "A meteor is a bright streak of light that appears in the night sky when a meteoroid, a small rocky or metallic object from space, enters Earth's atmosphere and burns up due to friction with the air. Meteors are often colloquially referred to as shooting stars or falling stars."
  },

  
  {
    images: [
       require('../assets/Images/seed/seed1.jpg'),
       require('../assets/Images/seed/seed2.jpg'),
       require('../assets/Images/seed/seed3.jpg'),
       require('../assets/Images/seed/seed4.jpg'),
     ],
    word: "SEED",
    category: "Plant",
    definition: "a seed is a fertilized ovule containing the embryonic plant and stored food reserves necessary for its initial growth. Seeds are the starting point of plant life cycles and are crucial for crop production and propagation."
  },

  {
    images: [
       require('../assets/Images/botany/botany1.jpg'),
       require('../assets/Images/botany/botany2.jpg'),
       require('../assets/Images/botany/botany3.jpg'),
       require('../assets/Images/botany/botany4.jpg'),
     ],
    word: "BOTANY",
    category: "Plant",
    definition: "Botany is the scientific study of plants, encompassing their physiology, structure, genetics, ecology, distribution, classification, and economic importance. It is a branch of biology that examines various aspects of plant life, ranging from microscopic organisms like algae to complex multicellular organisms like trees. Botanists study plants at different levels, from molecular and cellular biology to ecosystems and global patterns of plant distribution."
  },

  {
    images: [
       require('../assets/Images/shrub/shrub1.jpg'),
       require('../assets/Images/shrub/shrub2.jpg'),
       require('../assets/Images/shrub/shrub3.jpg'),
       require('../assets/Images/shrub/shrub4.jpg'),
     ],
    word: "SHRUB",
    category: "Plant",
    definition: "A shrub is a type of woody plant characterized by multiple stems or branches arising from the base of the plant. Unlike trees, which typically have a single main trunk, shrubs have a more compact and bushy growth habit. Shrubs vary greatly in size, ranging from low-growing ground covers to tall specimens several meters in height. They can be evergreen or deciduous, meaning they may retain their leaves year-round or shed them seasonally"
  },

  {
    images: [
       require('../assets/Images/climber/climber1.jpg'),
       require('../assets/Images/climber/climber2.jpg'),
       require('../assets/Images/climber/climber3.jpg'),
       require('../assets/Images/climber/climber4.jpg'),
     ],
    word: "CLIMBER",
    category: "Plant",
    definition: "A climber, also known as a vine, is a type of plant that grows upward by clinging to or twining around other structures for support. Climbers have specialized structures such as tendrils, twining stems, or clinging roots that enable them to attach themselves to surfaces like walls, fences, trees, or other plants."
  },

  {
    images: [
       require('../assets/Images/foliage/foliage1.jpg'),
       require('../assets/Images/foliage/foliage2.jpg'),
       require('../assets/Images/foliage/foliage3.jpg'),
       require('../assets/Images/foliage/foliage4.jpg'),
     ],
    word: "FOLIAGE",
    category: "Plant",
    definition: "Foliage refers to the leaves of plants collectively, especially on trees and shrubs. It encompasses all the greenery and plant material that is primarily composed of leaves. Foliage plays a crucial role in the ecosystem, as it performs photosynthesis, converting sunlight into energy and releasing oxygen into the atmosphere. Additionally, foliage contributes to the aesthetics of landscapes, gardens, and natural environments, providing various colors, textures, and shapes."
  },

  {
    images: [
       require('../assets/Images/mobile/mobile1.jpg'),
       require('../assets/Images/mobile/mobile2.jpg'),
       require('../assets/Images/mobile/mobile3.jpg'),
       require('../assets/Images/mobile/mobile4.jpg'),
     ],
    word: "MOBILE",
    category: "Technology",
    definition: "Mobiles, also known as cell phones are portable electronic devices that enable communication over long distances by utilizing a network of specialized base stations. They have evolved significantly since their inception, offering a wide range of features beyond just voice calls, including text messaging, internet browsing, multimedia playback, gaming, photography, and much more."
  },

  {
    images: [
       require('../assets/Images/cloud/cloud1.jpg'),
       require('../assets/Images/cloud/cloud2.jpg'),
       require('../assets/Images/cloud/cloud3.jpg'),
       require('../assets/Images/cloud/cloud4.png'),
     ],
    word: "CLOUD",
    category: "Technology",
    definition: "Cloud upload typically refers to the process of transferring files, data, or information from a local device or network to a remote server or storage system hosted in the cloud. This can be done using various methods, such as web interfaces, dedicated applications, or automated processes."
  },

  {
    images: [
       require('../assets/Images/gadget/gadget1.jpg'),
       require('../assets/Images/gadget/gadget2.jpg'),
       require('../assets/Images/gadget/gadget3.jpg'),
       require('../assets/Images/gadget/gadget4.jpg'),
     ],
    word: "GADGET",
    category: "Technology",
    definition: "A gadget typically refers to a small, specialized electronic device or tool designed for a particular purpose. Gadgets often serve practical functions or provide entertainment and are characterized by their portability and convenience. Examples of gadgets include smartphones, tablets, fitness trackers, smartwatches, digital cameras, portable gaming consoles, and various other electronic devices. Gadgets are commonly associated with modern technology and are often designed to enhance productivity, communication, or leisure activities."
  },

  {
    images: [
       require('../assets/Images/hardware/hardware1.jpg'),
       require('../assets/Images/hardware/hardware2.jpg'),
       require('../assets/Images/hardware/hardware3.jpg'),
       require('../assets/Images/hardware/hardware4.jpg'),
     ],
    word: "HARDWARE",
    category: "Technology",
    definition: "Hardware refers to the physical components of a computer system or electronic device. Unlike software, which encompasses programs, applications, and data, hardware includes tangible objects such as the computer's central processing unit (CPU), memory modules (RAM), storage devices (hard drives, solid-state drives), input/output devices (keyboard, mouse, monitor, printer), and other components necessary for the device to function."
  },

  {
    images: [
       require('../assets/Images/robotics/robotics1.jpg'),
       require('../assets/Images/robotics/robotics2.jpg'),
       require('../assets/Images/robotics/robotics3.jpg'),
       require('../assets/Images/robotics/robotics4.jpg'),
     ],
    word: "ROBOTICS",
    category: "Technology",
    definition: "Robotics is the interdisciplinary field that involves the design, construction, operation, and use of robots. A robot is a programmable machine capable of carrying out a complex series of actions automatically, especially when controlled by a computer or electronic system."
  },

  {
    images: [
       require('../assets/Images/brown/brown1.jpg'),
       require('../assets/Images/brown/brown2.jpg'),
       require('../assets/Images/brown/brown3.jpg'),
       require('../assets/Images/brown/brown4.jpg'),
     ],
    word: "BROWN",
    category: "Color",
    definition: "Brown typically refers to a color that is a mixture of red, yellow, and black pigments. It is often described as a dark shade of orange or a warm earthy tone. Brown is commonly found in nature, such as in soil, wood, tree bark, and animal fur. It is also frequently used in art, fashion, and interior design for its versatility and ability to evoke feelings of warmth, stability, and naturalness."
  },

  {
    images: [
       require('../assets/Images/yellow/yellow1.jpg'),
       require('../assets/Images/yellow/yellow2.jpg'),
       require('../assets/Images/yellow/yellow3.jpg'),
       require('../assets/Images/yellow/yellow4.jpg'),
     ],
    word: "YELLOW",
    category: "Color",
    definition: "Yellow is a color often associated with brightness, energy, and warmth. It is one of the primary colors in the subtractive color model, along with red and blue, and can be created by mixing red and green light in the additive color model. Yellow is typically perceived as a light hue, but it can vary in intensity from pale to vibrant."
  },

  {
    images: [
       require('../assets/Images/indigo/indigo1.jpg'),
       require('../assets/Images/indigo/indigo2.jpg'),
       require('../assets/Images/indigo/indigo3.jpg'),
       require('../assets/Images/indigo/indigo4.jpg'),
     ],
    word: "INDIGO",
    category: "Color",
    definition: "Indigo is a deep and rich color that falls between blue and violet on the color spectrum. It is often described as a dark purplish-blue or a deep midnight blue. Indigo is derived from the natural dye extracted from the leaves of the indigo plant and has been used historically in textiles, artwork, and various cultural practices."
  },

  {
    images: [
       require('../assets/Images/magenta/magenta1.jpg'),
       require('../assets/Images/magenta/magenta2.jpg'),
       require('../assets/Images/magenta/magenta3.jpg'),
       require('../assets/Images/magenta/magenta4.jpg'),
     ],
    word: "MAGENTA",
    category: "Color",
    definition: "Magenta is a vivid purplish-red color that falls between red and blue on the color spectrum. It is often described as a bright pinkish-purple hue. Magenta is a subtractive primary color, meaning it cannot be created by mixing other colors together. Instead, it is a primary color in the CMYK color model used in printing, along with cyan and yellow."
  },

  {
    images: [
       require('../assets/Images/lavender/lavender1.jpg'),
       require('../assets/Images/lavender/lavender2.jpg'),
       require('../assets/Images/lavender/lavender3.jpg'),
       require('../assets/Images/lavender/lavender4.jpg'),
     ],
    word: "LAVENDER",
    category: "Color",
    definition: "Lavender is a pale shade of purple, often described as a light purple or a bluish-purple hue. It is named after the lavender flower, known for its fragrant and delicate purple blossoms. Lavender is a soothing and calming color that is commonly associated with qualities such as tranquility, relaxation, and mindfulness."
  },

  {
    images: [
       require('../assets/Images/shame/shame1.jpg'),
       require('../assets/Images/shame/shame2.jpg'),
       require('../assets/Images/shame/shame3.jpg'),
       require('../assets/Images/shame/shame4.jpg'),
     ],
    word: "SHAME",
    category: "Emotions",
    definition: "Shame is a complex and powerful emotion that arises from feelings of guilt, embarrassment, or disgrace about one's actions, thoughts, or circumstances. It is often accompanied by a sense of moral or social judgment, leading individuals to feel remorseful or unworthy. Shame can result from both internal self-evaluation and external criticism or social expectations."
  },

  {
    images: [
       require('../assets/Images/relief/relief1.jpg'),
       require('../assets/Images/relief/relief2.jpg'),
       require('../assets/Images/relief/relief3.jpg'),
       require('../assets/Images/relief/relief4.jpg'),
     ],
    word: "RELIEF",
    category: "Emotions",
    definition: "Relief is a feeling of comfort, ease, or reassurance that follows the removal of a burden, stress, or difficulty. It is the sensation of being freed from pain, worry, or anxiety, often accompanied by a sense of relaxation and contentment."
  },

  {
    images: [
       require('../assets/Images/disgust/disgust1.jpg'),
       require('../assets/Images/disgust/disgust2.jpg'),
       require('../assets/Images/disgust/disgust3.jpg'),
       require('../assets/Images/disgust/disgust4.jpg'),
     ],
    word: "DISGUST",
    category: "Emotions",
    definition: "Disgust is a strong aversive emotion characterized by feelings of revulsion, repulsion, or distaste towards something perceived as offensive, unpleasant, or repugnant. It is often accompanied by physical sensations such as nausea, gagging, or recoiling. Disgust serves as a protective mechanism, helping individuals avoid potential sources of harm, contamination, or disease. It can be triggered by various stimuli, including foul odors, tastes, sights, or behaviors that violate social or cultural norms."
  },

  {
    images: [
       require('../assets/Images/empathy/empathy1.jpg'),
       require('../assets/Images/empathy/empathy2.jpg'),
       require('../assets/Images/empathy/empathy3.jpg'),
       require('../assets/Images/empathy/empathy4.jpg'),
     ],
    word: "EMPATHY",
    category: "Emotions",
    definition: "Empathy is the ability to understand and share the feelings, thoughts, and experiences of another person. It involves recognizing and resonating with someone else's emotions, perspectives, and struggles, often leading to a sense of connection, compassion, and understanding. Empathy enables individuals to perceive and respond to the emotions of others with sensitivity, kindness, and support, even if they have not directly experienced the same situation or feelings themselves."
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: "Elation is an intense and exhilarating emotion characterized by feelings of extreme happiness, joy, or jubilation. It is a state of intense excitement and pleasure, often accompanied by a sense of triumph, accomplishment, or euphoria. Elation can arise from various sources, such as achieving a long-sought goal, receiving positive news or recognition, or experiencing a moment of profound happiness or fulfillment. It is marked by a heightened sense of energy, enthusiasm, and optimism, as well as a feeling of being uplifted and invigorated. "
  },

  {
    images: [
       require('../assets/Images/gavel/gavel1.jpg'),
       require('../assets/Images/gavel/gavel2.jpg'),
       require('../assets/Images/gavel/gavel3.jpg'),
       require('../assets/Images/gavel/gavel4.jpg'),
     ],
    word: "GAVEL",
    category: "Instruments",
    definition: "A gavel is a small wooden hammer or mallet typically used by a judge or presiding officer to signal the beginning or end of a session, call for order or attention, or indicate a decision or ruling. Gavels are commonly associated with judicial proceedings, courtrooms, and formal meetings, where they are used as a symbol of authority, control, and impartiality."
  },

  {
    images: [
       require('../assets/Images/cello/cello1.jpg'),
       require('../assets/Images/cello/cello2.jpg'),
       require('../assets/Images/cello/cello3.jpg'),
       require('../assets/Images/cello/cello4.jpg'),
     ],
    word: "CELLO",
    category: "Instruments",
    definition: "A cello, short for violoncello, is a bowed string instrument known for its deep, rich tone and versatile musical capabilities. It is part of the violin family, which also includes the violin, viola, and double bass. The cello is larger than the violin and viola but smaller than the double bass, with a resonating chamber, a neck, and four strings tuned in perfect fifths (C-G-D-A). The cello is played while seated, with the player holding the instrument between their knees and supporting it with an endpin that rests on the floor. The strings are typically played with a bow made of horsehair or with the fingers of the left hand, which press down on the strings to change pitch."
  },

  {
    images: [
       require('../assets/Images/bandage/bandage1.jpg'),
       require('../assets/Images/bandage/bandage2.jpg'),
       require('../assets/Images/bandage/bandage3.jpg'),
       require('../assets/Images/bandage/bandage4.jpg'),
     ],
    word: "BANDAGE",
    category: "Instruments",
    definition: "A bandage is a piece of material used to cover and protect wounds or injuries on the body. It is typically made of soft, flexible fabric or adhesive material and is designed to provide support, compression, and protection to the affected area while allowing it to heal."
  },

  {
    images: [
       require('../assets/Images/crane/crane1.jpg'),
       require('../assets/Images/crane/crane2.jpg'),
       require('../assets/Images/crane/crane3.jpg'),
       require('../assets/Images/crane/crane4.jpg'),
     ],
    word: "CRANE",
    category: "Instruments",
    definition: "A crane is a large, tall machine used for lifting and moving heavy objects or materials. It typically consists of a tall vertical mast or tower, a horizontal boom or jib, and a lifting mechanism, such as a hook, winch, or hoist. Cranes are commonly used in construction, manufacturing, shipping, and other industries that require heavy lifting and precise positioning of materials. "
  },

  {
    images: [
       require('../assets/Images/scaler/scaler1.png'),
       require('../assets/Images/scaler/scaler2.jpg'),
       require('../assets/Images/scaler/scaler3.jpg'),
       require('../assets/Images/scaler/scaler4.jpg'),
     ],
    word: "SCALER",
    category: "Instruments",
    definition: "A scaler is a dental instrument used by dentists and dental hygienists to remove plaque, tartar, and stains from the surfaces of teeth. It typically consists of a thin, pointed metal tip attached to a handle, which vibrates or oscillates at high frequencies to dislodge and scrape away buildup from the teeth."
  },

  {
    images: [
       require('../assets/Images/museum/museum1.jpg'),
       require('../assets/Images/museum/museum2.jpg'),
       require('../assets/Images/museum/museum3.jpg'),
       require('../assets/Images/museum/museum4.jpg'),
     ],
    word: "MUSEUM",
    category: "Tourism",
    definition: "A museum is a cultural institution dedicated to collecting, preserving, studying, and displaying objects of artistic, historical, scientific, or cultural significance for public education and enjoyment. Museums serve as repositories of human knowledge and heritage, providing opportunities for people to explore and learn about the world's diverse cultures, histories, and natural phenomena."
  },

  {
    images: [
       require('../assets/Images/explore/explore1.jpg'),
       require('../assets/Images/explore/explore2.jpg'),
       require('../assets/Images/explore/explore3.jpg'),
       require('../assets/Images/explore/explore4.jpg'),
     ],
    word: "EXPLORE",
    category: "Tourism",
    definition: "To explore is to travel through or investigate an unfamiliar place, idea, concept, or experience in order to discover, learn, or understand more about it. Exploration involves curiosity, discovery, and a willingness to venture into the unknown in search of knowledge, insights, or new perspectives. It can take many forms, including physical travel to distant lands, intellectual inquiry into new subjects, or emotional exploration of one's own thoughts and feelings."
  },

  {
    images: [
       require('../assets/Images/monument/monument1.jpg'),
       require('../assets/Images/monument/monument2.jpg'),
       require('../assets/Images/monument/monument3.jpg'),
       require('../assets/Images/monument/monument4.jpg'),
     ],
    word: "MONUMENT",
    category: "Tourism",
    definition: "A monument is a structure, statue, or other memorial erected to commemorate and honor a person, event, idea, or significant historical or cultural significance. Monuments serve as symbols of remembrance, tribute, and commemoration, preserving the memory of past achievements, sacrifices, or contributions for future generations."
  },

  {
    images: [
       require('../assets/Images/artifact/artifact1.jpg'),
       require('../assets/Images/artifact/artifact2.jpg'),
       require('../assets/Images/artifact/artifact3.jpg'),
       require('../assets/Images/artifact/artifact4.jpg'),
     ],
    word: "ARTIFACT",
    category: "Tourism",
    definition: "An artifact is an object made or modified by humans that has historical, cultural, scientific, or artistic significance. Artifacts provide tangible evidence of past civilizations, societies, or human activities, offering insights into ancient technologies, customs, beliefs, and lifestyles. They are typically found through archaeological excavations, historical research, or cultural preservation efforts and are carefully studied, preserved, and interpreted by scholars and experts."
  },

  {
    images: [
       require('../assets/Images/souvenir/souvenir1.jpg'),
       require('../assets/Images/souvenir/souvenir2.jpg'),
       require('../assets/Images/souvenir/souvenir3.jpg'),
       require('../assets/Images/souvenir/souvenir4.jpg'),
     ],
    word: "SOUVENIR",
    category: "Tourism",
    definition: "A souvenir is a token or keepsake obtained during travels or visits to specific locations, attractions, or events. Typically purchased as a memento or reminder of the experience, souvenirs often encapsulate the essence of the destination or reflect its cultural, historical, or natural characteristics. They come in various forms, including objects, trinkets, apparel, postcards, or handicrafts, and serve as tangible reminders of cherished memories and experiences."
  },

  {
    images: [
       require('../assets/Images/sketch/sketch1.jpg'),
       require('../assets/Images/sketch/sketch2.jpg'),
       require('../assets/Images/sketch/sketch3.jpg'),
       require('../assets/Images/sketch/sketch4.jpg'),
     ],
    word: "SKETCH",
    category: "Art",
    definition: "A sketch is a rough or preliminary drawing or design that serves as a quick visual representation of an idea, concept, or subject. Sketches are often created as a means of exploring and developing artistic or creative concepts, capturing the essence of a scene or object, or planning out more detailed artwork or projects. They can be executed using various drawing tools and techniques, ranging from pencil and paper to digital software."
  },

  {
    images: [
       require('../assets/Images/canvas/canvas1.jpg'),
       require('../assets/Images/canvas/canvas2.jpg'),
       require('../assets/Images/canvas/canvas3.jpg'),
       require('../assets/Images/canvas/canvas4.jpg'),
     ],
    word: "CANVAS",
    category: "Art",
    definition: "A canvas is a sturdy, woven fabric traditionally used as a surface for painting. It typically consists of cotton or linen fibers stretched tightly over a wooden frame to create a flat, firm surface suitable for applying paint. Canvases come in various sizes and shapes, ranging from small panels to large, expansive surfaces, and are widely used by artists for creating paintings and other forms of visual art."
  },

  {
    images: [
       require('../assets/Images/texture/texture1.jpg'),
       require('../assets/Images/texture/texture2.jpg'),
       require('../assets/Images/texture/texture3.jpg'),
       require('../assets/Images/texture/texture4.jpg'),
     ],
    word: "TEXTURE",
    category: "Art",
    definition: "Texture refers to the physical or visual quality of a surface, characterized by its tactile feel or appearance. In art and design, texture plays a crucial role in creating depth, interest, and realism within an artwork or design piece. It can be smooth, rough, bumpy, glossy, matte, soft, or hard, among other characteristics, and can be perceived through touch or visually."
  },

  {
    images: [
       require('../assets/Images/gallery/gallery1.jpg'),
       require('../assets/Images/gallery/gallery2.jpg'),
       require('../assets/Images/gallery/gallery3.jpg'),
       require('../assets/Images/gallery/gallery4.jpg'),
     ],
    word: "GALLERY",
    category: "Art",
    definition: "A gallery typically refers to a space or building specifically designed to display works of art, whether it's paintings, sculptures, photographs, or other forms of visual art. Galleries can vary greatly in size, style, and focus, ranging from small independent art spaces showcasing local artists to large institutions housing vast collections of renowned artworks from various periods and cultures. These spaces serve as platforms for artists to exhibit their creations and for visitors to appreciate and engage with art in a curated environment. Additionally, galleries often host events, openings, and educational programs to further enrich the art experience for the public."
  },

  {
    images: [
       require('../assets/Images/abstract/abstract1.jpg'),
       require('../assets/Images/abstract/abstract2.jpg'),
       require('../assets/Images/abstract/abstract3.jpg'),
       require('../assets/Images/abstract/abstract4.jpg'),
     ],
    word: "ABSTRACT",
    category: "Art",
    definition: "Abstract refers to a style that does not attempt to represent an accurate depiction of visual reality. Instead, abstract art often emphasizes shapes, colors, forms, and gestural marks to convey emotions, ideas, or concepts. Examples of abstract art include the works of artists like Wassily Kandinsky, Piet Mondrian, and Jackson Pollock."
  },

  {
    images: [
       require('../assets/Images/volcano/volcano1.jpg'),
       require('../assets/Images/volcano/volcano2.jpg'),
       require('../assets/Images/volcano/volcano3.jpg'),
       require('../assets/Images/volcano/volcano4.jpg'),
     ],
    word: "VOLCANO",
    category: "Geology",
    definition: "A volcano is a geological feature characterized by an opening or rupture in the Earth's crust through which molten rock, gases, and ash erupt from beneath the surface. Volcanoes can take various forms, including stratovolcanoes, shield volcanoes, and cinder cones, depending on the type of eruption and the composition of the magma. When magma rises to the surface and erupts, it can create lava flows, ash clouds, volcanic gases, and pyroclastic flows, which can pose significant hazards to nearby communities and ecosystems."
  },

  {
    images: [
       require('../assets/Images/mineral/mineral1.jpg'),
       require('../assets/Images/mineral/mineral2.jpg'),
       require('../assets/Images/mineral/mineral3.jpg'),
       require('../assets/Images/mineral/mineral4.jpg'),
     ],
    word: "MINERAL",
    category: "Geology",
    definition: "A mineral is a naturally occurring, inorganic solid substance with a definite chemical composition and a crystalline structure. Minerals are the building blocks of rocks and are formed through various geological processes over millions of years. They can be found in a wide range of environments, including the Earth's crust, oceans, and even outer space."
  },

  {
    images: [
       require('../assets/Images/fossil/fossil1.jpg'),
       require('../assets/Images/fossil/fossil2.jpg'),
       require('../assets/Images/fossil/fossil3.jpg'),
       require('../assets/Images/fossil/fossil4.jpg'),
     ],
    word: "FOSSIL",
    category: "Geology",
    definition: "A fossil is the preserved remains or traces of ancient organisms that lived in the distant past. Fossils can include the remains of plants, animals, fungi, bacteria, and other organisms, as well as imprints or traces of their activities, such as footprints, burrows, or fossilized dung. Fossilization occurs when the remains or traces of an organism are buried in sedimentary rock layers, where they undergo a process of mineralization over time. This process replaces the original organic material with minerals, preserving the structure of the organism or its traces."
  },

  {
    images: [
       require('../assets/Images/strata/strata1.jpg'),
       require('../assets/Images/strata/strata2.jpg'),
       require('../assets/Images/strata/strata3.jpg'),
       require('../assets/Images/strata/strata4.jpg'),
     ],
    word: "STRATA",
    category: "Geology",
    definition: "Strata, in geological terms, refer to layers of rock that have been deposited one above the other over time. These layers represent different periods of geological history and can provide valuable information about past environments, climates, and events. Strata form through various geological processes, including sedimentation, erosion, and tectonic activity. Each layer of strata may contain different types of rocks, fossils, minerals, and other materials, reflecting the conditions under which they were deposited. By studying the sequence and characteristics of strata, geologists can reconstruct the Earth's history and understand how landscapes and ecosystems have changed over millions of years."
  },

  {
    images: [
       require('../assets/Images/glacier/glacier1.jpg'),
       require('../assets/Images/glacier/glacier2.jpg'),
       require('../assets/Images/glacier/glacier3.jpg'),
       require('../assets/Images/glacier/glacier4.jpg'),
     ],
    word: "GLACIER",
    category: "Geology",
    definition: "A glacier is a large mass of ice that forms over many years from the accumulation and compaction of snow in areas where snowfall exceeds snowmelt. Glaciers are typically found in polar regions, mountainous areas, and high-altitude regions, although they can occur at lower latitudes in specific conditions. Glaciers move slowly under the force of gravity, flowing downhill in response to their own weight. This movement, known as glaciation or glacial flow, can cause erosion and the formation of distinct landforms such as valleys, fjords, and cirques. Glaciers also transport large amounts of sediment and rock debris, which they deposit as they melt or retreat."
  },

  {
    images: [
       require('../assets/Images/poseidon/poseidon1.jpg'),
       require('../assets/Images/poseidon/poseidon2.jpg'),
       require('../assets/Images/poseidon/poseidon3.jpg'),
       require('../assets/Images/poseidon/poseidon4.jpg'),
     ],
    word: "POSEIDON",
    category: "Mythology",
    definition: "Poseidon is a figure from Greek mythology, known as the god of the sea, earthquakes, and horses. He is one of the twelve Olympian gods and is often depicted as a powerful and bearded figure holding a trident, a three-pronged spear associated with his domain over the seas.In Greek mythology, Poseidon is the brother of Zeus, the king of the gods, and Hades, the ruler of the underworld. He is the son of Cronus and Rhea. Poseidon is often associated with his role as the ruler of the oceans and is credited with creating earthquakes and storms at sea. He is also considered the protector of sailors and ships, although he can be both benevolent and wrathful, depending on how humans treat him. Poseidon is frequently featured in ancient Greek literature, art, and mythology, where he plays a significant role in various myths and legends. His exploits include contests with other gods, conflicts with mortals, and his involvement in the Trojan War."
  },

  {
    images: [
       require('../assets/Images/ares/ares1.jpg'),
       require('../assets/Images/ares/ares2.jpg'),
       require('../assets/Images/ares/ares3.jpg'),
       require('../assets/Images/ares/ares4.jpg'),
     ],
    word: "ARES",
    category: "Mythology",
    definition: "Ares is a figure from Greek mythology, known as the god of war, violence, and bloodshed. He is one of the twelve Olympian gods and is often depicted as a powerful and fearsome warrior clad in armor, wielding a spear or sword. In Greek mythology, Ares is the son of Zeus, the king of the gods, and Hera, the queen of the gods. He is considered the personification of the brutal and destructive aspects of war, in contrast to Athena, who represents strategic warfare and wisdom in battle. Ares is often portrayed as impulsive, aggressive, and hot-tempered, reveling in the chaos and carnage of warfare. He is frequently involved in conflicts among the gods and mortals, and he is sometimes depicted as a patron of warriors or soldiers. However, Ares is not typically revered or admired in Greek mythology, as his destructive nature often brings suffering and strife to both gods and humans alike."
  },

  {
    images: [
       require('../assets/Images/athena/athena1.jpg'),
       require('../assets/Images/athena/athena2.jpg'),
       require('../assets/Images/athena/athena3.jpg'),
       require('../assets/Images/athena/athena4.jpg'),
     ],
    word: "ATHENA",
    category: "Mythology",
    definition: "Athena is a prominent figure in Greek mythology, revered as the goddess of wisdom, courage, and strategic warfare. Among the twelve Olympian gods, she holds a significant position, often depicted as a powerful and wise deity, clad in armor and wielding a shield and spear. According to Greek myth, Athena was born fully grown and armored from the forehead of her father, Zeus, the king of the gods. She is associated with various aspects of civilization, including arts, crafts, and justice. The city of Athens, in particular, honored Athena as its patron goddess, erecting temples and holding festivals in her honor."
  },

  {
    images: [
       require('../assets/Images/hela/hela1.jpg'),
       require('../assets/Images/hela/hela2.jpg'),
       require('../assets/Images/hela/hela3.jpg'),
       require('../assets/Images/hela/hela4.jpg'),
     ],
    word: "HELA",
    category: "Mythology",
    definition: "Hela is a character from Norse mythology, known as the ruler of Helheim, the realm of the dead in Norse cosmology. In Norse mythology, Hela is described as the daughter of Loki, the trickster god, and the giantess Angrboða. She is depicted as a powerful and formidable figure, often associated with death, decay, and the afterlife. Hela is said to dwell in a realm called Helheim, where she governs over those who have died of natural causes or illness. Her realm is described as a cold and desolate place, reserved for those who did not die in battle and therefore did not ascend to Valhalla, the hall of the slain in Norse mythology. In some accounts, Hela is depicted as having a half-living, half-dead appearance, with one side of her body appearing healthy and vibrant while the other side is decayed and skeletal. She is often portrayed as wielding power over the souls of the dead and is sometimes depicted as a fearsome and relentless figure."
  },

  {
    images: [
       require('../assets/Images/osiris/osiris1.jpg'),
       require('../assets/Images/osiris/osiris2.jpg'),
       require('../assets/Images/osiris/osiris3.jpg'),
       require('../assets/Images/osiris/osiris4.jpg'),
     ],
    word: "OSIRIS",
    category: "Mythology",
    definition: "Osiris is a figure from ancient Egyptian mythology, revered as one of the most important gods in the Egyptian pantheon. He is associated with the afterlife, resurrection, and fertility. Osiris is often depicted as a mummified figure wearing the Atef crown, a symbol of kingship, with green skin symbolizing rebirth and vegetation.In Egyptian mythology, Osiris is the son of the earth god Geb and the sky goddess Nut, and he is the brother and husband of Isis, the goddess of magic and wisdom. Osiris is also the father of Horus, the falcon-headed god associated with kingship and the sky. Osiris is best known for his role as the god of the afterlife and the judge of the dead. According to myth, he was murdered by his jealous brother Set, the god of chaos and storms, who dismembered Osiris's body and scattered the pieces throughout Egypt."
  },

  {
    images: [
       require('../assets/Images/bicycle/bicycle1.jpg'),
       require('../assets/Images/bicycle/bicycle2.jpg'),
       require('../assets/Images/bicycle/bicycle3.jpg'),
       require('../assets/Images/bicycle/bicycle4.jpg'),
     ],
    word: "BICYCLE",
    category: "Vehicle",
    definition: "A bicycle is a two-wheeled vehicle propelled by pedals and operated by a person sitting on a seat. It is a popular mode of transportation, recreational activity, and sport around the world. Bicycles typically consist of a frame, handlebars for steering, pedals connected to a chain and gears, wheels with tires, and brakes for slowing down or stopping. Bicycles come in various styles and designs, including road bikes, mountain bikes, hybrid bikes, and cruiser bikes, each tailored for different purposes and terrains. They can be used for commuting, exercise, touring, racing, or simply enjoying leisurely rides."
  },

  {
    images: [
       require('../assets/Images/scooter/scooter1.jpg'),
       require('../assets/Images/scooter/scooter2.jpg'),
       require('../assets/Images/scooter/scooter3.jpg'),
       require('../assets/Images/scooter/scooter4.jpg'),
     ],
    word: "SCOOTER",
    category: "Vehicle",
    definition: "A scooter is a two-wheeled vehicle typically powered by a small engine or electric motor. It features a platform for the rider to stand or sit on, handlebars for steering, and wheels for movement. Scooters are commonly used for short-distance transportation in urban areas, offering a convenient and economical alternative to cars or bicycles."
  },

  {
    images: [
       require('../assets/Images/aircraft/aircraft1.jpg'),
       require('../assets/Images/aircraft/aircraft2.jpg'),
       require('../assets/Images/aircraft/aircraft3.jpg'),
       require('../assets/Images/aircraft/aircraft4.jpg'),
     ],
    word: "AIRCRAFT",
    category: "Vehicle",
    definition: "An aircraft is a vehicle that is designed for flight through the Earth's atmosphere. Aircraft come in various forms, including airplanes, helicopters, gliders, balloons, and drones, each with its own method of propulsion and means of generating lift."
  },

  {
    images: [
       require('../assets/Images/minivan/minivan1.jpg'),
       require('../assets/Images/minivan/minivan2.jpg'),
       require('../assets/Images/minivan/minivan3.jpg'),
       require('../assets/Images/minivan/minivan4.jpg'),
     ],
    word: "MINIVAN",
    category: "Vehicle",
    definition: "A minivan, short for miniature van, is a type of vehicle designed primarily for transporting passengers, typically with seating for seven or more people arranged in multiple rows. Minivans are characterized by their spacious and versatile interior, sliding rear doors, and elevated roofline, which provides ample headroom for passengers.Minivans are popular among families and large groups due to their practicality, comfort, and convenience. They offer generous cargo space, foldable rear seats for additional storage capacity, and a smooth ride quality. Many minivans also come equipped with features such as entertainment systems, multiple climate zones, and advanced safety technologies to enhance the driving experience and ensure passenger comfort."
  },

  {
    images: [
       require('../assets/Images/tanker/tanker1.jpg'),
       require('../assets/Images/tanker/tanker2.jpg'),
       require('../assets/Images/tanker/tanker3.jpg'),
       require('../assets/Images/tanker/tanker4.jpg'),
     ],
    word: "TANKER",
    category: "Vehicle",
    definition: "A tanker is a large ship or vehicle designed for the transport of liquids or gases in bulk. Tankers are commonly used to transport various substances, including oil, petroleum products, liquefied natural gas (LNG), chemicals, and water. In the maritime industry, tankers are specifically designed with one or more large tanks or compartments to hold and transport liquids across oceans and waterways. These ships come in different sizes and configurations depending on the type of cargo they carry and the distance they travel. Tankers can range from small coastal tankers used for regional transport to massive supertankers capable of carrying millions of barrels of oil across the world's oceans."
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  {
    images: [
       require('../assets/Images/elation/elation1.jpg'),
       require('../assets/Images/elation/elation2.jpg'),
       require('../assets/Images/elation/elation3.jpg'),
       require('../assets/Images/elation/elation4.jpg'),
     ],
    word: "ELATION",
    category: "Emotions",
    definition: " "
  },

  
   

    
   
  
];

export default levels


