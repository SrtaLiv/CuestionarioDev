"use client";

import { useState } from "react";

type QuestionType = {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: string; // Si lo necesitas para validar respuestas
};
const questions: QuestionType[] = [
  {
    id: 1,
    question: "¿Qué te gusta más hacer en tu tiempo libre?",
    options: [
      "Desarmar y armar cosas, solo por curiosidad",
      "Dibujar, diseñar o crear cosas estéticamente atractivas",
      "Resolver acertijos lógicos o matemáticos",
      "Crear cosas que ayuden a otras personas",
    ],
  },
  {
    id: 2,
    question: "¿Qué tipo de proyectos disfrutas más?",
    options: [
      "Proyectos complejos que requieren mucha organización y trabajo en equipo",
      "Aplicaciones o páginas web que se ven increíbles y son fáciles de usar",
      "Soluciones rápidas y eficientes para problemas difíciles",
      "Herramientas que mejoran la vida de las personas o empresas",
    ],
  },
];
// `app/question/Question.tsx` is the UI for the `/dashboard` URL
export default function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]); // Almacena las respuestas
  
  const handleAnswerSelect = (answer: string) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentQuestionIndex] = answer;
      return updatedAnswers;
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("¡Has completado todas las preguntas!");
      console.log("Respuestas:", answers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>{currentQuestion.question}</h1>

      {currentQuestion.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={() => handleAnswerSelect(option)}
              checked={answers[currentQuestionIndex] === option}
            />
            {option}
          </label>
        </div>
      ))}

      <button onClick={nextQuestion}>
        {currentQuestionIndex < questions.length - 1 ? "Siguiente" : "Finalizar"}
      </button>
    </div>
  );
}