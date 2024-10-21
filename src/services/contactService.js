const webhookURL = "https://discord.com/api/webhooks/1295714093562466344/Hc85RRuMQYnMEVTp-B60d9RXjR_4vvtLL6VHBirUq-E60rkzphDPT5s0pgZCZz3maGbm";

export const sendContactMessage = async (name, email, message) => {
  const payload = {
    content: `Nouveau message du portfolio des devs juniors:\nNom et prénom: ${name}\nAdresse email: ${email}\nMessage: ${message}`,
  };

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Une erreur est survenue.");
    }

    return response;
  } catch (error) {
    console.error("Erreur:", error);
    throw error;
  }
};