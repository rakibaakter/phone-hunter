// fetch api
const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones);
}
// display products
const displayPhone = phones =>{
    // get the main div
    const productContainer = document.getElementById('product-container');
    productContainer.textContent = '';
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
}
// search button handle
function searchHandler(){
  // get input text from search bar
  const searchTextElement = document.getElementById('search-text');
  const searchText = searchTextElement.value;
  //call load phone for search text
  loadPhone(searchText);
  searchTextElement.value = '';
}
loadPhone();