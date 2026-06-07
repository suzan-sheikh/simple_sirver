import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();
const port = 5000;

app.use(express.json());

app.get("/user", (req: Request, res: Response) => {
  res.status(200).json({
    id: "1223",
    name: "suzan",
    email: "email@gmail.com",
  });
});

app.post("/", async (req: Request, res: Response) => {
  const body = req.body;
  res.status(201).json({
    message: "Created",
    data: body,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
