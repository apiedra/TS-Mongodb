import { Request, Response } from "express";
import {logModel} from '../service/mongoService'

export let addLog = (req: Request, res: Response) => {
    var log = new logModel(req.body);
    log.save((err: any) => {
        if (err) {
            console.log(err)
        } else {
            console.log(log);
        }
    });
    res.send("Cuenta procesada");
};