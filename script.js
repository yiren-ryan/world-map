// 初始化地图
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 响应双击事件
map.on('dblclick', function (e) {
    const countryName = prompt("Enter your country name:");
    if (countryName) {
        const userName = prompt("Enter your name:");
        const message = prompt("Write your message:");
        if (userName && message) {
            // 创建 marker
            const marker = L.marker(e.latlng).addTo(map);

            // 创建 popup 内容，包括删除按钮
            const popupContent = document.createElement('div');
            popupContent.innerHTML = `<strong>${countryName}</strong><br><em>${userName}</em>: ${message}<br>`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "❌ Delete";
            deleteBtn.style.marginTop = "5px";
            deleteBtn.onclick = function () {
                map.removeLayer(marker);
            };

            popupContent.appendChild(deleteBtn);
            marker.bindPopup(popupContent).openPopup();
        }
    }
});
