import * as mongoose from "mongoose";
import {cuentaModel}from "./cuentaModel";
export const logSchema = new mongoose.Schema({
    id: { type: String, required: true },
    banco: { type: String, required: true },
    fecha: { type: String, required: true },
    cuentas_procesadas: { type: Number, required: true },
    cuentas_exitosas: { type: Number, required: true },
    cuentas_fallidas: { type: Number, required: true },
    cuentas_con_alerta: { type: Number, required: true },
    cuentas: [{
        numero_cuenta: {type: String, required: true}, // to do: change to a list
    }]
  });