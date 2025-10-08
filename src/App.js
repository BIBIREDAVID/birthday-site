import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Camera, Sparkles, Send, Star } from 'lucide-react';

export default function BirthdayPartyCentral() {
  const [timeLeft, setTimeLeft] = useState({});
  const [activeTab, setActiveTab] = useState('countdown');
  const [guestbookEntries, setGuestbookEntries] = useState([
    { name: 'David', message: 'Happy Birthday! Hope your day is as amazing as you are! 🎉', timestamp: new Date('2025-10-05') },
    { name: 'Idris', message: 'Happy Birthday! I hope today brings you everything you wish for and more!', timestamp: new Date('2025-10-05') },
    { name: 'Demilade', message: 'Happy Birthday to the first friend LASU gave me 🥰I wish you long life and prosperity in good health. I wish you the best in all your endeavors and I can\'t wait to see you at the TOP. Have a wonderful day my love ❤️', timestamp: new Date('2025-10-05') },
    { name: 'Ope', message: 'Happy Birthday to an Incredible Halimomo😂❤️Beyond just being an amazing coursemate, you are a wonderful friend. Your generosity with your time and resources has truly helped so many of us through tough semesters and navigate the cyber world. 💻It is a genuine privilege to celebrate you today. Your consistent support and unwavering kindness have made our shared academic journey smoother for everyone. What truly sets you apart is your remarkable resourcefulness, you never just care, you actively seek out the information and solutions necessary to help others thrive. I hope your birthday 🎂 gives back to you even a fraction of the joy and kindness you put out into the world. 🎉May the year ahead be your most successful yet! 🎊🥳 Warmly,', timestamp: new Date('2025-10-05') },
    { name: 'Damithehybrid', message: 'Happy birthday Halimah ❤️. I pray every good thing life has to offer finds you. I hope all your dreams come true. You’re a beautiful person and you deserve beautiful things. Have a good one 💐😙', timestamp: new Date('2025-10-08') },
  ]);
  const [newEntry, setNewEntry] = useState({ name: '', message: '' });
  const [showWish, setShowWish] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [wishText, setWishText] = useState('');

  // Birthday date - CUSTOMIZE THIS
  const birthdayDate = React.useMemo(() => new Date('2025-10-09T00:00:00'), []);

  // Sample photos - Add your own photos to src/images folder
  const photos = [
    { id: 1, url: require('./images/leemah1.jpg'), caption: 'School Vibes' },
    { id: 2, url: require('./images/leemah2.jpg'), caption: '' },
    { id: 3, url: require('./images/leemah3.jpg'), caption: 'Best friends forever 💜' },
    { id: 4, url: require('./images/leemah4.jpg'), caption: 'Bright smiles ☀️' },
    { id: 5, url: require('./images/leemah5.jpg'), caption: 'Bright smiles ☀️' },
    { id: 6, url: require('./images/leemah6.jpg'), caption: 'Bright smiles ☀️' },
    { id: 7, url: require('./images/leemah7.jpg'), caption: 'Bright smiles ☀️' },
    { id: 9, url: require('./images/leemah9.jpg'), caption: 'Bright smiles ☀️' },
    { id: 10, url: require('./images/leemah10.jpg'), caption: 'Bright smiles ☀️' },
    { id: 11, url: require('./images/leemah11.jpg'), caption: 'Bright smiles ☀️' },
    { id: 12, url: require('./images/leemah12.jpg'), caption: 'Bright smiles ☀️' },
    { id: 13, url: require('./images/leemah13.jpg'), caption: 'Bright smiles ☀️' },
    { id: 14, url: require('./images/leemah14.jpg'), caption: 'Bright smiles ☀️' },
    { id: 15, url: require('./images/leemah15.jpg'), caption: 'Bright smiles ☀️' },
    { id: 16, url: require('./images/leemah16.jpg'), caption: 'Bright smiles ☀️' },
    { id: 17, url: require('./images/leemah17.jpg'), caption: 'Bright smiles ☀️' },
  ];

  const predictions = [
    { name: 'David', prediction: 'Will finally land a good paying job in GRC!' },
    { name: 'Jordan', prediction: 'Will travel to at least 3 new countries' },
    { name: 'Taylor', prediction: 'Will adopt a cat (we all know it\'s happening)' },
    { name: 'Casey', prediction: 'Will become a TikTok star' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = birthdayDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate]);

  const handleSubmitEntry = () => {
    if (newEntry.name && newEntry.message) {
      setGuestbookEntries([...guestbookEntries, { 
        ...newEntry, 
        timestamp: new Date() 
      }]);
      setNewEntry({ name: '', message: '' });
      createConfetti();
    }
  };

  const createConfetti = () => {
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 4000);
  };

  const handleMakeWish = () => {
    if (wishText.trim()) {
      setShowWish(true);
      createConfetti();
      setTimeout(() => {
        setShowWish(false);
        setWishText('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Confetti */}
      {confetti.map(c => (
        <div
          key={c.id}
          className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-fall pointer-events-none"
          style={{
            left: `${c.left}%`,
            top: '-20px',
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-bounce">
            🎉 Halimat's Birthday Bash! 🎂
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light">Turning a new year and feeling older!</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 flex-wrap px-2">
          {[
            { id: 'countdown', icon: Star, label: 'Countdown' },
            { id: 'guestbook', icon: MessageCircle, label: 'Guestbook' },
            { id: 'photos', icon: Camera, label: 'Memories' },
            { id: 'wish', icon: Sparkles, label: 'Make a Wish' },
            { id: 'predictions', icon: Heart, label: 'Predictions' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <tab.icon size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 min-h-[500px]">
          {/* Countdown */}
          {activeTab === 'countdown' && (
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Time Until the Party!</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{value || '0'}</div>
                    <div className="text-white/90 uppercase text-xs sm:text-sm font-semibold">{unit}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 sm:mt-12 text-gray-600">
                <p className="text-lg sm:text-xl mb-2">📅 October 09, 2025</p>
                <p className="text-base sm:text-lg">🎊 Get ready for an unforgettable celebration!</p>
              </div>
            </div>
          )}

          {/* Guestbook */}
          {activeTab === 'guestbook' && (
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Birthday Messages</h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {guestbookEntries.map((entry, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl shadow-md border-l-4 border-orange-400">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-gray-800">{entry.name}</span>
                      <span className="text-sm text-gray-500">{entry.timestamp.toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-700">{entry.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photos */}
          {activeTab === 'photos' && (
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Memory Lane 📸</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {photos.map(photo => (
                  <div key={photo.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                    <img src={photo.url} alt={photo.caption} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white font-semibold">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Make a Wish */}
          {activeTab === 'wish' && (
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">Make a Birthday Wish ✨</h2>
              <div className="mb-6 sm:mb-8">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-4 animate-pulse">🎂</div>
                <p className="text-gray-600 mb-6">Close your eyes, make a wish, and blow out the candles!</p>
              </div>
              
              {!showWish ? (
                <div>
                  <textarea
                    placeholder="Type your wish here (it's a secret! 🤫)"
                    value={wishText}
                    onChange={(e) => setWishText(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 mb-4 h-32 focus:border-purple-500 focus:outline-none resize-none"
                  />
                  <button
                    onClick={handleMakeWish}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    🎈 Blow Out the Candles! 🎈
                  </button>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl">
                  <div className="text-6xl mb-4">🌟 ✨ 💫</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Your Wish Has Been Made!</h3>
                  <p className="text-xl text-gray-700">May all your dreams come true this year! 🎉</p>
                </div>
              )}
            </div>
          )}

          {/* Predictions */}
          {activeTab === 'predictions' && (
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Birthday Predictions 🔮</h2>
              <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">What do your friends think you'll do this year?</p>
              <div className="grid md:grid-cols-2 gap-6">
                {predictions.map((pred, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all transform hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🔮</div>
                      <div>
                        <p className="font-bold text-gray-800 mb-2">{pred.name} predicts:</p>
                        <p className="text-gray-700 italic">"{pred.prediction}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white">
          <p className="text-lg font-light">Made with ❤️ for an amazing friend</p>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </div>
  );
}