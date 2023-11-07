export const quizStateMachine = {
  currentQuestion: "question1", // Initialize the current question as null to start
  questions: {
    question1: {
      text: "How much CFD experience do you have?",
      image: null,
      answers: [
        {
          text: "I have never traded CFD`s before", // beginner
          nextQuestion: "question2",
        },
        {
          text: "I have trading experience, but not with CFD`s", // beginner
          nextQuestion: "question2",
        },
        {
          text: "I have some experience trading CFD`s", // intermediate
          nextQuestion: "question9",
        },
        {
          text: "I have a significant amount of experience trading CFD`s", // advanced
          nextQuestion: "question9",
        },
      ],
    },
    question2: {
      text: "Ah, so you are new to the world of CFD trading, welcome to the party! \n Let's gauge your general trading knowledge to determine which Oanda products you will like the most. \n What is a currency pair? (ex. USD/CAD, JPY/USD)",
      image: null,
      answers: [
        {
          text: "A currency pair refers to the prices set by each government to exchange their currencies", // wrong
          nextQuestion: "question3",
        },
        {
          text: "A currency pair is the average quoted price of two currencies by the United States government at any given moment in time", // wrong
          nextQuestion: "question3",
        },
        {
          text: "A currency pair is a price quote of the exchange rate for two different currencies traded in FX markets", // correct
          nextQuestion: "question10",
        },
        {
          text: "I don`t know", // wrong
          nextQuestion: "question3",
        },
      ],
    },
    question3: {
      text: "Assume that you own a stock called ABC, whose price is falling rapidly. \n Which of the following statements is most correct about its Volatility?",
      image: null,
      answers: [
        {
          text: "ABC`s Volatility will remain unchanged because a sell off is only reflected in the Volume of a stocks trading", // wrong
          nextQuestion: "question4",
        },
        {
          text: "ABC`s Volatility will sharply increase as more traders rush to sell off their positions and limit losses", // correct
          nextQuestion: "question10",
        },
        {
          text: "ABC`s Volatility will sharply decrease as more traders rush to sell off their positions and limit losses", // wrong
          nextQuestion: "question4",
        },
        {
          text: "ABC`s Volatility will only spike if the entire market crashes", // wrong
          nextQuestion: "question4",
        },
      ],
    },
    question4: {
      text: "Amazing, thanks for answering those questions! \n Let's refine things a bit more before I finalize my recommendations. \n Would you be interested in a series of free, high quality tutorials to help you learn about CFD trading?",
      image: null,
      answers: [
        {
          text: "Yes",
          nextQuestion: "question5",
          tag: "TUTORIALS",
        },
        {
          text: "No",
          nextQuestion: "question5",
          tag: "FOREX",
        },
      ],
    },
    question5: {
      text: "Great, thank you! Next question, which of the following platforms are you most interesed in using?",
      image: null,
      answers: [
        {
          text: "A platform that is easy to log into and runs directly in my web browser",
          nextQuestion: "question6",
          tag: "WEB",
        },
        {
          text: "A platform that I can download on to my computer and run as a stand alone program",
          nextQuestion: "question6",
          tag: "MT4",
        },
        {
          text: "A mobile application that I can easily pull up on my phone",
          nextQuestion: "question6",
          tag: "MOBILE",
        },
        {
          text: "All of the above! I want to trade CFD`s on multiple platforms.",
          nextQuestion: "question7",
          tag: "ALL_PLATFORMS"
        },
      ],
    },
    question6: {
      text: "Got it! Next question, are you interested in a user friendly platform that can be customized to suite any level of trading knowledge?",
      image: null,
      answers: [
        {
          text: "Yes, I need something that will help me trade more efficiently as I gain experience",
          nextQuestion: "question8",
          tag: "MT4",
        },
        {
          text: "No, I am really looking for a broker that can offer reliable, transparent pricing on my trades",
          nextQuestion: "question7",
          tag: "TRANSPARENT_PRICING",
        },
      ],
    },
    question7: {
      text: "Perfect, it sounds like you need a variety of high quality services to achieve your trading goals. \n Next question, are you interested in CFD`s that cover different markets, such as FOREX, Commodities, Precious Metals and more?",
      image: null,
      answers: [
        {
          text: "Yes, I want to trade in several different markets.",
          nextQuestion: "question8",
          tag: "ALL_MARKETS",
        },
        {
          text: "Not really, I want to focus on one or two specific markets",
          nextQuestion: "question8",
          tag: "FOREX"
        },
      ],
    },
    question8: {
      text: "Understood, thank you! Last question, which of the following features is most imporant to you?",
      image: null,
      answers: [
        {
          text: "Fast and accurate real-time pricing updates",
          nextQuestion: "question12",
          tag: "FAST_PRICING",
        },
        {
          text: "The ability to execute trades from and customize charts while I trade",
          nextQuestion: "question12",
          tag: "CUSTOM_WEB",
        },
        {
          text: "Premium features like expert advisors, chart-ladder order entry, alert trading and more",
          nextQuestion: "question12",
          tag: "PREMIUM",
        },
      ],
    },
    question9: {
      text: "Great, looks like you have some trading experience! \n Let`s start by assessing your trading knowledge to determine which Oanda products you will benefit from. \n Which of the following processes are important to minimising risk when trading forex?",
      image: null,
      answers: [
        {
          text: "Trading with a stop loss", // wrong
          nextQuestion: "question2",
        },
        {
          text: "Knowing and understanding how the market operates", // wrong
          nextQuestion: "question2",
        },
        {
          text: "Monitoring all open positions that you currently hold", // wrong
          nextQuestion: "question2",
        },
        {
          text: "All of the above", // correct
          nextQuestion: "question10",
        },
      ],
    },
    question10: {
      text: 'Awesome! \n One more knowledge question and then we can move on. \n What is "gapping"?',
      image: null,
      answers: [
        {
          text: 'When the market "jumps" from one price to another price, leaving a "gap" on the charts and no opportunity to trade between the two prices', // correct
          nextQuestion: "question11",
          tag: "ADVANCED",
        },
        {
          text: "A trading strategy designed to simultaneously buy and sell currency pairs", // wrong
          nextQuestion: "question4",
          tag: "BONUS"
        },
      ],
    },
    question11: {
      text: "Thanks! \n I have one more question before we display your results. \n Which of the following features would be most helpful to you?",
      image: null,
      answers: [
        {
          text: "Efficient pricing and execution that works with a Mobile, Web and MT4 trading platforms",
          nextQuestion: "question12",
          tag: "PRICING_MT4",
        },
        {
          text: "Powerful technical analysis tools to help you customize trades and setup your stop losses",
          nextQuestion: "question12",
          tag: "PREMIUM_TECHNICAL",
        },
        {
          text: "A highly customizable Web interface that can be used on computers, mobile and tablets",
          nextQuestion: "question12",
          tag: "CUSTOM_CHARTS",
        },
      ],
    },
    // last question in quiz
    question12: {
      text: "Thank you so much for taking the Charged Up assessment by Oanda! \n We are going to process your responses and match you with the best products Oanda has to offer!",
      image: null,
      answers: [],
    },
  },
};

export const userResults = {
  CUSTOM_CHARTS: {
    heading: "Cutting edge charts",
    text: "OANDA offers cutting edge charting tools for traders on Web, Mobile and the MT4 Platform. \n - Place, view, and close trades and orders, including limit and stop orders, directly from Advanced Charts.  \n - 11 popular chart types, including candles, Renko, point & figure and Heikin-Ashi. \n - Choose from over 65+ popular technical indicators, including Moving Averages, MACD, Bollinger Bands® and more",
    link: "https://www.oanda.com/ca-en/trading/tools/advanced-charts/",
    image: "/images/chart.jpg",
  },
  PREMIUM_TECHNICAL: {
    heading: "MT4 Premium tools",
    text: "With an OANDA MT4 premium upgrade you get access to power technical tools like the Correlation Matrix, Stealth Orders and even a Tick chart trader that allows for fast market entries.",
    link: "https://www.oanda.com/ca-en/trading/platforms/mt4-premium-indicators/",
    image: "/images/premuimchart.jpg",
  },
  PRICING_MT4: {
    heading: "MT4 Pricing",
    text: "Get reliable pricing on all trades and data from OANDA Web & Mobile Platforms. You can even use OANDA`s pricing and data ported into the MT4 or TradingView platforms.",
    link: "https://www.oanda.com/ca-en/trading/our-pricing/",
    image: "/images/img14.jpg",
  },
  ADVANCED: {
    heading: "Make your trading fast and easy",
    text: "So your an advanced trader who wants cutting edge technology? OANDA has it, with everything from a mobile trading app to keyboard short cuts customized for full time traders.",
    link: "https://www.oanda.com/ca-en/trading/tools/",
    image: "/images/img15.jpg",
  },
  PREMIUM: {
    heading: "Premium services",
    text: "OANDA offers a wide variety of premium services to enhance your trading experience. From five-minute orderbooking to one-cancels-the-other (OCO) for breakouts or reversions.",
    link: "https://www.oanda.com/ca-en/trading/platforms/metatrader-4/",
    image: "/images/img2.jpg",
  },
  CUSTOM_WEB: {
    heading: "Enhanced web experience",
    text: "Interested in a fully supported Web Platform? OANDA has your back! Out Web platform includes advanced charting and a next generation engine to support speedy trades.",
    link: "https://www.oanda.com/ca-en/trading/platforms/oanda-trade-web/",
    image: "/images/img3.jpg",
  },
  FAST_PRICING: {
    heading: "Get the best pricing",
    text: "Fast execution ensures you are getting the best available price when you trade with us. Our award-winning* trading platform is engineered for reliability and speed.",
    link: "https://www.oanda.com/ca-en/trading/our-pricing/",
    image: "/images/img4.jpg",
  },
  ALL_MARKETS: {
    heading: "Enter all the markets using a single platform",
    text: "With over 100 CFD`s including, Commodities, Metals, Indices, Crypto, FOREX & Bonds, OANDA is a truly global broker.",
    link: "https://www.oanda.com/ca-en/trading/cfds/",
    image: "/images/img5.jpg",
  },
  ALL_PLATFORMS: {
    heading: "Enter all the markets from any device",
    text: "Choose between our fully customisable OANDA Trade web-based platform or apps for mobiles and tablets. You can also speculate on the markets using TradingView and MT4.",
    link: "https://www.oanda.com/ca-en/trading/platforms/",
    image: "/images/img6.jpg",
  },
  TRANSPARENT_PRICING: {
    heading: "Transparent pricing, no surprises",
    text: "OANDA promises its users, honest and up front pricing on all of its services. Whether you are on margin or completing a wire-transfer you can rely on OANDA.",
    link: "https://www.oanda.com/ca-en/trading/our-charges/",
    image: "/images/img7.jpg",
  },
  MOBILE: {
    heading: "Trade from anywhere with our user-friendly app",
    text: "Trade on the go with our native apps for Android, iPhone and tablet devices. Access our full range of CFD markets along with advanced mobile charting functionality, dozens of technical indicators and tools.",
    link: "https://www.oanda.com/ca-en/trading/platforms/oanda-trade-mobile/",
    image: "/images/img8.jpg",
  },
  MT4: {
    heading: "MT4",
    text: "Use the powerful MT4 trading platform with OANDA`s pricing and execution.",
    link: "https://www.oanda.com/ca-en/trading/platforms/metatrader-4/",
    image: "/images/img9.jpg",
  },
  WEB: {
    heading: "Web platform",
    text: "Trade CFDs with an award-winning* web trading platform. Our powerful platform combines an intuitive interface, a suite of technical analysis tools, a sophisticated charting package and more.",
    link: "https://www.oanda.com/ca-en/trading/platforms/oanda-trade-web/",
    image: "/images/img10.jpg",
  },
  TUTORIALS: {
    heading: "Learn from the market leader to make money",
    text: "New to trading CFD`s? OANDA has you covered, with a full tutorial section that will educate you on the world of CFD`s.",
    link: "https://www.oanda.com/ca-en/trading/learn/",
    image: "/images/img16.jpg",
  },
  FOREX: {
    heading: "Master the world of FOREX trading",
    text: "We offer competitive CFD spreads on over 70 forex pairs, including all the majors and minors.",
    link: "https://www.oanda.com/ca-en/trading/cfds/forex/",
    image: "/images/img12.jpg",
  },
  BONUS: {
    heading: "Earn a welcome Bonus!",
    text: "Boost your trading account with our welcome offer for new account holders. You can earn a bouns of up to $13,500",
    link: "hhttps://www.oanda.com/ca-en/bonus/",
    image: "/images/img13.jpg",
  },
};
