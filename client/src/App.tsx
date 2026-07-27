export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Gerente Inteligente
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          Sistema de gerenciamento Full Stack
        </p>

        <button
          className="
            mt-8
            rounded-xl
            bg-blue-600
            px-6
            py-3
            text-white
            font-semibold
            transition
            hover:bg-blue-700
          "
        >
          Começar
        </button>
      </div>
    </main>
  );
}