export function Modal({ titulo, children, setModalOpen }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="bg-blue-100 text-black p-6 rounded-3xl shadow-lg w-140"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl text-center font-bold mb-4 border-b-2">
          {titulo}
        </h2>
        {children}
        <button
          onClick={() => setModalOpen(false)}
          className="mt-4 bg-red-600/70 px-3 py-1.5 rounded-2xl cursor-pointer hover:bg-red-500/70"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
