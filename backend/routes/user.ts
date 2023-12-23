import express, { Request, Response } from "express";
import FoodPostModel from "./../models/foodPost";
const router = express.Router();

router.post("/addFoodPost", async (req: Request, res: Response) => {
  try {
    const { img, date, name, cooked, location, expiredIn, user } = req.body;

    const newFoodPost = new FoodPostModel({
      img,
      date,
      name,
      cooked,
      location,
      expiredIn,
      user,
    });

    await newFoodPost.save();

    res
      .status(201)
      .json({ message: "Food post added successfully", newFoodPost });
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Failed to add food post", error: err.message });
  }
});

export default router;
