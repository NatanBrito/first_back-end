import express, { response } from "express";
import cors from "cors";// lembrar como coloca
import { Console } from "console";
//link inicial do get (localhost:5000/holidays)
const app=express();
console.log("tamo no ar")
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];
app.get("/holidays",(request,response)=>{
    response.send(holidays)
})

app.get("/is-today-holiday",(request,response)=>{
const date= new Date();
const today= date.toLocaleDateString("en");
const xx=holidays.filter(day=>{
    if(day.date === today){
        return day
    }
})
if(xx.length === 0){
response.send("Não, hoje não é feriado")
} else{
    response.send(`Sim, hoje é ${xx[0].name}`)
}
})
app.get("/holidays/:months",(req,res)=>{
const month=parseInt(req.params.months)
switch(month){
    case 1:
        res.send(holidays[0].name+" e "+holidays[1].name)
        break;
    case 4:
        res.send(holidays[2].name+" e "+holidays[3].name)
        break;
    case 5:
        res.send(holidays[4].name)
        break;
    case 6:
        res.send(holidays[5].name)
        break;
    case 9:
        res.send(holidays[6].name)
        break;
    case 10:
        res.send(holidays[7].name)
        break;
    case 11:
        res.send(holidays[8].name+" e "+holidays[9].name)
        break;
    case 10:
        res.send(holidays[10].name)
        break;
    case 2:
    case 3:
    case 7:
    case 8:
        res.send(" não tem feriado esse mes mi amigo :(")
        break;
    default:
        res.send("digite um mês válido");
}
})
app.listen(5000)