<!DOCTYPE html>
<html>
<head>
  <title>Customized T-shirt Order Form</title>
</head>
<body>
  <h1>Customized T-shirt Order Form</h1>
  <form id="orderForm" onsubmit="return processOrder()">
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
    <input type="submit" value="Place Order">
  </form>

  <script>
    // JavaScript validation
    function processOrder() {
      const tagline = document.getElementById("tagline").value;
      const contactNumber = document.getElementById("contact_number").value;

      // Check if tagline has no more than 50 characters
      if (tagline.length > 50) {
        alert("Tagline should have at most 50 characters.");
        return false;
      }

      // Check if contact number has 9 digits
      if (!/^\d{9}$/.test(contactNumber)) {
        alert("Contact number should have exactly 9 digits.");
        return false;
      }

      // Order processing
      const orderForm = document.getElementById("orderForm");
      orderForm.style.display = "none";

      const receiptDate = new Date().toLocaleString();
      const receipt = document.createElement("div");
      receipt.innerHTML = `
        <h2>Order Receipt</h2>
        <p>Date of Generation: ${receiptDate}</p>
        <p>Tagline: ${tagline}</p>
        <p>Color: ${document.getElementById("color").value}</p>
        <p>Size: ${document.getElementById("size").value}</p>
        <p>Quantity: ${document.getElementById("quantity").value}</p>
        <p>Date of Delivery: ${document.getElementById("delivery_date").value}</p>
        <p>Delivery Address: ${document.getElementById("delivery_address").value}</p>
        <p>Contact Number: ${contactNumber}</p>
      `;
      document.body.appendChild(receipt);

      // Create a Person object and print details
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        displayDetails = () => {
          console.log(`Name: ${this.name}, Age: ${this.age}`);
        };
      }

      const person = new Person("John", 30);
      person.displayDetails();

      // Student class inheriting from Person
      class Student extends Person {
        constructor(name, age, rollNo) {
          super(name, age);
          this.rollNo = rollNo;
        }

        displayDetails = () => {
          console.log(`Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`);
        };
      }

      // Demonstrate super and overriding
      const student = new Student("Alice", 22, 101);
      student.displayDetails();

      // Generate an exception if rollNo is zero
      if (student.rollNo === 0) {
        throw new Error("Roll No cannot be zero.");
      }

      return false; // Prevent form submission
    }
  </script>
</body>
</html>
