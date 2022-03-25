// // Add your code here
// // fetch('http://localhost:3000/dogs', configurationObject)



// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// };

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then((resp) => resp.json()) 
//     .then((data) => console.log(data))
//      .catch(function (error) {
//         alert("Bad things! ragnarok!");
//         console.log(error.message);
//     });
    

// const configureObject1 = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Max",
//         dogBreed: "Schit-zu"
//     }),
// };
// fetch('http://localhost:3000/dogs', configureObject1);

// // console.log(configureObject1)



// const configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accpet": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Lou",
//         dogBreed: "Husky"
//     }),
// }
// fetch('http://localhost:3000/dogs', configObj);

// const formData = {
//     dogName: "Phi-phi",
//     dogBreed: "Yorkie",
// };

// const configureObject2 = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// };

// fetch('http://localhost:3000/dogs', configureObject2)

// fetch('http://localhost:3000/dogs', {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Mitch",
//         dogBreed: "BullDog"
//     })
// })

function submitData (name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then((resp) => resp.json())
    .then((info)=> document.body.append(info.id))
    .catch(function (error){
        document.body.append(error.message)
    })
    //{
        // console.log(info)
        // // const p = document.createElement('p')
        // const body = document.querySelector('body')
        // body.innerText = info.id
        // // body.append(p)
//   })
}

// submitData('Ben', 'Ben@yahoo.com')
// .catch(function (error) {
//         alert("Bad things! ragnarok!");
//          console.log(error.message);