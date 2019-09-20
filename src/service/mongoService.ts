import * as mongoose from "mongoose";
import { logDocument } from "../model/logDocument";
import { logSchema } from "../model/logSchema";
import { connect, Schema } from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/log";

connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
      console.log("error"+err.message);
    } else {
      console.log("Successfully Connected!");
    }
  });

var schema = new mongoose.Schema({ any: Schema.Types.Mixed }, { strict: false });
const logModel = mongoose.model("LogEstadoCuenta", schema);
export {logModel};