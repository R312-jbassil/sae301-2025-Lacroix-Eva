import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";
var path='';
if(import.meta.env.MODE === 'development')
    path = 'http://localhost:8090'    //localhost = machine de dev
else path = 'https://sae301.eva-lacroix.fr/_/:443'   //localhost = machine de déploiement
const pb = new PocketBase(path) as TypedPocketBase;
export default pb;
