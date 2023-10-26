import "./App.css";
import { useEffect, useState } from "react";
import useSound from "use-sound";

import boom from "./sounds/boom.mp3";
import bell from "./sounds/bell.mp3";
import defeat from "./sounds/defeat.mp3";
import enemypenta from "./sounds/enemypenta.mp3";
import ffwin from "./sounds/ffwin.mp3";
// import fortnite from "./sounds/fortnite.mp3";
import masterysound from "./sounds/masterysound.mp3";
// import no from "./sounds/no.mp3";
import penta from "./sounds/penta.mp3";
import qpop from "./sounds/qpop.mp3";
// import sbob from "./sounds/sbob.mp3";
import tbell from "./sounds/tbell.mp3";
import teemo from "./sounds/teemo.mp3";
// import vicroy from "./sounds/vicroy.mp3";
import zelda from "./sounds/zelda.mp3";
import fsound from "./sounds/f.mp3";

const all_champs = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Akshan",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "AurelionSol",
  "Azir",
  "Bard",
  "BelVeth",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "ChoGath",
  "Corki",
  "Darius",
  "Diana",
  "Draven",
  "DrMundo",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "JarvanIV",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "KSante",
  "KaiSa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "KhaZix",
  "Kindred",
  "Kled",
  "KogMaw",
  "LeBlanc",
  "LeeSin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "MasterYi",
  "MissFortune",
  "Mordekaiser",
  "Morgana",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nilah",
  "Nocturne",
  "Nunu",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "RekSai",
  "Rell",
  "RenataGlasc",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "TahmKench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "TwistedFate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "VelKoz",
  "Vex",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Wukong",
  "Xayah",
  "Xerath",
  "XinZhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Zeri",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
];

function App() {
  const cols = 12;
  const sounds = 15;

  //State
  const [random, SetRandom] = useState("");
  const [blockList, setBlockList] = useState([["KSante"], [], [], [], [], []]);
  const [searchText, setSearchText] = useState("");
  const [listNum, setListNum] = useState(0);

  const pool = all_champs.filter((s) => !blockList[listNum].includes(s));

  const volume = { volume: 0.15, interrupt: true };

  //Sound effects
  const [boomSound] = useSound(boom, volume);
  const [bellSound] = useSound(bell, volume);
  const [defeatSound] = useSound(defeat, volume);
  const [enemypentaSound] = useSound(enemypenta, volume);
  const [ffwinSound] = useSound(ffwin, volume);
  // const [fortniteSound] = useSound(fortnite, volume);
  const [masterysoundSound] = useSound(masterysound, volume);
  // const [noSound] = useSound(no, volume);
  const [pentaSound] = useSound(penta, volume);
  const [qpopSound] = useSound(qpop, volume);
  // const [sbobSound] = useSound(sbob, volume);
  const [tbellSound] = useSound(tbell, volume);
  const [teemoSound] = useSound(teemo, volume);
  // const [vicroySound] = useSound(vicroy, volume);
  const [zeldaSound] = useSound(zelda, volume);
  const [fSound] = useSound(fsound, volume);

  useEffect(() => {
    loadList();
  }, []);

  return (
    <>
      <Title></Title>

      <table>
        <caption>
          <div id="random_box">
            <RandomCard {...random} />
            <button
              onClick={() => {
                randomChamp();
              }}
              style={{ marginBottom: 20 }}
            >
              Random
            </button>
          </div>
          Role:{" "}
          <select onChange={(e) => setListNum(e.target.value)}>
            <option selected value={0}>
              All
            </option>
            <option value={1}>Support</option>
            <option value={2}>Bottom</option>
            <option value={3}>Mid</option>
            <option value={4}>Jungle</option>
            <option value={5}>Top</option>
          </select>
          <br />
          <input
            placeholder="Search"
            value={searchText}
            style={{ height: "2em", width: "16em" }}
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <div>
            Champ Pool (Click to Exclude Champs)
            <button style={{ height: "35px", marginLeft: "62.5%" }} onClick={() => blockAll()}>
              Block All
            </button>
          </div>
        </caption>

        <tbody>
          {ChunkArray(
            all_champs
              .filter((s) => !blockList[listNum].includes(s))
              .filter(handleSearch)
              .map((s) => makeChamp(s)),
            cols
          ).map((row) => (
            <ChampRow champs={row} />
          ))}
        </tbody>
      </table>
      <br></br>
      <table>
        <caption>
          <span>
            Blocked Champs (Click to Return to Champ Pool):
            <button style={{ height: "35px", marginLeft: "56%" }} onClick={() => unblockAll()}>
              Unblock All
            </button>
          </span>
        </caption>
        <tbody>
          {ChunkArray(
            blockList[listNum].filter(handleSearch).map((s) => makeChamp(s)),
            cols
          ).map((row) => (
            <ChampRow champs={row} />
          ))}
        </tbody>
      </table>
    </>
  );

  function handleSearch(str) {
    return str.toUpperCase().includes(searchText.toUpperCase());
  }

  function blockAll() {
    let arr = [...blockList];
    arr[listNum] = [...all_champs];
    setBlockList(arr);
    localStorage.setItem("blocklist", JSON.stringify(arr));
  }

  function unblockAll() {
    let arr = [...blockList];
    arr[listNum] = [];
    setBlockList(arr);
    localStorage.setItem("blocklist", JSON.stringify(arr));
  }

  function toggleChamp(name) {
    let temp = [...blockList[listNum], name];
    if (blockList[listNum].includes(name)) {
      temp = blockList[listNum].filter((s) => s !== name);
      console.log(temp);
    }
    let arr = [...blockList];
    arr[listNum] = temp;

    localStorage.setItem("blocklist", JSON.stringify(arr));
    setBlockList(arr);
  }

  function loadList() {
    if (localStorage.hasOwnProperty("blocklist"))
      setBlockList(JSON.parse(localStorage.getItem("blocklist")));
  }

  function randomSound() {
    switch (getRandomInt(sounds)) {
      case 0:
        boomSound();
        break;
      case 1:
        bellSound();
        break;
      case 2:
        defeatSound();
        break;
      case 3:
        enemypentaSound();
        break;
      case 4:
        ffwinSound();
        break;
      // case 5:
      //   fortniteSound();
      //   break;
      case 6:
        masterysoundSound();
        break;
      // case 7:
      //   noSound();
      //   break;
      case 8:
        pentaSound();
        break;
      case 9:
        qpopSound();
        break;
      // case 10:
      //   sbobSound();
      //   break;
      case 11:
        tbellSound();
        break;
      case 12:
        teemoSound();
        break;
      // case 13:
      //   vicroySound();
      //   break;
      case 14:
        zeldaSound();
        break;
      default:
        break;
    }
  }

  async function randomChamp() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    if (pool.length) {
      randomSound();
      await delay(500);
      SetRandom(makeChamp(pool[getRandomInt(pool.length)]));
    } else {
      fSound();
      await delay(500);
      SetRandom("");
      alert("You blocked every Champ!");
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function ChampRow({ champs }) {
    let diff = cols - champs.length;

    return (
      <tr>
        {champs.map((s, i) => (
          <ChampCard {...s} key={s} />
        ))}
        {champs > 1 ? (
          Array(diff)
            .fill("")
            .map((s) => <td style={{ width: "100%", hover: "none" }}> </td>)
        ) : (
          <td></td>
        )}
      </tr>
    );
  }

  function ChampCard({ name, img }) {
    return (
      <td className="champCard" onClick={() => toggleChamp(name)}>
        <img src={img} alt={name} width={90} />
        <p>{name}</p>
      </td>
    );
  }
}

function Title() {
  return <h1>RANDOM CHAMPION TOOL</h1>;
}

function RandomCard({ name = "Pick a Champ!", img = "https://powerinvest.pro/random.png" }) {
  return (
    <div className="random">
      <img
        id="randomPic"
        src={img}
        alt={name}
        style={{
          height: 120,
          width: 120,
        }}
      />
      <p>{name}</p>
    </div>
  );
}

function ChunkArray(arr, chunkSize) {
  const new_array = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    new_array.push(chunk);
  }
  return new_array;
}

function makeChamp(champ) {
  return {
    name: champ,
    img: "https://powerinvest.pro/" + champ.toLowerCase() + ".png",
  };
}

export default App;
