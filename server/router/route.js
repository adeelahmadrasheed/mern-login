import { Router } from "express";
const router = Router();

/* Method: POST */
router.route("/register").post((req, res) => {
  res.json({ data: "Register Route" });
});
router.route("/registerMail").post((req, res) => {
  res.json({ data: "RegisterMail Route" });
});
router.route("/authenticate").post((req, res) => {
  res.json({ data: "Authenticate Route" });
});
router.route("/login").post((req, res) => {
  res.json({ data: "Login Route" });
});

/* Method: GET */
router.route('/user/:username').get()
router.route("/generateOTP").get();
router.route("/verifyOTP").get();
router.route("/createResetSession").get();
/* Method: PUT/PATCH */
router.route('/updateuser').put()
router.route("/resetPassword").put();
/* Method: DELETE */

export default router;
