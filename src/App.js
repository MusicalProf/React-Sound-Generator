import styled from "styled-components";
import "./App.css";
import { Howl, Howler } from "howler";
import { useState } from "react";

const audioClips = [
  { src: "audioclips/bubbleblip.mp3", label: "BubbleBlip!", key: "Q" },
  { src: "audioclips/evillaugh.mp3", label: "Evil Laugh!", key: "W" },
  { src: "audioclips/magicaltwinkle.mp3", label: "Magical Twinkle!", key: "E" },
  {
    src: "audioclips/malevoiceclip119.mp3",
    label: "WooHoo!",
    key: "A",
  },
  {
    src: "audioclips/malevoiceclip123.mp3",
    label: "HEY!",
    key: "S",
  },
  { src: "audioclips/reverseswipe.mp3", label: "Reverse Swipe!", key: "D" },
  { src: "audioclips/rewind.mp3", label: "Rewind!", key: "Z" },
  { src: "audioclips/rise.mp3", label: "Rise!", key: "X" },
  { src: "audioclips/trumpetsad.mp3", label: "Sad Trumpet!", key: "C" },
];

function App() {
  const [display, setDisplay] = useState("Press a Key");

  const playSound = (soundTrack, label) => {
    let track = new Howl({
      src: [soundTrack],
    });
    track.play();
    setDisplay(label);
  };

  return (
    <div className="App">
      <Container>
        <Drumkit className="container">
          <Display className="display">{display}</Display>
          <Keys className="keys">
            {audioClips.map((sound) => {
              let soundTrack = sound.src;
              let label = sound.label;
              let key = sound.key;
              return (
                <Key onClick={() => playSound(soundTrack, label)}>{key}</Key>
              );
            })}
          </Keys>
        </Drumkit>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Drumkit = styled.div`
  height: 500px;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px;
  font-weight: 400;
  font-size: 24px;
  font-family: sans-serif;
  border-radius: 18px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 6px 6px 12px #5a5a5a, -6px -6px 12px #ffffff;
`;

const Display = styled.div`
  background-color: red;
  height: 110px;
  width: 315px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex: 0 1 25%;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 6px 6px 12px #5a5a5a, -6px -6px 12px #ffffff;
`;
const Keys = styled.div`
  /* background-color: yellow; */
  width: 315px;
  height: 310px;
  display: flex;
  flex: 1 1 75%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 22px;
`;

const Key = styled.div`
  background-color: green;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 6px 6px 12px #5a5a5a, -6px -6px 12px #ffffff;
  &:hover {
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
`;
