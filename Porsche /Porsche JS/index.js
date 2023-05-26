function redirectToPage(buttonNumber) {
  window.location.href = `carCard.html?id=${buttonNumber}`;
}
//
document.getElementById("button1").addEventListener("click", function () {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    redirectToPage(1);
  }, 200);
});

document.getElementById("button2").addEventListener("click", function () {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    redirectToPage(2);
  }, 200);
});
document.getElementById("button3").addEventListener("click", function () {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    redirectToPage(3);
  }, 200);
});
document.getElementById("button4").addEventListener("click", function () {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    redirectToPage(4);
  }, 200);
});
document.getElementById("button5").addEventListener("click", function () {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    redirectToPage(5);
  }, 200);
});
document.getElementById("button6").addEventListener("click", function () {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    redirectToPage(6);
  }, 200);
});

//
const data = [
  {
    id: 1,
    slogan: "Wehikuł wszech czasów",
    text1:
      "Nowe 911 jest sumą swoich poprzedników – i dlatego stanowi odbicie przeszłości oraz wizję przyszłości. Sylwetka: ikoniczna. Design: ponadczasowy. Technika: inspirowana wspaniałymi zwycięstwami w wyścigach i zawsze o krok przed innymi. Wraz z ósmą generacją 911 ruszamy w przyszłość.",
    text2:
      "Dobry design powinien być pionierski. Tak samo jak technika. I dlatego wnętrze nowego 911 przeciera nowe szlaki – szlaki, które odzwierciedlają stare atuty, a zarazem otwierają nowe możliwości.",
    spec0: "648000",
    spec1: "Moc: 385 KM/283 kW",
    spec2: "Przyspieszenie 0-100 km/h: 4,3 s ",
    spec3: "Prędkość maksymalna: 293 km/h",
    spec4: "spalanie :10,39 - 10,8 l/100 km",
    spec5: "Szerokość: 1852 mm",
    spec6: "Długość: 4519 mm",
    spec7: "648000",
    img1: "pictures/carreraRed/carrera_red1.jpeg",
    img2: "pictures/carreraRed/carrera_red2.jpeg",
    img3: "pictures/carreraRed/carrera_red3.jpeg",
    img4: "pictures/carreraRed/carrera_red4.jpeg",
    img5: "pictures/carreraRed/featuresPhoto1.jpg",
    img6: "pictures/carreraRed/featuresPhoto2.jpg",
    img7: "pictures/carreraRed/911TSphoto.png",
  },
  {
    id: 2,
    slogan: "Koncepcja 718.",
    text1:
      "Modele 718 to samochody stworzone w imię sportu. Ze swoim centralnie umieszczonym silnikiem łączą wyścigowego ducha legendarnego Porsche 718 z cechami auta sportowego przyszłości – a efekt tego połączenia przenoszą na współczesne drogi. W jednym celu: by z każdego dnia wyciągać jak najwięcej.",
    text2:
      "Design - precyzyjny, lecz nie wymyślny. Pewny siebie, ale nie skromny. Sylwetka – niska, szeroka, smukła. Projekt nadwozia modeli 718 zwraca uwagę sportowymi proporcjami i jasno nakreślonymi konturami.",
    spec1: "Moc: 402 KM/294 kW",
    spec2: "Przyspieszenie 0-100 km/h: 4,5 s ",
    spec3: "Prędkość maksymalna: 293 km/h",
    spec4: "spalanie :10,9 - 10,8 l/100 km",
    spec5: "Szerokość: 1856 mm",
    spec6: "Długość: 4509 mm",
    spec7: "593000",
    img1: "pictures/718Green/box_green1.jpeg",
    img2: "pictures/718Green/box_green2.jpeg",
    img3: "pictures/718Green/box_green3.jpeg",
    img4: "pictures/718Green/box_green4.jpeg",
    img5: "pictures/718Green/box_green5.jpeg",
    img6: "pictures/718Green/box-gallery-006.jpeg",
    img7: "pictures/718Green/boxSpecs.png",
  },
  {
    id: 3,
    slogan: "Wehikuł wszech czasów",
    text1:
      "Nowe 911 jest sumą swoich poprzedników – i dlatego stanowi odbicie przeszłości oraz wizję przyszłości. Sylwetka: ikoniczna. Design: ponadczasowy. Technika: inspirowana wspaniałymi zwycięstwami w wyścigach i zawsze o krok przed innymi. Wraz z ósmą generacją 911 ruszamy w przyszłość.",
    text2:
      "Dobry design powinien być pionierski. Tak samo jak technika. I dlatego wnętrze nowego 911 przeciera nowe szlaki – szlaki, które odzwierciedlają stare atuty, a zarazem otwierają nowe możliwości.",
    spec1: "Moc: 450 KM/331 kW",
    spec2: "Przyspieszenie 0-100 km/h: 3,8 s ",
    spec3: "Prędkość maksymalna: 304 km/h",
    spec4: "spalanie :10,39 - 10,8 l/100 km",
    spec5: "Szerokość: 1852 mm",
    spec6: "Długość: 4519 mm",
    spec7: "672000",
    img1: "pictures/911tagra/911tagra1.jpeg",
    img2: "pictures/911tagra/911tagra2.jpeg",
    img3: "pictures/911tagra/911tagra3.jpeg",
    img4: "pictures/911tagra/911tagra4.jpeg",
    img5: "pictures/911tagra/911tagra5.jpeg",
    img6: "pictures/911tagra/911tagra6.jpeg",
    img7: "pictures/911tagra/targa4s.png",
  },
  {
    id: 4,
    slogan: "Carpe secundum.",
    text1:
      "Są ludzie, którzy skupiają się na maksymalnym wykorzystaniu każdego dnia. My wolimy wykorzystywać każdą sekundę. W końcu każda chwila spędzona w kokpicie jest niepowtarzalna. Każda podróż musi coś znaczyć. Dlatego w przypadku nowego 911 GT3 udoskonaliliśmy wszystko, co składa się na prawdziwy samochód sportowy: aerodynamikę, osiągi, zestrojenie, przyjemność z jazdy i adrenalinę. Czas ucieka, a to przecież Twój czas. Wskakuj.",
    text2:
      "Wszystko widoczne jak na dłoni: nowy ekran torowy, pokazujący wszystkie informacje istotne podczas jazdy na torze wyścigowym. Siedem przełożeń dobranych z myślą o wysokich osiągach w imię prawdziwie wyścigowych wrażeń. Przekładnia PDK inspirowana dźwignią ręcznej skrzyni.",
    spec1: "Moc: 510 KM/375 kW",
    spec2: "Przyspieszenie 0-100 km/h: 3,4 s ",
    spec3: "Prędkość maksymalna: 318 km/h",
    spec4: "spalanie :13 l/100 km",
    spec5: "Szerokość: 1852 mm",
    spec6: "Długość: 4519 mm",
    spec7: "995000",
    img1: "pictures/gt3white/gt3white1.jpeg",
    img2: "pictures/gt3white/gt3white2.jpeg",
    img3: "pictures/gt3white/gt3white3.jpeg",
    img4: "pictures/gt3white/gt3white4.jpeg",
    img5: "pictures/gt3white/gt3white5.jpeg",
    img6: "pictures/gt3white/gt3white6.jpeg",
    img7: "pictures/gt3white/911-gt3-rs.png",
  },
  {
    id: 5,
    slogan: "Wehikuł wszech czasów",
    text1:
      "Nowe 911 jest sumą swoich poprzedników – i dlatego stanowi odbicie przeszłości oraz wizję przyszłości. Sylwetka: ikoniczna. Design: ponadczasowy. Technika: inspirowana wspaniałymi zwycięstwami w wyścigach i zawsze o krok przed innymi. Wraz z ósmą generacją 911 ruszamy w przyszłość.",
    text2:
      "Dobry design powinien być pionierski. Tak samo jak technika. I dlatego wnętrze nowego 911 przeciera nowe szlaki – szlaki, które odzwierciedlają stare atuty, a zarazem otwierają nowe możliwości.",
    spec1: "Moc: 450 KM/331 kW",
    spec2: "Przyspieszenie 0-100 km/h: 4,6 s ",
    spec3: "Prędkość maksymalna: 306 km/h",
    spec4: "spalanie :10,5 - 11,8 l/100 km",
    spec5: "Szerokość: 1852 mm",
    spec6: "Długość: 4519 mm",
    spec7: "875000",
    img1: "pictures/9114s/9114s1.jpeg",
    img2: "pictures/9114s/9114s2.jpeg",
    img3: "pictures/9114s/9114s3.jpeg",
    img4: "pictures/9114s/9114s4.jpeg",
    img5: "pictures/9114s/9114s5.jpeg",
    img6: "pictures/9114s/9114s6.jpeg",
    img7: "pictures/9114s/carrera-4s-techsepc.jpg",
  },
  {
    id: 6,
    slogan: "To, co nas napędza.",
    text1:
      "Projektując Porsche Panamera, konsekwentnie podążaliśmy własną drogą – i pozostaliśmy wierni naszym korzeniom. W ten sposób „wstrzyknęliśmy” do segmentu luksusowych limuzyn typowe DNA Porsche. W przypadku nowego modelu Panamera również podążamy tą samą drogą. Z niezmienną konsekwencją.",
    text2:
      "Wewnątrz - typowa dla Porsche: wyrafinowana ergonomia samochodu sportowego z wznoszącą się konsolą środkową, spłaszczoną deską rozdzielczą i analogowym obrotomierzem pośrodku zestawu wskaźników. Nowa generacja kierownicy w połączeniu z koncepcją obsługi Porsche Advanced Cockpit zapewnia szybki dostęp do najważniejszych funkcji.",
    spec1: "Moc: 630 KM/463 kW",
    spec2: "Przyspieszenie 0-100 km/h: 3,1 s ",
    spec3: "Prędkość maksymalna: 315 km/h",
    spec4: "spalanie :13 l/100 km",
    spec5: "Szerokość: 1937 mm",
    spec6: "Długość: 5199 mm",
    spec7: "1127000",
    img1: "pictures/panamera/panamera1.jpeg",
    img2: "pictures/panamera/panamera2.jpeg",
    img3: "pictures/panamera/panamera3.jpeg",
    img5: "pictures/panamera/panamera4.jpeg",
    img6: "pictures/panamera/panamera5.jpeg",
    img7: "pictures/panamera/panameraTechSpecs.jpg",
  },
];
const classNames = [".price", ".acc", ".power"];
const dataIndexOrder = [7, 1, 2];

data.forEach((item, itemIndex) => {
  classNames.forEach((className, index) => {
    const elements = document.querySelectorAll(className);
    elements[itemIndex].innerText = item[`spec${dataIndexOrder[index]}`];
  });
});
