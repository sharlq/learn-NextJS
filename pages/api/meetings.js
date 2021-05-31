import connectDB from "../../middlewares/DBcongiguration";
import meeting from "../../models/meeting";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    meeting.create(data, (err, data) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(201).send(data);
    });
  } else if (req.method === "GET") {
    meeting.find((err, data) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).send(data);
    });
  }

};

export default connectDB(handler);
