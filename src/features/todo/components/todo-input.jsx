export function TodoInput({
  inputValue,
  inputType,
  textArea,
  inputSelect,
  inputName,
  inputLabel,
  handleChange,
}) {
  return (
    <div className="flex justify-center items-center gap-2">
      {textArea ? (
        <>
          <label className="font-semibold mr-1" htmlFor={inputName}>
            {inputLabel}
          </label>
          <textarea
            id={inputName}
            value={inputValue}
            className="border rounded-2xl px-3 py-1"
            name={inputName}
            onChange={(e) => handleChange(e)}
            placeholder="Agrega una descripción"
            rows={6}
            cols={24}
          />
        </>
      ) : inputSelect ? (
        <>
          <label className="font-semibold mr-1" htmlFor={inputName}>
            {inputLabel}
          </label>
          <select
            className="border px-2 rounded-lg"
            id={inputName}
            name={inputName}
            value={inputValue}
            onChange={(e) => handleChange(e)}
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </>
      ) : (
        <>
          <label className="font-semibold mr-1" htmlFor={inputName}>
            {inputLabel}
          </label>
          <input
            id={inputName}
            className="border rounded-2xl px-3 py-1"
            type={inputType}
            value={inputValue}
            name={inputName}
            onChange={(e) => handleChange(e)}
            placeholder="Agrega un todo"
          />
        </>
      )}
    </div>
  );
}
