import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { MovieService } from '../../../../libs/movie-database/server/application/src/lib/movie.service';
import { SerialService } from '../../../../libs/movie-database/server/application/src/lib/serial.service';
import { ActorService } from '../../../../libs/movie-database/server/application/src/lib/actor.service';
import {
  ActorAddWriteModel,
  MovieAddWriteModel,
  SerialAddWriteModel,
} from '@tin/movie-database/domain';

@Injectable()
export class Seeder {
  constructor(
    private readonly movieService: MovieService,
    private readonly serialService: SerialService,
    private actorService: ActorService
  ) {}

  @Command({
    command: 'tin:seed>',
    describe: 'Seed the database',
    autoExit: true,
  })
  async create() {
    await this.createActors([
      {
        name: 'Tom',
        surname: 'Hanks',
        thumbnailUrl: 'https://fwcdn.pl/ppo/01/24/124/449666.2.jpg',
        biography: `Jego rodzice rozwiedli się, gdy miał pięć lat. Wychowywał go ojciec – kucharz, który wkrótce przeniósł się z Kaliforni do Oakland. Aktorstwem Tom zainteresował się w szkole średniej. Podczas studiów w California State University w Sacramento wystąpił z powodzeniem w studenckiej inscenizacji "Wiśniowego sadu" Antoniego Czechowa. Zwrócił na niego wówczas uwagę reżyser Vincent Dowling, który powierzył mu rolę Grumia w "Poskromieniu złośnicy" Williama Szekspira, w zespole Great Lakes Shakespeare Festival z Cleveland. Hanks z sukcesem zagrał także w innych szekspirowskich inscenizacjach tego zespołu. Za występ w "Dwóch panach z Werony" zdobył nagrodę dla najlepszego aktora przyznaną przez Stowarzyszenie Krytyków Cleveland. Został zaproszony do Nowego Jorku, gdzie ponownie wystąpił w "Poskromieniu złośnicy" i zadebiutował w filmie "On wie, że jesteś sam". Następnie przeniósł się do Los Angeles. Pojawił się u boku Jane Fondy w filmie "Lalkarka". Wielką popularność przyniósł mu udział w telewizyjnym serialu komediowym "Bosom Buddies". Pierwszy wielki sukces kasowy odniósł grając w "Plusku", a za występ w "Dużym" zdobył pierwszą nominację do Oscara. Dwa lata z rzędu zdobywał Oscara za najlepszą rolę męską – za występy w "Filadelfii" (1993, także Złoty Glob i Srebrny Niedźwiedź na MFF w Berlinie) i "Forreście Gumpie". Jego pierwszą żoną była aktorka i producentka Samantha Lewes, drugą jest aktorka Rita Wilson. Był producentem i wyreżyserował odcinki serii dokumentalnej: "Z Ziemi na Księżyc", o programie kosmicznym Apollo, i fabularnej: "Kompania braci".`,
      },
      {
        name: 'Leonardo',
        surname: 'DiCaprio',
        thumbnailUrl: 'https://fwcdn.pl/ppo/00/30/30/449647.2.jpg',
        biography: `Anegdota mówi, iż w czasie ciąży matka DiCaprio często odwiedzała różnego rodzaju wystawy i muzea, twierdząc, że kontakt ze sztuką od najwcześniejszych dni uczyni z jej dziecka artystę. Podczas jednej z takich eskapad poczuła, że synek zaczyna się poruszać, a ponieważ stało się to, kiedy podziwiała jeden z obrazów Da Vinci zdecydowała się na nazwanie swojego dziecka imieniem mistrza - Leonardo. Nie wiadomo ile w tej historii jest prawdy a ile kłamstwa, ale faktem jest, że Leonardo DiCaprio zalicza się dziś do jednego z najlepszych aktorów amerykańskiego kina. Pierwszy raz przed kamerą stanął w wieku 5. lat w serialu "Romper Room". Nie był to zbyt udany start, ponieważ Leonardo prawie został wyrzucony z planu za złe zachowanie. Później parokrotnie występował w reklamówkach i programach edukacyjnych, ale oficjalnie za jego pierwszą ważną rolę uznaje się występ w filmie "Critters 3". W roku 1993 otrzymał swoją "wielką szansę". Po pokonaniu 400. konkurentów podczas trwającego 4 miesiące "castingu" zdobył rolę u boku Roberta De Niro i Ellen Barkin w filmie "Chłopięcy świat". Krytycy byli zachwyceni. Kolejny występ w "Co gryzie Gilberta Grape'?" wprawił widzów w osłupienie. DiCaprio, wcielając się w postać niepełnosprawnego Arniego Grape'a, stworzył postać tak rzeczywistą i przekonywającą, że wielu ludzi wychodziła z kina myśląc, iż oglądali na ekranie naprawdę chorego człowieka.`,
      },
      {
        name: 'Johnny',
        surname: 'Depp',
        thumbnailUrl: 'https://fwcdn.pl/ppo/00/29/29/449646.2.jpg',
        biography: `Johnny Depp urodził się w małym miasteczku w bardzo typowej amerykańskiej rodzinie. Jego ojciec był inżynierem matka zaś zajmowała się domem. Kiedy miał 7 lat przeprowadził się wraz z rodziną na Florydę. Kilka lat później jego rodzice rozwiedli się, co spowodowało u Johna załamanie nerwowe i skłoniło do szukania ukojenia w narkotykach. Stało się to przyczyną wyrzucenia Deppa ze szkoły. Postanowił wtedy zrobić karierę jako muzyk. Grał w około 15. różnych zespołach, z których największą sławą cieszyła się grupa pod nazwą "Kids". Wyruszyli nawet na wspólne tournee z legendarnym rockmanem Iggy Popem. Niestety po kilku latach zespół się rozpadł, a Depp postanowił tym razem spróbować szczęścia jako aktor. Jego ówczesna żona Lori Allison zapoznała go z Nicolasem Cagem, który załatwił mu rolę w horrorze "Koszmar z ulicy Wiązów". Po ukończeniu szkoły aktorskiej w Los Angeles Depp został zaangażowany do jednej zszych ról w obsypanym Oscarami filmie Olivera Stone'a "Pluton". Zwrócił na siebie uwagę producentów telewizyjnych i został zatrudniony do serialu "21 Jump Street". Rola detektywa Tommy'ego Hansona, którą tam grał przyniosła mu ogromną popularność i umożliwiła rozpoczęcie kariery na dużym ekranie. Wystąpił w filmie kontrowersyjnego reżysera Johna Watersa "Beksa" i w surrealistycznej baśni Tima Burtona "Edward Nożycoręki". Obie role zostały ocenione bardzo dobrze a Deppowi nadały status gwiazdy. Niestety jego kariera zawodowa była w tym okresie pełna skandali. W 1993 r. aktor River Phoenix zmarł z przedawkowania narkotyków w nocnym klubie Viper Room, należącym do Deppa. Rok później Johnny został aresztowany za spowodowanie strat w wysokości 2.000 dolarów w hotelu na Manhattanie.  Na szczęście był to przejściowy okres w jego życiu i dziś aktor wzbudza zainteresowanie prasy brukowej tylko częstymi zmianami towarzyszek swojego życia. Warto nadmienić, że były wśród nich takie sławy jak: Sherilynn Fenn, Jennifer Grey, czy modelka Kate Moss. W 1996 r. Johnny Depp zakupił posiadłość, należącą wcześniej do odtwórcy roli Drakuli, Bela Lugosi i zamieszkiwał tam wraz ze swoją kolejną narzeczoną, francuską piosenkarką Vanessą Paradise, aż do czasu rozstania w roku 2012.`,
      },
      {
        name: 'Keira Christina',
        surname: 'Knightley',
        thumbnailUrl: 'https://fwcdn.pl/ppo/54/06/45406/449965.2.jpg',
        biography: `Szczupła, angielska brunetka zyskała sławę dzięki roli w filmach: "Podkręć jak Beckham" i "Piraci z Karaibów: Klątwa Czarnej Perły". Jest córką aktora Willa Knightley i scenarzystki Sharman Macdonald. Już od najmłodszych lat interesowała się aktorstwem. W wieku trzech lat poprosiła rodziców, aby wynajęli jej agenta. Rodzice, choć początkowo sceptycznie nastawieni do pomysłu córki, trzy lata później zgodzili się na jej propozycję. Warunek był jeden - praca aktorki nie mogła w żaden sposób kolidować z nauką. Młoda Keira brała zatem lekcje aktorstwa w czasie wakacji szkolnych i przyjmowała tylko takie role, które w żaden sposób nie kolidowały z zajęciami szkolnymi. Od najmłodszych lat uczęszczała również na lekcje tańca. Na dużym ekranie zadebiutowała w wieku zaledwie 12 lat w romantycznym dramacie Moiry Armstrong "A Village Affair". Powoli zdobywała uznanie widzów i krytyki kolejnymi rolami w "Niewinnych kłamstwach"oraz zrobionymi na potrzeby telewizji filmami "Treasure Seekers" i "Coming Home". Pierwszym przełomem w karierze młodej aktorki okazał się film "Gwiezdne Wojny: Część I - Mroczne widmo". Następnie występowała w mini serialu telewizyjnym "Oliver Twist" oraz zagrała córkę Robin Hooda w "Princess of Thieves". Widzowie dostrzegli jej talent również w "Bunkrze" Gilliesa MacKinnona, ale prawdziwą sławę przyniósł jej komediodramat "Podkręć jak Beckham". Ten film uczynił z Keiry jedną z najpopularniejszy aktorek w Wielkiej Brytanii. Międzynarodową sławę przyniosła jej rola w filmie "Piraci z Karaibów: Klątwa czarnej perły"`,
      },
      {
        name: 'Orlando Jonathan Blanchard',
        surname: 'Bloom',
        thumbnailUrl: 'https://fwcdn.pl/ppo/83/46/8346/449891.2.jpg',
        biography: `Orlando Bloom urodził się 13 stycznia 1977 roku w Cantenbury w Wielkiej Brytanii. Jako mały chłopiec postanowił zostać bohaterem takim jak Supermen, a o tym, że będzie aktorem zdecydował gdy dowiedział się, że grający rolę Supermana Christopher Reeve jest właśnie aktorem.Gdy miał cztery lata zmarł jego ojciec. W wieku 16 lat wraz z matką i starszą (Samanta - 2 lata starsza) siostrą przeprowadził się do Londynu, by wzbogacić i rozwinąć swoją karierę. Tam przez dwa lata grał w National Youth Theatre. Po otrzymaniu stypendium rozpoczął naukę w British American Guidhall School of Music and Drama, ukończył tą szkołę. Rolę Legolasa we "Władcy Pierścieni" Petera Jacksona dostał na dwa dni przed jej ukończeniem. Ma trzy tatuaże (w okolicach pępka, na łopatce i po wewnętrznej stronie uda). Jego hobby to surfowanie, nurkowanie. Pasjonuje się fotografią. Kibicuje Manchesterowi United. W 1999 r. miał bardzo ciężki wypadek, wypadł z okna i połamał sobie żebra. Na szczęście po operacji wrócił do pełnej sprawności fizycznej. Mieszka w Londynie i Los Angeles. Ma psa Maude. Zajął 19 miejsce w plebiscycie na najprzystojniejszego brytyjskiego aktora.`,
      },
      {
        name: 'Robert John',
        surname: 'Downey Jr.',
        thumbnailUrl: 'https://fwcdn.pl/ppo/00/31/31/449654.2.jpg',
        biography: `Robert John Downey Jr. urodził się w Greenwich Village, w Nowym Jorku, o godzinie 13:10. Jego przezwisko to Bob. Ma 175 cm wzrostu. Jest synem reżysera, Roberta Downeya Seniora. Swoją pierwszą rolę zagrał w filmie ojca "Pound", gdzie występował jako szczeniak. Kiedy miał 20 lat, dołączył na jeden sezon do "Saturday Night Live". W 1987 roku dostał główną rolę w filmie Jamesa Tobacka "The Pick-Up Artist". W tym samym roku zagrał narkomana, Juliana Wellsa w filmie "Less Than Zero". W 1992 roku wcielił się w postać Charliego Chaplina w "Chaplinie" (reżyseria Sir Richard Attenborough). Za ten występ został nominowany do Oscara w kategorii "najlepszy aktor", ale niesety nie zdobył trofeum. W 2000 roku otrzymał rolę w serialu komediowym "Ally McBeal", gdzie grał adwokata Larry'ego Paula, chłopaka tytułowej bohaterki. Za tę kreację zdobył Złotego Globa za "najlepszą drugoplanową rolę w serialu komediowym". Podczas kręcenia "Ally", Downey, wykonując utwory Joni Mitchell "River", "Chances Are" w duecie z Vondą Shepard, a także "Every Breath You Take" ze Stingiem, pokazał, że umie śpiewać tak samo dobrze jak grać. Sam nagrał tylko jedną piosenkę "Snakes" na ostatnia płytę "Ally McBeal" "For Once In My Life". Jego ulubionym aktorem jest Peter O'Toole. Był mężem aktorki, Deborah Falconer, z którą rozwiódł się 26 kwietnia 2004 roku. Ma 1 dziecko. Jego przyjacielem z dzieciństwa jest Richard Hall, znany jako Moby. Obecnie jest związany z producentką filmu "Gothika", Susan Levin, z którą ma dwójkę dzieci. `,
      },
      {
        name: 'Michael Clarke',
        surname: 'Duncan',
        thumbnailUrl: 'https://fwcdn.pl/ppo/75/46/7546/450906.2.jpg',
        biography:
          'Mierzący prawie dwa metry wzrostu Michael Clarke Duncan w Hollywood często bywa nazywany "Wielkim Mikiem" ("Big Mike"). Mówi się o nim jako o olbrzymie z wielkim sercem i ujmującą osobowością. Publiczność kojarzy go przede wszystkim z roli Johna Coffeya z adaptacji powieści Stephena Kinga - "Zielona mila" w reżyserii Franka Darabonta. Otrzymał za nią nominację do Oscara za najlepszą drugoplanową kreację męską. Pojawił się również w dwóch kasowych przebojach: "Planeta małp" Tima Burtona i w "Królu Skorpionie" Chucka Russella. Razem z siostrą Judith dorastał w południowej części Chicago wychowywany tylko przez matkę - Jean Duncan. W szkole średniej chciał grać w futbolowej drużynie "Chicago Bears", jednak nie pozwoliła mu no to matka z obawy, że może zrobić sobie krzywdę. Swoje zainteresowania skierował w stronę aktorstwa. Dostał się na studia na Wydziale Komunikacji Uniwersytetu Stanowego Mississippi Alcorn. Choroba matki zmusiła go do powrotu do Chicago. Na nim spoczął obowiązek utrzymania rodziny. W dzień pracował jako robotnik (m.in. kopał doły) dla kompanii "Peoples Gas Company", a nocami dorabiał jako ochroniarz w nocnych klubach. W jednym z lokali spotkał producenta teatralnego, który zaangażował go do ochraniania jego zespołu. Razem z nim Duncan w połowie lat 90. dotarł do Hollywood. Początki nie były obiecujące. Gdy znalazł się w beznadziejnej sytuacji finansowej, zatrudnił się w agencji ochroniarskiej (pracował m.in. dla Willa Smitha i Martina Lawrence\'a) i jednocześnie rozglądał się za rolami filmowymi. Znalazł sobie agenta i dzięki temu coraz częściej udawało mu się otrzymywać drobne epizody w serialach telewizyjnych (m.in. w operze mydlanej "The Bold and the Beautiful") oraz reklamach (m.in. piwa "Budweiser"). Na dużym ekranie zaczął pojawiać się w rolach... ochroniarzy i bramkarzy. Takie epizody otrzymał w komedii "Striptizerki" i w dramacie "Senator Bulworth". Przełom przyszedł dopiero w drugiej połowie 1998 roku dzięki roli w filmie "Armageddon" w którym wcielił się w postać Beara - jednego z członków grupy wiertniczych ratujących Ziemię przed zderzeniem z potężnym meteorytem. Film odniósł ogromny sukces kasowy i dzięki temu rozpoczęła się jego kariera aktorska oraz przyjaźń Duncana z Brucem Willisem. W ręce gwiazdora trafiła książka Stephena Kinga - "Zielona mila" o Johnie Coffeyu - dobrodusznym olbrzymie posiadającym zdolności paranormalne, niewinnie skazanym na karę śmierci i oczekującym na wykonanie wyroku. Willis dowiedział się, że reżyser Frank Darabont właśnie kompletuje obsadę do ekranizacji. Natychmiast do niego zadzwonił i oznajmił mu - "Znalazłem twojego Johna Coffeya". Przesłuchania i testy ekranowe Duncana wypadły świetnie i były ochroniarz otrzymał swoją pierwszą ważną rolę. Kreacja, którą stworzył przyniosła mu znakomite recenzje krytyki, uwielbienie publiczności, oraz szereg nagród, w tym nominacji do Oscara oraz Złotego Globu. Posypały się propozycje. Rok po sukcesie filmu "Zielona mila" można było zobaczyć Duncana ponownie obok Willisa, a także Matthew Perry\'ego, w komedii "Jak ugryźć 10 milionów". W roku 2001 wcielił się w Attara w "Planecie małp" Tima Burtona. Nie zabrakło go także w filmach, takich jak "Psy i koty" oraz "Agencie, podaj łapę". W 2002 roku wcielił się w postać Balthazara w filmie przygodowo-fantastycznym "Król Skorpion". W roku 2000 Duncan otrzymał tytuł "Męskiej Gwiazdy Jutra" podczas zjazdu ShoWest Convention.',
      },
      {
        name: 'Peter Hayden',
        surname: 'Dinklage',
        thumbnailUrl: 'https://fwcdn.pl/ppo/35/30/3530/449665.2.jpg',
        biography:
          "Peter Dinklage zaczął grać w piątej klasie, gdy zagrał główną rolę w przedstawieniu 'The Velveteen Rabbit'. W 1991 roku ukończył studia w Bennington Collage w Vermont. Filmowy debiut Dinklage'a miał miejsce w 1995 roku w filmie 'Living in Oblivion'. Następnie wystąpił w produkcji 'Bullet' (nie został tam nawet wymieniony w napisach). Potem pojawił się w 1998 roku w 'Safe Man', w 1999 w 'Pigeonholed' i w 2001 w 'Human Nature'('Wojnie plemników'). W 2002 roku zagrał wreszcie większe - drugoplanowe role w '13 Moons' ('13 Księżyców') i 'Just A Kiss' ('Zaczyna się od pocałunku'). W 2003 roku zagrał tytułową rolę w 'The Station Agent' ('Dróżniku') Thomas'a McCarthy. Z reżyserem i scenarzystą 'Dróżnika' Dinklage znał się już - współpracowali 7 lat wcześniej przy niezależnej Broadway'owskiej sztuce 'The Killing Act'. Większość produkcji, w których występuje Dinklage to, tak, jak 'Dróżnik', kino niezależne.",
      },
      {
        name: 'Emilia Isabelle Euphemia Rose',
        surname: 'Clarke',
        thumbnailUrl: 'https://fwcdn.pl/ppo/30/86/1523086/450008.2.jpg',
        biography:
          'Emilia Clarke urodziła się w Londynie, a dorastała w Berkshire (Anglia, Wielka Brytania). Ojciec Emilii jest inżynierem dźwięku w teatrze, a matka bizneswoman. Ma też brata, który studiuje politologię. Zaczęła grać w wieku trzech lat po obejrzeniu musicalu "Show Boat", przy którym pracował jej ojciec.  Uczyła się w St Edward\'s School (2000-2005) i Rye St Antony School  w Oxfordzie (Anglia, Wielka Brytania), a później studiowała w Drama Centre London (Anglia, Wielka Brytania), które ukończyła w 2009 r. Pierwszą rolę otrzymała w jednym z odcinków "Lekarzy". Jej kolejnym angażem był film dla kanału SyFy "Atak dinozaurów". Przełom nastąpił jednak, kiedy została obsadzona w "Grze o Tron" kanału HBO jako Daenerys Targaryen.  W 2011 r. otrzymała Ewwy Award dla najlepszej aktorki drugoplanowej w serialu dramatycznym "Gra o Tron". Dwa lata później zagrała na Broadwayu w adaptacji sztuki Trumana Capote "Śniadanie u Tiffany\'ego".',
      },
      {
        name: 'Neil Patrick',
        surname: 'Harris',
        thumbnailUrl: 'https://fwcdn.pl/ppo/46/18/4618/449902.2.jpg',
        biography:
          'Neil dorastał w Ruidoso (Nowy Meksyk), gdzie jego rodzice, Sheila i Ron, prowadzili restaurację. Jest uzdolniony aktorsko i muzycznie, był więc wybitnym uczniem La Cueva High School. Grał w wielu przedstawieniach i musicalach szkolnych. Mianowano go honorowym absolwentem szkoły. Odkryty został na obozie teatralnym przez Marka Medoffa. Pierwszą rolę filmową zagrał przy boku Whoopi Goldberg w "Serce Klary". Neil występował również na Broadwayu.W 2006 roku publicznie oświadczył, że jest homoseksualistą. Jego obecny partner to David Burtka. Zastępcza matka urodziła im bliźniaków.',
      },
      {
        name: 'Jason Jordan',
        surname: 'Segel',
        thumbnailUrl: 'https://fwcdn.pl/ppo/62/60/56260/450581.2.jpg',
        biography:
          'Jason urodził się 18 stycznia 1980 roku w Los Angeles. Został wychowany w żydowskiej rodzinie. Ma starszego brata Adama i młodszą siostrę Alison. W katolickiej szkole średniej odnosił sukcesy z drużyną w grze w koszykówkę. W liceum grał w szkolnej grupie teatralnej, podczas jednego z przedstawień został zauważony przez szefową Paramount, która zaoferowała mu pracę. W wieku osiemnastu lat trafił na duży ekran w trzech komediach gdzie wypatrzył go Judd Apatow i zaprosił go na przesłuchanie do serialu "Luzaki i kujony". produkcja została jednak zakończona po pierwszym sezonie. Przez następne 6 lat chwytał się każdej roli i pisał scenariusze. Przełomem w jego karierze okazała się rola Marshalla Eriksena w sitcomie CBS "Jak poznałem waszą matkę". W 2007 roku podjął się realizacji swojego scenariusza "Chłopaki też płaczą" w którym zagrał główną rolę. Od 2008 roku współpracował z wytwórnią Disneya nad realizacją filmu "Muppety", który miał swoją premierę dopiero w 2011.',
      },
    ]);

    await this.createMovies([
      {
        title: 'Zielona Mila',
        releaseDate: new Date(1999, 11, 6),
        thumbnailUrl: 'https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg',
        description:
          'Rok 1935. Paul Edgecombe (Tom Hanks) jest jednym ze strażników bloku śmierci w więzieniu Cold Mountain. Do jego obowiązków należy odprowadzanie skazańców do celi śmierci długim korytarzem, wyłożonym zieloną wykładziną, zwaną "Zieloną milą". Pewnego dnia do więzienia przybywa olbrzymi czarnoskóry skazaniec, John Coffey (Michael Clarke Duncan). Ma oczekiwać na karę śmierci za zamordowanie dwóch białych dziewczynek. Jego wizyta na zawsze zmieni życie Paula i pozostałych pracowników więzienia.',
        actors: [
          { role: 'Paul Edgecomb', actor: 1 },
          { role: 'John Coffey', actor: 7 },
        ],
      },
      {
        title: 'Forest Gump',
        releaseDate: new Date(1994, 5, 23),
        thumbnailUrl: 'https://fwcdn.pl/fpo/09/98/998/7314731.6.jpg',
        description:
          '"Forrest Gump" to romantyczna historia, w której Tom Hanks wcielił się w tytułową postać - nierozgarniętego młodego człowieka o wielkim sercu i zdolności do odnajdywania się w największych wydarzeniach w historii USA, począwszy od swego dzieciństwa w latach 50-tych. Po tym, jak staje się gwiazdą footballu, odznaczonym bohaterem wojennym i odnoszącym sukcesy biznesmenem, główny bohater zyskuje status osobistości, lecz nigdy nie rezygnuje z poszukiwania tego, co dla niego najważniejsze - miłości swej przyjaciółki, Jenny Curran. Forrest jest małym chłopcem, kiedy jego ojciec porzuca rodzinę, a matka utrzymuje siebie i syna biorąc pod swój dach lokatorów. Kiedy okazuje się, że jej chłopiec ma bardzo niski iloraz inteligencji, pozostaje nieustraszona w swoim przekonaniu, że ma on takie same możliwości, jak każdy inny. To prawda - takie same, a nawet dużo większe. W całym swym życiu Forrest niezamierzenie znajduje się twarzą w twarz z wieloma legendarnymi postaciami lat 50-tych, 60-tych i 70-tych. Wiedzie go to na boisko piłki nożnej, poprzez dżungle Wietnamu, Waszyngton, Chiny, Nowy Jork, do Luizjany i w wiele innych miejsc, a wszystko to relacjonuje on w swych poruszających i wstrząsających opowieściach przypadkowo spotkanym osobom.',
        actors: [{ role: 'Forest Gump', actor: 1 }],
      },
      {
        title: 'Piraci z Karaibów: Klątwa Czarnej Perły',
        releaseDate: new Date(2003, 5, 28),
        thumbnailUrl: 'https://fwcdn.pl/fpo/73/09/37309/7515192.6.jpg',
        description:
          'Karaiby, XVIII w., 10-letnia Elizabeth, córka gubernatora, jest świadkiem katastrofy statku, wyglądającej na robotę piratów. Z wody wyłowiono jednego ocalonego, małego chłopca, Willa Turnera, na szyi którego Elizabeth znajduje tajemniczy medalion, wyglądający na piracki. Przestraszona dziewczynka zrywa medalion i ukrywa go przed wszystkimi. Chwilę później widzi czarny statek z postrzępionymi żaglami i piracką flagą na maszcie, znikający we mgle.  8 lat później, Port Royal. Podczas uroczystości promocji Jamesa Norringtona, w którym ojciec Elizabeth widzi przyszłego zięcia, na komodora, dziewczyna spada ze skały do morza. Ratuje ją Jack Sparrow - pirat, który do Port Royal przybył aby kupić (ukraść) statek. W "nagrodę" Norrtington zakuwa go w kajdany i skazuje na śmierć przez powieszenie następnego dnia. Jednak w nocy Port Royal przeżywa atak piratów pod wodzą kapitana Barbossy, którzy chcą odzyskać tajemniczy medalion, ciągle będący w posiadaniu Elizabeth. Dziewczyna zostaje porwana, a piraci odpływają i nikt nie wie, gdzie szukać córki gubernatora. Zakochany w niej Will Turner zwraca się o pomoc do Jacka Sparrowa, choć nienawidzi on piratów. Uwolniwszy go z celi, razem z nim kradnie (rekwiruje) statek i wyrusza, najpierw na Tortugę, a potem w ślad za niedoścignioną Czarną Perłą, statkiem Barbossy, by ocalić swoją ukochaną.',
        actors: [
          { role: 'Kapitan Jack Sparrow', actor: 3 },
          { role: 'Elizabeth Swann', actor: 4 },
          {
            role: 'Will Turner',
            actor: 5,
          },
        ],
      },
      {
        title: 'Piraci z Karaibów: Skrzynia Umarlaka',
        releaseDate: new Date(2006, 5, 24),
        thumbnailUrl: 'https://fwcdn.pl/fpo/74/04/107404/7518098.6.jpg',
        description:
          'Kapitan Jack Sparrow musi spłacić dług, który zaciągnął u władcy mórz - Davy Jonesa. Jeżeli tego nie uczyni, zostanie skazany na wieczne potępienie. Jego problemy oczywiście kompletnie rujnują plany ślubu Willa Turnera z piękną Elizabeth Swann, którzy wyruszają z kapitanem Sparrow w rejs pełen niezwykłych, nowych przygód.',
        actors: [
          { role: 'Kapitan Jack Sparrow', actor: 3 },
          { role: 'Elizabeth Swann', actor: 4 },
          {
            role: 'Will Turner',
            actor: 5,
          },
        ],
      },
      {
        title: 'Piraci z Karaibów: Na Krańcu Świata',
        releaseDate: new Date(2007, 4, 19),
        thumbnailUrl: 'https://fwcdn.pl/fpo/17/60/121760/7154556.6.jpg',
        description:
          "Dobre czasy, w których piraci królowali na wszystkich morzach świata, powoli dobiegają końca. Will Turner (Orlando Bloom) udaje się razem z dotychczasowym wrogiem Barbossą (Geoffrey Rush) w podróż na Daleki Wschód, gdzie ma nadzieję na odnalezienie tajemniczych map, które pomogą odkryć skrytkę Davy'ego Jonesa (Bill Nighy), a następnie ocalić kapitana Jacka Sparrowa (Johnny Depp). Will chce także uratować swojego ojca, dlatego musi odzyskać Czarną Perłę, która jako jedyna jest w stanie doścignąć Latającego Holendra. Tymczasem Jones wraz z lordem Cutlerem Beckettem (Tom Hollander), demonicznym azjatyckim piratem Sao Fengiem (Yun-Fat Chow) i Jamesem Norringtonem (Jack Davenport) zawierają układ zagrażający wolności i życiu Jacka, Elizabeth, Willa, Barbarossy i wszystkich piratów na całym świecie. Jeśli główni bohaterowie chcą ujść z tej przygody cało, muszą udać się na terytorium dotychczas nie zaznaczone na żadnej mapie - na wyspę Shipwreck na Krańcu Świata...",
        actors: [
          { role: 'Kapitan Jack Sparrow', actor: 3 },
          { role: 'Elizabeth Swann', actor: 4 },
          {
            role: 'Will Turner',
            actor: 5,
          },
        ],
      },
    ]);

    await this.createSerials([
      {
        title: 'Gra o Tron',
        episodesCount: 60,
        thumbnailUrl: 'https://fwcdn.pl/fpo/68/48/476848/7794141.6.jpg',
        description:
          'Kilka rodzin szlacheckich walczy o panowanie nad ziemiami krainy Westeros. Polityczne i seksualne intrygi są na porządku dziennym. Robert Baratheon (Mark Addy), król Siedmiu Królestw, prosi swojego starego przyjaciela, Eddarda Starka (Sean Bean), aby służył jako jego główny doradca. Ten, podejrzewając, że poprzednik na tym stanowisku został zamordowany, przyjmuje propozycję, aby dogłębnie zbadać sprawę. Okazuje się, że przejęcie tronu planuje kilka rodzin. Lannisterowie, familia królowej, staje się podejrzana o podstępne knucie spisku. Po drugiej stronie morza pozbawieni władzy ostatni przedstawiciele poprzednio rządzącego rodu, Targaryenów, również zamierzają odzyskać kontrolę nad królestwem. Narastający konflikt pomiędzy rodzinami, do którego włączają się również inne rody, prowadzi do wojny. W międzyczasie na dalekiej północy budzi się pradawne zło. W chaosie pełnym walk i konfliktów tylko grupa wyrzutków zwana Nocną Strażą stoi pomiędzy królestwem ludzi, a horrorem kryjącym się poza nim.',
        actors: [
          { role: 'Tyrion Lannister', actor: 8 },
          { role: 'Daenerys Targaryen', actor: 9 },
        ],
      },
      {
        title: 'Jak poznałem waszą matkę',
        episodesCount: 208,
        thumbnailUrl: 'https://fwcdn.pl/fpo/18/33/221833/7882346.6.jpg',
        description:
          '"How I Met Your Mother" to telewizyjny serial komediowy, opowiadający o (nie)szczęśliwych próbach "zdobycia" odpowiedniej narzeczonej przez Teda (Josh Radnor), głównego bohatera. Poznajemy go w momencie, kiedy jego najlepszy przyjaciel Marshall, student prawa (Jason Segal), postanawia oświadczyć się swojej narzeczonej, przedszkolance Lily (Alyson Hannigan). Od tego momentu Ted nie przestaje myśleć o tym, że w końcu musi się ustatkować, musi znaleźć odpowiednią kobietę, swoją prawdziwą miłość. W poszukiwaniach tych nieustannie pomaga mu Barney (Neil Patrick Harris), bezczelny człowiek, mający obsesję na punkcie garniturów, który w każdej sytuacji widzi okoliczność sprzyjającą "wyrwaniu" jakiejś panny. W momencie kiedy Ted poznaje Robin (Cobie Smulders) sprawa się komplikuje. Nie ma on wątpliwości, że jest to miłość od pierwszego wejrzenia, jednakże, jak się później okazuje, los chce zupełnie inaczej.',
        actors: [
          { role: 'Barney Stinson / Dr John Stangel', actor: 10 },
          { role: 'Marshall Eriksen', actor: 11 },
        ],
      },
    ]);
  }

  private async createActors(actors: ActorAddWriteModel[]): Promise<void> {
    for (const actor of actors) {
      await this.actorService.create(actor);
    }
  }

  private async createMovies(movies: MovieAddWriteModel[]): Promise<void> {
    for (const movie of movies) {
      await this.movieService.create(movie);
    }
  }

  private async createSerials(serials: SerialAddWriteModel[]): Promise<void> {
    for (const serial of serials) {
      await this.serialService.create(serial);
    }
  }
}
