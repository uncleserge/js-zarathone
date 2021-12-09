class Player {
    constructor(name, life, hp, img, weapon) {
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
        this.attack = function () {
            console.log(this.name + ' ' + 'Fight...');
        };
    }
}

function createPlayer(style, player) {
    const $player = document.createElement('div');
    $player.classList.add(style);

    //creatte progressbar
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $life.innerText = player.hp;
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    //cretate character
    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const arenas = document.querySelector('.arenas');
    arenas.appendChild($player);
}

let player1 = new Player('Scorpion', 40, 123, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 'gun');
createPlayer('player1', player1);
console.dir(player1);

let player2 = new Player('Sonya', 40, 456, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', 'fireball');
createPlayer('player2', player2);
console.dir(player2);