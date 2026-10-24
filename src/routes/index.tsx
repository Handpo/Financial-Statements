import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-gray-500 p-8">
  <div className="bg-gray-700 p-8 rounded-xl text-left">
    <h1 className="text-4xl font-bold text-orange-400">
      Welcome to Kissena Baked Goods
    </h1>
    <h2 className="text-lg text-amber-300 mt-2">
      Financial Statements
    </h2>
  </div>

  <p className="mt-10 mx-20 text-lg text-green-300">
    We are a new company, year 2025 is our first full year of operations.
    On this site, we will disclose the financial statementsfor our investors.
  </p>
  <div className='bg-yellow-900 m-10'>
    <button className="m-5 rounded-lg bg-blue-800 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-sky-600 hover:shadow-lg" active:scale-95 transition-all duration-700>
  Click Here → </button>




    <button>Click Here</button><button>Click Here</button><button>Click Here</button></div>
</div> 
)
}
  