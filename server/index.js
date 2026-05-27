import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// ES module dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const viewsPath = path.join(__dirname, "../views");
const publicPath = path.join(__dirname, "../public");

// View engine
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files middleware
app.use(express.static(publicPath));

// Routes
app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/forgot-password", (req, res) => {
    res.render("forgotPassword");
});

app.post("/forgot-password", (req, res) => {
    // TODO: add real email logic here
    res.redirect("/email-sent");
});

app.get("/email-sent", (req, res) => {
    res.render("emailSent");
});

app.get("/reset-password", (req, res) => {
    res.render("newPassword");
});

app.get("/success", (req, res) => {
    res.render("success");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});