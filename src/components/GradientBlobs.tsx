const GradientBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-500/20 blur-[150px] animate-blob" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-500/15 blur-[130px] animate-blob-delay-2" />
      <div className="absolute bottom-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[140px] animate-blob-delay-4" />
      <div className="absolute top-[60%] right-[30%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] animate-blob" />
      {/* Extra accent blobs */}
      <div className="absolute top-[10%] left-[50%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] animate-blob-delay-4" />
      <div className="absolute bottom-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-rose-500/8 blur-[110px] animate-blob-delay-2" />
    </div>
  );
};

export default GradientBlobs;
