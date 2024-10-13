import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, questionToggle }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            questionToggle={questionToggle}
          />
        );
      })}
    </section>
  );
};
export default Questions;
