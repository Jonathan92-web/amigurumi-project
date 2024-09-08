const apiUrl = "https://node-mongodb-one.vercel.app/customers/suscription";

async function customerSuscription() {
  const form = document.getElementById("suscription");
  const formData = new FormData(form);
  const data = new URLSearchParams(formData).toString();

  let message = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });

  message = await message.json();
  console.log(message);
}
