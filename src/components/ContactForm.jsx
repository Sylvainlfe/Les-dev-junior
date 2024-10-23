import React from "react";
import PropTypes from "prop-types";

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
        className="flex flex-col justify-center bg-cardTransparent shadow-contactShadow rounded-3xl w-80 px-12 py-6 h-auto gap-2 md:w-2/3 md:gap-4 lg:w-3/5 lg:gap-2 lg:px-32 lg:py-10 xl:w-1/3 xl:px-20 "
      >
        <h2 className="text-center text-2xl">Nous contacter</h2>
        {fields.map((field) => (
          <fieldset key={field.id} className={`${
            field.id === "honeypot" ? "hidden" : ""
          }`}>
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
                className="bg-white/20 px-4 py-3 mt-2 h-12 outline-none w-full text-white rounded-full border-2 transition-colors duration-100 border-solid focus:border-white/60 border-white/20"
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
          className="border-2 border-white/30 rounded-full py-2 px-4 w-full h-12 cursor-pointer hover:bg-custom-gradients lg-mb-4"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

ContactForm.propTypes = {
  handleChangeInputValue: PropTypes.func.isRequired,  
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  
      text: PropTypes.string.isRequired, 
      required: PropTypes.bool,  
      type: PropTypes.string.isRequired,  
      ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
      ]),  
    })
  ).isRequired,
  formValues: PropTypes.objectOf(PropTypes.string).isRequired, 
  errors: PropTypes.objectOf(PropTypes.string),  
  handleSubmit: PropTypes.func.isRequired,   
};

export default ContactForm;
