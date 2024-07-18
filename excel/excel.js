const scriptURL = 'https://script.google.com/macros/s/AKfycbyehsSk9TZ5tWH_Yq9Ef-p93lVtO-0-LG3QVrbUwwxcipSW12jpM4SlzmLq2pQ5AvS3/exec'

const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .then(data => console.log(data))
 .catch(error => console.error('Error!', error.message))
})
