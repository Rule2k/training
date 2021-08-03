import express from "express";
import components from "../controllers/components";
import users from "../controllers/users";
const router = express.Router();

router.get("/components", components.getComponents);
router.get("/users", users.getUsers);

export default router;
