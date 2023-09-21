// Dapatkan tombol submit
const submitButton = document.querySelector('.buttn');

// Tambahkan event listener untuk mengubah data saat tombol ditekan
submitButton.addEventListener('click', function () {
    // Dapatkan semua input field
    const name = document.querySelector('input:nth-of-type(1)').value;
    const role = document.querySelector('input:nth-of-type(2)').value;
    const availability = document.querySelector('input:nth-of-type(3)').value;
    const age = document.querySelector('input:nth-of-type(4)').value;
    const location = document.querySelector('input:nth-of-type(5)').value;
    const experience = document.querySelector('input:nth-of-type(6)').value;
    const email = document.querySelector('input:nth-of-type(7)').value;

    // Dapatkan elemen dengan class "data"
    const dataElement = document.querySelector('.isi-data');

    // Ubah isi dari elemen "data" dengan nilai input yang didapatkan
    dataElement.innerHTML = `
        <p>${availability}</p>
        <p>${age}</p>
        <p>${location}</p>
        <p>${experience}</p>
        <p>${email}</p>
    `;

    const profileElement = document.querySelector('.name')

    profileElement.innerHTML = `
        <h1>${name}<h1>
        <h5>${role}<h5>
    `
});
