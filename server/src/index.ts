import express, { Application, Request, Response } from 'express';
import v1Router from "./routes";
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', v1Router);

app.get('/health', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: "SERVER LIVE",
    });
});

const APP_PORT = 8080;

try {
    app.listen(APP_PORT, () => {
        console.log(`Server running on http://localhost:${APP_PORT}`);
    });
} catch (error) {
    console.log(`Error occurred: ${error.message}`);
}