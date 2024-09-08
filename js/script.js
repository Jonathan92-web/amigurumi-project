const apiUrl = "https://node-mongodb-one.vercel.app/customers/suscription";

async function customerSuscription() {
  const emailInput = document.getElementById("email").value;

  // Expresión regular para validar correos electrónicos
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validar si el correo es válido
  if (!emailPattern.test(emailInput)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false; // Evita el envío del formulario
  }

  // Obtener el formulario y los datos
  const form = document.getElementById("suscription");
  const formData = new FormData(form);
  const data = new URLSearchParams(formData).toString();

  // Enviar los datos mediante una solicitud POST
  let message = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });

  // Procesar la respuesta
  message = await message.json();
  console.log(message);

  // Limpiar el campo de entrada del email después de la suscripción
  document.getElementById("email").value = "";

  alert("Suscripción exitosa. Gracias por suscribirte.");
  return false; // Prevenir el comportamiento predeterminado del formulario (evitar el recargo de la página)
}
