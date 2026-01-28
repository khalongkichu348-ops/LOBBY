const API_BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:5000/api"  // On your laptop
  : "https://lobby-backend.onrender.com/api"; // On the internet (We will create this URL next)

export default API_BASE_URL;