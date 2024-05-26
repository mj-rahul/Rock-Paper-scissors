const handOptions = {
    rock: "asset/Rock.png",
    paper: "asset/Paper_2.png",
    scissors: "asset/Scissors.png",
  };
  
  const pickUserHand = (hand) => {
    console.log(hand);
  
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
    document.getElementById("userPickImage").src = handOptions[hand];
    let cpHand = pickComputerHand();
    referee(hand, cpHand);
  };
  const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
  
    let cpHand = hands[Math.floor(Math.random() * 3)];
    //console.log(cpHand);
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    return cpHand;
  };
  
  let SCORE = 0;
  const referee = (userhand, cpHand) => {
    if (userhand == "paper" && cpHand == "rock") {
      setDecesion("YOU WIN !");
      SCORE = SCORE + 1;
      setScore(SCORE);
    } else if (userhand == "rock" && cpHand == "scissors") {
      setDecesion("YOU WIN !");
      SCORE = SCORE + 1;
      setScore(SCORE);
    } else if (userhand == "scissors" && cpHand == "paper") {
      setDecesion("YOU WIN !");
      SCORE = SCORE + 1;
      setScore(SCORE);
    } else if (userhand == "paper" && cpHand == "scissors")
      setDecesion("YOU LOSE !");
    else if (userhand == "rock" && cpHand == "paper") setDecesion("YOU LOSE !");
    else if (userhand == "scissors" && cpHand == "rock")
      setDecesion("YOU LOSE !");
    else if (userhand == "paper" && cpHand == "paper") setDecesion("It's a tie!");
    else if (userhand == "rock" && cpHand == "rock") setDecesion("It's a tie!");
    else if (userhand == "scissors" && cpHand == "scissors")
      setDecesion("It's a tie!");
  };
  
  const setDecesion = (decision) => {
    console.log(decision);
    document.querySelector(".decision h1").innerText = decision;
  };
  const setScore = (score) => {
    console.log(score);
    document.querySelector(".score h1").innerText = score;
  };
  
  const playAgain = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  };