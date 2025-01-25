const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Generate a secure random secret
const generateSecret = () => crypto.randomBytes(32).toString("hex");  // Use hex for easier viewing

// Paths to .env files
const userEnvPath = path.join(__dirname, "user-backend", ".env");
const adminEnvPath = path.join(__dirname, "admin-backend", ".env");

// Function to update or create .env files
const updateEnvFile = (envPath, secretKey) => {
  let envContent = "";

  // Read existing .env content if the file exists
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, "utf-8");
  }

  // Replace or add the JWT_SECRET
  const secretRegex = /^JWT_SECRET=.*$/m;
  if (secretRegex.test(envContent)) {
    envContent = envContent.replace(secretRegex, `JWT_SECRET=${secretKey}`);
  } else {
    envContent += `\nJWT_SECRET=${secretKey}`;
  }

  // Write the updated .env content back to the file
  fs.writeFileSync(envPath, envContent.trim() + "\n");
  console.log(`Updated: ${envPath}`);
};

// Generate a shared secret key
const sharedSecret = generateSecret();

// Update both .env files with the generated shared secret key
updateEnvFile(userEnvPath, sharedSecret);
updateEnvFile(adminEnvPath, sharedSecret);

console.log("JWT Secret generated and added to both .env files!");
