import { yellow, green, red, bgWhite } from "https://deno.land/std@0.177.0/fmt/colors.ts"

//* arg
const nums: number[]= Deno.args.map(n => Number(n));
nums.sort((a, b) =>  a - b)
const min = nums[0];
const max = nums[nums.length-1];

const promedio = nums.reduce((pv, cv) => pv + cv, 0)/nums.length;

console.log(`números: ${nums.join(" ")}`)
console.log(bgWhite(yellow(`minimo: ${min}`)));
console.log(bgWhite(red(`máximo: ${max}`)));
console.log(bgWhite(green(`promedio: ${promedio}`)));

await Deno.writeTextFile("resultados.dat", `números: ${nums.join(" ")}, minimo: ${min}, máximo: ${max}, promedio: ${promedio}` )

//* 1, 3, 200, 1250, 10010