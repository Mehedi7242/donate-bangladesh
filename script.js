
let currentAmount = 10000 ;
let donate = 0 ;
let noakhaliTotalDonation =7777;
let aidTotalDonation = 990;
let feniTotalDonation = 88990;


document.getElementById('current-amount').innerText = currentAmount;

document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;

document.getElementById('aid').innerText = aidTotalDonation;

document.getElementById('feni').innerText = feniTotalDonation;


const add = function (a,b){
    return a+b;
};

const sub = function (a,b){
    return a-b;
};

document.getElementById('history-button-on-click').addEventListener('click',function(){

    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById('donation-main-section').classList.add('hidden')
});

document.getElementById('donation-button-on-click').addEventListener('click',function(){

    document.getElementById('donation-main-section').classList.remove('hidden')
    document.getElementById("history-section").classList.add('hidden');
    document.getElementById("header1").classList.remove('sticky', 'top-0 ','z-1','bg-opacity-90')

}); 




document.getElementById('donate-noakhali-btn').addEventListener('click', function(event) {
    const x = parseFloat(document.getElementById('noakhali-input-field').value);

    if (x > 0 && currentAmount >= x) { 
        console.log(x);
        noakhaliTotalDonation = add(noakhaliTotalDonation, x);

        document.getElementById('noakhali-total-donation').innerText = noakhaliTotalDonation;

        currentAmount = sub(currentAmount, x);
        document.getElementById('current-amount').innerText = currentAmount;


        function getFormattedDateTime() {
            const now = new Date();
            return now.toString(); //
        }

        const d = new Date();
        let year = d.getFullYear();


        const div = document.createElement('div');
        div.classList.add('shadow-md', 'p-4');
        div.innerHTML = `
            <div>
                <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief - ${year} at Noakhali, Bangladesh</h3>
                <p>Date: ${getFormattedDateTime()}</p>
            </div>`;

        document.getElementById('t-container').appendChild(div);
        showModal(`You donated ${x} Taka for HumanKind`);
        document.getElementById('noakhali-input-field').value = '';


    } else if (x <= 0) {
        alert("Please enter a valid donation amount.");
    } else if (currentAmount < x) {
        alert("Donation amount exceeds available balance.");
    }
});



document.getElementById('feni-input-btn').addEventListener('click', function(event) {
    const x = parseFloat(document.getElementById('feni-input-field').value);

    if (currentAmount >= x && x > 0) {
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

        function getFormattedDateTime() {
            const now = new Date();
            return now.toString();
        }

        const d = new Date();
        let year = d.getFullYear();
 
        const div = document.createElement('div');
        div.classList.add('shadow-md', 'p-4');
        div.innerHTML = `
            <div>
                <h3 class="text-2xl font-bold">${x} Taka is Donated for Flood Relief - ${year} at Feni, Bangladesh</h3>
                <p>Date: ${getFormattedDateTime()}</p>    
            </div>`;
        document.getElementById('t-container').appendChild(div);
        showModal(`You donated ${x} Taka for HumanKind`);
        document.getElementById('feni-input-field').value = '';

    } else if (x <= 0) {
        alert("Please enter a valid donation amount.");
    } else if (currentAmount < x) {
        alert("Donation amount exceeds available balance.");
    }
});




// document.getElementById('aid-input-btn').addEventListener('click', function(event) {
//     const x = parseFloat(document.getElementById('aid-input-field').value);

//     if (x > 0 && currentAmount >= x) {
//         console.log(x);
//         aidTotalDonation = add(aidTotalDonation, x);


//         document.getElementById('aid').innerText = aidTotalDonation;


//         currentAmount = sub(currentAmount, x);
//         document.getElementById('current-amount').innerText = currentAmount;

//         console.log(`Aid Donation: ${x}, Total Aid Donation: ${aidTotalDonation}, Current Amount: ${currentAmount}`);


//         function getFormattedDateTime() {
//             const now = new Date();
//             return now.toString(); 
//         }

//         const d = new Date();
//         let year = d.getFullYear();

//         const div = document.createElement('div');
//         div.classList.add('shadow-md', 'p-4');
//         div.innerHTML = `
//             <div>
//                 <h3 class="text-2xl font-bold">${x} Taka Aid for Injured in the  Movement - ${year} From Feni, Bangladesh</h3>
//                 <p>Date: ${getFormattedDateTime()}</p>
//             </div>`;
//         console.log(div);

//         document.getElementById('t-container').appendChild(div);
//         showModal(`You donated ${x} Taka for HumanKind`);
//         document.getElementById('aid-input-field').value = '';

//     } else if (x <= 0) {
        
//         alert("Please enter a valid donation amount.");
//     } else if (currentAmount < x) {
//         alert("Donation amount exceeds available balance.");
//     }
// });




document.getElementById('aid-input-btn').addEventListener('click', function(event) {
    const x = parseFloat(document.getElementById('aid-input-field').value);

    if (x > 0 && currentAmount >= x) { 
        console.log(x);
        aidTotalDonation = add(aidTotalDonation, x);

        document.getElementById('aid').innerText = aidTotalDonation;

        currentAmount = sub(currentAmount, x);
        document.getElementById('current-amount').innerText = currentAmount;


        function getFormattedDateTime() {
            const now = new Date();
            return now.toString(); //
        }

        const d = new Date();
        let year = d.getFullYear();


        const div = document.createElement('div');
        div.classList.add('shadow-md', 'p-4');
        div.innerHTML = `
            <div>
                <h3 class="text-2xl font-bold">${x} Taka Aid for Injured in the  Movement - ${year} at Noakhali, Bangladesh</h3>
                <p>Date: ${getFormattedDateTime()}</p>
            </div>`;

        document.getElementById('t-container').appendChild(div);
        showModal(`You donated ${x} Taka for HumanKind`);



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