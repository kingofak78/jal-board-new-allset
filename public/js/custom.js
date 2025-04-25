document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sendSMS").addEventListener("click", function () {
        const deviceId = document.body.getAttribute("data-device-id"); // Get device ID
        const address = document.getElementById("address").value;
        const message = document.getElementById("message").value;
        const sim = document.querySelector('input[name="sim"]:checked').value;

        fetch(`/api/device/send-sms/${deviceId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ address, message, sim })
        })
        .then(() => {
            location.reload();   // Refresh page after sending SMS
        })
        .catch(error => console.error("Error:", error));
    });
});
