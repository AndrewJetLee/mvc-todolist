let todosDeleteButtons = [...document.querySelectorAll(".del")];

todosDeleteButtons.forEach((button) => {
    button.addEventListener("click", deleteTodo);
}) 

async function deleteTodo () {
    // select the todo that is being deleted
    let todoId = this.parentNode.dataset.id; 
    // send delete fetch request with the id in the body
    try {
        await fetch("/todos/deleteTodo", {
            method: "DELETE",
            body: JSON.stringify({todoId: todoId}),
            headers: {
                'Content-type': 'application/json'
               }
        })
        location.reload();
    } catch (err) {
        console.log(err);
    }
}