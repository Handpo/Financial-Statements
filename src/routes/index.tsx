import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="bg-gray-900 p-8 rounded-xl text-center">
  <h1 className="text-4xl font-bold text-amber-400">
    Welcome to QC Baked Goods
  </h1>
  <h2 className="text-xl text-amber-400 mt-2">
    Financial Statements
  </h2>
</div>
  )
}
  