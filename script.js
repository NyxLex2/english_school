document.addEventListener('DOMContentLoaded', () => {
    const levelDescriptions = {
        A1: {
            title: "Beginner",
            description: "You have a basic understanding and can handle simple, everyday conversations."
        },
        A2: {
            title: "Elementary",
            description: "You can understand sentences and frequently used expressions related to areas of most immediate relevance."
        },
        B1: {
            title: "Intermediate",
            description: "You can understand the main points of clear standard input on familiar matters and can produce simple connected text."
        },
        B2: {
            title: "Upper-Intermediate",
            description: "You can understand the main ideas of complex text on both concrete and abstract topics. You can interact with a degree of fluency and spontaneity."
        },
        C1: {
            title: "Advanced",
            description: "You can understand a wide range of demanding, longer texts, and recognize implicit meaning. You can use language flexibly and effectively for social, academic, and professional purposes."
        },
        C2: {
            title: "Proficient",
            description: "You have achieved mastery of the language. You can understand with ease virtually everything heard or read and can summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation."
        }
    };

    class LanguageTest {
        constructor() {
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.score = 0;
            this.questions = [];
            this.totalQuestions = 0;
            
            this.initializeElements();
            this.bindEvents();
            this.showSection('landing');
        }

        initializeElements() {
            // Landing section elements
            this.startEnBtn = document.getElementById('startEnBtn');
            this.startDeBtn = document.getElementById('startDeBtn');
            this.startPlBtn = document.getElementById('startPlBtn');
            
            // Question section elements
            this.progressFill = document.getElementById('progressFill');
            this.progressText = document.getElementById('progressText');
            this.questionImage = document.getElementById('questionImage');
            this.questionText = document.getElementById('questionText');
            this.answersContainer = document.getElementById('answersContainer');
            this.nextBtn = document.getElementById('nextBtn');
            this.questionCircles = document.getElementById('questionCircles');
            
            // Result section elements
            this.resultLevel = document.getElementById('resultLevel');
            this.resultDescription = document.getElementById('resultDescription');
            this.correctAnswers = document.getElementById('correctAnswers');
            this.totalQuestionsSpan = document.getElementById('totalQuestions');
            this.scorePercentage = document.getElementById('scorePercentage');
            this.tryAgainBtn = document.getElementById('tryAgainBtn');
            this.shareBtn = document.getElementById('shareBtn');

            // Section elements
            this.sections = {
                landing: document.getElementById('landing'),
                question: document.getElementById('question'),
                result: document.getElementById('result')
            };
        }

        bindEvents() {
            if (this.startEnBtn) {
                this.startEnBtn.addEventListener('click', () => this.initializeTest('en'));
            }
            
            if (this.startDeBtn) {
                this.startDeBtn.addEventListener('click', () => this.initializeTest('de'));
            }
            
            if (this.startPlBtn) {
                this.startPlBtn.addEventListener('click', () => this.initializeTest('pl'));
            }
            
            this.nextBtn.addEventListener('click', () => this.nextQuestion());
            this.tryAgainBtn.addEventListener('click', () => this.resetTest());
            this.shareBtn.addEventListener('click', () => this.shareResult());
        }

        initializeTest(language) {
            console.log('Initializing test for language:', language);
            console.log('englishQuestions available:', typeof englishQuestions !== 'undefined' ? englishQuestions.length : 'undefined');
            console.log('germanQuestions available:', typeof germanQuestions !== 'undefined' ? germanQuestions.length : 'undefined');
            console.log('polishQuestions available:', typeof polishQuestions !== 'undefined' ? polishQuestions.length : 'undefined');
            
            try {
                if (language === 'de') {
                    if (typeof germanQuestions !== 'undefined' && germanQuestions.length > 0) {
                        this.questions = [...germanQuestions];
                        this.totalQuestions = this.questions.length;
                        console.log('German questions loaded:', this.totalQuestions);
                        this.startTest();
                    } else {
                        console.error('German questions not available');
                        alert('German questions are not available. Please try again.');
                    }
                } else if (language === 'pl') {
                    if (typeof polishQuestions !== 'undefined' && polishQuestions.length > 0) {
                        this.questions = [...polishQuestions];
                        this.totalQuestions = this.questions.length;
                        console.log('Polish questions loaded:', this.totalQuestions);
                        this.startTest();
                    } else {
                        console.error('Polish questions not available');
                        alert('Polish questions are not available. Please try again.');
                    }
                } else {
                    if (typeof englishQuestions !== 'undefined' && englishQuestions.length > 0) {
                        this.questions = [...englishQuestions];
                        this.totalQuestions = this.questions.length;
                        console.log('English questions loaded:', this.totalQuestions);
                        this.startTest();
                    } else {
                        console.error('English questions not available');
                        alert('English questions are not available. Please try again.');
                    }
                }
            } catch (error) {
                console.error('Error initializing test:', error);
                alert('Failed to load questions. Please try again.');
            }
        }
        
        showSection(sectionName) {
            Object.values(this.sections).forEach(section => {
                section.classList.remove('active');
            });
            
            setTimeout(() => {
                this.sections[sectionName].classList.add('active');
                this.sections[sectionName].classList.add('fade-in-up');
            }, 100);
        }

        startTest() {
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            this.score = 0;
            this.createQuestionCircles();
            this.showSection('question');
            this.displayQuestion();
        }

        createQuestionCircles() {
            this.questionCircles.innerHTML = '';
            for (let i = 0; i < this.totalQuestions; i++) {
                const circle = document.createElement('div');
                circle.className = 'question-circle';
                circle.textContent = i + 1;
                circle.setAttribute('data-question', i);
                this.questionCircles.appendChild(circle);
            }
            this.updateQuestionCircles();
        }

        updateQuestionCircles() {
            const circles = this.questionCircles.querySelectorAll('.question-circle');
            circles.forEach((circle, index) => {
                circle.className = 'question-circle';
                if (index === this.currentQuestionIndex) {
                    circle.classList.add('current');
                } else if (this.userAnswers[index] !== undefined) {
                    const question = this.questions[index];
                    const userAnswer = this.userAnswers[index];
                    if (userAnswer === question.correctAnswer) {
                        circle.classList.add('correct');
                    } else {
                        circle.classList.add('incorrect');
                    }
                }
            });
        }

        displayQuestion() {
            const question = this.questions[this.currentQuestionIndex];
            const progressPercentage = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
            this.progressFill.style.width = `${progressPercentage}%`;
            this.progressText.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.totalQuestions}`;
            this.questionText.textContent = question.text;
            
            // Handle image loading with fallback
            this.questionImage.src = question.image;
            this.questionImage.alt = `Question ${this.currentQuestionIndex + 1} illustration`;
            this.questionImage.onerror = () => {
                // If image fails to load, hide the image container or show a placeholder
                this.questionImage.style.display = 'none';
                console.warn('Failed to load image for question', this.currentQuestionIndex + 1);
            };
            this.questionImage.onload = () => {
                // Make sure image is visible when it loads successfully
                this.questionImage.style.display = 'block';
            };
            
            this.answersContainer.innerHTML = '';
            question.answers.forEach((answer, index) => {
                const answerElement = document.createElement('div');
                answerElement.className = 'answer-option';
                answerElement.textContent = answer;
                answerElement.setAttribute('data-index', index);
                answerElement.addEventListener('click', () => this.selectAnswer(index, answerElement));
                this.answersContainer.appendChild(answerElement);
            });
            this.nextBtn.disabled = this.userAnswers[this.currentQuestionIndex] === undefined;
            this.nextBtn.textContent = this.currentQuestionIndex === this.totalQuestions - 1 ? 'Finish Test' : 'Next Question';
            this.updateQuestionCircles();
        }

        selectAnswer(answerIndex, answerElement) {
            document.querySelectorAll('.answer-option').forEach(option => {
                option.classList.remove('selected');
            });
            answerElement.classList.add('selected');
            this.userAnswers[this.currentQuestionIndex] = answerIndex;
            this.nextBtn.disabled = false;
            answerElement.style.transform = 'translateX(5px)';
            setTimeout(() => {
                answerElement.style.transform = 'translateX(0)';
            }, 200);
            this.updateQuestionCircles();
        }

        nextQuestion() {
            const currentQuestion = this.questions[this.currentQuestionIndex];
            const userAnswer = this.userAnswers[this.currentQuestionIndex];
            if (userAnswer === currentQuestion.correctAnswer) {
                this.score++;
            }
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex < this.totalQuestions) {
                this.sections.question.style.transform = 'translateX(-20px)';
                this.sections.question.style.opacity = '0.8';
                setTimeout(() => {
                    this.displayQuestion();
                    this.sections.question.style.transform = 'translateX(0)';
                    this.sections.question.style.opacity = '1';
                }, 200);
            } else {
                this.showResults();
            }
        }

        calculateLevel() {
            const percentage = (this.score / this.totalQuestions) * 100;
            if (percentage >= 90) return 'C2';
            if (percentage >= 80) return 'C1';
            if (percentage >= 70) return 'B2';
            if (percentage >= 60) return 'B1';
            if (percentage >= 50) return 'A2';
            return 'A1';
        }

        showResults() {
            const level = this.calculateLevel();
            const percentage = Math.round((this.score / this.totalQuestions) * 100);
            this.resultLevel.textContent = level;
            this.correctAnswers.textContent = this.score;
            this.totalQuestionsSpan.textContent = this.totalQuestions;
            this.scorePercentage.textContent = `${percentage}%`;
            const levelInfo = levelDescriptions[level] || levelDescriptions['A2'];
            const resultTitleElement = document.querySelector('.result-title');
            const resultDescElement = document.querySelector('.result-description');
            resultTitleElement.textContent = `${levelInfo.title}!`;
            resultDescElement.textContent = levelInfo.description;
            this.updateLevelStyling(level);
            this.showSection('result');
            if (percentage >= 70) {
                this.addCelebrationAnimation();
            }
        }

        updateLevelStyling(level) {
            const levelBadge = document.querySelector('.level-badge');
            levelBadge.className = 'level-badge';
            levelBadge.classList.add(`level-${level.toLowerCase()}`);
        }

        addCelebrationAnimation() {
            const levelBadge = document.querySelector('.level-badge');
            levelBadge.style.animation = 'pulse 1s ease-in-out 3';
        }

        resetTest() {
            this.showSection('landing');
            this.progressFill.style.width = '0%';
            this.questionCircles.innerHTML = '';
        }

        shareResult() {
            const level = this.calculateLevel();
            const percentage = Math.round((this.score / this.totalQuestions) * 100);
            const shareText = `I just completed a Language Proficiency Test and achieved ${level} level with ${percentage}% accuracy! 🎉`;
            if (navigator.share) {
                navigator.share({
                    title: 'Language Proficiency Test Result',
                    text: shareText,
                    url: window.location.href
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(shareText).then(() => {
                    this.showShareMessage();
                }).catch(() => {
                    this.showShareModal(shareText);
                });
            }
        }

        showShareMessage() {
            const originalText = this.shareBtn.textContent;
            this.shareBtn.textContent = 'Copied to Clipboard!';
            this.shareBtn.style.background = '#48bb78';
            setTimeout(() => {
                this.shareBtn.textContent = originalText;
                this.shareBtn.style.background = '';
            }, 2000);
        }

        showShareModal(text) {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.5); display: flex;
                justify-content: center; align-items: center; z-index: 1000;
            `;
            modal.innerHTML = `
                <div style="background: white; padding: 30px; border-radius: 15px; max-width: 400px; text-align: center;">
                    <h3 style="margin-bottom: 15px;">Share Your Result</h3>
                    <p style="margin-bottom: 20px; padding: 15px; background: #f7fafc; border-radius: 8px; font-family: monospace;">${text}</p>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 25px; cursor: pointer;">
                        Close
                    </button>
                </div>
            `;
            document.body.appendChild(modal);
        }
    }

    new LanguageTest();

    // Add additional styles
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        .level-c2 { background: linear-gradient(135deg, #9f7aea, #667eea) !important; }
        .level-c1 { background: linear-gradient(135deg, #667eea, #764ba2) !important; }
        .level-b2 { background: linear-gradient(135deg, #4299e1, #667eea) !important; }
        .level-b1 { background: linear-gradient(135deg, #48bb78, #4299e1) !important; }
        .level-a2 { background: linear-gradient(135deg, #ed8936, #48bb78) !important; }
        .level-a1 { background: linear-gradient(135deg, #e53e3e, #ed8936) !important; }
        .answer-option {
            transform: translateX(0);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .answer-option:active {
            transform: scale(0.98);
        }
        .section {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .language-selection {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .language-selection .btn {
            min-width: 200px;
        }
        @media (prefers-reduced-motion: reduce) {
            .section, .answer-option {
                transition: none;
            }
            .fade-in-up {
                animation: none;
            }
        }
    `;
    document.head.appendChild(additionalStyles);
});