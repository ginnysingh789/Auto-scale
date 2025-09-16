import cluster from "cluster";
import os from "os";
import { app } from "./index.js";
const total_core=os.cpus().length;

if(cluster.isPrimary)
{
    //Create the fork processes
    for(let i=0;i<total_core;i++){
        cluster.fork();

    }
}
else
{
    app.listen(3000,()=>{
        console.log("Running");
    })
}