function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Lumoro AI</h1>
      <textarea className="w-full p-2 border rounded mb-4" placeholder="Paste your project description..." />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Boost</button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Resume Bullets</h2>
        <div className="p-2 bg-white rounded shadow">Output here</div>
      </div>
    </div>
  )
}

export default App