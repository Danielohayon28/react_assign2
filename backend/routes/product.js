
import express from "express";
import {
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts,
} from "../controllers/product.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateProduct);

//DELETE
router.delete("/:id", deleteProduct);

//GET
router.get("/:id", getProduct);

//GET ALL
router.get("/", getProducts);

export default router;
