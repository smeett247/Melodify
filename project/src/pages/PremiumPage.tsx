import React, { useState } from 'react';
import { Check, CreditCard, Calendar, Lock, Award, Download, Wifi, Headphones } from 'lucide-react';

const plans = [
  {
    id: 'individual',
    name: 'Individual',
    price: '₹119',
    period: 'per month',
    features: [
      'Ad-free music listening',
      'Download to listen offline',
      'High quality audio',
      'Listen on any device'
    ],
    popular: false,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'duo',
    name: 'Duo',
    price: '₹149',
    period: 'per month',
    features: [
      '2 Premium accounts',
      'Ad-free music listening',
      'Download to listen offline',
      'High quality audio'
    ],
    popular: true,
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 'family',
    name: 'Family',
    price: '₹179',
    period: 'per month',
    features: [
      'Up to 6 Premium accounts',
      'Block explicit music',
      'Ad-free music listening',
      'Download to listen offline'
    ],
    popular: false,
    color: 'from-green-500 to-teal-600'
  }
];

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState('duo');
  const [paymentStep, setPaymentStep] = useState(1);
  
  // Payment form state
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleProceedToPayment = () => {
    setPaymentStep(2);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment logic would go here
    setPaymentStep(3);
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900/40 to-black overflow-auto p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Upgrade to Premium</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Enjoy ad-free music listening, offline downloads, and high-quality audio.
          </p>
        </div>

        {paymentStep === 1 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border ${
                    selectedPlan === plan.id 
                      ? 'border-pink-500' 
                      : 'border-white/10'
                  } transition-all hover:transform hover:scale-[1.02] cursor-pointer`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div 
                      className={`h-1 w-full bg-gradient-to-r ${plan.color} rounded-full ${
                        selectedPlan === plan.id ? 'opacity-100' : 'opacity-50'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={handleProceedToPayment}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Continue with {plans.find(p => p.id === selectedPlan)?.name}
              </button>
            </div>
          </>
        )}

        {paymentStep === 2 && (
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-gray-300 mb-1 text-sm">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="card-number"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-white/10 border border-white/10 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:border-pink-500"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="card-name" className="block text-gray-300 mb-1 text-sm">Cardholder Name</label>
                <input
                  id="card-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/10 border border-white/10 rounded-md py-2 px-3 text-white focus:outline-none focus:border-pink-500"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry-date" className="block text-gray-300 mb-1 text-sm">Expiry Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      id="expiry-date"
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-white/10 border border-white/10 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:border-pink-500"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-gray-300 mb-1 text-sm">CVV</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      className="w-full bg-white/10 border border-white/10 rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:border-pink-500"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md py-3 font-semibold hover:opacity-90 transition-opacity"
                >
                  Subscribe Now
                </button>
                <p className="text-gray-400 text-xs text-center mt-3 flex items-center justify-center">
                  <Lock className="w-3 h-3 mr-1" />
                  Secure payment processed with encryption
                </p>
              </div>
            </form>
          </div>
        )}

        {paymentStep === 3 && (
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Successful!</h2>
            <p className="text-gray-300 mb-8">
              Thank you for subscribing to Melodify Premium. Your account has been upgraded.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-lg">
                <Download className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <p className="text-white text-sm">Offline Downloads</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <Wifi className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-white text-sm">Ad-free Streaming</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <Headphones className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-white text-sm">High Quality Audio</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-white text-sm">Premium Features</p>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = '/app'}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Start Listening
            </button>
          </div>
        )}

        {paymentStep === 1 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Go Premium?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <Download className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Download Music</h3>
                <p className="text-gray-400 text-sm">Listen anywhere, even without internet</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <Wifi className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Ad-free Music</h3>
                <p className="text-gray-400 text-sm">Enjoy uninterrupted music</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <Headphones className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Premium Sound</h3>
                <p className="text-gray-400 text-sm">Experience high quality audio</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Play Any Song</h3>
                <p className="text-gray-400 text-sm">Even on mobile, play any song</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}