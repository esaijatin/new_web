function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

// Optional: Handle form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Form submitted!");
    // You can handle form submission here (e.g., sending data to a server)
});
function showCard() {
    document.getElementById("myCard").style.display = "block";
  }

  document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    alert("Form submitted successfully!");
    // You can access values using:
    // document.getElementById("name").value, etc.
  });
  function openCard() {
    document.getElementById('main-content').classList.add('blurred');
    document.getElementById('cardOverlay').style.display = 'flex';
  }
  
  function closeCard() {
    document.getElementById('main-content').classList.remove('blurred');
    document.getElementById('cardOverlay').style.display = 'none';
  }
  
  document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value;
  
    alert(`Submitted:\nName: ${name}\nAge: ${age}\nGender: ${gender}\nMobile: ${mobile}`);
    
    closeCard();
  });
  

  function openWhatsApp() { 
    
    const phoneNumber = "+91 7671812449"; 
    const message = "Hello! I want to chat with you.";
    
    // WhatsApp API URL
    const url = `https://wa.me/${7671812449}?text=${encodeURIComponent(Hii)}`;

    // Open in new tab
    window.open(url, '_blank');
  }