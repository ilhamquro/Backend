import express from "express";
import {
    getPackages,
    getPackageById,
    savePackage,
    updatePackage,
    deletePackage
} from "../controllers/PackageController.js"

const router = express.Router();

router.get('/packages',getPackages);
router.get('/packages/:id',getPackageById);
router.post('/packages',savePackage);
router.patch('/packages/:id',updatePackage);
router.delete('/packages/:id',deletePackage);

export default router;