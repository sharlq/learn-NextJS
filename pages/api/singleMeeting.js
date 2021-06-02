import connectDB from "../../middlewares/DBcongiguration";
import meeting from "../../models/meeting";
const handler = async (req, res) => {
   if (req.method === "GET") {
       let id =req.query.id
    meeting.find({_id:id},(err, data) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).send(data);
    });
  }

};

export default connectDB(handler);