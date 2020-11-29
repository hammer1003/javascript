const cafeList = document.querySelector("#cafe-list");
const updateForm = document.querySelector("#update-cafe-form");
const addForm = document.querySelector("#add-cafe-form");

// create element and render cafe
function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement("span");
    let city = document.createElement('span');
    let cross = document.createElement('span');
    let edit = document.createElement('span');

    li.setAttribute('data-id', doc.id);

    edit.setAttribute('data-toggle', "modal");
    edit.setAttribute('data-target', "#editModal");

    cross.setAttribute('data-toggle', "modal");
    cross.setAttribute('data-target', "#removeModal");

    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = "x";
    edit.textContent = 'edit';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(edit);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data
    cross.addEventListener('click', async (e) => {
        let removeModal = document.getElementById('removeModal').getElementsByClassName('update-form');
        let name = e.target.previousSibling.previousSibling.innerText;
        let city = e.target.previousSibling.innerText;
        removeModal[0].setAttribute('placeholder', name);
        removeModal[1].setAttribute('placeholder', city);

        let del = document.getElementById('confirmDel');
        del.addEventListener('click', async (e) => {
            let id = li.getAttribute('data-id');
            await db.collection('cafes').doc(id).delete();
        });
    });

    // modal get info
    edit.addEventListener('click', (e) => {
        let formId = document.getElementById('update-cafe-form');
        let name = e.target.previousSibling.previousSibling.innerText;
        let city = e.target.previousSibling.innerText;
        let id = li.getAttribute('data-id');

        formId.setAttribute('data-id', id);
        formId.getElementsByClassName('update-form')[0].setAttribute('placeholder', name);
        formId.getElementsByClassName('update-form')[1].setAttribute('placeholder', city);
    });
}

// getting data and .then() = promise 
// db.collection('cafes').where('name', '<', 'a').orderBy('name').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

// saving data
addForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await db.collection("cafes").add({
        name: addForm.name.value,
        city: addForm.city.value
    });
    addForm.name.value = '';
    addForm.city.value = '';
})

// update data
updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let id = e.target.getAttribute('data-id');
    await db.collection("cafes").doc(id).update({
        name: updateForm.name.value,
        city: updateForm.city.value
    });
    window.location.href = window.location.href;
})

// real-time listener
db.collection('cafes').orderBy('name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type === 'added') {
            renderCafe(change.doc);
        } else if (change.type === 'removed') {
            let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
            cafeList.removeChild(li);
        }
    });
});