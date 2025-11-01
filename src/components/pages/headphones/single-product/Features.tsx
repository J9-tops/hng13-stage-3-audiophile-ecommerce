export default function Features() {
  return (
    <section className="px-6 py-20 text-white md:px-10 lg:px-0">
      <div className="mx-auto max-w-277.5">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl leading-tight font-bold text-black md:text-4xl">
              FEATURES
            </h2>

            <div className="space-y-6 leading-relaxed text-gray-600">
              <p>
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you&apos;re taking a business call or
                just in your own personal space, the auto on/off and pause
                features ensure that you&apos;ll never miss a beat.
              </p>

              <p>
                The advanced Active Noise Cancellation with built-in equalizer
                allow you to experience your audio world on your terms. It lets
                you enjoy your audio in peace, but quickly interact with your
                surroundings when you need to. Combined with Bluetooth 5.0
                compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology,
                and a modern design aesthetic.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-30 lg:flex-col lg:gap-0">
            <h2 className="mb-8 text-4xl leading-tight font-bold text-black">
              IN THE BOX
            </h2>

            <div className="space-y-4">
              {[
                { quantity: "1x", item: "Headphone Unit" },
                { quantity: "2x", item: "Replacement Earcups" },
                { quantity: "1x", item: "User Manual" },
                { quantity: "1x", item: "3.5mm 5m Audio Cable" },
                { quantity: "1x", item: "Travel Bag" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <span className="min-w-[3rem] text-lg font-bold text-orange-500">
                    {item.quantity}
                  </span>
                  <span className="text-lg text-gray-600">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
