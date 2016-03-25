/**
*	Copy and paste this script into your browser console when you
*	are doing your friend's "how well do you know me" HeroQuizz,
*	and see all the correct answers. When someone asks you:
*
*	Surprised Person: 	"How did you know all of the answers?"
*	You: 				"Psychic."
*
*	@author RailKill
*/

/**
*	For each of the answers in the quiz, find the correct answer and highlight it.
*/
$('.my_answers').each(function(index) {
	var answerFunctionString = $(this).attr('onclick');
	answerFunctionString = answerFunctionString.replace('AnswerQuestion(','');
	answerFunctionString = answerFunctionString.replace(')','');
	answerFunctionString = answerFunctionString.trim();
	
	var parameterArray = answerFunctionString.split(',');
	// For the AnswerQuestion function, the parameters are in this order:
	// 0 - Local Question Number
	// 1 - Response Number
	// 2 - Global Question Number
	// 3 - Correct Response
	// The correct answer will have the same parameters in position 1 and 3.
	if (parameterArray[1] == parameterArray[3]) {
		$(this).css('background-color', '#00AA00');
	}
});