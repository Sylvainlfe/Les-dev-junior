import Card from "../components/Card";
import imgFabien from "../assets/images/fabien.webp";
import imgPaul from "../assets/images/paul.webp";
import imgSylvain from "../assets/images/sylvain.jfif";
import { useEffect, useRef, useState } from "react";
import { useSubmit } from "react-router-dom";
import ContactForm from "../components/contactForm";

const titleCard = "Développeur web fullstack";

const personalProfile = [
  {
    id: 1,
    image: imgFabien,
    title: titleCard,
    firstname: "Prénom 1",
    lastname: "Nom 1",
    description: "Description du projet 1",
    stack: ["Technologie1", "Technologie2"],
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
    firstname: "Prénom 3",
    lastname: "Nom 3",
    description: "Description du projet 3",
    stack: ["Technologie5", "Technologie6"],
    github: "lien_vers_github_3",
  },
  {
    id: 4,
    image: "url_de_l_image_4",
    title: titleCard,
    firstname: "Prénom 4",
    lastname: "Nom 4",
    description: "Description du projet 4",
    stack: ["Technologie7", "Technologie8"],
    github: "lien_vers_github_4",
  },
  {
    id: 5,
    image: "url_de_l_image_5",
    title: titleCard,
    firstname: "Prénom 5",
    lastname: "Nom 5",
    description: "Description du projet 5",
    stack: ["Technologie9", "Technologie10"],
    github: "lien_vers_github_5",
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

  // const actionData = useActionData();
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

  // useEffect(() => {
  //   if (actionData) {
  //     if (actionData.ok) {
  //       alert("Email envoyé avec succès !");
  //       setFormValues(emptyFields);
  //     } else {
  //       alert("Erreur lors de l'envoi de l'email.");
  //     }
  //   }
  // }, [actionData]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     submit(formValues, { method: "post", action: "/ContactPage" });
  //   }
    return (
      <main className="flex flex-col items-center justify-center lg:grid lg:grid-cols-1 lg:gap-4 lg:self-center">
        <ContactForm 
        handleChangeInputValue={handleChangeInputValue}
        // handleSubmit={handleSubmit}
        fields={fields}
        formValues={formValues}
        errors={errors}
        className="lg:col-span-1"
        />
        <Card personalProfile={personalProfile} className="lg:col-span-1"/>
      </main>
    );
  };

