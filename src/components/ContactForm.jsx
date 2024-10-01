import React from 'react'

function ContactForm({
    handleChangeInputValue,
    fields,
    formValues,
    errors,
    handleSubmit,
  }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center backdrop-blur-sm bg-white/30 p-4 rounded-lg shadow-xl mb-2 w-80 h-full "
    >
        <h2>Nous contacter</h2>
      {fields.map((field) => (
        <fieldset key={field.id} className="flex flex-col mb-4">
          <label htmlFor={field.id} className="text-white mb-1">
            {field.text}{" "}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              ref={field.ref}
              value={formValues[field.id]}
              onChange={handleChangeInputValue}
              placeholder={field.text}
              aria-label={field.text}
              className="bg-white/30 px-4 py-3 outline-none w-[280px] text-black rounded-2xl border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              ref={field.ref}
              value={formValues[field.id]}
              onChange={handleChangeInputValue}
              placeholder={field.text}
              aria-label={field.text}
              className="bg-white/30 px-4 py-3 outline-none w-[280px] text-white rounded-full border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            />
          )}
          {errors[field.id] && (
            <span className="text-red-500 text-sm mt-1">
              {errors[field.id]}
            </span>
          )}
        </fieldset>
      ))}
      <button type="submit" className="border-2 rounded-full py-2 px-4 w-full cursor-pointer">
        Envoyer
      </button>
    </form>
  )
}

export default ContactForm