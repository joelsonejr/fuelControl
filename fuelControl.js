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

const calcFuelUse = function (lastMil, recentMil, fuelLiters) {
  const distance = recentMil - lastMil;
  const usage = distance / fuelLiters;

  return usage;
};

const btnCalc = document.getElementById('calculateUsage');
const fuel = document.getElementById('fuel');
const lastMil = document.querySelector('#lastMileage');
const recMil = document.querySelector('#actualMileage');

btnCalc.addEventListener('click', function () {
  const usage = calcFuelUse(fuel, lastMil, recMil);

  console.log(usage);
  console.log(fuel);
  console.log(lastMil);
  console.log(recMil);
});
