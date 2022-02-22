const Quote = ({ quote, artist, year }) => {

  
  return (
    <div className="p-6  ml-3 my-3 bg-white rounded-xl shadow-md flex justify-between w-4/5">
      <div>
        <div className="text-xl font-medium text-black">{quote}</div>
        <p className="text-gray-600">
          {artist}, {year}
        </p>
      </div>
    </div>
  );
};

export default Quote;
