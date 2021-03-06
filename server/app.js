import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from "cors";
import path from "path";
import "@babel/polyfill"

//Routes
import postRoutes from './routes/api/post';
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";
import searchRoutes from "./routes/api/search";


import morgan from 'morgan';

const app = express();
const { MONGO_URI } = config;

const prod = process.env.NODE_ENV === "production";

app.use(hpp());
app.use(helmet({
  contentSecurityPolicy: false
}
));

app.use(cors({origin: true, credentials: true}));
app.use(morgan("dev")); //개발 log을 보여줌

app.use(express.json());

mongoose.connect(MONGO_URI, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    
})
.then(() => console.log("MongoDB connection Success"))
.catch((e) => console.log(e));


// Use routes

app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/search", searchRoutes);


// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {

//   // Set static folder
//   app.use(express.static("client/build"));

//   // index.html for all page routes
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
//   });
// }


if (prod) {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
  }
  

export default app;