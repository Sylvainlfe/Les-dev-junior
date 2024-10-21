import Card from "../components/Card";
import { useRef, useState } from "react";
import ContactForm from "../components/ContactForm";

const emptyFields = {
  name: "",
  email: "",
  comment: "",
};

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

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
  ];

  const [formValues, setFormValues] = useState(emptyFields);
  const [fields, setFields] = useState(textLabel);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formValues[field.id]) {
        newErrors[field.id] = "Ce champ est obligatoire";
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

  const webhookURL =
    "https://discord.com/api/webhooks/1295714093562466344/Hc85RRuMQYnMEVTp-B60d9RXjR_4vvtLL6VHBirUq-E60rkzphDPT5s0pgZCZz3maGbm";
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");
    const nameInput = document.getElementById("name");
    const email = emailInput.value;
    const message = commentInput.value;
    const name = nameInput.value;
    const payload = {
      content: `Nouveau message du portfolio des devs juniors:\nNom et prénom: ${name}\nAdresse email: ${email}\nMessage: ${message}`,
    };

    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message envoyé avec succès !");
          nameInput.value = "";
          emailInput.value = "";
          commentInput.value = "";
        } else {
          alert("Une erreur est survenue.");
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Une erreur est survenue.");
      });
  };

  return (
    <main>
      <ContactForm
        handleChangeInputValue={handleChangeInputValue}
        handleSubmit={handleSubmit}
        fields={fields}
        formValues={formValues}
        errors={errors}
      />
      <Card />
    </main>
  );
}
