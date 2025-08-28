import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.css';

const Shortener = ({ url, setUrl, customSlug, setCustomSlug, shortened, showStep, setShowStep, handleNext, handleShorten }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-between">
    <main className="flex-grow">
      <section className="text-center py-16 px-4">
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight drop-shadow">
          Sniply
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Trim your links. Share with style.
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-lg">
          A fast, responsive URL shortener built with React and Tailwind CSS. Paste your long
          link, click shorten, and get a sleek, shareable version instantly.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-6">
        <div className="bg-white shadow-2xl border border-gray-200 rounded-2xl p-8">
          <form onSubmit={showStep === 1 ? handleNext : handleShorten} className="space-y-5">
            {showStep === 1 ? (
              <>
                <label className="block text-left font-semibold text-gray-700">
                  Paste your long URL
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/some/very/long/url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg text-lg font-semibold shadow-sm transition"
                >
                  Next
                </button>
              </>
            ) : (
              <>
                <label className="block text-left font-semibold text-gray-700">
                  Choose a custom slug
                </label>
                <input
                  type="text"
                  placeholder="e.g. my-link"
                  value={customSlug}
                  onChange={(e) => setCustomSlug(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg text-lg font-semibold shadow-sm transition"
                >
                  Shorten URL
                </button>
              </>
            )}
          </form>

          {shortened && (
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500 mb-1">Your shortened link:</p>
              <a
                href={shortened}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-800 font-bold underline break-words"
              >
                {shortened}
              </a>
            </div>
          )}
        </div>
      </section>
    </main>

    <footer className="text-center text-sm text-gray-200 py-6 ">
      <p className="mb-1">&copy; 2025 Sniply. All rights reserved.</p>
      <p>
        Developed by{' '}
        <a
          href="https://devseiko.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-black font-semibold underline"
        >
          MECHSEIKO
        </a>
      </p>
    </footer>
  </div>
);

const RedirectPage = ({ slugMap }) => {
  const { slug } = useParams();
  const [count, setCount] = useState(5);
  const target = slugMap[slug];

  useEffect(() => {
    if (!target) return;
    if (count <= 0) {
      window.location.href = target;
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, target]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 text-center">
      <div>
        <h1 className="text-4xl font-bold text-purple-100 mb-4">Sniply Redirect</h1>
        {target ? (
          <p className="text-lg text-white">
            Redirecting to{' '}
            <span className="text-purple-200 font-medium break-words">{target}</span> in{' '}
            <span className="font-semibold">{count}</span> second{count !== 1 && 's'}…
          </p>
        ) : (
          <p className="text-lg text-red-200 font-semibold">
            This short link does not exist or has expired.
          </p>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [url, setUrl] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [shortened, setShortened] = useState('');
  const [showStep, setShowStep] = useState(1);
  const [slugMap, setSlugMap] = useState({});

  const handleNext = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setShowStep(2);
  };

  const handleShorten = (e) => {
    e.preventDefault();
    if (!customSlug.trim()) return;

    setSlugMap((prev) => ({
      ...prev,
      [customSlug]: url,
    }));

    const fullShort = `${window.location.origin}/${customSlug}`;
    setShortened(fullShort);
    setShowStep(1);
    setUrl('');
    setCustomSlug('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Shortener
              url={url}
              setUrl={setUrl}
              customSlug={customSlug}
              setCustomSlug={setCustomSlug}
              shortened={shortened}
              showStep={showStep}
              setShowStep={setShowStep}
              handleNext={handleNext}
              handleShorten={handleShorten}
            />
          }
        />
        <Route path="/:slug" element={<RedirectPage slugMap={slugMap} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
