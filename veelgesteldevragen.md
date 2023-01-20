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

![Strandpaviljoen-Paal-10-Ouddorp](https://user-images.githubusercontent.com/62252105/212058286-443eca43-32ae-4cff-9ceb-04bc107f4eed.jpg)


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


## **hoe baken ik VRI's en portalen met verkeerslichten af in ImGeo?**





## **Hoe baken ik doorsteken bij provinciale wegen af in de BGT?**




## **Hoe worden nevenadressen opgenomen in een nummeraanduidingreeks bij een Pand?**
In de BGT gegevenscatalogus worden geen eisen gesteld aan het wel/niet opnemen van nevenadressen bij een Pand in de BGT. Voor een goede oriëntatie en het gebruik van de BGT-kaart is het zichtbaar zijn van nevenadressen in de BGT kaart wel wenselijk.

Het advies is om ook de nummeraanduidingsreeksen van nevenadressen die aanwezig zijn in de BAG op te nemen in de BGT. Hiervoor gelden dezelfde spelregels als voor de reguliere nummeraanduidingsreeksen.

voorbeeld

{foto frank de jong}


## **Hoe baken ik een terrein af met zonnepanelen (zonneakker) in de BGT?**
In de gegevenscatalogi (BGT en Imgeo) zijn geen classificatie opgenomen om een terrein te benoemen als zonneakker. Wel is er de mogelijkheid om een los zonnepaneel op te nemen. In het kader van de energietransitie is het gewenst om deze terreinen met zonnepanelen te onderscheiden.

Het advies is om het terrein af te bakenen als een IMGeo objecttype FunctioneelGebied, zonder verdere classificatie. Daarnaast kan bv op de hoekpunten van het terrein een zonnepaneel opgevoerd worden, door het opvoeren van het IMGeo objecttype Installatie van het type Zonnepaneel. Door deze combinatie, functioneel gebied en zonnepaneel, kan een gebruiker van de BGT een zonneakker opzoeken.
In de beheeromgeving kan hier een nadere classificatie (bijvoorbeeld 'zonneakker') aan worden toegevoegd.

Voorbeeld
{foto}








