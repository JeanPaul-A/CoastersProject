import express, { Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import cors from "cors";

//Model
import { CoasterInterface, CoasterModel } from "./models/Coaster.model";
import { getCipherInfo } from "crypto";

//App
const app = express();
app.use(cors());
app.use(express.json());

//DB Connection
mongoose
    .connect("mongodb://localhost/coasters-mern-stack")
    .then(() => console.log("BD Conectada"))
    .catch((error) => console.log("Error conectando a servidor: ", error));

////Routing
//Get all coasters
app.get("/api/coasters", (req: Request, res: Response) => {
    CoasterModel.find()
        .then((allCoasters: CoasterInterface[]) => res.json(allCoasters))
});

//Get coaster by id
app.get("/api/coaster/:coaster_id", async (req: Request, res: Response) => {
    try {
        const { coaster_id } = req.params;
        const coaster = await CoasterModel.findById(coaster_id).then(coaster => coaster);
        res.json(coaster);
    } catch (error: any) {
        switch (true) {
            case error.message.includes("Cast to ObjectId failed"):
                res.status(404).json({ message: "Coaster does not exists" });
                break;
            default:
                res.status(400).json({ message: error.message })
                break;
        }
    }
});

//Post coaster
app.post("/api/coaster", async (req: Request, res: Response) => {
    try {
        const newCoaster = new CoasterModel(req.body);
        await newCoaster.save();
        res.status(201).json(newCoaster);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

app.put("/api/coaster/:coaster_id", async (req: Request, res: Response) => {
    try {
        const { coaster_id } = req.params;
        const updatedCoaster = await CoasterModel.findByIdAndUpdate(coaster_id, req.body, { new: true });
        res.json(updatedCoaster);
    } catch (error: any) {
        switch (true) {
            case error.message.includes("Cast to ObjectId failed"):
                res.status(404).json({ message: "Coaster does not exists" });
                break;
            default:
                res.status(400).json({ message: error.message })
                break;
        }
    }
});

app.delete("/api/coaster/:coaster_id", async (req: Request, res: Response) => {
    try {
        const { coaster_id } = req.params;
        const deletedCoaster = await CoasterModel.findByIdAndDelete(coaster_id);
        if (deletedCoaster === null) {
            throw new Error("null");
        }
        res.json(deletedCoaster);
    } catch (error: any) {
        switch (true) {
            case error.message.includes("Cast to ObjectId failed") || error.message === "null":
                res.status(404).json({ message: "Coaster does not exists" });
                break;
            default:
                res.status(400).json({ message: error.message })
                break;
        }
    }
});

//Start Server
app.listen(5000, () => console.log("Servidor Levantado"));