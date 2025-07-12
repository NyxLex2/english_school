// German Language Test Questions
const germanQuestions = [
    // A1-A2 Level
    {
        id: 1,
        text: "Wie alt bist du?",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Ich bin 20 Jahre alt.",
            "Ich habe 20 Jahre.",
            "Ich alt 20."
        ],
        correctAnswer: 0,
        level: "A2"
    },
    {
        id: 2,
        text: "Wo wohnst du?",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Ich wohne in Berlin.",
            "Ich wohnt Berlin.",
            "Ich wohnen nach Berlin."
        ],
        correctAnswer: 0,
        level: "A2"
    },
    {
        id: 3,
        text: "Was machst du heute?",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Ich gehe zur Schule.",
            "Ich machen Hausaufgaben.",
            "Ich ist zu Hause."
        ],
        correctAnswer: 0,
        level: "A2"
    },
    {
        id: 4,
        text: "Ich habe ... Apfel.",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&h=300",
        answers: [
            "einen",
            "ein",
            "eine"
        ],
        correctAnswer: 0,
        level: "A2"
    },
    {
        id: 5,
        text: "Welche Farbe hat die Banane?",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&h=300",
        answers: [
            "Sie ist gelb.",
            "Sie ist lang.",
            "Sie ist groß."
        ],
        correctAnswer: 0,
        level: "A2"
    },
    // B1 Level
    {
        id: 6,
        text: "Ich interessiere mich ... Musik.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&h=300",
        answers: [
            "über",
            "an",
            "für"
        ],
        correctAnswer: 2,
        level: "B1"
    },
    {
        id: 7,
        text: "Wenn ich Zeit habe, ...",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&h=300",
        answers: [
            "ich lese ein Buch.",
            "lese ich ein Buch.",
            "ich ein Buch lese."
        ],
        correctAnswer: 1,
        level: "B1"
    },
    {
        id: 8,
        text: "Du solltest mehr Wasser ...",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&h=300",
        answers: [
            "trinken",
            "trinkt",
            "getrunken"
        ],
        correctAnswer: 0,
        level: "B1"
    },
    {
        id: 9,
        text: "Ich freue mich, ... du gekommen bist.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=300",
        answers: [
            "das",
            "dass",
            "weil"
        ],
        correctAnswer: 1,
        level: "B1"
    },
    {
        id: 10,
        text: "Die Frau, ... dort steht, ist meine Lehrerin.",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=400&h=300",
        answers: [
            "wer",
            "deren",
            "die"
        ],
        correctAnswer: 2,
        level: "B1"
    },
    // B2 Level
    {
        id: 11,
        text: "Obwohl es regnet, ...",
        image: "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=400&h=300",
        answers: [
            "wir bleiben zu Hause.",
            "gehen wir spazieren.",
            "es ist kalt."
        ],
        correctAnswer: 1,
        level: "B2"
    },
    {
        id: 12,
        text: "Er tut so, ...",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=300",
        answers: [
            "als ob er alles weiß.",
            "als wenn klug ist.",
            "wie wenn er wissen alles."
        ],
        correctAnswer: 0,
        level: "B2"
    },
    {
        id: 13,
        text: "Ich habe vor, ...",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&h=300",
        answers: [
            "nach Deutschland zu reisen.",
            "reisen nach Deutschland.",
            "ich reise Deutschland."
        ],
        correctAnswer: 0,
        level: "B2"
    },
    {
        id: 14,
        text: "Der Film, den wir gestern gesehen haben, ...",
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&h=300",
        answers: [
            "war sehr interessant.",
            "ist sehen interessant.",
            "war gut gefallen."
        ],
        correctAnswer: 0,
        level: "B2"
    },
    {
        id: 15,
        text: "Wenn ich du wäre, ...",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&h=300",
        answers: [
            "ich hätte das gemacht.",
            "hätte ich das machen.",
            "ich würde machen das."
        ],
        correctAnswer: 0,
        level: "B2"
    },
    // C1 Level
    {
        id: 16,
        text: "Hätte ich mehr Zeit gehabt, ...",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&h=300",
        answers: [
            "hätte ich dir geholfen.",
            "ich dir helfen würde.",
            "würde helfen ich dir."
        ],
        correctAnswer: 0,
        level: "C1"
    },
    {
        id: 17,
        text: "Es wird erwartet, ...",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&h=300",
        answers: [
            "dass die Teilnehmer pünktlich erscheinen.",
            "wenn die Teilnehmer pünktlich sind.",
            "dass erscheinen Teilnehmer pünktlich."
        ],
        correctAnswer: 0,
        level: "C1"
    },
    {
        id: 18,
        text: "Der Artikel setzt sich mit der Frage auseinander, ...",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=400&h=300",
        answers: [
            "wie beeinflusst die Technologie unser Leben.",
            "wie die Technologie unser Leben beeinflusst.",
            "das die Technologie verändert unser Leben."
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 19,
        text: "Trotz seiner Bemühungen ...",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&h=300",
        answers: [
            "hat er das Ziel nicht erreicht.",
            "erreichte er das Ziel nicht gewesen.",
            "hatte das Ziel nicht erreicht worden."
        ],
        correctAnswer: 0,
        level: "C1"
    },
    {
        id: 20,
        text: "Es ist von großer Bedeutung, ...",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&h=300",
        answers: [
            "dass man regelmäßig übt.",
            "wenn regelmäßig üben.",
            "üben regelmäßig."
        ],
        correctAnswer: 0,
        level: "C1"
    }
];