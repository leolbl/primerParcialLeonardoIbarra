require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const usuariosRoutes = require("./routes/usuarios");
const productosRoutes = require("./routes/productos");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Conectar a MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log("🔥 Conectado a MongoDB"))
    .catch(err => console.error("❌ Error al conectar MongoDB:", err));

    let totalOperaciones = 0;

    // Middleware para contar cada operación
app.use((req, res, next) => {
        totalOperaciones++;
        console.log(`📊 Total de operaciones realizadas: ${totalOperaciones}`);
        next();
    });
    
    // Endpoint para obtener el total de operaciones
app.get("/operaciones", (req, res) => {
        res.json({ operaciones_realizadas: totalOperaciones });
    });
    
// Rutas
app.use("/usuarios", usuariosRoutes);
app.use("/productos", productosRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("¡El servidor está funcionando y conectado a MongoDB!");
});
app.get("/contadores", async (req, res) => {
    try {
        const totalUsuarios = await mongoose.model("Usuario").countDocuments();
        const totalProductos = await mongoose.model("Producto").countDocuments();

        res.json({
            usuarios: totalUsuarios,
            productos: totalProductos
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
