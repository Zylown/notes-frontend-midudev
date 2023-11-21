import ReactDOM from "react-dom/client";
// import App from "./OldApp.jsx";
import App from "./App.jsx";

/*
const notes = [
  {
    id: crypto.randomUUID(),
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
    categories: ["frontend", "react"],
  },
  {
    id: crypto.randomUUID(),
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: crypto.randomUUID(),
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298",
    important: true,
  },
];
*/
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// setInterval(() => {
//   refresh(); //vas a volver a renderizar la app
//   contador++; //aumentar contador + 1
// }, 1000); //cada 1 segundo
