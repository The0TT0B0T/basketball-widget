/// Basketball Game Scraper yes
const tableBody = document.getElementById('table-body');

const getGame = () => {
    fetch('http://localhost:5500/games')
    .then (response => response.json())
    .then (games => {
        populateTable(games);
    })
    .catch (err => console.log(err));

};

getGame();

const populateTable = (games) => {
    console.log(games);
    for (const game of games) {
        const tableRow = document.createElement('tr');
        const tableIcon = document.createElement('td');

        tableIcon.textContent = '🏀';
        tableRow.append(tableIcon);

        const gameDetails = {
            arena: game.arena,
            date: game.date,
            live: game.status,
            season: game.season,
            team: game.teams,
            score: game.scores,
        }

        for (const gameDetail in gameDetails) {
            const tableCell = document.createElement('td');
            const word = Array.from(gameDetails[gameDetail]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div');

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index);
            }
            tableRow.append(tableCell);
        }

        tableBody.append(tableRow);
    }
};