// English Language Test Application
class EnglishTest {
    constructor() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.totalQuestions = questions.length;
        
        this.initializeElements();
        this.bindEvents();
        this.showSection('landing');
    }

    initializeElements() {
        // Landing section elements
        this.startBtn = document.getElementById('startBtn');
        
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
        this.startBtn.addEventListener('click', () => this.startTest());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.tryAgainBtn.addEventListener('click', () => this.resetTest());
        this.shareBtn.addEventListener('click', () => this.shareResult());
    }

    showSection(sectionName) {
        // Hide all sections
        Object.values(this.sections).forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section with animation
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
            
            // Add click handler for navigation
            circle.addEventListener('click', () => this.goToQuestion(i));
            
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
                const question = questions[index];
                const userAnswer = this.userAnswers[index];
                
                if (userAnswer === question.correctAnswer) {
                    circle.classList.add('correct');
                } else {
                    circle.classList.add('incorrect');
                }
            }
        });
    }

    goToQuestion(questionIndex) {
        // Only allow navigation to previous questions or current question
        if (questionIndex <= this.currentQuestionIndex) {
            this.currentQuestionIndex = questionIndex;
            this.displayQuestion();
        }
    }

    displayQuestion() {
        const question = questions[this.currentQuestionIndex];
        
        // Update progress
        const progressPercentage = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        this.progressFill.style.width = `${progressPercentage}%`;
        this.progressText.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.totalQuestions}`;
        
        // Display question content
        this.questionText.textContent = question.text;
        this.questionImage.src = question.image;
        this.questionImage.alt = `Question ${this.currentQuestionIndex + 1} illustration`;
        
        // Clear previous answers
        this.answersContainer.innerHTML = '';
        
        // Create answer options
        question.answers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.textContent = answer;
            answerElement.setAttribute('data-index', index);
            
            answerElement.addEventListener('click', () => this.selectAnswer(index, answerElement));
            
            this.answersContainer.appendChild(answerElement);
        });
        
        // Reset next button
        this.nextBtn.disabled = this.userAnswers[this.currentQuestionIndex] === undefined;
        this.nextBtn.textContent = this.currentQuestionIndex === this.totalQuestions - 1 ? 'Finish Test' : 'Next Question';
        
        // Update question circles
        this.updateQuestionCircles();
    }

    selectAnswer(answerIndex, answerElement) {
        // Remove previous selection
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Add selection to clicked answer
        answerElement.classList.add('selected');
        
        // Store answer
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        
        // Enable next button
        this.nextBtn.disabled = false;
        
        // Add subtle animation
        answerElement.style.transform = 'translateX(5px)';
        setTimeout(() => {
            answerElement.style.transform = 'translateX(0)';
        }, 200);
        
        // Update question circles
        this.updateQuestionCircles();
    }

    nextQuestion() {
        // Calculate score for current question
        const currentQuestion = questions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        
        if (userAnswer === currentQuestion.correctAnswer) {
            this.score++;
        }
        
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.totalQuestions) {
            // Add transition animation
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
        
        // Update result display
        this.resultLevel.textContent = level;
        this.correctAnswers.textContent = this.score;
        this.totalQuestionsSpan.textContent = this.totalQuestions;
        this.scorePercentage.textContent = `${percentage}%`;
        
        // Get level description
        const levelInfo = levelDescriptions[level] || levelDescriptions['A2'];
        
        // Update result description
        const resultTitleElement = document.querySelector('.result-title');
        const resultDescElement = document.querySelector('.result-description');
        
        resultTitleElement.textContent = `${levelInfo.title}!`;
        resultDescElement.textContent = levelInfo.description;
        
        // Add level-specific styling
        this.updateLevelStyling(level);
        
        // Show results section
        this.showSection('result');
        
        // Add celebration animation for good scores
        if (percentage >= 70) {
            this.addCelebrationAnimation();
        }
    }

    updateLevelStyling(level) {
        const levelBadge = document.querySelector('.level-badge');
        const resultActions = document.querySelector('.result-actions');
        
        // Remove existing level classes
        levelBadge.className = 'level-badge';
        
        // Add level-specific class for styling
        levelBadge.classList.add(`level-${level.toLowerCase()}`);
    }

    addCelebrationAnimation() {
        // Add subtle celebration effect
        const levelBadge = document.querySelector('.level-badge');
        levelBadge.style.animation = 'pulse 1s ease-in-out 3';
        
        // Add CSS for pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }

    resetTest() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.showSection('landing');
        
        // Reset progress bar
        this.progressFill.style.width = '0%';
        
        // Clear question circles
        this.questionCircles.innerHTML = '';
    }

    shareResult() {
        const level = this.calculateLevel();
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        
        const shareText = `I just completed an English Language Test and achieved ${level} level with ${percentage}% accuracy! 🎉`;
        
        if (navigator.share) {
            navigator.share({
                title: 'English Language Test Result',
                text: shareText,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                this.showShareMessage();
            }).catch(() => {
                // Fallback for older browsers
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
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
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

// Initialize the test when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new EnglishTest();
});

// Add some additional CSS for enhanced animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
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