'use client';
import Image from "next/image";
import Schyter from "@/assets/pokemons/schyter.png";
import Bg from "@/assets/background/kanto.jpg";
import { Timer } from "@/lib/components/Timer";
import { useState } from "react";


export default function PokeHome() {
  const [time, setTime] = useState(25 * 60);
  const [pokemonStats, setPokemonStats] = useState({ level: 5, timers: 3, tasksCompleted: 1 });
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  

  return (
    <section className="w-full min-h-svh" style={{ backgroundImage: `url(${Bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex flex-col p-6 max-w-screen-md mx-auto bg-stone-800 bg-opacity-50 min-h-svh">
        <nav className="w-full flex">
          <h1 className="text-3xl font-bold mb-4">Pokemodoro</h1>
        </nav>
        <section id="timer-pokemon" className="flex flex-col w-full items-center">
          <Timer />
          <div id="pokemon" className="flex flex-col items-center">
            <Image src={Schyter} alt="Schyter" width={300} height={300} />
            <div>
              <span>lvl: {pokemonStats.level}</span>
              <span>timers: {pokemonStats.timers}</span>
              <span>Task completed: {pokemonStats.tasksCompleted}</span>
          </div>
          </div>
        </section>
      </main>
    </section>
  )
}