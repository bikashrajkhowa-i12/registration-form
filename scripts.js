document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !age || !gender || !email || !password) {
      document.getElementById("message").textContent =
        "Please fill all the fields !";
      document.getElementById("message").style.color = "red";
      return;
    }

    const userData = {
      name,
      age,
      gender,
      email,
      password,
    };

    localStorage.setItem(
      `registration data of ${name}`,
      JSON.stringify(userData)
    );
    document.getElementById("message").textContent = "Registration successfull";
    document.getElementById("message").style.color = "green";

    // Optionally clear form
    document.getElementById("registrationForm").reset();
  });
