export function Stats() {
  const stats = [
    {
      num: "Up to 32",
      label: "Charging sockets per Smart DB",
      desc: "One centralized smart control box orchestrates up to 32 parallel slots dynamically, slashing cabling complexity."
    },
    {
      num: "40%",
      label: "Lower installation cost",
      desc: "By chaining sockets to a single cabinet instead of multiple bulky meters, layout material fees fall by up to 40%."
    },
    {
      num: "15 Days",
      label: "Site audit to installation",
      desc: "Our agile engineering squad delivers your active charging network live in exactly 15 business days."
    },
    {
      num: "MW-Scale",
      label: "Proven track record",
      desc: "Engineered and operated by WBG with megawatts of heavy EV infrastructure deployed safely across smart properties."
    }
  ];

  return (
    <section id="developers" className="py-16 bg-transparent text-neutral-800 border-y border-neutral-300 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-neutral-200 p-6 border border-neutral-300 shadow-md shadow-neutral-300/30 flex flex-col justify-between"
            >
              <div>
                {/* Numeric value */}
                <p className="text-3xl font-mono font-extrabold text-primary-600 tracking-tight leading-none mb-1.5">
                  {stat.num}
                </p>
                {/* Main Label */}
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-widest mb-3 leading-tight">
                  {stat.label}
                </h4>
              </div>
              {/* Context text */}
              <p className="text-[11px] leading-relaxed text-neutral-500 font-body font-normal">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
