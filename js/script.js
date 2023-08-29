// fetch api
const loadPhone = async (searchText, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones, isShowAll);
}
// display products
const displayPhone = (phones, isShowAll) =>{
    // get the main div
    const productContainer = document.getElementById('product-container');
    productContainer.textContent = '';
    // display show all button 
    const showAllBtn = document.getElementById('show-all-btn');
    if(phones.length > 12 && !isShowAll){
      showAllBtn.classList.remove('hidden');
    }
    else{
      showAllBtn.classList.add('hidden');
    }
    if(!isShowAll){
      phones = phones.slice(0,12);
    }
    phones.forEach(phone => {
        // new card element create
        const div = document.createElement('div');
        // add classes for card
        div.classList = 'card bg-base-100 shadow-xl';
        // set inner html
        div.innerHTML = `
        <figure class="px-10 pt-10">
              <img src="${phone.image}" alt="phone" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>There are many variations of passages of available, but the majority have suffered</p>
              <h3 class="text-2xl font-semibold">Price $999 </h3>
              <div class="card-actions">
                <button class="btn btn-neutral">Show Details</button>
              </div>
            </div>
        `
        // append child
        productContainer.appendChild(div);
    });
    toggleLoadingSpinner(false);
}
// search button handle
function searchHandler(isShowAll){
  // get input text from search bar
  const searchTextElement = document.getElementById('search-text');
  const searchText = searchTextElement.value;
  //call load phone for search text
  toggleLoadingSpinner(true);
  loadPhone(searchText, isShowAll);
  // searchTextElement.value = '';

}
// loading spinner handle
const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading)
    loadingSpinner.classList.remove('hidden');
  else
    loadingSpinner.classList.add('hidden');
}
// handle show all btn 
const showAllHandler = () =>{
  searchHandler(true);
}