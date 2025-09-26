import Image from "next/image";
import Schyter from "@/assets/pokemons/schyter.png";
import { Timer } from "@/lib/components/Timer";
import { useState } from "react";


export default function PokeHome() {
  const [time, setTime] = useState(25 * 60);
  const [pokemonStats, setPokemonStats] = useState({ level: 5, timers: 3, tasksCompleted: 1 });
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  

  return (
    <section className="w-full min-h-svh" style={{ backgroundImage: 'url(/poke-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex flex-col p-6 max-w-screen-md mx-auto bg-amber-100 bg-opacity-30 min-h-svh">
        <nav className="w-full flex">
          <h1 className="text-3xl font-bold mb-4">Pokemodoro</h1>
        </nav>
        <section id="timer-pokemon" className="flex flex-col w-full items-center">
          <Timer />
          <div id="pokemon" className="flex flex-col items-center">
            <Image src={Schyter} alt="Schyter" width={200} height={200} />
            <div>
              <span>lvl: 5</span>
              <span>timers: 3</span>
              <span>Task completed: 1</span>
          </div>
          </div>
        </section>
      </main>
    </section>
  )
}