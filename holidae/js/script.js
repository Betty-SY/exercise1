new Swiper(".hero-slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const packageChoice = document.getElementById("package").value;
    const checkin = document.getElementById("checkin").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("bookingMessage");

    if (!name || !email || !phone || !packageChoice || !checkin || !guests) {
      message.style.color = "red";
      message.textContent = "Please complete all required fields before confirming your booking.";
      return;
    }

    message.style.color = "green";
    message.textContent = "Booking confirmed! Thank you for choosing Holidae Ethiopia.";
    bookingForm.reset();
  });
}