document.addEventListener('DOMContentLoaded', function() {
    fetchHealthTip(); 
});

function fetchHealthTip() {
    const jsonUrl = 'healthtips.json'; 

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const randomTip = data[Math.floor(Math.random() * data.length)];
                document.getElementById('health-tip').textContent = randomTip.tip;
            } else {
                document.getElementById('health-tip').textContent = 'No health tips available at the moment.';
            }
        })
        .catch(error => {
            console.error('Error fetching health tip:', error);
            document.getElementById('health-tip').textContent = 'Sorry, we could not fetch a health tip at this time.';
        });
}
