import Express  from "express";
import { listRandom } from "../utils/random.js";

export const routerRandom = Express.Router();

routerRandom.use(Express.json());
routerRandom.use(Express.urlencoded({extended: true}))

routerRandom.get('/', async (req, res)=>{
    try{
        res.json(listRandom(req.query.cant))

    }
    catch(error){
        res.status(500).send('Error en el servidor')
    }
})

export default {routerRandom}
