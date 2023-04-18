function resetPassword() {
    var newPassword = document.getElementById("new-password").value;
    var reEnterPassword = document.getElementById("re-enter-password").value;
    if (newPassword !== reEnterPassword) {
      alert("Passwords do not match. Please try again.");
    } else {
      alert("Password reset successful.");
      window.location.href = "Functional_testing/login.html";
    }
    return false; // Prevents the form from submitting
  }
  