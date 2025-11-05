import "dotenv/config";
import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import "./models/index.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import formacaoRoutes from "./routes/formacaoRoutes.js";
import habilidadeRoutes from "./routes/habilidadeRoutes.js";
import experienciaRoutes from "./routes/experienciaRoutes.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.set("trust proxy", true);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => res.send("API do Currículo pronta 🚀"));

app.use("/usuarios", usuarioRoutes);
app.use("/formacoes", formacaoRoutes);
app.use("/habilidades", habilidadeRoutes);
app.use("/experiencias", experienciaRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Conexão com o banco de dados realizada.");
    return sequelize.sync({ alter: true }); 
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`🟢 Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Falha ao conectar no banco:", error);
    process.exit(1);
  });

export default app;
