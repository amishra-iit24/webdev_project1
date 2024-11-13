// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    // Highlight the current page in the navigation bar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll(".horizontal-nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Adds 'active' class to current page link
        }
    });

    // Check if the page has a map (for api.html)
    if (document.getElementById("map")) {
        initMap(); // Initialize Google Map if the map container exists
    }
});

// Google Maps Initialization for api.html
function initMap() {
    const locations = [
        { lat: 40.7128, lng: -74.0060, title: 'New York', info: 'City that never sleeps!' },
        { lat: 34.0522, lng: -118.2437, title: 'Los Angeles', info: 'The entertainment capital!' },
        { lat: 51.5074, lng: -0.1278, title: 'London', info: 'Rich in history!' }
    ];

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { lat: 39.8283, lng: -98.5795 }, // Center of the USA
    });

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
        });

        const infowindow = new google.maps.InfoWindow({
            content: `<h3>${location.title}</h3><p>${location.info}</p>`
        });

        marker.addListener("click", function () {
            infowindow.open(map, marker);
        });
    });
}