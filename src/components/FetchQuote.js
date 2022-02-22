import { useState } from "react";


const FetchQuote = ({ randomQuotes, setRandomQuotes }) => {
    
    // Arrayssa kaikki 18 quotea.
    const [quotes] = useState([
      {quote: "I'd like to meet with Tim Cook", artist: "Kanye West", year: "2002" },
      {quote: "I would say my determination is way higher than my smartness", artist: "Kanye West", year: "2004"},
      {quote: "I feel that I’m very blessed. But with great blessings come great responsibility", artist: "Kanye West", year: "2007"},
      {quote: "I still think I am the greatest", artist: "Kanye West", year: "Unknown date" },
      {quote: "I am not a fan of books", artist: "Kanye West", year: "Unknown date" },
      {quote: "My greatest pain in life is that I will never be able to see myself perform life", artist: "Kanye West", year: "2013" },
      {quote: "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun", artist: "Kanye West", year: "2016"},
      {quote: "People say I have a bad reputation. I think I’ve got the best reputation in the building", artist: "Kanye West", year: "2005" },
      {quote: "I’m not comfortable with comfort. I’m only comfortable when I’m in a place where I’m constantly learning and growing", artist: "Kanye West", year: "2011" },
      {quote: "Everyone's always telling you to be humble. When was the last time someone told you to be great?" , artist: "Kanye West", year: "2025" },
      {quote: "I was never really good at anything except for the ability to learn", artist: "Kanye West", year: "Unknown date" },
      {quote: "I want people to feel like it’s okay to create. It’s okay to not be boxed in. I want people to feel like awesome is possible", artist: "Kanye West", year: "2019" },
      {quote: "50 is Eminem's favourite rapper… I'm my favourite rapper", artist: "Kanye West", year: "Unknown date" },
      {quote: "I am flawed as a human. I am flawed as a person. As a man I am flawed", artist: "Kanye West", year: "2009" },
      {quote: "Everything I'm not makes me everything I am", artist: "Kanye West", year: "2020" },
      {quote: "Shoot for the stars, so if you fall you land on a cloud", artist: "Kanye West", year: "2010" },
      {quote: "Love your haters - they're your biggest fans", artist: "Kanye West", year: "2013" },
      {quote: "To use is necessary. And if you can't be used, then you're useless", artist: "Kanye West", year: "2014" }

    ]);
  
    // Funktiolla saadaan otettua satunnainen quote listasta.
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random()*quotes.length);
      setRandomQuotes([...randomQuotes, quotes[randomIndex]]);
    }
    // Funktiolla saadaan tyhjennettyä näkyvillä olevat quotet.
    const deleteAll = () => {
        setRandomQuotes([]);
    }

return (
        <div>
             <input onClick={getRandomQuote} className="btn btn-red" type="button" value="Fetch a quote" />
             <input onClick={deleteAll} className="btn deleteall" type="button" value="Delete all quotes" />
             <div className="flex-none h-24 bg-blue-400">
                <div className="p-1 flex items-center">

                    <p>Quotes in view: {randomQuotes.length}</p>
                    
                    
                </div>
             </div>
        </div>
    );
}


export default FetchQuote;