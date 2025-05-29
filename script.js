// 初始化地图
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 响应双击事件
map.on('dblclick', function(e) {
    const countryName = prompt("Enter your country name:");
    if (countryName) {
        const userName = prompt("Enter your name:");
        const message = prompt("Write your message:");
        if (userName && message) {
            const popupContent = `<strong>${countryName}</strong><br><em>${userName}</em>: ${message}`;
            L.marker(e.latlng).addTo(map).bindPopup(popupContent).openPopup();
        }
    }
});