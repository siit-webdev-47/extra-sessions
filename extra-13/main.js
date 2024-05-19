async function fechQuestions() {
    const response = await fetch("https://quiz-api.siit.ro/api/questions");
    const questions = await response.json();
    console.log(questions);
}

fechQuestions();


