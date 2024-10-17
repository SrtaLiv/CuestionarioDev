"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  careers: Career[];
}

type QuestionType = {
  id: number;
  question: string;
  options: Option[];
};

type Option = {
  id: number;
  value: string;
  careers: Career[];
};

type Career = {
  id: number;
  name: string;
  description: string;
}

const careers: Career[] = [
  { id: 1, name: "INGENIERIA", description: "Carrera de Ingeniería en diversas disciplinas" },
  { id: 2, name: "CIBERSEGURIDAD", description: "Especialización en seguridad informática" },
  { id: 3, name: "TECNOLOGIAS DE LA INFORMACION", description: "Gestión de tecnologías de la información" },
  { id: 4, name: "DISEÑO", description: "Diseño gráfico y visual" },
  { id: 5, name: "CIENCIAS", description: "Ciencias lógicas y matemáticas" },
  { id: 6, name: "PSICOLOGIA", description: "Ayudar a las personas a través del estudio del comportamiento" },
];

const questions: QuestionType[] = [
  {
    id: 1,
    question: "¿Qué te gusta más hacer en tu tiempo libre?",
    options: [
      { id: 1, value: "CASI NUNCA", careers: [careers[0], careers[1], careers[2]] },
      { id: 2, value: "RARA VEZ CIERTO", careers: [careers[3]] },
      { id: 3, value: "ALGO CIERTO", careers: [careers[0], careers[4]] },
      { id: 4, value: "GENERALMENTE CIERTO", careers: [careers[5]] },
      { id: 5, value: "MUY CIERTO", careers: [careers[0], careers[2], careers[3]] },
    ],
  },
  {
    id: 2,
    question: "¿Cuánto tiempo pasas en la computadora?",
    options: [
      { id: 1, value: "CASI NUNCA", careers: [careers[0], careers[1], careers[2]] },
      { id: 2, value: "RARA VEZ CIERTO", careers: [careers[3]] },
      { id: 3, value: "ALGO CIERTO", careers: [careers[0], careers[4]] },
      { id: 4, value: "GENERALMENTE CIERTO", careers: [careers[5]] },
      { id: 5, value: "MUY CIERTO", careers: [careers[0], careers[2], careers[3]] },
    ],
  },
  {
    id: 3,
    question: "¿Te sientes cómodo trabajando en equipo?",
    options: [
      { id: 1, value: "CASI NUNCA", careers: [careers[4]] },
      { id: 2, value: "RARA VEZ CIERTO", careers: [careers[5]] },
      { id: 3, value: "ALGO CIERTO", careers: [careers[0], careers[3]] },
      { id: 4, value: "GENERALMENTE CIERTO", careers: [careers[1], careers[2]] },
      { id: 5, value: "MUY CIERTO", careers: [careers[0], careers[2], careers[5]] },
    ],
  },
  {
    id: 4,
    question: "¿Te gusta resolver problemas complejos?",
    options: [
      { id: 1, value: "CASI NUNCA", careers: [careers[3]] },
      { id: 2, value: "RARA VEZ CIERTO", careers: [careers[5]] },
      { id: 3, value: "ALGO CIERTO", careers: [careers[0], careers[4]] },
      { id: 4, value: "GENERALMENTE CIERTO", careers: [careers[1], careers[2]] },
      { id: 5, value: "MUY CIERTO", careers: [careers[0], careers[2]] },
    ],
  },
  {
    id: 5,
    question: "¿Te interesa la tecnología y las nuevas tendencias?",
    options: [
      { id: 1, value: "CASI NUNCA", careers: [careers[3]] },
      { id: 2, value: "RARA VEZ CIERTO", careers: [careers[4]] },
      { id: 3, value: "ALGO CIERTO", careers: [careers[0], careers[1]] },
      { id: 4, value: "GENERALMENTE CIERTO", careers: [careers[2]] },
      { id: 5, value: "MUY CIERTO", careers: [careers[0], careers[1], careers[5]] },
    ],
  },
  {
    id: 6,
    question: "¿Te gusta ayudar a las personas?",
    options: [
      { id: 1, value: "CASI NUNCA", careers: [careers[0], careers[1]] },
      { id: 2, value: "RARA VEZ CIERTO", careers: [careers[2]] },
      { id: 3, value: "ALGO CIERTO", careers: [careers[4]] },
      { id: 4, value: "GENERALMENTE CIERTO", careers: [careers[5]] },
      { id: 5, value: "MUY CIERTO", careers: [careers[5]] },
    ],
  },
];


// `app/question/Question.tsx` is the UI for the `/dashboard` URL
export default function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [responses, setResponses] = useState<string[]>(Array(questions.length).fill(""));
  const [careerScores, setCareerScores] = useState<{ [key: number]: number }>({});

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const changeQuestion = (direction: "next" | "back") => {
    if (direction === 'next') {
      if (!selectedOption) {
        alert("Por favor, selecciona una opción antes de continuar.");
        return;
      }

      // Actualiza las respuestas seleccionadas
      setResponses((prevResponses) => {
        const updatedResponses = [...prevResponses];
        updatedResponses[currentQuestionIndex] = selectedOption; // Agrega la respuesta de la pregunta actual
        return updatedResponses; // Devuelve el nuevo array de respuestas
      });

      // Actualiza las puntuaciones de carrera
      const selectedOptionObject = currentQuestion.options.find(option => option.value === selectedOption);
      if (selectedOptionObject) {
        selectedOptionObject.careers.forEach(career => {
          setCareerScores(prevScores => ({
            ...prevScores,
            [career.id]: (prevScores[career.id] || 0) + 1, // Incrementa el puntaje de la carrera
          }));
        });
      }

      setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));   // Cambia a la siguiente pregunta
    }
    else if (direction === 'back') {
      setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
      setResponses((prevResponses) => {
        const updatedResponses = [...prevResponses];
        updatedResponses[currentQuestionIndex] = ""; // Elimina la respuesta para la pregunta anterior
        return updatedResponses;
      });
    }

    setSelectedOption(null); // Reinicia la opción seleccionada
  };

  const calculatePercentages = () => {
    const totalResponses = responses.length;

    const percentages = Object.entries(careerScores).map(([id, score]) => {
      return {
        id: Number(id),
        percentage: (score / totalResponses) * 100,
      };
    });

    // Ordena por porcentaje y toma las tres más altas
    return percentages
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);
  };

  const handleFinish = () => {
    const results = calculatePercentages();
    console.log("Resultados:", results);
    // Aquí puedes mostrar los resultados en el UI
  };

  return (
    <div>
      <div>Pregunta {currentQuestion.id} de {questions.length}</div>
      <h1>{currentQuestion.question}</h1>

      {currentQuestion.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              checked={selectedOption === option.value} // Marca la opción seleccionada
              onChange={() => handleOptionChange(option.value)} // Llama a la función cuando cambie
            />
            {option.value}
          </label>
        </div>
      ))}

      <button onClick={() => {
        if (currentQuestionIndex === questions.length - 1) {
          handleFinish(); // Calcular y mostrar porcentajes
        } else {
          changeQuestion("next");
        }
      }}>
        {currentQuestionIndex < questions.length - 1 ? "Siguiente" : "Finalizar"}
      </button>
<br />
      <button onClick={() => changeQuestion("back")} disabled={currentQuestionIndex === 0}>
        Anterior
      </button>

      <br />
      <button>Volver al home</button>

      {/* <h2>Respuestas Seleccionadas:</h2>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>
            Pregunta {index + 1}: {response || "Sin respuesta"}
          </li>
        ))}
      </ul> */}
    </div>
  );
}