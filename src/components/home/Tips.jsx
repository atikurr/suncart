import Image from "next/image";

export default function SummerTips() {
  const tips = [
    {
      title: "Skin Protection",
      desc: "Protect your skin with SPF & skincare essentials.",
      img: "/assets/tips1.png",
    },
    {
      title: "Stay Hydrated",
      desc: "Drink water & fresh juices to stay cool.",
      img: "/assets/tips2.png",
    },
    {
      title: "Summer Outfit",
      desc: "Wear light & breathable clothes.",
      img: "/assets/tips3.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold  mb-12">
        Summer Care Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="group relative h-87.5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
          >
            {/* Image */}
            <Image
              src={tip.img}
              alt={tip.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white w-full">
              <h3 className="text-xl font-semibold">{tip.title}</h3>

              <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {tip.desc}
              </p>

              <button className="mt-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
