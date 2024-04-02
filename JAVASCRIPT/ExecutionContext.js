//todo Everything in javascript happen inside Execution Context

//todo callbacks

// const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(cartId, function () {
//     api.ShowOrderSummery();
//   });
// });

//using callback we have two problem
//1. callback Hell or pyrimid of doom
//2. Inversion of control

//todo Promise

// const cart = ["shoes", "pants", "kurta"];

// const promise = createOreder(cart);
//{data:undefined}
//after some time later
//{data:orderDetails}
// promise.then(function (orderDetails) {
//   return proceedToPayment(orderDetails);
// });

//or
// createOreder(cart)
//   .then(function (orderDetails) {
//     return proceedToPayment(orderDetails);
//   })
//   .then(function (details) {
//     return SummryOfDetals(details);
//   });

//todo create a promise

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
// console.log(promise);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId
  })
  .then(function(orderId){
   return proceedToPayment(orderId)
   
  }).then(function(PaymentInfo){
    console.log(PaymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

//Produer part
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12354687";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resole, reject) {
    resole("Payment successful!");
  });
}

function validateCart(cart) {
  return true;
}
