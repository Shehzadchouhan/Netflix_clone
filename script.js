// Toggle FAQ answers on click
document.querySelectorAll(".faqbox").forEach(box => {
    const question = box.querySelector(".question");
    const answer = box.querySelector(".answer");
  
    // Hide initially
    answer.style.display = "none";
  
    question.addEventListener("click", () => {
      const isVisible = answer.style.display === "block";
      // Hide all answers first
      document.querySelectorAll(".faqbox .answer").forEach(ans => ans.style.display = "none");
      document.querySelectorAll(".faqbox .plus").forEach(plus => plus.textContent = "+");
  
      // Toggle current one
      if (!isVisible) {
        answer.style.display = "block";
        question.querySelector(".plus").textContent = "−";
      }
    });
  });
  