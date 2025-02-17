document.getElementById("add").addEventListener("click", function () {
  const inputValue = document.getElementById("todoInput").value;

  // check whether input is not empty
  if (inputValue.trim() !== "") {
    // Create a new list item (li)
    const newLi = document.createElement("li");
    newLi.textContent = inputValue;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    newLi.appendChild(editBtn);
    newLi.appendChild(deleteBtn);

    document.querySelector(".todos").appendChild(newLi);

    document.getElementById("todoInput").value = "";

    editBtn.addEventListener("click", function () {
      const newValue = prompt(
        "Edit your Todo : ",
        newLi.firstChild.textContent
      );
      if (newValue !== null) {
        newLi.firstChild.textContent = newValue;
      }
    });

    deleteBtn.addEventListener("click", function () {
      newLi.remove();
    });
  }
});
