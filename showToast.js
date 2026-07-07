export function showToast(operation,id){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    // set text contet for toast

    if (operation === "add"){
        toast.textContent =`Product With ID ${id} has been added.`;
    }else{
        toast.textContent = `Product with ID ${id} has been deleted.`
    }

    document.body.appendChild(toast);

  //  attomaticaly remove toast aftwer some time

  setTimeout(() => {
    toast.remove();
  },2000);

}