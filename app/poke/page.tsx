export default function PokeHome() {
  return (
    <section className="w-full min-h-svh" style={{ backgroundImage: 'url(/poke-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex p-6 max-w-screen-md mx-auto bg-amber-100 bg-opacity-30 min-h-svh">
        <nav>
          <h1 className="text-3xl font-bold mb-4">Pokemodoro</h1>
        </nav>
      </main>
    </section>
  )
}