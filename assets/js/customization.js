document.addEventListener("DOMContentLoaded", () => {
  let emailLink = document.getElementById("email-link");
  let sendMessage = document.getElementById("send-message");

  emailLink.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "mailto:ryan.murphy@alumni.stanford.edu";
  });

  sendMessage.addEventListener("click", (e) => {
    e.preventDefault();

    let subject = document.getElementById("name").value;
    let body = document.getElementById("message").value;

    window.location.href = `mailto:ryan.murphy@alumni.stanford.edu?subject=${subject}&body=${body}`;
  });
});
