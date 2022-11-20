//-------Display the data from server to UI after each time refresh screen
//axios.get request to gitting data from crudcrud to UI.
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/d2e24d1f7b694ca48c6d90b659747603/appointment")
    axios.get("https://crudcrud.com/api/fbd49c1906a5445d8dea0fba55c7e4a3/appointment")
    .then((response)=>{
        response.data.forEach((ele)=>{
            showNewUserOnscreen(ele);
@@ -74,7 +74,7 @@ function addItem(e) {
        email
    };

    axios.post("https://crudcrud.com/api/d2e24d1f7b694ca48c6d90b659747603/appointment", obj)
    axios.post("https://crudcrud.com/api/fbd49c1906a5445d8dea0fba55c7e4a3/appointment", obj)
        .then((responce) => {
            showNewUserOnscreen(responce.data);
            console.log(responce.data);
@@ -91,26 +91,33 @@ function addItem(e) {
}


// //delete itam event
// itemList.addEventListener('click', removeItem);
//delete itam event
itemList.addEventListener('click', removeItem);

// function removeItem(e) {
//     // console.log(1);
//     if (e.target.classList.contains('delete')) {
//         // console.log(1);
//         if (confirm('Are you sure?')) {
//             li = e.target.parentElement;
function removeItem(e) {
    // console.log(1);
    if (e.target.classList.contains('delete')) {
        // console.log(1);
        if (confirm('Are you sure?')) {
            li = e.target.parentElement;

//             let key = li.childNodes[2].textContent;
//             key = JSON.stringify(key);
//             // console.log(key);
//             localStorage.removeItem(JSON.parse(key));
            let key = li.childNodes[2].textContent;
            // console.log(key);

//             itemList.removeChild(li);
//         }
//     }
            itemList.removeChild(li);

// }
            axios.get("https://crudcrud.com/api/fbd49c1906a5445d8dea0fba55c7e4a3/appointment")
            .then((response)=>{
                response.data.forEach((ele)=>{
                    if(ele.email==key){
                        axios.delete('https://crudcrud.com/api/fbd49c1906a5445d8dea0fba55c7e4a3/appointment/'+`${ele._id}`)
                    }
                })
            }).catch((err)=>console.log(err));
        }
    }

}
