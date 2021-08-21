//iMAC price
const bestPrice = document.getElementById('bestPrice').innerText;
//memory call
const freeMemory = document.getElementById('freeMemory');
const extraMemory = document.getElementById('extraMemory');

const memoryCost = document.getElementById('memoryCost');

//storage call
const normalSsd = document.getElementById('normalSsd');
const middleSsd = document.getElementById('middleSsd');
const highestSsd = document.getElementById('highestSsd');

const storageCost = document.getElementById('storageCost');

//deliveryCost
const free = document.getElementById('free');
const express = document.getElementById('express');

const deliveryCost = document.getElementById('deliveryCost');

//total price
const partCost = document.getElementById('totalPrice');


//update-total
const updateTotalCost = document.getElementById('update-total');


//memoey update
freeMemory.addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal();
});
extraMemory.addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotal();
});

//storage update
normalSsd.addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotal();
});
middleSsd.addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotal();
});
highestSsd.addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotal();
});

//Delivery update
free.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotal();
});
express.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotal();
});

// update Total
function updateTotal() {
    const mainPrice = Number('1299');
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const expressCost = Number(deliveryCost.innerText);
    const totalPriceUpdate = mainPrice + memoryPrice + storagePrice + expressCost;
    totalPrice.innerText = totalPriceUpdate;

    return totalPriceUpdate;
};

document.getElementById('pomoButton').addEventListener('click', function () {
    const pomoField = document.getElementById('pomocode');
    if (pomoField.value == 'stevenkaku') {
        document.getElementById('updateTotal').innerText = "totalPriceUpdate";
    }
    else {
        console.log('hkjlghioho');
    }
    pomoField.value = '';

})











// const pomoButton = document.getElementById('pomoButton');
// pomoButton.addEventListener('click', function () {
//     const pomoField = document.getElementById('pomocode');
//     discountPrice();
// })

// //promo code use 
// function discountPrice() {
//     if (pomoField.value == 'stevenkaku') {
//         const discount = totalPriceUpdate.innerText / 20;
//         const newTotal = totalPriceUpdate - discount;
//         console.log(newTotal);
//     }
// }

