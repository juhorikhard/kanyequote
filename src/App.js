import { useState} from "react";
import FetchQuote from "./components/FetchQuote";
import FilterBy from "./components/FilterBy";
import Title from "./components/Title";
import TopSection from "./components/TopSection";
import Quote from "./components/Quote"

function App() {

  // Tyhjä quotelista
  const [randomQuotes, setRandomQuotes] = useState([]);


  return (
    
    <div className="flex flex-row min-h-screen bg-blue-400">
      <div className="w-1/5 bg-blue-400 p-7 flex flex-col space-y-5">
      <Title appname="Kanye Oneliners" />
      <FilterBy/>
      <FetchQuote randomQuotes={randomQuotes} setRandomQuotes={setRandomQuotes}/>
      
      </div>
      <div className="flex flex-row flex-auto bg-blue-400 rounded-tl-none border-0">
        <div className="flex flex-col w-3/4">
          <TopSection />
          
          { randomQuotes.length > 0 ? randomQuotes.map(randomQuote => (
          <Quote key={randomQuote.quote} quote={randomQuote.quote} artist={randomQuote.artist} year={randomQuote.year} />
           )) : (
          // Jos quoteja ei näkyvillä, näytetään teksti "No quotes!"
             <p>No quotes!</p>
           )}
        </div>
        
      </div>
      
    </div>
    
  );
}

export default App;