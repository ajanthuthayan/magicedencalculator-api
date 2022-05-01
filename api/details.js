import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/", (req, res) => {
  const link = req.body.magicEdenLink;
  const splitLink = link.split("/");
  const mintAddress = splitLink[splitLink.length - 1];
  try {
    const fetchNftDetails = async () => {
      const response = await fetch(
        `https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}`
      );
      const data = await response.json();

      if (data) {
        const details = {
          name: data.name,
          royaltyFee: data.sellerFeeBasisPoints / 100,
          imageLink: data.image,
        };
        res.send(details);
      }
    };

    fetchNftDetails();
  } catch (error) {
    res.status(400).send("Something went wrong!");
  }
});

export default router;
