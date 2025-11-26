import './App.css'

function App() {

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-xs mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-indigo-600"
              aria-hidden="true"
            >
              <path d="M3 11L12 3l9 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M8 16h0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <h1 className="text-indigo-700 font-semibold text-lg">Workcation</h1>
          </div>

          <section className="w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Person working on a laptop at the beach"
              className="w-full h-48 sm:h-56 object-cover rounded-xl"
            />

            <div className="p-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                You can work from anywhere. <span className="text-indigo-600">Take advantage of it.</span>
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
              </p>

              <div className="mt-6">
                <button className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow">
                  BOOK YOUR ESCAPE
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App