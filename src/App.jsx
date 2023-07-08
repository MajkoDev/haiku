import { useEffect, useState } from "react";
import QUOTES_DATA from "./data.json";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(QUOTES_DATA);
  }, []);

  return (
    <div className="min-h-[100vh] flex flex-row items-center justify-center bg-slate-300">
      <div className="p-6 bg-slate-100 rounded-xl shadow-md flex flex-col min-w-[50%] items-center">
        <h2 className="text-2xl font-bold underline mb-3">Haiku Poems</h2>
        {quotes.map((quote) => (
          <article key={quote.id}>
            <div
              dangerouslySetInnerHTML={{ __html: quote.content }}
              className="text-lg font-light"
            />
            <p className="font-semibold">{quote.author}</p>
          </article>
        ))}

        <button class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
