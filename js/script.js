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
}