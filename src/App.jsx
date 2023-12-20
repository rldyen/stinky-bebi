import "./App.css";
import Stinky from "./assets/sonny.png";
import Cover from "./assets/back.png";

function App() {
  return (
    <div className="App">
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
        <div>
          <h1 className="font-sans text-2xl m-8 text-rose-400 font-bold">
            Purchased 2023.12.21
          </h1>
        </div>
        <div className="group h-[500px] w-[340px] lg:h-[800px] lg:w-[540px] [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 h-full w-full rounded-xl">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src={Cover}
                alt="Cover"
              />
            </div>

            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src={Stinky}
                alt="Stinky Bebi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
