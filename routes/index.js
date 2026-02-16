const express = require("express");
const router = express.Router();

// Messages Array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// INDEX ROUTE
router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages
  });
});

// NEW MESSAGE FORM
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// HANDLE FORM SUBMISSION
router.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect("/");
});

// VIEW SINGLE MESSAGE
router.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  res.render("message", { message: message });
});

module.exports = router;