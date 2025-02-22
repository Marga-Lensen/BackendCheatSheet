import { IRow } from "../AppFetch";

const cleanSingleEntry = (entry: IRow) => {
  const { link, explanation } = entry;

  return {
    link: {
      text: link.text || "Default Text",
      url: link.url || "https://default-link.com",
    },
    explanation: explanation || "leider gibt's keine Erklärung",
  };
};

/* const cleanSingleProduct = () => {}
const cleanSingleArticles = () => {} */

export const cleanAllEntries = (data: IRow[]) => {
  if (!Array.isArray(data)) {
    return;
  }
  return data.map((entry) => cleanSingleEntry(entry));
};

/* export const cleanAllDocuments = (documents: any[], typeOfDocument: string) => {
  // Your function logic here
}; */

