
let currentAmount = 10000 ;
let donate = 0 ;
let noakhaliTotalDonation =7777;
let aidTotalDonation = 990;
let feniTotalDonation = 88990;

document.getElementById('current-amount').innerText = currentAmount;
console.log(currentAmount);

document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;
console.log(noakhaliTotalDonation);

document.getElementById('aid').innerText = aidTotalDonation;
console.log(aidTotalDonation);

document.getElementById('feni').innerText = feniTotalDonation;
console.log(feniTotalDonation);


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

// history and donation tab button 
document.getElementById('history-button-on-click').addEventListener('click',function(){
    // window.location.href ='/history.html';
    // document.getElementById('donation-main-section').style.display='none';
    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById('header1').classList.add('sticky','top-0','z-10','bg-body');
    document.getElementById('donation-main-section').classList.add('hidden')
});

document.getElementById('donation-button-on-click').addEventListener('click',function(){
    // window.location.href ='/history.html';
    document.getElementById('donation-main-section').classList.remove('hidden')
    document.getElementById("history-section").classList.add('hidden');



});


// document.getElementById('donate-noakhali-btn').addEventListener('click',function(){  
//     const p = document.createElement('p')
//     p.innerText = `added : ${feniTotalDonation}`
//     console.log(p);
//     document.getElementById('t-container').appendChild(p);
// })

document.getElementById('donate-noakhali-btn').addEventListener('click',function(){  
    
    function getFormattedDateTime() {
        const now = new Date(); 
    
        return  dateTime = now.toString(); 
    }
    const d = new Date();
    let year = d.getFullYear();

    console.log(getFormattedDateTime());
    
    const div = document.createElement('div')
    const x = parseFloat(document.getElementById('noakhali-input-field').value)
    div.classList.add('shadow-md' ,'p-4')
    div.innerHTML = `
                <div>
                <h3 class="text-2xl font-bold">${x} Taka is Donated for famine-${year} at Feni, Bangladesh</h3>
                <p>Date : ${dateTime}</p>    
            </div>`
    console.log(div);
    document.getElementById('t-container').appendChild(div);
})



