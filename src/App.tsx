import { useState } from "react";
import backendLinks from "./data/backendLinks.js"; // Import the static data
import './App.css'

export interface IRow {
  link: { text: string; url: string };
  explanation: string;
}

export interface IRowProps {
  props: IRow;
  highlight: boolean; // new prop
}

export const TableRow = ({ props, highlight }: IRowProps) => {
  const { link, explanation } = props;

  return (
    <tr >
      <td>

        <a className={highlight ? "highlight" : ""} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      </td>
      <td>{explanation}</td>
    </tr>
  );
};

function App() {
  const [methodsData] = useState<IRow[]>(backendLinks); // No fetching needed

  const highlightedLinks = ["Express Middleware", "Express Routers", "Postman", "localhost & PORT", "What is an API?", "HTTP Methods (GET, POST, PATCH, DELETE)"]; // Add more as needed


  return (
    <>
      <h1>Backend Cheat Sheet</h1>
      <table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {methodsData.map((method, i) => (
            <TableRow props={method} key={i} highlight={highlightedLinks.includes(method.link.text)}
/>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
