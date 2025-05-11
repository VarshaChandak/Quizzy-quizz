const quizData = [
    {
      question: "Which data structure uses LIFO order?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      correct: "Stack"
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "HyperText Translation Protocol",
        "High Transfer Text Process",
        "Host Transfer Protocol"
      ],
      correct: "HyperText Transfer Protocol"
    },
    {
      question: "Which of these is not a programming language?",
      options: ["Python", "HTML", "Java", "C++"],
      correct: "HTML"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correct: "O(log n)"
    },
    {
      question: "Which company developed the C language?",
      options: ["IBM", "Microsoft", "Bell Labs", "Apple"],
      correct: "Bell Labs"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => selectAnswer(option);
      optionsEl.appendChild(li);
    });
  }
  
  function selectAnswer(selected) {
    const correct = quizData[currentQuestion].correct;
    if (selected === correct) score++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    resultEl.textContent = `🎉 You scored ${score} out of ${quizData.length}!`;
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  };
  
  loadQuestion();
  