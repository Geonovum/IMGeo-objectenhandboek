---
permalink: /veelgesteldevragen
nav_exclude: true
---

Veelgestelde vragen
===================

Hieronder volgt een overzicht van veelgestelde vragen aan de IMGeo helpdesk over
de toepassing van inwinregels en classificaties in de BGT\|IMGeo standaarden.

De vragen gaan veelal over situaties waarvoor IMGeo geen classificaties of inwinregels voorschrijft. Via de IMGeo helpdesk wordt een advies gegeven hoe deze situatie het best in IMGeo opgenomen zou kunnen worden. Door het beschikbaar maken van deze adviezen voor iedereen kunnen situaties waarin IMGeo niet eenduidig voorziet, toch op een consistente manier worden opgenomen in IMGeo.

Bij een herziening van het IMGeo worden de veelgestelde vragen geanalyseerd en opgelost in de nieuwe versie van de standaard. Dat kan door het opnemen van inwinregels in de catalogi of het toevoegen van een nieuwe classificatie aan het IMGeo.


Van de onderstaande objecttypen was niet duidelijk genoeg aangegeven (in de catalogi BGT of IMGeo, of in het objectenhandboek) op welke manier het object het beste afgebakend zou worden. Door deze onduidelijkheid ontstaan in de BGT diverse manieren van afbakening en dat komt de consistentie van de BGT niet ten goede.
iedere vraag wordt afgesloten met een advies.



## **1. Hoe neem ik objecten op in IMGeo waar geen classificatie voor is?**
Het komt regelmatig voor dat bv een specifiek type kast, of een bepaald type bord als een classificatie ontbreekt in IMGeo. Het betreft vooral de optionele inrichtingselementen uit het optionele deel, zoals bak, bord, kast, etc. 

![image](https://user-images.githubusercontent.com/62252105/212054173-ea4d99ab-f108-44e2-a53e-b16605ada30d.png)

In IMGeo mogen objecten worden opgenomen (en aangeleverd aan de LV BGT) zonder dat Type ingevuld is (die is dan \<leeg\>).

De aanbeveling is om het objecttype te kiezen die het meest past bij de definitie, en het type leeg te laten. In de eigen beheeromgeving kan een nadere classificatie worden opgenomen. Deze nadere classificatie kan niet met de LV BGT worden uitgewisseld.


Voorbeeld

Er ontbreekt een imgeo classificatie voor bv post- en pakketautomaten. Deze automaten lijken het meest op een soort Kast, zie foto. 

Het advies is om de pakketautomaat als een Kast op te nemen met als TypeKastPlus is \<leeg\>. In een beheerregistratie (BOR) kan aan de Kast een nadere type detaillering toegevoegd worden.

![Pakketautomaat_Rolde](https://user-images.githubusercontent.com/62252105/212057697-c2ede419-7a40-438c-8878-7c93edd4a186.jpg)



## **2. Hoe baken ik een fietsstraat af in BGT?**

BGT hanteert als uitgangspunt: dat wat je ziet, baken je af. Een wegdeel aangegeven met verkeersbord 'Fietsstraat, auto te gast' (L51b) is in principe een gewone 30 km/u weg, alleen zijn fietsers hier dominant aanwezig, dus dienen automobilisten meer rekening te houden met fietsers. Maar er gelden geen speciale verkeersregels op een fietsstraat. Bij de BGT gaat het om de fysieke kenmerken. 

Fietsstraat met middenstuk: in dit geval is er niets anders dan twee oranje fietsstroken met een, al dan niet verhoogd, middenstuk, bedoeld voor lokaal verkeer. 

Advies: De aanbeveling is om de fietsstroken als Wegdeel met FunctieWeg is 'fietspad' en de middenstrook als Wegdeel met FunctieWeg is 'lokale weg' af te bakenen.
Voorbeelden

![foto fietsstraat](https://user-images.githubusercontent.com/62252105/212058055-35e5bc9e-3348-4818-bd70-5bfa0497d7f1.jpg)

en 


![](https://user-images.githubusercontent.com/62252105/208676334-d9244e86-9314-41f0-9e56-d6ed13a0c67c.png)


Fietsstraat zonder middenstuk: Het komt ook voor dat in de fietsstraat geen middenstuk is opgenomen en dat de stroken geen oranje kleur hebben. In dat geval is het minder duidelijk dat er sprake is van een fietspad waar auto's te gast zijn. 

Het advies is om het wegdeel te benoemen volgens hetgene wat je het beste ziet. 

Zie je voornamelijk een grijze weg, waar een fietsstraat bord aan toegevoegd is. dan baken je dit deel van de weg af als een lokale weg.

Voorbeeld

![](https://user-images.githubusercontent.com/62252105/224316251-5c5c8ead-b5f1-47a6-807e-b3374c631070.jpg)



Of zie je een oranje fietspad, waar auto's over mogen rijden. In dat geval baken je dit deel van de weg af als een fietspad.

Voorbeeld

![](https://user-images.githubusercontent.com/62252105/224309167-dc81d5fc-2087-48c4-800f-9ae73c92fd6d.png)



Bij twijfel of als beide mogelijkheden zouden kunnen, dan geldt altijd de hierarchie regel: de domeinwaarde die eerder in de lijst voorkomt, prevaleert boven de opvolgende domeinwaarden (volgens de inhoudsopgave van het objectenhandboek). 'Lokale weg' staat hoger dan 'fietspad' en heeft dan de voorkeur. 


## **3. Hoe baken ik strandpaviljoens met terras/vlonder af in de BGT?**

Of een strandpaviljoen wordt afgebakend als Pand in de BGT, is afhankelijk van de regels voor de BAG. 
Als het strandpaviljoen in de BAG als een BAG pand is afgebakend, dan is het verplicht om dat strandpaviljoen op te nemen als BGT Pand in de BGT.
En het is optioneel om een strandpaviljoen dat _niet_ is opgenomen in de BAG, optioneel op te nemen met TypeOverigBouwwerk zonder nadere classificatie (in IMGeo), die is dan \<leeg\>.
Daarbij is de relatieve hoogte van het Pand of OverigBouwwerk = 1 in de BGT of IMGeo, in het geval dat paviljoen op palen rust.

Het omliggende terras/vlonder maakt _geen_ onderdeel uit van de geometrie van het Pand of OverigBouwwerk. De aanbeveling is om het terras/vlonder als OnbegroeidTerreindeel op te nemen met FysiekVoorkomenOnbegroeidTerrein is 'open verharding' op relatieve hoogte 1. Het strand ligt op relatieve hoogte is 0 en loopt er als Onbegroeidterreindeel met FysiekVoorkomenOnbegroeidTerrein is 'zand' én FysiekVoorkomenOnbegroeidTerreinPlus is 'strand en strandwal' onder door.

Voorbeeld

![Strandpaviljoen-Paal-10-Ouddorp](https://user-images.githubusercontent.com/62252105/216338137-92e4c484-f8a5-45d2-a31d-ca4f93e959fd.jpg)


## **4. Hoe baken ik houten fiets- of voetbruggetjes af in de BGT?**

Hout komt in de BGT of IMGGeo als FysiekVoorkomen niet voor. Toch wil je houten fiets- en/of voetbruggetjes afbakenen. Je bakent de brug af en daarop leg je een fietspad of voetpad van "hout".

Het advies is om de brug op te nemen als Overbruggingsdeel met HoortBijTypeOverbrugging is 'brug' en met TypeOverbruggingsdeel is 'dek', op een relatieve hoogte groter dan 0. Op dezelfde relatieve hoogte als het dek, wordt het voet- of fietspad opgenomen in de BGT als een Wegdeel met FunctieWeg is 'fietspad' of 'voetpad' en FysiekVoorkomenWeg is 'open verharding' (zonder nadere classificatie). In de beheeromgeving (BOR) kan de open verharding nader gedetailleerd worden tot 'Hout'

voorbeeld

![houten brug](https://user-images.githubusercontent.com/62252105/211833931-1e2e757f-81c4-4d9e-b124-a0d036096a0b.jpg)


## **5. Hoe baken ik een oplaadpaal af in IMGeo?**

IMGeo heeft geen eigen classificatie voor een oplaadpaal. 

De aanbeveling is om een oplaadpaal op te nemen als Paal met als TypePaal is \<leeg\>, d.w.z. zonder nadere classificatie. In de beheerapplicatie (BOR) kan een nadere detaillering van de TypePaal gegeven worden.

Voorbeeld

![oplaadpaal](https://user-images.githubusercontent.com/62252105/211834525-e257c1f9-dde3-414e-965e-4e6d4eb6ab11.jpg)


## **6. Hoe baken ik een haagvak af in de BGT?**

De BGT kent geen specifiek objecttype 'Haagvak'.

Het advies is om een haag op te nemen op een inrichtende laag en eronder een "haagvak" te leggen. 
Dit doe je door de haag op te nemen als een optioneel Vegetatieobject (lijn of vlak), met TypeVegetatieObjectPlus is 'Haag'. Het haagvlak wordt afgebakend door het opnemen van een BegroeidTerreindeel, met als FysiekVoorkomenBegroeidTerrein is 'Groenvoorziening', zonder nadere detaillering. In de beheeromgeving kan hier een nadere classificatie (bijvoorbeeld 'haagvak') aan worden toegevoegd.

Voorbeeld

![image](https://user-images.githubusercontent.com/62252105/212030752-fc8c7411-46d4-48fa-916d-a7b1117ec350.png)


## **7. Hoe baken ik VRI's en portalen met verkeerslichten af in ImGeo?**
Er ontbreekt een imgeo classificatie voor verkeerslicht of VRI. Je kan het beste zo dicht mogelijk bij de werkelijkheid proberen te komen.

Advies is om de paal op te nemen als Paal, met als TypePaal is 'Verkeersregelinstallatiepaal', op rh = 0.

Voor het verkeerslicht zelf is het advies om dit op te nemen als een Installatie, met als TypePaal is \<leeg\>, d.w.z. zonder nadere classificatie en deze op rh = 1 te lokaliseren.
In de beheerapplicatie kun je in detail aangeven om welke installatie het gaat.

Voorbeeld

![verkeerslicht](https://user-images.githubusercontent.com/62252105/216049084-fcb6462a-0764-44db-b75a-39271cf5e871.jpg)



## **8. Hoe worden nevenadressen opgenomen in een nummeraanduidingreeks bij een Pand?**
In de BGT gegevenscatalogus worden geen eisen gesteld aan het wel/niet opnemen van nevenadressen bij een Pand in de BGT. Voor een goede oriëntatie en het gebruik van de BGT-kaart is het zichtbaar zijn van nevenadressen in de BGT kaart wel wenselijk.

Het advies is om ook de nummeraanduidingsreeksen van nevenadressen die aanwezig zijn in de BAG op te nemen in de BGT. Hiervoor gelden dezelfde spelregels als voor de reguliere nummeraanduidingsreeksen.

Voorbeeld

![nevenadressen](https://user-images.githubusercontent.com/62252105/216054980-a66aa159-1fab-416f-bf09-d1c1d089a97b.JPG)

De nummers 17 en 143 zijn nevenadressen.



## **9. Hoe baken ik een terrein af met zonnepanelen (zonneakker) in de BGT?**
In de gegevenscatalogi (BGT en Imgeo) is geen classificatie opgenomen voor een terrein waar zonnepanelen op staan. Wel is er de mogelijkheid om een los zonnepaneel als een puntobject op te nemen. In het kader van de energietransitie is het gewenst om deze terreinen met zonnepanelen te onderscheiden. 

Het advies is om het terrein af te bakenen als een IMGeo object FunctioneelGebied, met als TypeFunctioneelGebiedPlus is \<leeg\>, d.w.z. zonder verdere classificatie, met rh = 0. 
Het terrein onder de panelen conform BGT karteren als BegroeidTerreindeel met FysiekVoorkomen is Grasland overig.
Daarnaast kan bv op de hoekpunten van het terrein een zonnepaneel opgevoerd worden door het opvoeren van een aantal (of zoveel als nodig is) puntobjecten Installatie met als TypeInstallatiePlus is 'Zonnepaneel'. In de beheeromgeving kan aan het functionele gebied een nadere classificatie (bijvoorbeeld 'zonneakker') worden toegevoegd.
Door deze combinatie, functioneel gebied en zonnepaneel, kan een gebruiker van de BGT een zonneakker opzoeken.

Voorbeeld

![zonneakker](https://user-images.githubusercontent.com/62252105/214539234-29b7a5ae-a39b-4d27-a2ca-9203bcb31023.jpg)

Voor een zonnepark op het water, zonne eiland, is het advies vergelijkbaar.
Het advies is om op het water een IMGeo object FunctioneelGebied af te bakenen, met als TypeFunctioneelGebiedPlus is \<leeg\>, d.w.z. zonder verdere classificatie, op rh = 0. 
Het water onder de panelen conform BGT karteren als Waterdeel, met TypeWater is Watervlakte.
Daarnaast kan bv op de hoekpunten van het gebied een zonnepaneel opgevoerd worden, door het opvoeren van een aantal (of zoveel als nodig is) objecten Installatie met als TypeInstallatiePlus is 'Zonnepaneel'. In de beheeromgeving kan aan het functionele gebied een nadere classificatie (bijvoorbeeld 'zonne eiland') worden toegevoegd.

Voorbeeld

![zonne eiland](https://user-images.githubusercontent.com/62252105/219351523-cb7351a8-9a10-4fae-8108-fe02a70f145b.jpg)


Zonnepanelen op een (dak van een) Pand, een OverigBouwwerk of overkapping worden als volgt afgebakend.
Het advies is om bovenop het pand, overig bouwwerk of overkapping een apart FunctioneelGebied af te bakenen met als TypeFunctioneelGebiedPlus is \<leeg\> en rh = 1.
Daarnaast kan bv op de hoekpunten van het gebied, een zonnepaneel opgevoerd worden door het opvoeren van een aantal (of zoveel als nodig is) objecten Installatie met als TypeInstallatiePlus is 'Zonnepaneel' op rh = 1. In de beheeromgeving kan aan het functionele gebied een nadere classificatie (bijvoorbeeld 'zonne dak') worden toegevoegd.

Op deze manier worden lokaties met zonnepanelen consistent en op eenzelfde manier afgebakend en kunnen ze met een analyse eenvoudig teruggevonden worden.

Voorbeeld

![zonnepaneel op dak](https://user-images.githubusercontent.com/62252105/219349104-b4b52926-8050-4e07-83d9-5025889460a7.jpg)


## **10. Hoe baken ik een galerij en bijbehorende trap af van een flat?**
Als een galerij géén onderdeel uitmaakt van een BAG pand (zie regels voor BAG), dan wordt die in de BGT opgenomen als volgt.

Het advies is om de galerij op te nemen als een GebouwInstallatie met TypeGebouwInstallatiePlus is \<leeg\>, d.w.z. zonder nadere classificatie, op rh > 0.
De toegangstrap wordt opgenomen als een GebouwInstallatie met als TypeGebouwInstallatiePlus is 'Toegangstrap'.

Voorbeeld

![galerijflat](https://user-images.githubusercontent.com/62252105/216328443-ae8d0cd5-a93a-4c28-b204-2e43a8ca2743.jpg)
In dit voorbeeld zijn er 2 galerijen (objecttype GebouwInstallatie) op rh=1 en rh = 2.

![galerij met trap](https://user-images.githubusercontent.com/62252105/216329170-53f697ff-38a9-454b-9806-ff45e59a2b8d.jpg)
In dit voorbeeld zijn er 2 galerijen (objecttype GebouwInstallatie-zonder classificatie) op rh=1 en rh = 2. De trap is een GebouwInstallatie-toegangstrap, rh = 0. 


## **11. Wat is het verschil tussen een OnbegroeidTerreindeel met fysiekvoorkomen 'zand' en 'onverhard - zand'?**
Het bgt-fysiekvoorkomen 'zand' bij OnbegroeidTerreindeel is bedoeld als zandvlakte, waarmee je dus een strand, strandwallen, en duinen kunt afbakenen.
Het advies is om een strand op te nemen als OnbegroeidTerreindeel met als FysiekVoorkomenOnbegroeidTerrein is 'zand'. En dit verder te detailleren door FysiekVoorkomenOnbegroeidTerreinPlus is 'strand en strandwal' op te nemen. 

Voorbeeld

![strand](https://user-images.githubusercontent.com/62252105/216337841-8bbb752d-1c46-47bf-82c2-dd32844c65b6.jpg)

Het OnbegroeidTerreindeel met FysiekVoorkomen Onverhard- en IMgeo de toevoeging Zand, wordt toegepast voor een braakliggende terrein.
Dit terrein wordt opgenomen als OnbegroeidTerreindeel met als FysiekVoorkomenOnbegroeidTerrein is 'onverhard' en FysiekVoorkomenOnbegroeidTerreinPlus is 'zand'.

Voorbeeld

![vacant-lot-park-grassland-ecosystem-pasture-land-lot-1442455-pxhere com](https://user-images.githubusercontent.com/62252105/216337206-b191e989-904e-4863-871c-db64761fd193.jpg)
