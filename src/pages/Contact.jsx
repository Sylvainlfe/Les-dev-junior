import Card from "../components/Card";
import imgFabien from "../assets/images/fabien.webp";
import imgPaul from "../assets/images/paul.webp";
import imgSylvain from "../assets/images/sylvain.jfif";
import imgAlex from "../assets/images/alex.webp";
import { useEffect, useRef, useState } from "react";
import { useSubmit } from "react-router-dom";
import ContactForm from "../components/contactForm";

const titleCard = "Développeur web fullstack";

const personalProfile = [
  {
    id: 1,
    image: imgFabien,
    title: titleCard,
    firstname: "Fabien",
    lastname: "Rollet",
    description: "Description du projet 1",
    stack: ["React","HTML5","SCSS","Tailwind","JavaScript","NodeJS", "ExpressJS","MySql"],
    github: "lien_vers_github_1",
  },
  {
    id: 2,
    image: imgPaul,
    title: titleCard,
    firstname: "Prénom 2",
    lastname: "Nom 2",
    description: "Description du projet 2",
    stack: ["Technologie3", "Technologie4"],
    github: "lien_vers_github_2",
  },
  {
    id: 3,
    image: imgSylvain,
    title: titleCard,
    firstname: "Sylvain",
    lastname: "Lafaye",
    description: "Reconversion, ancien chargé d'affaire dans la climatisation.",
    stack: ["Html", "CSS"],
    github: "lien_vers_github_3",
  },
  {
    id: 4,
    image: imgAlex,
    title: titleCard,
    firstname: "Alex",
    lastname: "name",
    description: "sdfsdfsdf resfsdfs",
    stack: ["Technologie7", "Technologie8"],
    github: "lien_vers_github_4",
  },
];

const emptyFields = {
  name: "",
  email: "",
  comment: "",
};

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const submit = useSubmit();

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
    const nameInput = document.getElementById("name")
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
      <Card personalProfile={personalProfile} />
    </main>
  );
}
