
  // Wait until the page is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    
    // Get the submit button and result display
    const submitBtn = document.getElementById('submitQuiz');
    const resultDisplay = document.getElementById('result');
    
    // Correct answers for each question
    const correctAnswers = {
      question1: "Paris",
      question2: "Mars",
      question3: "Pacific Ocean",
      question4: "Leonardo da Vinci",
      question5: "H2O",
      question6: "Cheetah",
      question7: "Vatican City",
      question8: "7",
      question9: "Avocado",
      question10: "Albert Einstein"
    };
    
    // When submit button is clicked
    submitBtn.addEventListener('click', function() {
      
      // Start with 0 correct answers
      let score = 0;
      const totalQuestions = Object.keys(correctAnswers).length;
      
      // Check each question
      for (const questionName in correctAnswers) {
        // Get the selected answer for this question
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
        
        // If an answer was selected and it's correct
        if (selectedOption && selectedOption.value === correctAnswers[questionName]) {
          score++;
        }
      }
      
      // Calculate percentage
      const percentage = Math.round((score / totalQuestions) * 100);
      
      // Show the final result
      resultDisplay.textContent = `You scored ${score} out of ${totalQuestions} (${percentage}%)`;
      
      // Optional: Add color based on score
      if (percentage >= 80) {
        resultDisplay.style.color = 'green';
      } else if (percentage >= 50) {
        resultDisplay.style.color = 'orange';
      } else {
        resultDisplay.style.color = 'red';
      }
    });
  });