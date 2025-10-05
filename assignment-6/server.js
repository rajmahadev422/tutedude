const http = require("http");

const app = http.createServer((req, res) => {
  res.write(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
</head>
<body style="margin:0; font-family:Poppins, sans-serif; background-color:#f5f7fa; color:#333;">`
  );
  res.write(`
    <header style="background-color:#1a73e8; color:white; padding:15px 40px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); flex-wrap:wrap;">
    <a href='/' style="display:flex; align-items:center; gap:10px;">
      <img src="https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-home-service-house-cleaning-and-laundry-wash-png-image_12190003.png" alt="Logo" style="width:40px; height:40px; border-radius:50%; object-fit:cover; background-color:white; padding:3px;">
      <h1 style="font-size:22px; letter-spacing:1px; margin:0;">My Dashboard</h1>
    </a>

    <nav>
      <ul style="list-style:none; display:flex; gap:25px; margin:0; padding:0; flex-wrap:wrap;">
        <li><a href="/home" style="color:white; text-decoration:none; font-weight:500;">Home</a></li>
        <li><a href="/services" style="color:white; text-decoration:none; font-weight:500;">Services</a></li>
        <li><a href="/about-us" style="color:white; text-decoration:none; font-weight:500;">About Us</a></li>
        <li><a href="/contact-us" style="color:white; text-decoration:none; font-weight:500;">Contact Us</a></li>
      </ul>
    </nav>
  </header>
    `);
  if (req.url === "/") {
    res.write(
      ` <main style="flex:1; height: 70vh; display:flex; justify-content:center; align-items:center; text-align:center; padding:50px 20px;">
    <div style="background:white; padding:40px 60px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); max-width:600px;">
      <h2 style="color:#1a73e8; margin-bottom:15px; font-size:28px;">Welcome to Your Dashboard</h2>
    </div>
  </main>`
    );
  } else if (req.url == "/home") {
    res.write(`
      <section id="home" 
  style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:40px; padding:60px 20px; background-color:#f9fafc;">
  
  <div style="flex:1 1 400px; max-width:600px;">
    <h1 style="font-size:36px; color:#222; line-height:1.3; margin-bottom:20px;">
      Revitalize Your Clothes with Expert <br>
      <span style="color:#1a73e8;">Laundry Services!</span>
    </h1>
    <p style="font-size:17px; color:#555; margin-bottom:25px; line-height:1.6;">
      From premium dry cleaning to soft wash and fold, we deliver care and convenience. 
      Schedule a pickup and rediscover the freshness of your clothes today!
    </p>
    <a href="#contact-us" 
       style="display:inline-block; padding:12px 28px; background-color:#1a73e8; color:white; text-decoration:none; 
              font-weight:500; border-radius:8px; transition:0.3s; font-size:16px;">
       Book a service today?
    </a>
  </div>
</section>

<section style="padding:60px 20px; text-align:center; background-color:white;">
  <div style="max-width:800px; margin:auto;">
    <h2 style="font-size:28px; color:#1a73e8; margin-bottom:30px;">Our Achievements</h2>
    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:30px;">
      
      <div style="background-color:#f5f7fa; padding:25px 40px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1); min-width:150px;">
        <h3 style="font-size:30px; color:#1a73e8; margin:0;">15+</h3>
        <p style="font-size:15px; color:#555; margin:8px 0 0;">Laundry Services</p>
      </div>

      <div style="background-color:#f5f7fa; padding:25px 40px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1); min-width:150px;">
        <h3 style="font-size:30px; color:#1a73e8; margin:0;">240+</h3>
        <p style="font-size:15px; color:#555; margin:8px 0 0;">Happy Customers</p>
      </div>

      <div style="background-color:#f5f7fa; padding:25px 40px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1); min-width:150px;">
        <h3 style="font-size:30px; color:#1a73e8; margin:0;">2+</h3>
        <p style="font-size:15px; color:#555; margin:8px 0 0;">Years Experience</p>
      </div>

    </div>
  </div>
</section>`);
  } else if (req.url == "/services") {
    res.write(`
      <div style="height: 80vh">
      <div style="max-width: 800px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #f9f9f9; font-family: Arial, sans-serif;">
  <h2 style="text-align: center; color: #333; margin-bottom: 30px;">Our Services</h2>

  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; border-bottom: 1px solid #ddd;">
    <p style="margin: 0; font-size: 18px;"><span>Dry Cleaning</span></p>
    <p style="margin: 0; font-weight: bold;">₹ 200</p>
    <button style="background-color: #007bff; color: white; border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer;">Add</button>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; border-bottom: 1px solid #ddd;">
    <p style="margin: 0; font-size: 18px;"><span>Wash & Fold</span></p>
    <p style="margin: 0; font-weight: bold;">₹ 100</p>
    <button style="background-color: #007bff; color: white; border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer;">Add</button>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; border-bottom: 1px solid #ddd;">
    <p style="margin: 0; font-size: 18px;"><span>Ironing</span></p>
    <p style="margin: 0; font-weight: bold;">₹ 30</p>
    <button style="background-color: #007bff; color: white; border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer;">Add</button>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; border-bottom: 1px solid #ddd;">
    <p style="margin: 0; font-size: 18px;"><span>Stain Removal</span></p>
    <p style="margin: 0; font-weight: bold;">₹ 500</p>
    <button style="background-color: #007bff; color: white; border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer;">Add</button>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; border-bottom: 1px solid #ddd;">
    <p style="margin: 0; font-size: 18px;"><span>Leather & Suede Cleaning</span></p>
    <p style="margin: 0; font-weight: bold;">₹ 500</p>
    <button style="background-color: #007bff; color: white; border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer;">Add</button>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px;">
    <p style="margin: 0; font-size: 18px;"><span>Wedding Dress Cleaning</span></p>
    <p style="margin: 0; font-weight: bold;">₹ 1000</p>
    <button style="background-color: #007bff; color: white; border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer;">Add</button>
  </div>
</div>
</div>
      `);
  } else if (req.url == "/about-us") {
    res.write(`
      <div style="min-height: 80vh;">
      <div id="about-us" 
     style="display:flex; flex-wrap:wrap; justify-content:center; align-items:stretch; gap:20px; padding:50px 20px; background-color:#f9fafc;">

  <div style="background:white; flex:1 1 250px; max-width:250px; padding:25px; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1); text-align:center; transition:transform 0.3s; cursor:pointer;">
    <ion-icon name="save-outline" style="font-size:40px; color:#1a73e8; margin-bottom:10px;"></ion-icon>
    <h4 style="margin:10px 0; font-size:18px; color:#333;">Premium Services</h4>
    <p style="font-size:15px; color:#555; line-height:1.5;">
      Elevate your wardrobe with our meticulous dry cleaning, ensuring garments look and feel as good as new.
    </p>
  </div>

  <div style="background:white; flex:1 1 250px; max-width:250px; padding:25px; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1); text-align:center; transition:transform 0.3s; cursor:pointer;">
    <ion-icon name="mic-outline" style="font-size:40px; color:#1a73e8; margin-bottom:10px;"></ion-icon>
    <h4 style="margin:10px 0; font-size:18px; color:#333;">Quick Support</h4>
    <p style="font-size:15px; color:#555; line-height:1.5;">
      We're committed to providing prompt solutions to ensure your experience is smooth and worry-free.
    </p>
  </div>

  <div style="background:white; flex:1 1 250px; max-width:250px; padding:25px; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1); text-align:center; transition:transform 0.3s; cursor:pointer;">
    <ion-icon name="car-sport-outline" style="font-size:40px; color:#1a73e8; margin-bottom:10px;"></ion-icon>
    <h4 style="margin:10px 0; font-size:18px; color:#333;">Hassle Free Delivery</h4>
    <p style="font-size:15px; color:#555; line-height:1.5;">
      Enjoy seamless service with our convenient pickup and delivery options, tailored to your schedule.
    </p>
  </div>

  <div style="background:white; flex:1 1 250px; max-width:250px; padding:25px; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1); text-align:center; transition:transform 0.3s; cursor:pointer;">
    <ion-icon name="card-outline" style="font-size:40px; color:#1a73e8; margin-bottom:10px;"></ion-icon>
    <h4 style="margin:10px 0; font-size:18px; color:#333;">Affordable Prices</h4>
    <p style="font-size:15px; color:#555; line-height:1.5;">
      Experience exceptional care without breaking the bank — our affordable prices make laundry day stress-free.
    </p>
  </div>
</div>
</div>`);
  } else if (req.url == "/contact-us") {
    res.write(`
      <div style="min-height: 75vh;">
      <div id="contact-us" style="max-width: 600px; margin: 60px auto; padding: 30px; border-radius: 10px; background-color: #f9f9f9; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; font-family: Arial, sans-serif;">
  <h2 style="color: #333; margin-bottom: 20px;">Subscribe to our Newsletter</h2>
  <form id="newsletter" style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
    <input type="text" name="name" placeholder="Full name" required 
      style="width: 100%; max-width: 400px; padding: 10px 15px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" />
    <input type="email" name="email" placeholder="Email" required 
      style="width: 100%; max-width: 400px; padding: 10px 15px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" />
    <button type="submit" 
      style="background-color: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; font-size: 16px; cursor: pointer; transition: background 0.3s;">
      Subscribe
    </button>
  </form>
</div>
</div>
      `);
  } else {
    res.write(`
      <div id="not-found" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; background-color: #f5f6fa; color: #2f3640; font-family: Arial, sans-serif; text-align: center;">
  <h1 style="font-size: 100px; margin: 0;">404</h1>
  <h2 style="font-size: 28px; margin: 10px 0;">Page Not Found</h2>
  <p style="font-size: 18px; color: #718093; max-width: 500px; margin-bottom: 30px;">
    Sorry, the page you are looking for doesn’t exist or has been moved.
  </p>
  <a href="/" style="background-color: #007bff; color: white; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-size: 16px; transition: background 0.3s;">
    Go Back Home
  </a>
</div>

      `);
  }
  res.write(`
    <footer style="background-color: #1a73e8; position: sticky; top: 100vh; color: white; text-align: center; padding: 15px; font-size: 14px; letter-spacing: 0.5px;">
    © 2025 My Dashboard | Designed by Mahadev
    </footer>
  `);
  res.write(`<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>`)
  res.write("</body></html>");
  res.end();
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
