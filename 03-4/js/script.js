document.forms["form1"].addEventListener("submit", (event) => {
  event.preventDefault();
  const text = event.target.elements.task.value;
  if (text.length < 1) {
    return;
  }
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(text));
  event.path[1].querySelector('#list').appendChild(li);
});
