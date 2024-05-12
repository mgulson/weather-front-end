import React from 'react';

function Home() {
  return (
    <>
      <div>
        <h1>This is the Weather app</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter something..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;