// Select the search input element ⬇️
const inputElement = document.querySelector("#search-input");

// Select the close search icon ⬇️
const search_icon = document.querySelector("#search-close-icon");

// Select the sort icon container ⬇️
const sort_wrapper = document.querySelector(".sort-wrapper");

// Add an event to the input element to handle changes in the text ⬇️
inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});

// Add an event to the close search icon to handle clicks ⬇️
search_icon.addEventListener("click", handleSearchCloseOnClick);

// Add an event to the sort icon container to handle clicks ⬇️
sort_wrapper.addEventListener("click", handleSortIconOnClick);

// Function to handle changes in the search field text ⬇️
function handleInputChange(inputElement) {
  const inputValue = inputElement.value;

  // Show the close search icon if there is text in the field, otherwise hide it ⬇️
  if (inputValue !== "") {
    document
      .querySelector("#search-close-icon")
      .classList.add("search-close-icon-visible");
  } else {
    document
      .querySelector("#search-close-icon")
      .classList.remove("search-close-icon-visible");
  }
}

// Function to handle the click event on the close search icon ⬇️
function handleSearchCloseOnClick() {
  // Clear the search field and hide the close search icon ⬇️
  document.querySelector("#search-input").value = "";
  document
    .querySelector("#search-close-icon")
    .classList.remove("search-close-icon-visible");
}

// Function to handle the click event on the sort icon container ⬇️
function handleSortIconOnClick() {
  // Toggles the 'filter-wrapper-open' class on the filter wrapper ⬇️
  document
    .querySelector(".filter-wrapper")
    .classList.toggle("filter-wrapper-open");
  // Toggles the 'filter-wrapper-overlay' class on the document body to show/hide the overlay ⬇️
  document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}
