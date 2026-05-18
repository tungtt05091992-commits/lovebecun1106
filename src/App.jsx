export default function LongDistanceLoveCounterApp() {
  const startDate = new Date("2026-05-10T00:00:00")
  const today = new Date()

  const diffTime = today - startDate

  const totalSeconds = Math.floor(diffTime / 1000)
  const daysTogether = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  const nextAnniversary = new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())

  if (today > nextAnniversary) {
    nextAnniversary.setFullYear(today.getFullYear() + 1)
  }

  const anniversaryCountdown = Math.ceil(
    (nextAnniversary - today) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-rose-600">
            Em Cún ❤️ Anh Bo
          </h1>
          <p className="text-gray-600 text-lg">
            Every day apart is one day closer to meeting again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-rose-50 rounded-3xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-rose-500 mb-3">
              Days Together
            </h2>
            <p className="text-6xl font-bold text-gray-800">
              {daysTogether}
            </p>
            <p className="text-gray-500 mt-2">
              days since your relationship started
            </p>

            <div className="mt-4 text-lg text-gray-700 font-medium space-y-1">
              <p>⏰ {hours} hours</p>
              <p>⏱️ {minutes} minutes</p>
              <p>❤️ {seconds} seconds</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-3xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-purple-500 mb-3">
              Next Anniversary
            </h2>
            <p className="text-6xl font-bold text-gray-800">
              {anniversaryCountdown}
            </p>
            <p className="text-gray-500 mt-2">days until your next anniversary</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl p-6 shadow-md border border-pink-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Khoảng cách này không xa lắm đâu 🌍
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
              alt="Distance Map"
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="text-gray-600 text-lg space-y-2 mb-4">
            <p>📍 Your location: London 🇬🇧</p>
            <p>📍 Partner location: Vietnam 🇻🇳</p>
            <p>✈️ Distance: ~9,800 km apart but always connected ❤️</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl p-6 shadow-md border border-pink-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Relationship Info
          </h2>

          <div className="space-y-3 text-gray-600 text-lg">
            <div className="flex justify-between">
              <span>Relationship started:</span>
              <span className="font-medium text-gray-800">
                {startDate.toDateString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Status:</span>
              <span className="font-medium text-rose-500">
                Long Distance but Strong 💌
              </span>
            </div>

            <div className="flex justify-between">
              <span>Love level:</span>
              <span className="font-medium text-purple-500">
                Infinite ♾️
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 italic">
          “Distance means so little when someone means so much.”
        </div>
      </div>
    </div>
  )
}
