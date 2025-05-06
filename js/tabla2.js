document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById("tableBody");
  
    const cities = ["Budapest", "Debrecen", "Szeged", "Pécs", "Győr"];
    const jobs = ["Tanár", "Programozó", "Orvos", "Ügyvéd", "Mérnök"];
  
    for (let i = 1; i <= 25; i++) {
      const tr = document.createElement("tr");
  
      const name = `Teszt Felhasználó ${i}`;
      const age = 20 + (i % 30);
      const city = cities[i % cities.length];
      const job = jobs[i % jobs.length];
      const email = `user${i}@example.com`;
      const phone = `+3620${Math.floor(1000000 + Math.random() * 8999999)}`;
  
      tr.innerHTML = `
        <td>${i}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${city}</td>
        <td>${job}</td>
        <td>${email}</td>
        <td>${phone}</td>
      `;
  
      tbody.appendChild(tr);
    }
  });
  