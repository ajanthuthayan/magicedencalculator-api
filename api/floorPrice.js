import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/", (req, res) => {
  const collectionName = req.body.collectionName;
  try {
    const fetchFloorPrice = async () => {
      const response = await fetch(
        `https://api-mainnet.magiceden.dev/v2/collections/${collectionName}/stats`
      );
      const data = await response.json();

      if (data) {
        const floorPrice = {
          floorPrice: data.floorPrice,
        };
        res.send(floorPrice);
      }
    };

    fetchFloorPrice();
  } catch (error) {
    res.status(400).send("Something went wrong!");
  }
});

export default router;
