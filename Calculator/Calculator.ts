#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';

import { Sum, Multiply, Division, Subtract } from "./Operations.js";
import {isNumber,isOperator} from "./Validate.js";

const Sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,3000);
    })
}

async function WelcomeText(){
    let rainbowTitle = chalkAnimation.rainbow("Lets Start Claculation");
    await Sleep();
    rainbowTitle.stop();
    console.log(chalk.yellow(`     
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    console.log(chalk.blueBright(`    
     _  _    _     _   _    _ __            
    | \ |_\  /|_| / \|_) |_)\_/  (_ |_| /\ |\ | 
    |_/|_ \/ |_|_\_/|   |_) |  __)| |/--\| \|`))
}

const ReuseCalculator = async()=>{
    await inquirer.prompt([{
        name: "reuse",
        type: "list",
        choices:["yes","no"],
        message:"Would you like to use calculator again! ",
    }]).then((answer)=>{
        console.clear();
        if(answer.reuse == "yes"){
            Calculate();
        }
        else{
            console.log(chalk.bgYellow(chalk.white("Thanks for your time, Good Bye. Hope to see you again.")));
        }
    });
}
const Calculate = async() =>{
    const input = await inquirer.prompt([
        {
            type:"number",
            name:"numberOne",
            message:"Enter any Number: ",
        },
        {
            type:"number",
            name:"numberTwo",
            message:"Enter any Number: ",
        },
        {
            type:"list",
            name:"operator",
            choices:["+","-","*","/"],
            message:"Please Select any Operation: ",
        },
    ]);
    
    const operandOne:any = input.numberOne;
    const operandTwo:any = input.numberTwo;
    const _Operator:any = input.operator;
        
    const validateInput: boolean = isNumber(operandOne) && isNumber(operandTwo) && isOperator(_Operator);


    let result:number = 0;

    if(validateInput){
        switch(_Operator){
            case "+":
                result = Sum(operandOne,operandTwo);
                break;
            case "-":
                result = Subtract(operandOne,operandTwo);
                break;
            case "*":
                result = Multiply(operandOne,operandTwo);
                break;
            case "/":
                result = Division(operandOne,operandTwo);
                break;
        }
        console.log(chalk.bgGreen(chalk.bold(chalk.white("Your result is: " + result))));
    }
    else{
        console.log(chalk.bgRed(chalk.white("Invalid Input")));
    }
    await ReuseCalculator();
}
WelcomeText();
await Calculate();
