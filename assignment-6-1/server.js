const http = require("http");

//creating server with http server
const app = http.createServer((req, res) => {

  // Writing code for heading and title section
  res.write(
    `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard</title>
      </head>
      <body style="margin:0; font-family:Poppins, sans-serif;">`
  );

  // Writing code for header section above the all url so that it show on all urls
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

  // For url = '/' , I make a dashboard page
  if (req.url === "/") {
    res.write(
      ` <main style="flex:1; display:flex; justify-content:center; align-items:center; text-align:center; padding:50px 20px;">
          <div style="background:white; padding:40px 60px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); max-width:600px;">
            <h2 style="color:black; margin-bottom:15px; font-size:28px;">Welcome to Your Dashboard</h2>
          </div>
        </main>`
    );
  }

  // for url = '/home' , I make a home page
  else if (req.url == "/home") {
    res.write(`
      <main style="flex:1; display:flex; justify-content:center; align-items:center; text-align:center; padding:50px 20px;">
          <div style="background:white; padding:40px 60px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); max-width:600px;">
            <h2 style="color:black; margin-bottom:15px; font-size:28px;">Home Page</h2>
          </div>
        </main>`);
  }
  
  // for url = '/services' , I make services page
  else if (req.url == "/services") {
    res.write(`
      <main style="flex:1; display:flex; justify-content:center; align-items:center; text-align:center; padding:50px 20px;">
          <div style="background:white; padding:40px 60px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); max-width:600px;">
            <h2 style="color:black; margin-bottom:15px; font-size:28px;">Service page</h2>
          </div>
        </main>`);
  }
  //for url = '/about-us' , I make about us page
  else if (req.url == "/about-us") {
    res.write(`
      <main style="flex:1; display:flex; justify-content:center; align-items:center; text-align:center; padding:50px 20px;">
          <div style="background:white; padding:40px 60px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); max-width:600px;">
            <h2 style="color:black; margin-bottom:15px; font-size:28px;">About Us Page</h2>
          </div>
        </main>`);
  }

  //for url = '/contact-us' , I make contact us page
  else if (req.url == "/contact-us") {
    res.write(`
      <main style="flex:1; display:flex; justify-content:center; align-items:center; text-align:center; padding:50px 20px;">
          <div style="background:white; padding:40px 60px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); max-width:600px;">
            <h2 style="color:black; margin-bottom:15px; font-size:28px;">Contact Us Page</h2>
          </div>
        </main>`);
  }
  
  // for other url , I make 404 page
  else {
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
  // here I end all header 
  res.write("</body></html>");
  res.end();
});

// setting port = 3000
const PORT = 3000;
// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
