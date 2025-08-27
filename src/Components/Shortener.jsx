import React, { useState } from 'react';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [shortened, setShortened] = useState('');

  const handleShorten = () => {
    if (!url) return;
    const fakeId = Math.random().toString(36).substring(2, 8);
    setShortened(`https://short.ly/${fakeId}`);
  };

  return (
    <section className="bg-bg py-16 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Paste your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handleShorten}
          className="btn-primary mt-4 w-full"
        >
          Shorten URL
        </button>

        {shortened && (
          <div className="mt-6 bg-surface border border-border rounded-lg p-4 text-primary-text">
            <p className="text-sm text-text-muted mb-1">Your shortened link:</p>
            <a href={shortened} className="text-primary font-semibold underline">{shortened}</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shortener;
