document.addEventListener("DOMContentLoaded", function() {
    // data for the table
    var cardData = [
        { name: "Aarakocra Sneak", points: 3, color: "u", group: "Initiative" },
        { name: "Aether Vial", points: 1, color: "c" },
        { name: "Ancient Tomb", points: 1, color: "c" },
        { name: "Bazaar of Baghdad", points: 4, color: "c" },
        { name: "Bloodboil Sorcerer", points: 3, color: "r", group: "Initiative" },
        { name: "Brain Freeze", points: 2, color: "u", group: "Storm" },
        { name: "Cranial Plating", points: 2, color: "c" },
        { name: "Channel", points: 2, color: "g" },
        { name: "Chatterstorm", points: 2, color: "g", group: "Storm" },
        { name: "Dark Ritual", points: 1, color: "b" },
        { name: "Demonic Tutor", points: 4, color: "b" },
        { name: "Dragon's Rage Channeler", points: 1, color: "r" },
        { name: "Empty the Warrens", points: 3, color: "r", group: "Storm" },
        { name: "Enlightened Tutor", points: 2, color: "u" },
        { name: "Explore the Underdark", points: 2, color: "g", group: "Initiative" },
        { name: "Fall from Favor", points: 1, color: "u" },
        { name: "Feywild Caretaker", points: 3, color: "u", group: "Initiative" },
        { name: "Force of Will", points: 1, color: "u" },
        { name: "Frantic Search", points: 1, color: "u" },
        { name: "Galvanic Relay", points: 2, color: "r", group: "Storm" },
        { name: "Gitaxian Probe", points: 1, color: "u" },
        { name: "Grapeshot", points: 2, color: "r", group: "Storm" },
        { name: "Gush", points: 1, color: "u" },
        { name: "High Tide", points: 3, color: "u" },
        { name: "Hymn to Tourach", points: 1, color: "b" },
        { name: "Hunting Pack", points: 3, color: "g", group: "Storm" },
        { name: "Ignite Memories", points: 1, color: "r", group: "Storm" },
        { name: "Karakas", points: 3, color: "w" },
        { name: "Library of Alexandria", points: 4, color: "c" },
        { name: "Merchant Scroll", points: 2, color: "u" },
        { name: "Mental Misstep", points: 1, color: "u" },
        { name: "Mystical Tutor", points: 3, color: "u" },
        { name: "Mana Drain", points: 1, color: "u" },
        { name: "Mother of Runes", points: 2, color: "w" },
        { name: "Maze of Ith", points: 1, color: "c" },
        { name: "Passageway Seer", points: 3, color: "b", group: "Initiative" },
        { name: "Price of Progress", points: 3, color: "r" },
        { name: "Reanimate", points: 1, color: "b" },
        { name: "Rilsa Rael, Kingpin", points: 3, color: "g", group: "Initiative" },
        { name: "Strip Mine", points: 4, color: "c" },
        { name: "Sensei's Divining Top", points: 1, color: "c" },
        { name: "Skullclamp", points: 3, color: "c" },
        { name: "Sol Ring", points: 4, color: "c" },
        { name: "Swords to Plowshares", points: 1, color: "w" },
        { name: "Sinkhole", points: 2, color: "b" },
        { name: "Stirring Bard", points: 3, color: "r", group: "Initiative"},
        { name: "Temporal Fissure", points: 2, color: "u", group: "Storm" },
        { name: "Treasure Cruise", points: 3, color: "u" },
        { name: "Tendrils of Agony", points: 3, color: "b", group: "Storm" },
        { name: "Transmute Artifact", points: 2, color: "u" },
        { name: "Tinker", points: 3, color: "u" },
        { name: "Underdark Explorer", points: 3, color: "b", group: "Initiative"},
        { name: "Undercellar Sweep", points: 3, color: "w", group: "Initiative"},
        { name: "Vicious Battlerager", points: 3, color: "b", group: "Initiative" },
        { name: "Volcanic Awakening", points: 2, color: "r", group: "Storm" },
        { name: "Wasteland", points: 2, color: "c" },
        { name: "Weather the Storm", points: 1, color: "g", group: "Storm" },
        { name: "Worldly Tutor", points: 2, color: "g" }
    ];

    var tableBody = document.getElementById("table-body");

    // Loop through the card data and populate the table
    cardData.forEach(function(card) {
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = card.name;
        row.appendChild(nameCell);

        var pointsCell = document.createElement("td");
        pointsCell.textContent = card.points;
        row.appendChild(pointsCell);

        var colorCell = document.createElement("td");
        colorCell.textContent = card.color;
        row.appendChild(colorCell);

        var groupCell = document.createElement("td");
        groupCell.textContent = card.group;
        row.appendChild(groupCell);

        tableBody.appendChild(row);
    });
});
