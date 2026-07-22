import express from "express";

import {
  addPackage,
  editPackage,
  fetchPackageById,
  listPackages,
  removePackage,
} from "../controllers/packageController.js";


const router = express.Router();


router.get("/packages", listPackages);
router.get("/packages/:id", fetchPackageById);
router.post("/packages", addPackage);
router.put("/packages/:id", editPackage);
router.delete("/packages/:id", removePackage);


export default router;