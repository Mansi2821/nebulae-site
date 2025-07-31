export default function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="w-full h-full bg-black relative">
        {/* Twinkling stars */}
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[10%] left-[20%] animate-pulse"></div>
        <div className="absolute w-[3px] h-[3px] bg-white rounded-full top-[30%] left-[60%] animate-ping"></div>
        <div className="absolute w-[1.5px] h-[1.5px] bg-blue-300 rounded-full top-[50%] left-[40%] animate-pulse delay-200"></div>
        <div className="absolute w-[2.5px] h-[2.5px] bg-pink-300 rounded-full top-[80%] left-[75%] animate-pulse delay-500"></div>
        <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-[20%] left-[85%] animate-ping delay-700"></div>

        {/* Glow center effect */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-500 opacity-30 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </div>
  );
}



