// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const bidangButtons = document.querySelectorAll('input[name="peminatan"]');
    
    bidangButtons.forEach(button => {
        button.addEventListener('change', () => {
            const selectedValue = document.querySelector('input[name="peminatan"]:checked').value;
            document.getElementById('peminatan').value = selectedValue;
        });
    });
});

function kirimData(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.getElementById('peminatan').value;
    const alamat = document.getElementById('alamat').value;
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;

    console.log(`Nama: ${nama}`);
    console.log(`NIM: ${nim}`);
    console.log(`Peminatan: ${peminatan}`);
    console.log(`Alamat: ${alamat}`);
    console.log(`Angkatan: ${angkatan}`);
    console.log(`Tanggal: ${tanggal}`);

    // Here you can add code to send the data to the server, e.g., using fetch API.
}
