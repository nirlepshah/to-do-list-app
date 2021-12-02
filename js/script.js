function newItem(){

    //adding new item to the list

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

   
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  
// striking out function on doubleclick

li.dblclick(function crossOut(){
    li.toggleClass("strike");
  })  

  // adding crossOutButton button and function to delete the item added in the list 

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode("x"));
li.append(crossOutButton)

crossOutButton.click(function deleteListItem(){
    li.addClass("delete")
   });
 //Reording of list items using sortable() method
$('#list').sortable();
 }