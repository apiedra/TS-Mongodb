import * as mongoose from "mongoose";
import { logDocument } from "../model/logDocument";
import { logSchema } from "../model/logSchema";
import { connect } from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/log";

connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
      console.log("error"+err.message);
    } else {
      console.log("Successfully Connected!");
    }
  });

const logModel = mongoose.model<logDocument>("Log", logSchema);
export {logModel};