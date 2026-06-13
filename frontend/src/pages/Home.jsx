import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* TEXT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            ContactHub
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            “Communication should be simple, reliable, and human — that’s exactly
            what we aim to deliver every time you contact us.”
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex-1">
          <img
            src="https://cdn.dribbble.com/userupload/44609923/file/e9d20f478fb9bf19a9256d28e6bd1480.jpg?resize=1504x1132&vertical=center"
            alt="banner"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Features
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {[
            {
              title: "📇 Easy Contact Management",
              desc: "Organize and manage all your contacts in one place.",
            },
            {
              title: "⚡ Fast & Responsive",
              desc: "Lightning-fast performance across all devices.",
            },
            {
              title: "🔒 Secure Data",
              desc: "Your contact information is सुरक्षित and protected.",
            },
            {
              title: "🌐 Access Anywhere",
              desc: "Use your app anytime, anywhere.",
            },
            {
              title: "💡 Simple UI",
              desc: "Clean and minimal design for easy use.",
            },
            {
              title: "🧠 Smart Organization",
              desc: "Find and manage contacts quickly.",
            },
            {
              title: "📱 Mobile Friendly",
              desc: "Fully responsive across all devices.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Home;