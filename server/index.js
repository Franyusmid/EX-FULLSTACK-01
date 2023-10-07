
//1. IMPORTACIONES 
// ESModules 
import express from "express"
// commojs 
// const express=require("express")
// console.log("inpportación de express exitosa")
// 2.INICIALIZADORES
const app =express()/*se descargan todos los metodos de express a una varible */
/* en esta parte se configural la base de datos que vayamos a utilizar */
const data=[{
    id:0,
    title:"reservación 1",
    descripcion:"quiero una reservacion a colombia"
},   {
      id:0,
     title:"reservación 1",
      descripcion:"quiero una reservacion a colombia"
 }  ]

//3.RUTAS
//localhost:3005/

app.get("/",(req,res)=>{

    res.json({
        msg:"Este es un menssaje",
        data:data
    })
})

//4.LISTENERS

app.listen(3005,() => console.log("servidor encendido"))