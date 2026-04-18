export function Modal({ titulo, children }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-cyan-800 p-6 rounded-3xl shadow-lg w-140">
        <h2 className="text-xl font-bold mb-4">{titulo}</h2>
        {children}
      </div>
    </div>
  );
}
