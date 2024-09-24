
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

// Comment for test 
// noakhali 
// document.getElementById('donate-noakhali-btn').addEventListener('click',function(event){
//     const x = parseFloat(document.getElementById('noakhali-input-field').value)
//     console.log(x)
//     noakhaliTotalDonation = add(noakhaliTotalDonation, x);
//     document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;
//     currentAmount = sub(currentAmount,x)
//     document.getElementById('current-amount').innerText = currentAmount;
//     console.log(add(noakhaliTotalDonation , x))
    

    
// })
// Feni
// document.getElementById('feni-input-btn').addEventListener('click',function(event){
//     const x = parseFloat(document.getElementById('feni-input-field').value)
//     console.log(x)
//     feniTotalDonation = add(feniTotalDonation, x); 
//     document.getElementById('feni').innerText = feniTotalDonation;

//     currentAmount = sub(currentAmount,x)
//     document.getElementById('current-amount').innerText = currentAmount
//     console.log(add(feniTotalDonation , x))
    
// })
//Aid
// document.getElementById('aid-input-btn').addEventListener('click',function(event){
//     const x = parseFloat(document.getElementById('aid-input-field').value)
//     console.log(x)
//     aidTotalDonation = add(aidTotalDonation, x);
//     document.getElementById('aid').innerText = aidTotalDonation;
//     currentAmount = sub(currentAmount,x)
//     document.getElementById('current-amount').innerText = currentAmount
//     console.log(add(aidTotalDonation , x))
    
// })

// history and donation tab button 
document.getElementById('history-button-on-click').addEventListener('click',function(){
    // window.location.href ='/history.html';
    // document.getElementById('donation-main-section').style.display='none';
    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById('header1').classList.add('sticky','top-0','z-10','bg-body','bg-opacity-50');
    document.getElementById('donation-main-section').classList.add('hidden')
});

document.getElementById('donation-button-on-click').addEventListener('click',function(){
    // window.location.href ='/history.html';
    document.getElementById('donation-main-section').classList.remove('hidden','sticky','top-0','z-10')
    document.getElementById("history-section").classList.add('hidden');



}); 


// document.getElementById('feni-input-btn').addEventListener('click',function(){  
//     const p = document.createElement('p')
//     p.innerText = `added : ${feniTotalDonation}`
//     console.log(p);
//     document.getElementById('t-container').appendChild(p);
// })


// noakhali history 
// document.getElementById('donate-noakhali-btn').addEventListener('click',function(){  
    
//     function getFormattedDateTime() {
//         const now = new Date(); 
    
//         return  dateTime = now.toString(); 
//     }
//     const d = new Date();
//     let year = d.getFullYear();

//     console.log(getFormattedDateTime());
    
//     const div = document.createElement('div')
//     const x = parseFloat(document.getElementById('noakhali-input-field').value)
//     div.classList.add('shadow-md' ,'p-4')
//     div.innerHTML = `
//                 <div>
//                 <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief -${year} at Noakhali, Bangladesh</h3>
//                 <p>Date : ${dateTime}</p>    
//             </div>`
//     console.log(div);
//     document.getElementById('t-container').appendChild(div);
// })

// feni history 
// document.getElementById('feni-input-btn').addEventListener('click',function(){  
    
//     function getFormattedDateTime() {
//         const now = new Date(); 
    
//         return  dateTime = now.toString(); 
//     }
//     const d = new Date();
//     let year = d.getFullYear();

//     console.log(getFormattedDateTime());
    
//     const div = document.createElement('div')
//     const x = parseFloat(document.getElementById('feni-input-field').value)
//     div.classList.add('shadow-md' ,'p-4')
//     div.innerHTML = `
//                 <div>
//                 <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief ${year} at Feni, Bangladesh</h3>
//                 <p>Date : ${dateTime}</p>    
//             </div>`
//     console.log(div);
//     document.getElementById('t-container').appendChild(div);
// })



// aid history 
// document.getElementById('aid-input-btn').addEventListener('click',function(){  
    
//     function getFormattedDateTime() {
//         const now = new Date(); 
    
//         return  dateTime = now.toString(); 
//     }
//     const d = new Date();
//     let year = d.getFullYear();

//     console.log(getFormattedDateTime());
    
//     const div = document.createElement('div')
//     const x = parseFloat(document.getElementById('aid-input-field').value)
//     div.classList.add('shadow-md' ,'p-4')
//     div.innerHTML = `
//                 <div>
//                 <h3 class="text-2xl font-bold">${x} Taka is Donated for  Quota Movement-${year} at Feni, Bangladesh</h3>
//                 <p>Date : ${dateTime}</p>    
//             </div>`
//     console.log(div);
//     document.getElementById('t-container').appendChild(div);
// })






// marge code works

// document.getElementById('donate-noakhali-btn').addEventListener('click',function(event){
//     const x = parseFloat(document.getElementById('noakhali-input-field').value)

//     if ( x >= 0 ){
//         console.log(x)
//         noakhaliTotalDonation = add(noakhaliTotalDonation, x);
//         document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;
//         currentAmount = sub(currentAmount,x)
//         document.getElementById('current-amount').innerText = currentAmount;
//         console.log(add(noakhaliTotalDonation , x))
        
//         document.getElementById('donate-noakhali-btn').addEventListener('click',function(){  
    
//             function getFormattedDateTime() {
//                 const now = new Date(); 
            
//                 return  dateTime = now.toString(); 
//             }
//             const d = new Date();
//             let year = d.getFullYear();
        
//             console.log(getFormattedDateTime());
            
//             const div = document.createElement('div')
//             const x = parseFloat(document.getElementById('noakhali-input-field').value)
//             div.classList.add('shadow-md' ,'p-4')
//             div.innerHTML = `
//                         <div>
//                         <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief -${year} at Noakhali, Bangladesh</h3>
//                         <p>Date : ${dateTime}</p>    
//                     </div>`
//             console.log(div);
//             document.getElementById('t-container').appendChild(div);
//         })
//     }
    
// })


// document.getElementById('feni-input-btn').addEventListener('click',function(event){
//     const x = parseFloat(document.getElementById('feni-input-field').value)
//     if ( x >= 0 ){
//         console.log(x)
//         feniTotalDonation = add(feniTotalDonation, x);

        

//         document.getElementById('feni-total-donation').innerText = feniTotalDonation;
//         currentAmount = sub(currentAmount,x)
//         document.getElementById('current-amount').innerText = currentAmount;
//         console.log(add(feniTotalDonation, x))
        
//         document.getElementById('feni-input-btn').addEventListener('click',function(){  
    
//             function getFormattedDateTime() {
//                 const now = new Date(); 
            
//                 return  dateTime = now.toString(); 
//             }
//             const d = new Date();
//             let year = d.getFullYear();
        
//             console.log(getFormattedDateTime());
            
//             const div = document.createElement('div')
//             const x = parseFloat(document.getElementById('feni-input-field').value)
//             div.classList.add('shadow-md' ,'p-4')
//             div.innerHTML = `
//                         <div>
//                         <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief -${year} at Feni, Bangladesh</h3>
//                         <p>Date : ${dateTime}</p>    
//                     </div>`
//             console.log(div);
//             document.getElementById('t-container').appendChild(div);
//         })
//     }
    
// })



document.getElementById('donate-noakhali-btn').addEventListener('click', function(event) {
    const x = parseFloat(document.getElementById('noakhali-input-field').value);

    if (x > 0 && currentAmount >= x) { 
        console.log(x);
        noakhaliTotalDonation = add(noakhaliTotalDonation, x);

        document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;

        currentAmount = sub(currentAmount, x);
        document.getElementById('current-amount').innerText = currentAmount;

        console.log(`Noakhali Donation: ${x}, Total Donation: ${noakhaliTotalDonation}, Current Amount: ${currentAmount}`);


        function getFormattedDateTime() {
            const now = new Date();
            return now.toString(); //
        }

        const d = new Date();
        let year = d.getFullYear();

        console.log(getFormattedDateTime());

        const div = document.createElement('div');
        div.classList.add('shadow-md', 'p-4');
        div.innerHTML = `
            <div>
                <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief - ${year} at Noakhali, Bangladesh</h3>
                <p>Date: ${getFormattedDateTime()}</p>
            </div>`;
        console.log(div);

        document.getElementById('t-container').appendChild(div);
        showModal(`You donated ${x} Taka for HumanKind`);
        document.getElementById('aid-input-field').value = '';


    } else if (x <= 0) {
        alert("Please enter a valid donation amount.");
    } else if (currentAmount < x) {
        alert("Donation amount exceeds available balance.");
    }
});



document.getElementById('feni-input-btn').addEventListener('click', function(event) {
    const x = parseFloat(document.getElementById('feni-input-field').value);

    if (currentAmount >= x && x > 0) {
        console.log(x);
        feniTotalDonation = add(feniTotalDonation, x);

        const feniTotalDonationElement = document.getElementById('feni-total-donation');
        if (feniTotalDonationElement) {
            feniTotalDonationElement.innerText = feniTotalDonation;
        }

        currentAmount = sub(currentAmount, x);
        const currentAmountElement = document.getElementById('current-amount');
        if (currentAmountElement) {
            currentAmountElement.innerText = currentAmount;
        }
        console.log(`Updated Feni Total Donation: ${feniTotalDonation}, Current Amount: ${currentAmount}`);

        function getFormattedDateTime() {
            const now = new Date();
            return now.toString();
        }

        const d = new Date();
        let year = d.getFullYear();
        console.log(getFormattedDateTime());

 
        const div = document.createElement('div');
        div.classList.add('shadow-md', 'p-4');
        div.innerHTML = `
            <div>
                <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief - ${year} at Feni, Bangladesh</h3>
                <p>Date: ${getFormattedDateTime()}</p>    
            </div>`;
        console.log(div);
        document.getElementById('t-container').appendChild(div);
        showModal(`You donated ${x} Taka for HumanKind`);
        document.getElementById('aid-input-field').value = '';

    } else {
        console.log("Insufficient funds or invalid donation amount");
        alert("Donation amount exceeds available balance or is invalid.");
    }
});




document.getElementById('aid-input-btn').addEventListener('click', function(event) {
    const x = parseFloat(document.getElementById('aid-input-field').value);

    if (x > 0 && currentAmount >= x) {
        console.log(x);
        aidTotalDonation = add(aidTotalDonation, x);


        document.getElementById('aid').innerText = aidTotalDonation;


        currentAmount = sub(currentAmount, x);
        document.getElementById('current-amount').innerText = currentAmount;

        console.log(`Aid Donation: ${x}, Total Aid Donation: ${aidTotalDonation}, Current Amount: ${currentAmount}`);


        function getFormattedDateTime() {
            const now = new Date();
            return now.toString(); 
        }

        const d = new Date();
        let year = d.getFullYear();

        console.log(getFormattedDateTime());

        const div = document.createElement('div');
        div.classList.add('shadow-md', 'p-4');
        div.innerHTML = `
            <div>
                <h3 class="text-2xl font-bold">${x} Taka Aid for Injured in the  Movement - ${year} From Feni, Bangladesh</h3>
                <p>Date: ${getFormattedDateTime()}</p>
            </div>`;
        console.log(div);

        document.getElementById('t-container').appendChild(div);
        showModal(`You donated ${x} Taka for HumanKind`);
        document.getElementById('aid-input-field').value = '';

    } else if (x <= 0) {
        
        alert("Please enter a valid donation amount.");
    } else if (currentAmount < x) {
        alert("Donation amount exceeds available balance.");
    }
});



function showModal(message) {
    
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');

    modalMessage.innerText = message;
    modal.classList.remove('hidden'); 

    document.getElementById('modal-close-btn').addEventListener('click', function() {
        modal.classList.add('hidden');  
    });
}