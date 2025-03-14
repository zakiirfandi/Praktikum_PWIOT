document.addEventListener("DOMContentLoaded", function () {
    function updateSensorData() {
        // Simulasi data sensor (bisa diganti dengan fetch API untuk data nyata)
        let suhu = (Math.random() * 50).toFixed(2); // Suhu antara 0 - 50 derajat Celsius
        let tekanan = (Math.random() * 10).toFixed(2); // Tekanan antara 0 - 10 Bar

        // Update tampilan dengan animasi perubahan angka
        let suhuElement = document.getElementById("sensor-suhu");
        let tekananElement = document.getElementById("sensor-tekanan");

        suhuElement.style.opacity = 0;
        tekananElement.style.opacity = 0;

        setTimeout(() => {
            suhuElement.innerText = suhu + "°C";
            tekananElement.innerText = tekanan + " Bar";
            suhuElement.style.opacity = 1;
            tekananElement.style.opacity = 1;
        }, 500);
    }

    // Update data sensor setiap 2 detik
    setInterval(updateSensorData, 2000);
});