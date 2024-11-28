document.addEventListener("DOMContentLoaded", () => {
    // Schedule Data
    const schedule = [
        { date: "2024-03-30", opponent: "Kotoko", venue: "Mumbai" },
        { date: "2024-04-05", opponent: "Hearts of Oak", venue: "Delhi" },
    ];

    const matchSchedule = document.getElementById("match-schedule");
    schedule.forEach(match => {
        const li = document.createElement("li");
        li.textContent = `${match.date} - Vs ${match.opponent} @ ${match.venue}`;
        matchSchedule.appendChild(li);
    });

    // Players Data
    const players = [
        { name: "Mpaypal", role: "Batsman" },
        { name: "Modric", role: "Bowler" },
    ];

    const playerList = document.getElementById("player-list");
    players.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.innerHTML = `<h3>${player.name}</h3><p>${player.role}</p>`;
        playerList.appendChild(card);
    });

    // Stats Data
    document.getElementById("matches-played").textContent = "206";
    document.getElementById("wins").textContent = "200";
    document.getElementById("losses").textContent = "3";

    // News Data
    const news = [
        {
            title: "Mpaypal Record-Breaking Century",
            description: "Mpaypal dropped a stinker",
            date: "2024-03-28",
        },
        {
            title: "Obrempong FC New Coach Announced",
            description: "The team has appointed a new head coach with extensive IPL experience.",
            date: "2024-03-15",
        },
    ];

    const newsList = document.getElementById("news-list");
    news.forEach(item => {
        const card = document.createElement("div");
        card.className = "news-item";
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <small>${item.date}</small>
        `;
        newsList.appendChild(card);
    });
});
