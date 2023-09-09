const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteName = document.getElementById('website-name');
const websiteUrl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

function showModal() {
  modal.classList.add('show-modal')
  websiteName.focus()
}

function validateForm(nameValue, urlValue) {
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/g;
  const regex = new RegExp(expression)
  if (!nameValue || !urlValue) {
    alert('Please submit both fields')
  }
  if (!urlValue.match(regex)) {
    alert('Please provide a valid web address')
    return false
  }
  return true
}

modalShow.addEventListener('click', showModal)
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false))



function storeBookmark(e) {
  e.preventDefault()
  const nameValue = websiteName.value
  let urlValue = websiteUrl.value
  if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
    urlValue = `https://${urlValue}`;}
  console.log(nameValue, urlValue);
  if (!validateForm(nameValue, urlValue)) {
    return false
  }
}

bookmarkForm.addEventListener('submit', storeBookmark)


