const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];
    // 1
    const list = document.createElement("ol");
    users.forEach(person =>{
    const listItem = document.createElement("li");
    listItem.textContent = person.firstName + " " + person.lastName;
    list.appendChild(listItem);
});
    document.body.appendChild(list);
   // 2 
   const list_1 = document.querySelector("ol");
    list_1.classList.add("no-bullets");
    // 3
    const list_2 = document.createElement("ol");
    users.forEach(person =>{
      const listItem_1 = document.createElement("li");
      listItem_1.innerHTML = `${person.firstName} ${person.lastName}`;
      listItem_1.setAttribute("data-id",person.id);
      list_2.appendChild(listItem_1);
    });
     document.body.appendChild(list_2);
   