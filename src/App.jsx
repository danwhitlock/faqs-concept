import data from "./data";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return <h2>Frequently Asked Questions</h2>;
};
export default App;
