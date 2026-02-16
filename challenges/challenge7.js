
// Function - Random Argument Challenge
// Create Function showDetails
// Function Accept 3 Parameters [a, b, c]
// Data Types For Info Is
// String => Name
// Number => Age
// Boolean => Status
// Argument Is Random
// Data Is Not Sorted Output Depend On Data Types
// - Use Ternary Conditional Operator
// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"

// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//================================================================================

// The Solution

function showDetails(...st){
    let name;
    let age;
    let status;
    
    for (let i=0; i<st.length;i++){

        // if (typeof st[i] === "string"){
        //     name = st[i];
        // }
        // else if(typeof st[i] === "number"){
        //     age =st[i];
        // }
        // else if (typeof st[i] === "boolean"){
        //     status=st[i];
        //     if(status === true){
        //         status="";
        //     }
        //     else if(status === false){
        //         status="Not";
        //     }
        // }

        
        typeof st[i] === "string" ? name = st[i] : typeof st[i] === "number" ? age =st[i] : typeof st[i] === "boolean" ? status = st[i] ? "" : "Not" : document.write("erorr");
    }

    
    document.write(`Hello ${name}, Your Age Is ${age}, You Are ${status} Available For Hire`);
}

showDetails(false,"Nada",20);