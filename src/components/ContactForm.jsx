import React from "react";

function ContactForm({
  handleChangeInputValue,
  fields,
  formValues,
  errors,
  handleSubmit,
}) {
  
  return (
    <section className="flex justify-center items-center h-lvh">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly bg-cardTransparent shadow-contactShadow rounded-lg px-6 w-80 h-2/3 md:gap-4 md:w-2/3 md:h-3/4 lg:w-3/5 lg:px-20"
      >
        <h2 className="self-center text-2xl">Nous contacter</h2>
        {fields.map((field) => (
          <fieldset key={field.id} className="">
            <label htmlFor={field.id} className="text-white">
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
                className="bg-white/20 px-4 py-3 mt-2 outline-none w-full text-white rounded-2xl border-2 transition-colors duration-100 border-solid focus:border-white/60 border-white/20"
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
                className="bg-white/20 px-4 py-3 mt-2 outline-none w-full text-white rounded-full border-2 transition-colors duration-100 border-solid focus:border-white/60 border-white/20"
              />
            )}
            {errors[field.id] && (
              <span className="text-red-500 text-sm mt-1">
                {errors[field.id]}
              </span>
            )}
          </fieldset>
        ))}
        <button
          type="submit"
          className="border-2 border-white/30 rounded-full py-2 px-4 w-full cursor-pointer hover:bg-custom-gradients lg-mb-4"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
