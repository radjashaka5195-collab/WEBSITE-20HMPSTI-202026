const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-900/15 blur-[120px] rounded-full opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-amber-900/10 blur-[150px] rounded-full opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay hidden md:block"></div>
    </div>
  );
};

export default Background;
