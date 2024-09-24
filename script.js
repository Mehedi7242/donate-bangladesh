
let currentAmount = 10000 ;
let donate = 0 ;
let noakhaliTotalDonation =7777;
let aidTotalDonation = 990;
let feniTotalDonation = 88990;

document.getElementById('current-amount').innerText = currentAmount;
console.log(currentAmount)

document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;
console.log(noakhaliTotalDonation)

document.getElementById('aid').innerText = aidTotalDonation;
console.log(aidTotalDonation)

document.getElementById('feni').innerText = feniTotalDonation;
console.log(feniTotalDonation)


const add = function (a,b){
    return a+b;
};

const sub = function (a,b){
    return a-b;
};


// noakhali 
document.getElementById('donate-noakhali-btn').addEventListener('click',function(event){
    const x = parseFloat(document.getElementById('noakhali-input-field').value)
    console.log(x)
    noakhaliTotalDonation = add(noakhaliTotalDonation, x);
    document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;
    currentAmount = sub(currentAmount,x)
    document.getElementById('current-amount').innerText = currentAmount;
    console.log(add(noakhaliTotalDonation , x))

    
})
// Feni
document.getElementById('feni-input-btn').addEventListener('click',function(event){
    const x = parseFloat(document.getElementById('feni-input-field').value)
    console.log(x)
    feniTotalDonation = add(feniTotalDonation, x); 
    document.getElementById('feni').innerText = feniTotalDonation;

    currentAmount = sub(currentAmount,x)
    document.getElementById('current-amount').innerText = currentAmount
    console.log(add(feniTotalDonation , x))
    
})
//Aid
document.getElementById('aid-input-btn').addEventListener('click',function(event){
    const x = parseFloat(document.getElementById('aid-input-field').value)
    console.log(x)
    aidTotalDonation = add(aidTotalDonation, x);
    document.getElementById('aid').innerText = aidTotalDonation;
    currentAmount = sub(currentAmount,x)
    document.getElementById('current-amount').innerText = currentAmount
    console.log(add(aidTotalDonation , x))

})