//memory all
function memory(num) {
    memoryCost.innerText = num;
}
//storage all
function storage(num) {
    storageCost.innerText = num;
}
// delivery charge
function delivery(num) {
    deliveryCost.innerText = num;
}

//total price
const partsCost = document.getElementById('totalPrice');

//memory update
document.getElementById('freeMemory').addEventListener('click', function () {
    memory('0');
    updateTotal();
});
document.getElementById('extraMemory').addEventListener('click', function () {
    memory('180');
    updateTotal();
});

//storage update
document.getElementById('normalSsd').addEventListener('click', function () {
    storage('0');
    updateTotal();
});
document.getElementById('middleSsd').addEventListener('click', function () {
    storage('100');
    updateTotal();
});
document.getElementById('highestSsd').addEventListener('click', function () {
    storage('180');
    updateTotal();
});

//Delivery update
document.getElementById('free').addEventListener('click', function () {
    delivery('0');
    updateTotal();
});
document.getElementById('express').addEventListener('click', function () {
    delivery('20');
    updateTotal();
});

// update Total
function updateTotal() {
    const iMacPrice = Number('1299');
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const expressCost = Number(deliveryCost.innerText);
    const totalPriceUpdate = iMacPrice + memoryPrice + storagePrice + expressCost;
    totalPrice.innerText = totalPriceUpdate;
    document.getElementById('updateTotal').innerText = totalPriceUpdate;

    //discount added
    document.getElementById('pomoButton').addEventListener('click', function () {
        const pomoField = document.getElementById('pomocode');
        if (pomoField.value == 'stevenkaku') {
            const discount = ((20 / 100) * totalPriceUpdate);
            const newDiscountBalance = partsCost.innerText - discount;

            document.getElementById('updateTotal').innerText = newDiscountBalance;
        }

        pomoField.value = '';

    });
};








// function memory(num) {
//     memoryCost.innerText = num;
// }

// //storage call
// const normalSsd = document.getElementById('normalSsd');
// const middleSsd = document.getElementById('middleSsd');
// const highestSsd = document.getElementById('highestSsd');

// const storageCost = document.getElementById('storageCost');

// //deliveryCost
// const free = document.getElementById('free');
// const express = document.getElementById('express');

// const deliveryCost = document.getElementById('deliveryCost');

// //total price
// const partsCost = document.getElementById('totalPrice');



// //memoey update
// document.getElementById('freeMemory').addEventListener('click', function () {
//     memory('0');
//     updateTotal();
// });
// document.getElementById('extraMemory').addEventListener('click', function () {
//     memory('180');
//     updateTotal();
// });

// //storage update
// normalSsd.addEventListener('click', function () {
//     storageCost.innerText = '0';
//     updateTotal();
// });
// middleSsd.addEventListener('click', function () {
//     storageCost.innerText = '100';
//     updateTotal();
// });
// highestSsd.addEventListener('click', function () {
//     storageCost.innerText = '180';
//     updateTotal();
// });

// //Delivery update
// free.addEventListener('click', function () {
//     deliveryCost.innerText = '0';
//     updateTotal();
// });
// express.addEventListener('click', function () {
//     deliveryCost.innerText = '20';
//     updateTotal();
// });

// // update Total
// function updateTotal() {
//     const mainPrice = Number('1299');
//     const memoryPrice = Number(memoryCost.innerText);
//     const storagePrice = Number(storageCost.innerText);
//     const expressCost = Number(deliveryCost.innerText);
//     const totalPriceUpdate = mainPrice + memoryPrice + storagePrice + expressCost;
//     totalPrice.innerText = totalPriceUpdate;
//     document.getElementById('updateTotal').innerText = totalPriceUpdate;

//     //discount added
//     document.getElementById('pomoButton').addEventListener('click', function () {
//         const pomoField = document.getElementById('pomocode');
//         if (pomoField.value == 'stevenkaku') {
//             const discount = parseFloat((20 / 100) * totalPriceUpdate);
//             const newDiscountBalance = partsCost.innerText - discount;

//             document.getElementById('updateTotal').innerText = newDiscountBalance;
//         }

//         pomoField.value = '';

//     });
// };