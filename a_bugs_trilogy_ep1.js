// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code. You have 15 minutes to send a solution. Good Luck.

// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)


/*
function {
	var : Math.random()
		if (career <= 0.32) {
			return = FrontEnd Developer
		 else if (career <= 0.65) 
			return : BackEnd Developer,
		} else {
			return 'Full-Stack Developer'
		}
yourFutureCareer();
*/



function yourFutureCareer(){
	var career = Math.random()
	if (career <= 0.32) {
		return "FrontEnd Developer"
  }
	else if (career <= 0.65) {
		return "BackEnd Developer"
	}
  else {
		return "Full-Stack Developer"
	}
}
yourFutureCareer()




const yourFutureCareer = () => {
    let career = Math.random()
    return `${career <= 0.32 ? "FrontEnd" : (career <= 0.65 ? "BackEnd" : "Full-Stack")} Developer`
}




const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];
const yourFutureCareer = () =>randomChoice(['FrontEnd Developer', 'BackEnd Developer', 'Full-Stack Developer']);




const yourFutureCareer = () =>
  (career => `${career <= 0.32 ? `FrontEnd` : career <= 0.65 ? `BackEnd` : `Full-Stack`} Developer`)
  (Math.random());



const yourFutureCareer = () => `${['FrontEnd', 'BackEnd', 'Full-Stack'][Math.random() * 3 | 0]} Developer`;




const yourFutureCareer = ( career = Math.random()) => 
    career <= 0.32 ? 'FrontEnd Developer' :
    career <= 0.65 ? 'BackEnd Developer' :
    'Full-Stack Developer';

yourFutureCareer();




var yourFutureCareer=()=>{
    var career = Math.random()
    if (career <= 0.32)   return "FrontEnd Developer";
    if (career <= 0.65)   return "BackEnd Developer";
                          return "Full-Stack Developer";}
  
yourFutureCareer(); 