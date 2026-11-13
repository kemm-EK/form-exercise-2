const eventPass = document.querySelector(".event-pass");
if (eventPass) {
  console.log(eventPass);
  const output_username = document.querySelector(".user-name");
  const output_email = document.querySelector(".email");
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");
  const email = params.get("email");
  output_username.textContent = username;
  output_email.textContent = email;

  // 1. Lav identifier for select outputtet i opsamlingssiden
  // 2. Træk output-data ud i en identifier
  // 3. Udskriv data-værdien i det rigtige element

  // 4. Lav en betingelse
  // a) Spørg om option værdien og sæt baggrundfarven på et element
  // b) Gør det samme med alle mulige options

  // Hint: Brug console.log mens du koder, så du kan se om dine if
  // sætninger bliver aktiveret
}

// Løsningsforslag
//   const optionWrapper = document.querySelector(".option-wrapper");
//   const output_option = document.querySelector(".option");
//   const option = params.get("options");
//   output_option.textContent = option;

//   if (option === "op1") {
//     optionWrapper.style.backgroundColor = "#ff000070";
//   } else if (option === "op2") {
//     optionWrapper.style.backgroundColor = "#00ff0070";
//   } else if (option === "op3") {
//     optionWrapper.style.backgroundColor = "#0000ff70";
//   }
