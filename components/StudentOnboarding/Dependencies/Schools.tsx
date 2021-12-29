const schools = [
    {
        name: "A.D. Johnston Jr/Sr High School",
    },
    {
        name: "ACTech School",
    },
    {
        name: "Adlai Stevenson High School",
    },
    {
        name: "Advanced Technology Academy",
    },
    {
        name: "Alanson Public School",
    },
    {
        name: "Alcona Community High School",
    },
    {
        name: "Allegan County Area Technical and Education Center",
    },
    {
        name: "Allegan High School",
    },
    {
        name: "Allen Park High School",
    },
    {
        name: "Alma Senior High School",
    },
    {
        name: "Alpena High School",
    },
    {
        name: "Anchor Bay High School",
    },
    {
        name: "Annapolis High School",
    },
    {
        name: "Armada High School",
    },
    {
        name: "Athens High School",
    },
    {
        name: "Avondale High School",
    },
    {
        name: "Bad Axe High School",
    },
    {
        name: "Baker College",
    },
    {
        name: "Bath High School",
    },
    {
        name: "Battle Creek Central High School",
    },
    {
        name: "Bay-Arenac ISD Career Center",
    },
    {
        name: "Beal City High School",
    },
    {
        name: "Beaver Island Community School",
    },
    {
        name: "Beaverton Jr/Sr High School",
    },
    {
        name: "Bedford Senior High School",
    },
    {
        name: "Belding High School",
    },
    {
        name: "Belleville High School",
    },
    {
        name: "Benton Harbor High School",
    },
    {
        name: "Benzie Central Senior High School",
    },
    {
        name: "Berkley High School",
    },
    {
        name: "Berrien Springs High School",
    },
    {
        name: "Boyne City High School",
    },
    {
        name: "Branch Area Careers Center",
    },
    {
        name: "Brandon High School",
    },
    {
        name: "Brandywine Senior High School",
    },
    {
        name: "Breckenridge High School",
    },
    {
        name: "Breithaupt Career and Technical Center",
    },
    {
        name: "Bridgman High School",
    },
    {
        name: "Brighton High School",
    },
    {
        name: "Brown City High School",
    },
    {
        name: "Buchanan Community Schools",
    },
    {
        name: "Bullock Creek High School",
    },
    {
        name: "Byron Area High School",
    },
    {
        name: "C.O.O.R. ISD",
    },
    {
        name: "Caledonia High School",
    },
    {
        name: "Calhoun Area Career Center",
    },
    {
        name: "Calumet High School",
    },
    {
        name: "Camden Frontier K-12 School",
    },
    {
        name: "Canton High School",
    },
    {
        name: "Capac High School",
    },
    {
        name: "Career and Technical Education Center",
    },
    {
        name: "Career Opportunities Center",
    },
    {
        name: "Career Preparation Center",
    },
    {
        name: "Careerline Tech Center",
    },
    {
        name: "Carman-Ainsworth High School",
    },
    {
        name: "Carney-Nadeau Public School",
    },
    {
        name: "Cass City Jr/Sr High School",
    },
    {
        name: "Cass Technical High School",
    },
    {
        name: "Cedar Springs High School",
    },
    {
        name: "Center Line High School",
    },
    {
        name: "Central High School",
    },
    {
        name: "Central Lake Public Schools",
    },
    {
        name: "Centreville Jr.Sr. High School",
    },
    {
        name: "Chandler Park Academy",
    },
    {
        name: "Charles L. Bowers Farm",
    },
    {
        name: "Charlevoix High School",
    },
    {
        name: "Charlotte Senior High School",
    },
    {
        name: "Chassel K-12 School",
    },
    {
        name: "Cheboygan Area High School",
    },
    {
        name: "Chelsea High School",
    },
    {
        name: "Chesaning Union High School",
    },
    {
        name: "Chippewa Hills High School",
    },
    {
        name: "Chippewa Valley High School",
    },
    {
        name: "Churchill High School",
    },
    {
        name: "Clare High School/Clare-Gladwin Regional Education Center",
    },
    {
        name: "Clarenceville High School",
    },
    {
        name: "Clarkston High School",
    },
    {
        name: "Clawson High School",
    },
    {
        name: "Climax-Scotts High School",
    },
    {
        name: "Clinton County RESA",
    },
    {
        name: "Clintondale High School",
    },
    {
        name: "Clio Area High School",
    },
    {
        name: "Cody High School",
    },
    {
        name: "Coleman Jr./Sr. High School",
    },
    {
        name: "Coloma High School",
    },
    {
        name: "Communication and Media Arts High School",
    },
    {
        name: "Comstock High School",
    },
    {
        name: "Constantine Public School District",
    },
    {
        name: "Coopersville High School",
    },
    {
        name: "Copper Country ISD",
    },
    {
        name: "Corunna High School",
    },
    {
        name: "Countryside Academy",
    },
    {
        name: "Cousino Senior High School",
    },
    {
        name: "Crestwood High School",
    },
    {
        name: "Crockett Career and Technical Center",
    },
    {
        name: "Dakota High School",
    },
    {
        name: "Dansville High School",
    },
    {
        name: "Davison High School",
    },
    {
        name: "Dearborn High School",
    },
    {
        name: "Delta-Schoolcraft Area Center",
    },
    {
        name: "Delton-Kellogg High School",
    },
    {
        name: "Detroit Collegiate Preparatory High School at Northwestern",
    },
    {
        name: "Detroit School of Arts",
    },
    {
        name: "DeWitt High School",
    },
    {
        name: "Dexter High School",
    },
    {
        name: "Dickinson-Iron Technical Education Center",
    },
    {
        name: "Dollar Bay-Tamarack Area K-12 School",
    },
    {
        name: "Dundee Community High School",
    },
    {
        name: "Durand Area High School",
    },
    {
        name: "E.A. Johnson Memorial High School",
    },
    {
        name: "East English Village Preparatory Academy",
    },
    {
        name: "East Jordan High School",
    },
    {
        name: "East Kentwood High School",
    },
    {
        name: "Eastpointe High School",
    },
    {
        name: "Eaton Rapids High School",
    },
    {
        name: "Eau Claire High School",
    },
    {
        name: "Ecorse Community High School",
    },
    {
        name: "Edsel Ford High School",
    },
    {
        name: "Edwardsburg High School",
    },
    {
        name: "Eisenhower High School",
    },
    {
        name: "Ellsworth Community School",
    },
    {
        name: "Ernest W. Seaholm High School",
    },
    {
        name: "Ewen-Trout Creek Consolidated School",
    },
    {
        name: "Farmington High School",
    },
    {
        name: "Fenton Senior High School",
    },
    {
        name: "Ferndale High School",
    },
    {
        name: "Fitzgerald Senior High School",
    },
    {
        name: "Flat Rock Community High School",
    },
    {
        name: "Flushing High School",
    },
    {
        name: "Fordson High School",
    },
    {
        name: "Fowler High School",
    },
    {
        name: "Fowlerville High School",
    },
    {
        name: "Frankenmuth High School",
    },
    {
        name: "Franklin High School",
    },
    {
        name: "Fraser High School",
    },
    {
        name: "Frederick V. Pankow Center",
    },
    {
        name: "Fremont High School",
    },
    {
        name: "Fruitport High School",
    },
    {
        name: "Galesburg-Augusta High School",
    },
    {
        name: "Garden City High School",
    },
    {
        name: "Gaylord High School",
    },
    {
        name: "Genesee Career Institute",
    },
    {
        name: "Gladwin High School",
    },
    {
        name: "Gogebic-Ontonagon ISD",
    },
    {
        name: "Golightly Career and Technical Center",
    },
    {
        name: "Goodrich High School",
    },
    {
        name: "Grand Blanc Community High School",
    },
    {
        name: "Grand Haven High School",
    },
    {
        name: "Grand Ledge High School",
    },
    {
        name: "Grandville High School",
    },
    {
        name: "Grayling High School",
    },
    {
        name: "Greenville Senior High School",
    },
    {
        name: "Grosse Ile High School",
    },
    {
        name: "Grosse Point North High School",
    },
    {
        name: "Grosse Pointe South High School",
    },
    {
        name: "Gull Lake High School",
    },
    {
        name: "Gwinn High School",
    },
    {
        name: "H.H. Dow High School",
    },
    {
        name: "Hammady Community High School",
    },
    {
        name: "Hamtramck High School",
    },
    {
        name: "Harbor Beach Community High School",
    },
    {
        name: "Harbor High School",
    },
    {
        name: "Harbor Springs High School",
    },
    {
        name: "Harper Woods High School",
    },
    {
        name: "Harrison High School",
    },
    {
        name: "Hartland High School",
    },
    {
        name: "Hastings High School",
    },
    {
        name: "Hazel Park High School",
    },
    {
        name: "Heartlands Institute of Technology",
    },
    {
        name: "Henry Ford High School",
    },
    {
        name: "Heritage High School",
    },
    {
        name: "Hill Center",
    },
    {
        name: "Hill-McCloy High School",
    },
    {
        name: "Hillsdale Community Schools/Hillsdale High School",
    },
    {
        name: "Holly High School",
    },
    {
        name: "Holt Senior High School",
    },
    {
        name: "Homer Community High School",
    },
    {
        name: "Hopkins High School",
    },
    {
        name: "Houghton Lake Jr/Sr High School",
    },
    {
        name: "Howell High School",
    },
    {
        name: "Huron Area Technical Center",
    },
    {
        name: "Huron High School",
    },
    {
        name: "Ingham ISD",
    },
    {
        name: "Ishpeming High School",
    },
    {
        name: "Ithaca High School",
    },
    {
        name: "J.W. Sexton High School",
    },
    {
        name: "Jackson Area Career Center",
    },
    {
        name: "Jefferson High School",
    },
    {
        name: "Jenison High School",
    },
    {
        name: "Johannesburg-Lewiston High School",
    },
    {
        name: "John Glenn High School",
    },
    {
        name: "Jonesville High School",
    },
    {
        name: "Kalamazoo Central High School/Kalamazoo Public Schools",
    },
    {
        name: "Kearsley High School",
    },
    {
        name: "Kenowa Hills High School",
    },
    {
        name: "Kent Career Tech Center/Kent ISD",
    },
    {
        name: "Kingsford High School",
    },
    {
        name: "Laingsburg High School",
    },
    {
        name: "Lake Fenton High School",
    },
    {
        name: "Lake Orion Community High School",
    },
    {
        name: "Lake Shore High School",
    },
    {
        name: "Lakeland High School",
    },
    {
        name: "Laker High School",
    },
    {
        name: "Lakeshore High School",
    },
    {
        name: "Lakeview High School",
    },
    {
        name: "Lakewood High School",
    },
    {
        name: "Lamphere High School",
    },
    {
        name: "L'Anse Area School",
    },
    {
        name: "L'Anse Creuse High School",
    },
    {
        name: "Lapeer County Educations and Technology Center",
    },
    {
        name: "Lee High School",
    },
    {
        name: "Lewis Cass ISD",
    },
    {
        name: "Lincoln High School",
    },
    {
        name: "Lincoln Park High School",
    },
    {
        name: "LISD Tech Center",
    },
    {
        name: "Livingston ESA",
    },
    {
        name: "Livonia Career Technical Center",
    },
    {
        name: "Lowell Senior High School",
    },
    {
        name: "Loy Norrix High School",
    },
    {
        name: "Luther L. Wright K-12 School",
    },
    {
        name: "Madison High School",
    },
    {
        name: "Manchester Jr/Sr High School",
    },
    {
        name: "Manistique Middle and High School",
    },
    {
        name: "Maple Valley Junior Senior High School",
    },
    {
        name: "Marcellus High School",
    },
    {
        name: "Marine City High School",
    },
    {
        name: "Marquette Senior High School/Marquette-Alger RESA",
    },
    {
        name: "Marshall High School",
    },
    {
        name: "Martin Luther King Jr. Senior High School",
    },
    {
        name: "Mason High School",
    },
    {
        name: "Mason Senior High School",
    },
    {
        name: "Mecosta-Osceola Career Center",
    },
    {
        name: "Melvindale High School",
    },
    {
        name: "Menominee High School",
    },
    {
        name: "Meridian Early College High School",
    },
    {
        name: "Michael Berry Career Center",
    },
    {
        name: "Midland High School",
    },
    {
        name: "Milan High School",
    },
    {
        name: "Milford High School",
    },
    {
        name: "Mona Shores High School",
    },
    {
        name: "Monroe High School/Monroe ISD",
    },
    {
        name: "Montague High School",
    },
    {
        name: "Montcalm Area Career Center",
    },
    {
        name: "Morrice High School",
    },
    {
        name: "Mt. Pleasant Senior High School/City School District",
    },
    {
        name: "Mumford High School",
    },
    {
        name: "Munising High School",
    },
    {
        name: "Muskegon Area Career Technology Center/ISD",
    },
    {
        name: "Negaunee High School",
    },
    {
        name: "New Buffalo Senior High School",
    },
    {
        name: "New Haven High School",
    },
    {
        name: "New Lothrop High School",
    },
    {
        name: "Newaygo County Career Technology Center",
    },
    {
        name: "Niles Senior High School/Community Schools",
    },
    {
        name: "North Adams-Jerome High School",
    },
    {
        name: "North Branch High School",
    },
    {
        name: "North Farmington High School",
    },
    {
        name: "North Huron School",
    },
    {
        name: "Northville High School",
    },
    {
        name: "Novi High School",
    },
    {
        name: "Oak Park High School",
    },
    {
        name: "Oakland Schools Technical Campus",
    },
    {
        name: "Ogemaw Heights High School",
    },
    {
        name: "Olivet High School",
    },
    {
        name: "Onsted Community High School",
    },
    {
        name: "Ontonagon Area School",
    },
    {
        name: "Oscar A. Carlson High School",
    },
    {
        name: "Otsego High School",
    },
    {
        name: "Ottawa Area ISD",
    },
    {
        name: "Ovid-Elsie High School",
    },
    {
        name: "Owosso High School",
    },
    {
        name: "Oxford High School",
    },
    {
        name: "Parchment High School",
    },
    {
        name: "Pellston High School",
    },
    {
        name: "Penta Career Center",
    },
    {
        name: "Perry High School",
    },
    {
        name: "Petoskey High School",
    },
    {
        name: "Pewamo-Westphalia High School",
    },
    {
        name: "Pinckney Community High School",
    },
    {
        name: "Pioneer High School",
    },
    {
        name: "Plymouth High School",
    },
    {
        name: "Pontiac High School",
    },
    {
        name: "Port Huron Northern High School",
    },
    {
        name: "Portage Central High School",
    },
    {
        name: "Portage Northern High School",
    },
    {
        name: "Portage Public Schools",
    },
    {
        name: "Randolph Career and Technical Center",
    },
    {
        name: "Ravenna High School",
    },
    {
        name: "Renaissance Alternative High School",
    },
    {
        name: "Richmond Community High School",
    },
    {
        name: "River Rouge High School",
    },
    {
        name: "River Valley High School",
    },
    {
        name: "Riverview Community High School",
    },
    {
        name: "Robichaud Senior High School",
    },
    {
        name: "Rochester Adams High School",
    },
    {
        name: "Rochester High School",
    },
    {
        name: "Rockford High School",
    },
    {
        name: "Romeo Engineering Technology Center",
    },
    {
        name: "Romeo High School",
    },
    {
        name: "Romulus Senior High School",
    },
    {
        name: "Roosevelt High School",
    },
    {
        name: "Roseville High School",
    },
    {
        name: "Ross Beaty High School",
    },
    {
        name: "Royal Oak High School",
    },
    {
        name: "Salem High School",
    },
    {
        name: "Saline High School",
    },
    {
        name: "Sand Creek High School",
    },
    {
        name: "Sanilac Career Center",
    },
    {
        name: "Saranac JrSr High School",
    },
    {
        name: "Sault Area Career Center",
    },
    {
        name: "School Disctrict of the City of Saginaw",
    },
    {
        name: "Schoolcraft High School",
    },
    {
        name: "Shepherd High School",
    },
    {
        name: "Shiawassee Regional ESD",
    },
    {
        name: "Skyline High School",
    },
    {
        name: "South Lake High School",
    },
    {
        name: "South Michigan Center for Science and Industry",
    },
    {
        name: "Southeastern High Schol",
    },
    {
        name: "Southfield High School for the Arts and Technology",
    },
    {
        name: "Southgate Anderson High School",
    },
    {
        name: "Springport High School",
    },
    {
        name: "St. Charles Community High School",
    },
    {
        name: "St. Clair County RESA/High School",
    },
    {
        name: "St. Johns High School",
    },
    {
        name: "St. Joseph County ISD",
    },
    {
        name: "St. Joseph High School",
    },
    {
        name: "St. Louis High School",
    },
    {
        name: "Standish-Sterling Central Junior Senior High School",
    },
    {
        name: "Stephenson High School",
    },
    {
        name: "Sterling Heights Senior High School",
    },
    {
        name: "Stevenson High School",
    },
    {
        name: "Stockbridge Junior Senior High School",
    },
    {
        name: "Stoney Creek High School",
    },
    {
        name: "Sturgis High School",
    },
    {
        name: "Superior Central School",
    },
    {
        name: "Swan Valley High School",
    },
    {
        name: "Tawas Area High School",
    },
    {
        name: "Taylor Career and Technical Center",
    },
    {
        name: "TBA Career Technology Center",
    },
    {
        name: "Technical Education Center",
    },
    {
        name: "Tecumseh SMCSI",
    },
    {
        name: "Three Rivers High School",
    },
    {
        name: "Traverse Bay ISD",
    },
    {
        name: "Trenton High School",
    },
    {
        name: "Troy High School",
    },
    {
        name: "Tuscola ISD/Technology Center",
    },
    {
        name: "Ubly Community High School",
    },
    {
        name: "Union High School",
    },
    {
        name: "Unionville-Sebawaing High School",
    },
    {
        name: "Utica High School",
    },
    {
        name: "Van Buren Tech",
    },
    {
        name: "Vicksburg High School",
    },
    {
        name: "Waldron Area Schools",
    },
    {
        name: "Walled Lake Central High School",
    },
    {
        name: "Walled Lake Northern High School",
    },
    {
        name: "Walled Lake Western High School",
    },
    {
        name: "Warren Mott High School",
    },
    {
        name: "Warren Woods Tower High School",
    },
    {
        name: "Waterford Kettering High School",
    },
    {
        name: "Watersmeet Township School",
    },
    {
        name: "Webberville High School",
    },
    {
        name: "West Bloomfield High School",
    },
    {
        name: "West Iron County High School",
    },
    {
        name: "West Michigan Aviation Academy",
    },
    {
        name: "West Ottawa High School",
    },
    {
        name: "West Senior High",
    },
    {
        name: "West Shore Educational Service District",
    },
    {
        name: "Westwood High School",
    },
    {
        name: "Wexford-Missaukee ISD Career Center",
    },
    {
        name: "White Pigeon Junior Senior High School",
    },
    {
        name: "Whiteford High School",
    },
    {
        name: "Whitehall Senior High School",
    },
    {
        name: "Whitmore Lake High School",
    },
    {
        name: "Whittemore-Prescott Junior Senior High School",
    },
    {
        name: "William Ford Career Technology Center",
    },
    {
        name: "Williamston High School",
    },
    {
        name: "Wilson Center",
    },
    {
        name: "Windover High School",
    },
    {
        name: "Woodhaven High School",
    },
    {
        name: "Wylie E. Groves High School",
    },
    {
        name: "Wyoming High School",
    },
    {
        name: "Yale Senior High School",
    },
    {
        name: "Ypsilanti Community Schools",
    },
    {
        name: "Zeeland East High School",
    },
    {
        name: "Zeeland West High School",
    },
];

export default schools.sort((a, b) => (a.name > b.name ? 1 : -1));
