// English Language Test Questions
const questions = [
    {
        id: 1,
        text: "Choose the correct form: 'I _____ breakfast every morning.'",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
        answers: [
            "eat",
            "eats", 
            "eating",
            "ate"
        ],
        correctAnswer: 0,
        level: "A2"
    },
    {
        id: 2,
        text: "Choose the correct form: 'I _____ to the store yesterday.'",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        answers: [
            "go",
            "went", 
            "going",
            "gone"
        ],
        correctAnswer: 1,
        level: "A2"
    },
    {
        id: 3,
        text: "What is the most appropriate response to 'How do you do?'",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
        answers: [
            "I'm fine, thank you",
            "How do you do?",
            "Very well, and you?",
            "Nice to meet you"
        ],
        correctAnswer: 1,
        level: "A2"
    },
    {
        id: 4,
        text: "Which sentence is grammatically correct?",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        answers: [
            "She don't like coffee",
            "She doesn't likes coffee",
            "She doesn't like coffee",
            "She not like coffee"
        ],
        correctAnswer: 2,
        level: "A2"
    },
    {
        id: 5,
        text: "What does 'break the ice' mean?",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
        answers: [
            "To literally break frozen water",
            "To start a conversation in a social situation",
            "To stop working suddenly",
            "To become very cold"
        ],
        correctAnswer: 1,
        level: "B1"
    },
    {
        id: 6,
        text: "Choose the best option: 'If I _____ rich, I would travel around the world.'",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
        answers: [
            "am",
            "was",
            "were",
            "will be"
        ],
        correctAnswer: 2,
        level: "B1"
    },
    {
        id: 7,
        text: "What is the meaning of 'to beat around the bush'?",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        answers: [
            "To avoid talking directly about a topic",
            "To walk through nature quietly",
            "To win a competition easily",
            "To make a lot of noise"
        ],
        correctAnswer: 0,
        level: "B1"
    },
    {
        id: 8,
        text: "Complete the sentence: 'She has been studying English _____ three years.'",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        answers: [
            "since",
            "for",
            "during",
            "while"
        ],
        correctAnswer: 1,
        level: "B1"
    },
    {
        id: 9,
        text: "Which word best completes this sentence: 'The presentation was so _____ that half the audience fell asleep.'",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        answers: [
            "fascinating",
            "tedious",
            "engaging",
            "stimulating"
        ],
        correctAnswer: 1,
        level: "B2"
    },
    {
        id: 10,
        text: "What does 'to pull someone's leg' mean?",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
        answers: [
            "To help someone walk",
            "To joke with someone or tease them",
            "To physically hurt someone",
            "To support someone emotionally"
        ],
        correctAnswer: 1,
        level: "B2"
    },
    {
        id: 11,
        text: "Choose the correct form: 'I wish I _____ more attention in class yesterday.'",
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
        answers: [
            "paid",
            "had paid",
            "would pay",
            "pay"
        ],
        correctAnswer: 1,
        level: "B2"
    },
    {
        id: 12,
        text: "What is the best synonym for 'ubiquitous'?",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        answers: [
            "Rare",
            "Obvious",
            "Everywhere",
            "Hidden"
        ],
        correctAnswer: 2,
        level: "B2"
    },
    {
        id: 13,
        text: "Complete this sentence: 'Not only _____ the project on time, but she also exceeded expectations.'",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
        answers: [
            "she completed",
            "did she complete",
            "she did complete",
            "completed she"
        ],
        correctAnswer: 1,
        level: "B2"
    },
    {
        id: 14,
        text: "What does 'to burn the midnight oil' mean?",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
        answers: [
            "To work or study late into the night",
            "To waste money on unnecessary things",
            "To stay up partying all night",
            "To cook dinner very late"
        ],
        correctAnswer: 0,
        level: "B2"
    },
    {
        id: 15,
        text: "Which sentence demonstrates the correct use of the subjunctive mood?",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        answers: [
            "I suggest that he studies harder",
            "I suggest that he study harder",
            "I suggest that he should studies harder",
            "I suggest that he will study harder"
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 16,
        text: "What is the meaning of 'to throw caution to the wind'?",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        answers: [
            "To be extremely careful about something",
            "To act recklessly without considering consequences",
            "To warn others about danger",
            "To change direction suddenly"
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 17,
        text: "Choose the most sophisticated way to express disagreement:",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
        answers: [
            "You're wrong about that",
            "I don't think so",
            "I beg to differ on that point",
            "That's not right"
        ],
        correctAnswer: 2,
        level: "C1"
    },
    {
        id: 18,
        text: "What does 'to be at loggerheads' mean?",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
        answers: [
            "To be in strong disagreement",
            "To be very confused",
            "To be extremely tired",
            "To be working together closely"
        ],
        correctAnswer: 0,
        level: "C1"
    },
    {
        id: 19,
        text: "Complete: 'Had I known about the traffic, I _____ earlier.'",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        answers: [
            "would leave",
            "would have left",
            "will leave",
            "left"
        ],
        correctAnswer: 1,
        level: "C1"
    },
    {
        id: 20,
        text: "Which word best fits: 'The politician's _____ speech failed to convince the skeptical audience.'",
        image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=400&h=300&fit=crop",
        answers: [
            "bombastic",
            "eloquent",
            "persuasive",
            "articulate"
        ],
        correctAnswer: 0,
        level: "C1"
    }
];

// Level descriptions for results
const levelDescriptions = {
    "A2": {
        title: "Elementary Level",
        description: "You can understand sentences and frequently used expressions. You can communicate in simple tasks requiring direct exchange of information."
    },
    "B1": {
        title: "Intermediate Level", 
        description: "You can understand the main points of clear standard input. You can deal with most situations likely to arise while traveling."
    },
    "B2": {
        title: "Upper-Intermediate Level",
        description: "You can understand the main ideas of complex text. You can interact with a degree of fluency and spontaneity with native speakers."
    },
    "C1": {
        title: "Advanced Level",
        description: "You can understand a wide range of demanding texts and recognize implicit meaning. You can express yourself fluently and spontaneously."
    },
    "C2": {
        title: "Proficiency Level",
        description: "You can understand virtually everything heard or read. You can express yourself spontaneously, very fluently and precisely."
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions, levelDescriptions };
} 