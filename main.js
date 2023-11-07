const questions = [
    {
      questionTitle: "ماهي عاصمه السعوديه؟",
      options: ["الرياض", "جدة", "القصيم", "الكويت"],
      keyAnswer: "الرياض",
    },
    {
      questionTitle: "افضل نادي فالعالم",
      options: ["الاهلي", "النصر", "الهلال", "التعاون"],
      keyAnswer: "الهلال",
    },
    {
      questionTitle: "ماهو افضل لون",
      options: ["احمر", "اصفر", "ازرق", "وردي"],
      keyAnswer: "ازرق",
    },
    {
      questionTitle: "ماهو ناتج ضرب 5*13",
      options: ["70", "60", "65", "55"],
      keyAnswer: "65",
    }];

    const questions1= [
    {
      questionTitle: "ما لون البحر؟",
      keyAnswer: "ليس له لون",
    },
    {
      questionTitle: "من كاتب كتاب الخميائي؟",
      keyAnswer: "المتنبي",
    },
  ];
  
  const qustionsCont = document.getElementById("qustions-cont");
  const qustionsText = document.getElementById("qustions-text");
  const options = document.getElementById("options");
  const timeLeft = document.getElementById("time-left");
  const resultCont = document.getElementById("result-cont");
  const resultText = document.getElementById("result-text");
  
  let currentIndex = 0;
  let currentIndex1 = 0;


  let score = 0;
  let timer = 10;
  let countDown;
  
  function showQuestion(index) {
   
    const questin = questions[index];
    qustionsText.innerText = questin.questionTitle;
    options.innerHTML = "";
    questin.options.forEach((option) => {
     
      const b = document.createElement("button");
      b.textContent = option;
      options.appendChild(b);
  
      b.addEventListener("click", () => {
        checkAnswer(option, questin.keyAnswer);
      });});
       
      }

  function showQuestion1(index){
    const questin1 = questions1[index];
      qustionsText.innerText = questin1.questionTitle;
      options.innerHTML = "";
      const v=document.createElement("input")
      options.appendChild(v);
      const b = document.createElement("button");
      b.textContent = "Next";
      options.appendChild(b);
      b.addEventListener("click", () => {
      checkAnswer(v.value, questin1.keyAnswer);

        });
  }
  
  
  function showTimer() {
    countDown = setInterval(function () {
      timer--;
      timeLeft.textContent = timer;
      if (timer <= 0) {
        clearInterval(countDown);
        checkAnswer("", null);
      }
    }, 1000);
  }
  
  

  function checkAnswer(myAnswer, correctAnswer) {
    currentIndex++;
    clearInterval(countDown);
  
    if (myAnswer === correctAnswer) {
      score++;
    }
  
    if (currentIndex < questions.length) {
      showQuestion(currentIndex);
      timer = 10;
      timeLeft.textContent = timer;
      showTimer();
    }
     else {
      checkAnswer1(myAnswer,correctAnswer);
    }
  }
  

  function checkAnswer1(myAnswer, correctAnswer) {
    currentIndex1++;
    clearInterval(countDown);
  
    if (myAnswer === correctAnswer) {
      score++;
    }
  
    if (currentIndex1 < questions1.length) {
      showQuestion(currentIndex1);
      timer = 10;
      timeLeft.textContent = timer;
      showTimer();
    }
     else {
      showResult();
    }
  }
  
  showQuestion(currentIndex);
  showQuestion1(currentIndex1);
  showTimer();

  function showResult() {
    qustionsCont.style.display = "none";
    resultCont.style.display = "flex";
    resultText.textContent = `Your Score is ${score} of ${questions.length+questions1.length}`;
  }