import { GridGame } from "../../components/GridGame";
import { ListGame } from "../../components/ListGame";
import './style.scss'

export function HallGames() {
  const newGames = [
    {
      name: "Dark Souls 1",
      plataforms: ["windows"],
      categories: ['Souls Like', 'Dark Fantasy', 'Action'],
      price: "50,00",
      picture:
        "https://a-static.besthdwallpaper.com/agente-killjoy-valorant-riot-video-game-papel-de-parede-2560x1440-73388_51.jpg",
    },
    {
      name: "Dark Souls 2",
      plataforms: ["windows"],
      categories: ["SurvivalOpen", "World Survival", "CraftCrafting"],
      price: "30,00",
      picture:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9695da32975f3e85/62cc8547719eb73892495716/VALORANT_ANNO22_SHATTERED_16x9_27s0.jpg",
    },
    {
      name: "Valorant 3",
      plataforms: ["windows"],
      categories: ["Horror", "Cute", "Roguelike"],
      price: "45,00",
      picture:
        "https://a-static.besthdwallpaper.com/agente-killjoy-valorant-riot-video-game-papel-de-parede-2560x1440-73388_51.jpg",
    },
  ];

  const halloweenGames = [
    {
      name: "Inscryption",
      categories: ['Souls Like', 'Dark Fantasy', 'Action'],
      oldPrice: "100,00",
      newPrice: "30,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg",
    },
    {
      name: "Hades",
      categories: ["Action", "Roguelike", "Indie", "Action"],
      oldPrice: "80,00",
      newPrice: "15,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    },
    {
      name: "Darkest Dungeon",
      categories: ["Turn-BasedCombat", "DarkFantasy", "Roguelike"],
      oldPrice: "30,00",
      newPrice: "15,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg",
    },
    {
      name: "Outlast",
      categories: ["Horror", "First-Person", "Survival Horror"],
      oldPrice: "100,00",
      newPrice: "40,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg",
    },
  ];

  const earlyAccessGames = [
    {
      name: "Stardew Valleyt",
      plataforms: ["windows"],
      categories: ["Farming Sim", "Life Sim", "Pixel Graphics"],
      price: "20,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    },
    {
      name: "Little Nightmares",
      plataforms: ["windows"],
      categories: ["Horror", "Atmospheric", "Adventure"],
      price: "30,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg",
    },
    {
      name: "Bendy and the Ink Machine",
      plataforms: ["windows"],
      categories: ["Horror", "First-Person", "Singleplayer", "PuzzleDark"],
      price: "45,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/622650/header.jpg",
    },
  ];

  const cheapGames = [
    {
      name: "Little Misfortune",
      categories: ["Adventure", "Point & Click", "Indie"],
      oldPrice: "100,00",
      newPrice: "19,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg",
    },
    {
      name: "Limbo",
      categories: ["Puzzle", "Platformer", "Indie"],
      oldPrice: "80,00",
      newPrice: "15,00",
      picture: "https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg",
    },
    {
      name: "Darkwood",
      categories: ["Horror", "Survival"],
      oldPrice: "30,00",
      newPrice: "10,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/274520/header.jpg",
    },
    {
      name: "Slender: The Arrival",
      categories: ["Horror", "Survival Horror", "First-Person"],
      oldPrice: "100,00",
      newPrice: "20,00",
      picture:
        "https://cdn.akamai.steamstatic.com/steam/apps/252330/header.jpg",
    },
  ];

  return (
    <div className="lista-component">
      <section className="section-title">
        <h1 className="initial-title">New Games</h1>
        {
          <ul className="lista-jogos">
            {newGames.map((component, index) => {
              return <ListGame key={index} item={component} />;
            })}
          </ul>
        }
      </section>
      <section className="section-title">
        <h1 className="initial-title">Halloween Games</h1>
        {
          <ul className="grid-jogos">
            {halloweenGames.map((component, index) => {
              return <GridGame key={index} item={component} />;
            })}
          </ul>
        }
      </section>
      <section className="section-title">
        <h1 className="initial-title">Early Acess Games</h1>
        {
          <ul className="lista-jogos">
            {earlyAccessGames.map((component, index) => {
              return <ListGame key={index} item={component} />;
            })}
          </ul>
        }
      </section>
      <section className="section-title">
        <h1 className="initial-title">Cheap Games</h1>
        {
          <ul className="grid-jogos">
            {cheapGames.map((component, index) => {
              return <GridGame key={index} item={component} />;
            })}
          </ul>
        }
      </section>
    </div>
  );
}
