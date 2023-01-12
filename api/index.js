import  express from "express"
import authRoutes from "./routes/posts.js";
import userRoutes from "./routes/posts.js";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json())
app.use("/api/auth", postRoutes)
app.use("/api/users", postRoutes)
app.use("/api/posts", postRoutes)

app.listen(8800, () => {
    console.log("Listening to port 8800!")
})

