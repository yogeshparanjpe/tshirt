<!DOCTYPE html>
<html>
<head>
<title>Customized T-shirt Order Form</title>
<script>
  function validateForm() {
    // Validate the tagline - restrict it to 50 characters max
    var tagline = document.getElementById("tagline").value;
    if (tagline.length > 50) {
      alert("Tagline must not exceed 50 characters.");
      return false;
    }

    // Validate contact number - check for 9 digits
    var contactNumber = document.getElementById("contact_number").value;
    if (!/^\d{9}$/.test(contactNumber)) {
      alert("Contact number must be a 9-digit number.");
      return false;
    }

    return true;
  }

  function generateReceipt() {
    if (validateForm()) {
      var date = new Date();
      var receiptDate = date.toLocaleDateString();
      var tagline = document.getElementById("tagline").value;
      var color = document.getElementById("color").value;
      var size = document.getElementById("size").value;
      var quantity = document.getElementById("quantity").value;
      var deliveryDate = document.getElementById("delivery_date").value;
      var deliveryAddress = document.getElementById("delivery_address").value;
      var contactNumber = document.getElementById("contact_number").value;

      // Check if quantity exceeds 50
      if (parseInt(quantity) > 50) {
        alert("Order quantity cannot exceed 50.");
        return;
      }

      // Create a Person object
      var person = {
        tagline: tagline,
        color: color,
        size: size,
        quantity: quantity,
        deliveryDate: deliveryDate,
        deliveryAddress: deliveryAddress,
        contactNumber: contactNumber
      };

      // Create and display the receipt within the HTML page
      var receipt = `<h2>Receipt</h2>`;
      receipt += `<p>Receipt Date: ${receiptDate}</p>`;
      receipt += `<p>Order Details:</p>`;
      receipt += `<p>Tagline: ${tagline}</p>`;
      receipt += `<p>Color: ${color}</p>`;
      receipt += `<p>Size: ${size}</p>`;
      receipt += `<p>Quantity: ${quantity}</p>`;
      receipt += `<p>Delivery Date: ${deliveryDate}</p>`;
      receipt += `<p>Delivery Address: ${deliveryAddress}</p>`;
      receipt += `<p>Contact Number: ${contactNumber}</p>`;

      document.getElementById("receiptContainer").innerHTML = receipt;
    }
  }
</script>
</head>
<body>
<h1>Customized T-shirt Order Form</h1>
<form action="" method="post">
  <label for="tagline">Tagline on the Shirt:</label><br>
  <input type="text" id="tagline" name="tagline" required><br>

  <label for="color">Color:</label><br>
  <input type="text" id="color" name="color" required><br>

  <label for="size">Size:</label><br>
  <select id="size" name="size" required>
    <option value="" disabled selected>Select Size</option>
    <option value="S">Small</option>
    <option value="M">Medium</option>
    <option value="L">Large</option>
    <option value="XL">Extra Large</option>
  </select><br>

  <label for="quantity">Quantity:</label><br>
  <input type="number" id="quantity" name="quantity" min="1" required><br>

  <label for="delivery_date">Date of Delivery:</label><br>
  <input type="date" id="delivery_date" name="delivery_date" required><br>

  <label for="delivery_address">Delivery Address:</label><br>
  <textarea id="delivery_address" name="delivery_address" rows="4" cols="50" required></textarea><br>

  <label for="contact_number">Contact Number:</label><br>
  <input type="tel" id="contact_number" name="contact_number" required><br>

  <input type="button" value="Place Order" onclick="generateReceipt();">
</form>

<!-- Container for displaying the receipt -->
<div id="receiptContainer"></div>

</body>
</html>
