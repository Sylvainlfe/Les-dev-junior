import Card from "../components/Card";
import { useRef, useState } from "react";
import ContactForm from "../components/ContactForm";
import { sendContactMessage } from "../services/contactService"
import DOMPurify from "dompurify";


const emptyFields = {
  name: "",
  email: "",
  comment: "",
  honeypot:"",
};

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();
  const honeypotRef = useRef();

  const textLabel = [
    {
      required: true,
      type: "text",
      id: "name",
      for: "name",
      text: "Prénom et nom",
      ref: nameRef,
    },
    {
      required: true,
      type: "email",
      id: "email",
      for: "email",
      text: "Email",
      ref: emailRef,
    },
    {
      required: true,
      type: "textarea",
      id: "comment",
      for: "comment",
      text: "Message",
      ref: commentRef,
    },
    {
      required: false,
      type: "text",
      id: "honeypot",
      for: "honeypot",
      text: "",
      ref: honeypotRef,
    },
  ];

  const [formValues, setFormValues] = useState(emptyFields);
  const [fields, setFields] = useState(textLabel);
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");
  const currentTime = new Date().getTime();
  const RATE_LIMIT_DURATION = 60000;

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formValues[field.id]) {
        newErrors[field.id] = "*Ce champ est obligatoire";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangeInputValue = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (lastSubmissionTime && currentTime - lastSubmissionTime < RATE_LIMIT_DURATION) {
      alert("Vous devez attendre 1 minute avant de soumettre un nouveau message.");
      return;
    }
    if (!validateForm()) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (formValues.honeypot) {
      console.log("Bot detected. Submission blocked.");
      return;
    }
    const cleanName = DOMPurify.sanitize(formValues.name);
    const cleanEmail = DOMPurify.sanitize(formValues.email);
    const cleanComment = DOMPurify.sanitize(formValues.comment);

    try {
      await sendContactMessage(cleanName, cleanEmail, cleanComment);
      alert("Message envoyé avec succès !");
      
      setFormValues(emptyFields);
      localStorage.setItem("lastSubmissionTime", currentTime); 
      window.location.reload();
    } catch (error) {
      alert("Une erreur est survenue.");
    }
  };

  return (
    <main>
      <ContactForm
        handleChangeInputValue={handleChangeInputValue}
        handleSubmit={handleSubmit}
        fields={fields}
        formValues={formValues}
        errors={errors}
        handleRecaptchaChange={handleRecaptchaChange}
      />
      <Card />
    </main>
  );
}
