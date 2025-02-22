import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import { cleanAllEntries } from "./utils/cleanData";

export interface IRow {
  link: { text: string; url: string };
  explanation: string;
}

export interface IRowProps {
  props: IRow;
}

export const TableRow = ({ props }: IRowProps) => {
  const { link, explanation } = props;

  return (
    <tr>
      <td>
        <a href={link.url}>{link.text}</a>
      </td>
      <td>{explanation}</td>
    </tr>
  );
};

function App() {
  const [methodsData, setMethodsData] = useState<IRow[] | undefined>(undefined);
  const [error, setError] = useState<null | string | Error>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const apiUrl = "";

  useEffect(() => {
    setLoading(true);
    fetchData(apiUrl)
      .then((data) => {
        setMethodsData(cleanAllEntries(data));
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>TABLE</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{JSON.stringify(error)}</p>}
      {methodsData && (
        <>
          <table>
            {methodsData &&
              methodsData.length > 0 &&
              methodsData.map((method, i) => (
                <TableRow props={method} key={i} />
              ))}
          </table>
        </>
      )}
    </>
  );
}

export default App;
