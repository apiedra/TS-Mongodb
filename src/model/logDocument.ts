import { cuentaModel } from "./cuentaModel"
import * as mongoose from "mongoose";

export interface logDocument extends mongoose.Document{
    id:string
    banco:string
    fecha:string
    cuentas_procesadas:cuentaModel
    cuentas_exitosas:cuentaModel
    cuentas_fallidas:cuentaModel
    cuentas_con_alerta:cuentaModel

}