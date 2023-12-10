/*
I as an user of the app
WANT to input my car model/ maker, millage, litters of fuel filled
TO receive a report containing how much fuel I spent (comparisson between present x last month), 
how many KM I can drive before a refuel is needed and how is my car KM/fuel ratio.

DEVELOPING STEPS
0. Create an object to store all data
1. Retrive information from user
2. Store retrieved information
3. Do the math
4 Return info

*/

'use strict';

let fuel;
let lastMil;
let recMil;

const calcFuelUse = function (fuelLiters, recentMil, lastMil) {
  const distance = recentMil - lastMil;
  const usage = distance / fuelLiters;

  return usage;
};

const btnCalc = document.getElementById('calculateUsage');
const inFuel = document.getElementById('fuel');
const inLastMil = document.querySelector('#lastMileage');
const inRecMil = document.querySelector('#actualMileage');
const avgUse = document.getElementById('averageUse');

inFuel.addEventListener('input', function (e) {
  fuel = e.target.value;
});

inLastMil.addEventListener('input', function (e) {
  lastMil = e.target.value;
});

inRecMil.addEventListener('input', function (e) {
  recMil = e.target.value;
});

btnCalc.addEventListener('click', function () {
  const usage = calcFuelUse(fuel, recMil, lastMil);

  avgUse.value = Math.floor(usage);
});
