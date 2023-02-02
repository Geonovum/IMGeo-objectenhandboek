---
permalink: /veelgesteldevragen
sort: 39
---

Veelgestelde vragen
===================

Hieronder volgt een overzicht van veelgestelde vragen aan de IMGeo helpdesk over
de toepassing van inwinregels en classificaties in de BGT\|IMGeo standaarden.

Van de onderstaande objecttypen was niet duidelijk genoeg aangegeven (in de catalogi BGT of IMGeo, of in het objectenhandboek) op welke manier het object het beste afgebakend zou worden. Door deze onduidelijkheid ontstaan in de BGT diverse manieren van afbakening en dat komt de consistentie van de BGT niet ten goede.

iedere vraag wordt afgesloten met een advies.



## **Hoe neem ik objecten op in IMGeo waar geen classificatie voor is?**
Het komt regelmatig voor dat bv een specifiek type kast, of een bepaald type bord als een classificatie ontbreekt in IMGeo. Het betreft vooral de optionele inrichtingselementen uit het optionele deel, zoals bak, bord, kast, etc. 

![image](https://user-images.githubusercontent.com/62252105/212054173-ea4d99ab-f108-44e2-a53e-b16605ada30d.png)

In IMGeo mogen objecten worden opgenomen (en aangeleverd aan de LV BGT) zonder dat Type ingevuld is (die is dan \<leeg\>).

De aanbeveling is om het objecttype te kiezen die het meest past bij de definitie, en het type leeg te laten. In de eigen beheeromgeving kan een nadere classificatie worden opgenomen. Deze kan niet met de LV BGT worden uitgewisseld.


Voorbeeld

Er ontbreekt een imgeo classificatie voor bv post- en pakketautomaten. Deze automaten zouden geschaard kunnen worden onder een type Kast, zie foto. 

Kast is een optioneel objecttype en kan zonder verdere waarde van type Kast afgebakend worden. In een beheerregistratie (BOR) kan aan de Kast een nadere detaillering toegevoegd worden

![Pakketautomaat_Rolde](https://user-images.githubusercontent.com/62252105/212057697-c2ede419-7a40-438c-8878-7c93edd4a186.jpg)



## **Hoe baken ik een fietsstraat af in BGT?**

BGT hanteert als uitgangspunt: dat wat je ziet baken je af. Een wegdeel aangegeven met verkeersbord 'Fietsstraat, auto te gast' (L51b) is eigenlijk voor de BGT niets anders dan twee fietsstroken met een al dan niet verhoogd middenstuk bedoeld voor lokaal verkeer. 
Advies: De aanbeveling is dus om de fietsstroken als Wegdeel met functie 'fietspad' en de middenstrook als Wegdeel met functie 'lokale weg' af te bakenen.
Voorbeelden

![foto fietsstraat](https://user-images.githubusercontent.com/62252105/212058055-35e5bc9e-3348-4818-bd70-5bfa0497d7f1.jpg)

en 

![](https://user-images.githubusercontent.com/62252105/208676334-d9244e86-9314-41f0-9e56-d6ed13a0c67c.png)




## **Hoe baken ik strandpaviljoens met terras/vlonder af in de BGT?**

Of een strandpaviljoen wordt afgebakend als Pand in de BGT, is afhankelijk van de regels voor de BAG. 
Het is verplicht om een strandpaviljoen dat is opgenomen in de BAG als een BAG pand, op te nemen als BGT Pand in de BGT.
En het is optioneel om een strandpaviljoen dat _niet_ is opgenomen in de BAG, optioneel op te nemen als OverigBouwwerk zonder nadere classificatie (in IMGeo).
Daarbij is de relatieve hoogte van het Pand of OverigBouwwerk = 1 in de BGT of IMGeo, omdat het meestal op palen rust.

Het omliggende terras/vlonder maakt _geen_ onderdeel uit van de geometrie van het Pand of OverigBouwwerk. De aanbeveling is om het terras/vlonder als OnbegroeidTerreindeel met fysiekvoorkomen 'open verharding' op relatieve hoogte 1 op te nemen in IMGeo. Het strand loopt er als Onbegroeidterreindeel 'strand' onder door op relatieve hoogte 0.

Voorbeeld

![Strandpaviljoen-Paal-10-Ouddorp](https://user-images.githubusercontent.com/62252105/216338137-92e4c484-f8a5-45d2-a31d-ca4f93e959fd.jpg)


## **Hoe baken ik houten fiets- of voetbruggetjes af in de BGT?**

Hout komt in de BGT of IMGGeo als FysiekVoorkomen niet voor. Toch wil je houten fiets- en/of voetbruggetjes afbakenen. Je bakent de brug af en daarop leg je een fiets/voetpad van "hout".

Het advies is om de brug op te nemen als Overbruggingsdeel met HoortBijTypeOverbrugging is 'brug' en met TypeOverbruggingsdeel is 'dek', op een relatieve hoogte groter dan 0. Op dezelfde relatieve hoogte als 'dek', wordt het voet- of fietspad opgenomen in de BGT als een Wegdeel met Functie is fiets- of voetpad en FysiekVoorkomen is 'open verharding' (zonder nadere classificatie). In de beheeromgeving kan de open verharding nadere gedetailleerd worden tot 'Hout'

voorbeeld

![houten brug](https://user-images.githubusercontent.com/62252105/211833931-1e2e757f-81c4-4d9e-b124-a0d036096a0b.jpg)


## **Hoe baken ik een oplaadpaal af in IMGeo?**

IMGeo heeft geen eigen classificatie voor een oplaadpaal. 

De aanbeveling is om een oplaadpaal als objecttype Paal zonder nadere classificatie op te nemen. In de beheerapplicatie kan een nadere detaillering van de Paal gegeven worden.

Voorbeeld

![oplaadpaal](https://user-images.githubusercontent.com/62252105/211834525-e257c1f9-dde3-414e-965e-4e6d4eb6ab11.jpg)


## **Hoe baken ik een haagvak af in de BGT?**

De BGT kent geen specifiek objecttype 'Haagvak'.

Het advies is om een haag op te nemen en eronder een "haagvak" te leggen. 
Dit doe je door de haag op te nemen als een optioneel objecttype Vegetatieobject (lijn of vlak), van het type Haag. Het haagvlak wordt afgebakend door het opnemen van een verplicht object BegroeidTerreindeel, van het type Groenvoorziening. In de beheeromgeving kan hier een nadere classificatie (bijvoorbeeld 'haagvak') aan worden toegevoegd.

Voorbeeld

![image](https://user-images.githubusercontent.com/62252105/212030752-fc8c7411-46d4-48fa-916d-a7b1117ec350.png)


## **Hoe baken ik VRI's en portalen met verkeerslichten af in ImGeo?**
Er ontbreekt een imgeo classificatie voor verkeerslicht of VRI. Je kan het beste zo dicht mogelijk bij de werkelijkheid proberen te komen.

Advies is om de paal op te nemen als Imgeo objecttype Paal, van het Type Verkeersregelinstallatiepaal, op rh = 0.

Voor het verkeerslicht zelf is het advies om hiervoor op te nemen een objecttype Installatie, zonder nadere classificatie en deze op rh = 1 te lokaliseren.
In de beheerapplicatie kun je in detail aangeven om welke installatie het gaat.

Voorbeeld

![verkeerslicht](https://user-images.githubusercontent.com/62252105/216049084-fcb6462a-0764-44db-b75a-39271cf5e871.jpg)



## **Hoe baken ik doorsteken bij provinciale wegen af in de BGT?**




## **Hoe worden nevenadressen opgenomen in een nummeraanduidingreeks bij een Pand?**
In de BGT gegevenscatalogus worden geen eisen gesteld aan het wel/niet opnemen van nevenadressen bij een Pand in de BGT. Voor een goede oriëntatie en het gebruik van de BGT-kaart is het zichtbaar zijn van nevenadressen in de BGT kaart wel wenselijk.

Het advies is om ook de nummeraanduidingsreeksen van nevenadressen die aanwezig zijn in de BAG op te nemen in de BGT. Hiervoor gelden dezelfde spelregels als voor de reguliere nummeraanduidingsreeksen.

Voorbeeld

![nevenadressen](https://user-images.githubusercontent.com/62252105/216054980-a66aa159-1fab-416f-bf09-d1c1d089a97b.JPG)

De nummers 17 en 143 zijn nevenadressen.



## **Hoe baken ik een terrein af met zonnepanelen (zonneakker) in de BGT?**
In de gegevenscatalogi (BGT en Imgeo) zijn geen classificatie opgenomen om een terrein te benoemen als zonneakker. Wel is er de mogelijkheid om een los zonnepaneel op te nemen. In het kader van de energietransitie is het gewenst om deze terreinen met zonnepanelen te onderscheiden.

Het advies is om het terrein af te bakenen als een IMGeo objecttype FunctioneelGebied, zonder verdere classificatie. Daarnaast kan bv op de hoekpunten van het terrein een zonnepaneel opgevoerd worden, door het opvoeren van het IMGeo objecttype Installatie van het type Zonnepaneel. Door deze combinatie, functioneel gebied en zonnepaneel, kan een gebruiker van de BGT een zonneakker opzoeken.
In de beheeromgeving kan hier een nadere classificatie (bijvoorbeeld 'zonneakker') aan worden toegevoegd.

Voorbeeld

![zonneakker](https://user-images.githubusercontent.com/62252105/214539234-29b7a5ae-a39b-4d27-a2ca-9203bcb31023.jpg)


## **Hoe baken ik een galerij en bijbehorende trap af van een flat?**
Een gallerij maakt onderdeel uit van een BAG pand. Bij een BGT pand wordt de galerij juist niet meegenomen, omdat deze niet op rh=0 ligt.
Het advies is om de galerij op te nemen als een objecttype GebouwInstallatie zonder nadere classificatie, op rh > 0.
De toeganstrap wordt opgenomen als een objecttype GebouwInstallatie van het type Toegangstrap.

Voorbeeld

![galerijflat](https://user-images.githubusercontent.com/62252105/216328443-ae8d0cd5-a93a-4c28-b204-2e43a8ca2743.jpg)
In dit voorbeeld zijn er 2 galerijen (objecttype GebouwInstallatie) op rh=1 en rh = 2.

![galerij met trap](https://user-images.githubusercontent.com/62252105/216329170-53f697ff-38a9-454b-9806-ff45e59a2b8d.jpg)
In dit voorbeeld zijn er 2 galerijen (objecttype GebouwInstallatie-zonder classificatie) op rh=1 en rh = 2. De trap is een GebouwInstallatie-toegangstrap, rh = 0. 


## **Wat is het verschil tussen een OnbegroeidTerreindeel met fysiekvoorkomen 'zand' en 'onverhard - zand'?**
Het bgt-fysiekvoorkomen 'zand' bij OnbegroeidTerreindeel is bedoeld als zandvlakte, waarmee je dus een strand, strandwallen, en duinen kunt afbakenen.

Voorbeeld

![strand](https://user-images.githubusercontent.com/62252105/216337841-8bbb752d-1c46-47bf-82c2-dd32844c65b6.jpg)

Het OnbegroeidTerreindeel met FysiekVoorkomen Onverhard- en IMgeo de toevoeging Zand, wordt toegepast voor een braakliggende terrein.

Voorbeeld

![vacant-lot-park-grassland-ecosystem-pasture-land-lot-1442455-pxhere com](https://user-images.githubusercontent.com/62252105/216337206-b191e989-904e-4863-871c-db64761fd193.jpg)




