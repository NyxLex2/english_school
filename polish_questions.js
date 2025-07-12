// Polish Language Test Questions
const polishQuestions = [
    // A2 Level
    {
        id: 1,
        text: "Które zdanie jest poprawne gramatycznie?",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Ja chcieć kawę.",
            "Ja chcę kawy.",
            "Ja chcesz kawy."
        ],
        correctAnswer: 1,
        level: "A2"
    },
    {
        id: 2,
        text: "Kiedy masz urodziny?",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&h=300",
        answers: [
            "W czerwcu.",
            "Na czerwcu.",
            "Z czerwca."
        ],
        correctAnswer: 0,
        level: "A2"
    },
    {
        id: 3,
        text: "Co robisz w weekendy?",
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Chodziłem do kina.",
            "Chodzę do kina.",
            "Będę chodzę do kina."
        ],
        correctAnswer: 1,
        level: "A2"
    },
    {
        id: 4,
        text: "Wskaż poprawne pytanie:",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Ile kosztuje ten chleb?",
            "Jak długo masz ten chleb?",
            "Która godzina ten chleb?"
        ],
        correctAnswer: 0,
        level: "A2"
    },
    {
        id: 5,
        text: "Gdzie pracuje lekarz?",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300",
        answers: [
            "W szkole.",
            "W szpitalu.",
            "W sklepie."
        ],
        correctAnswer: 1,
        level: "A2"
    },
    // B1 Level
    {
        id: 6,
        text: "Gdyby było ładnie, to...",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&h=300",
        answers: [
            "chodzimy do lasu.",
            "poszedłbym na spacer.",
            "pójdę na spacer."
        ],
        correctAnswer: 1,
        level: "B1"
    },
    {
        id: 7,
        text: "Które wyrażenie oznacza \"być zmęczonym\"?",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Mieć dość.",
            "Mieć rację.",
            "Mieć oko."
        ],
        correctAnswer: 0,
        level: "B1"
    },
    {
        id: 8,
        text: "Uzupełnij: Nie mogę się...",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&h=300",
        answers: [
            "doczekać.",
            "dokończyć.",
            "dopisać."
        ],
        correctAnswer: 0,
        level: "B1"
    },
    {
        id: 9,
        text: "Wskaż zdanie z poprawnym użyciem czasu przeszłego:",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Wczoraj kupowałam nowy telefon.",
            "Wczoraj kupiłam nowy telefon.",
            "Wczoraj kupuje nowy telefon."
        ],
        correctAnswer: 1,
        level: "B1"
    },
    {
        id: 10,
        text: "Jaka jest przeciwność słowa \"drogi\"?",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=300",
        answers: [
            "tani",
            "szybki",
            "świeży"
        ],
        correctAnswer: 0,
        level: "B1"
    },
    // B2 Level
    {
        id: 11,
        text: "Co oznacza fraza \"rzucać perły przed wieprze\"?",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Dzielić się jedzeniem.",
            "Dawać coś cennego komuś, kto tego nie doceni.",
            "Kupować coś tanio."
        ],
        correctAnswer: 1,
        level: "B2"
    },
    {
        id: 12,
        text: "Które wyrażenie oznacza \"działać impulsywnie\"?",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Działać na chłodno.",
            "Działać z rozwagą.",
            "Działać pod wpływem emocji."
        ],
        correctAnswer: 2,
        level: "B2"
    },
    {
        id: 13,
        text: "Uzupełnij: Im więcej ćwiczysz, tym...",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=300",
        answers: [
            "lepiej się czujesz.",
            "najlepiej czułem.",
            "dobrze czujesz."
        ],
        correctAnswer: 0,
        level: "B2"
    },
    {
        id: 14,
        text: "Które zdanie jest w stronie biernej?",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Anna napisała list.",
            "List został napisany przez Annę.",
            "Anna będzie pisać list."
        ],
        correctAnswer: 1,
        level: "B2"
    },
    {
        id: 15,
        text: "Jakie jest poprawne użycie trybu przypuszczającego?",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Chciałbyś pójść ze mną?",
            "Ty pójdzie ze mną?",
            "Ty idzie ze mną?"
        ],
        correctAnswer: 0,
        level: "B2"
    },
    // C1-C2 Level
    {
        id: 16,
        text: "Które słowo jest archaizmem?",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Wnętrze",
            "Ichmość",
            "Spojrzenie"
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 17,
        text: "Co oznacza wyrażenie \"na przekór wszystkiemu\"?",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Z powodu wszystkiego.",
            "Mimo przeszkód.",
            "Zgodnie z planem."
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 18,
        text: "Wskaż zdanie zawierające mowę zależną:",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=300",
        answers: [
            "\"Idź do sklepu!\" — powiedziała mama.",
            "Mama powiedziała, żebym poszedł do sklepu.",
            "Mama powiedziała: \"Idź do sklepu!\"."
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 19,
        text: "Które wyrażenie najlepiej pasuje do stylu formalnego pisma?",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Sorry za spóźnienie.",
            "Uprzejmie informuję, że...",
            "Hejka, mam pytanko..."
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 20,
        text: "Wybierz poprawne dokończenie: Nie tylko dobrze mówi po polsku, ale także...",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&h=300",
        answers: [
            "pisać bezbłędnie.",
            "pisze bezbłędnie.",
            "pisała bezbłędnie."
        ],
        correctAnswer: 1,
        level: "C1"
    }
]; 