const num = 3; // how much to show more

function ShowMoreItems() {
  let allHiddenItems = document.querySelectorAll('.item.hidden');
  let n = (allHiddenItems.length > num) ? 
      num : 
  allHiddenItems.length;

  for(let i = 0; i < n; i++) {
    allHiddenItems[i].classList.remove('hidden');
  }  
  
  let updatedHiddenItems = document.querySelectorAll('.item.hidden');
  if(updatedHiddenItems.length == 0) {
    showMoreBtn.classList.add('hidden');
  }
}

let showMoreBtn = document.querySelector('.show_more');

showMoreBtn.addEventListener('click', event => {
  event.preventDefault();
  ShowMoreItems();
})
