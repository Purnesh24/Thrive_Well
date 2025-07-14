import React, { useState } from "react";
import "./EmotionExplorer.css";

// Define the emotions object outside the component
const emotions = {
  "Joy ": {
    image: "https://i.ibb.co/sXr60p6/Smiling-Face-with-Halo.png",
    options: {
      Contentment: {
        image: "https://i.ibb.co/V0zLyhTR/Smiling-Emoji-with-Eyes-Opened.png",
        details: {
          "Feeling at peace": {
            image: "https://i.ibb.co/Lh0mzXGw/Hugging-Face-Emoji.png",
            messages: [
              "Cherish this moment of peace; it's a beautiful state of being.",
              "You deserve this tranquility. Let it fill your heart.",
              "Peace is a gift. Embrace it fully."
            ]
          },
          "Satisfied with life": {
            image: "https://i.ibb.co/Lh0mzXGw/Hugging-Face-Emoji.png",
            messages: [
              "Your satisfaction is a testament to your journey. Keep going!",
              "Life is good, and you're doing great. Enjoy this contentment.",
              "Satisfaction is a sign of a life well-lived. Be proud!"
            ]
          },
          "Enjoying the moment": {
            image: "https://i.ibb.co/V0zLyhTR/Smiling-Emoji-with-Eyes-Opened.png",
            messages: [
              "The present moment is all we have. Make the most of it!",
              "Your ability to enjoy the moment is a strength. Keep it up!",
              "Life is made of moments like these. Savor them!"
            ]
          }
        }
      },
      Excitement: {
        image: "https://i.ibb.co/sXr60p6/Smiling-Face-with-Halo.png",
        details: {
          "Looking forward to an event": {
            image: "https://i.ibb.co/V0zLyhTR/Smiling-Emoji-with-Eyes-Opened.png",
            messages: [
              "Your excitement is infectious. Let it guide you to new adventures!",
              "Anticipation is half the fun. Enjoy the journey!",
              "Great things are coming. Embrace the excitement!"
            ]
          },
          "Exploring new opportunities": {
            image: "https://i.ibb.co/sXr60p6/Smiling-Face-with-Halo.png",
            messages: [
              "New opportunities are a chance for growth. Go for it!",
              "Your curiosity will lead you to amazing places. Keep exploring!",
              "Opportunities are like sunrises. If you wait too long, you miss them."
            ]
          },
          "Starting a new hobby": {
            image: "https://i.ibb.co/Lh0mzXGw/Hugging-Face-Emoji.png",
            messages: [
              "Hobbies are a great way to express yourself. Enjoy the journey!",
              "Every expert was once a beginner. Keep learning and growing!",
              "A new hobby is a new adventure. Embrace it fully!"
            ]
          }
        }
      }
    }
  },
  "Fear / Anxiety ": {
    image: "https://i.ibb.co/QFtPNZ9s/Fearful-Face-Emoji.png",
    options: {
      Worry: {
        image: "https://i.ibb.co/QFtPNZ9s/Fearful-Face-Emoji.png",
        details: {
          "Overthinking": {
            image: "https://i.ibb.co/SwLTBPn8/Hushed-Face-Emoji.png",
            messages: [
              "Overthinking can be overwhelming. Try to focus on the present moment.",
              "It's natural to have many thoughts, but remember to give yourself a break.",
              "You're doing your best. Trust yourself and the process."
            ]
          },
          "Feeling uncertain": {
            image: "https://i.ibb.co/956p6pH/Dizzy-Face-Emoji.png",
            messages: [
              "Uncertainty is a part of life. Embrace it as an opportunity for growth.",
              "It's okay not to have all the answers. Take one step at a time.",
              "You have the strength to navigate through uncertainty."
            ]
          },
          "Anticipating problems": {
            image: "https://i.ibb.co/QFtPNZ9s/Fearful-Face-Emoji.png",
            messages: [
              "Anticipating problems can be a sign of preparedness. Use it to your advantage.",
              "Focus on solutions rather than problems. You have the ability to overcome challenges.",
              "Worrying about the future won't change it. Focus on what you can do now."
            ]
          }
        }
      },
      Nervousness: {
        image: "https://i.ibb.co/956p6pH/Dizzy-Face-Emoji.png",
        details: {
          "Before a big event": {
            image: "https://i.ibb.co/bRjQf4TR/OMG-Face-Emoji.png",
            messages: [
              "It's natural to feel nervous before a big event. Use that energy to fuel your performance.",
              "You are more capable than you think. Believe in yourself and your abilities.",
              "Nervousness is just excitement in disguise. Embrace it and shine."
            ]
          },
          "Meeting new people": {
            image: "https://i.ibb.co/956p6pH/Dizzy-Face-Emoji.png",
            messages: [
              "Meeting new people can be intimidating, but remember, everyone is unique and has something to offer.",
              "Be yourself. Authenticity is attractive and will help you connect with others.",
              "Every new person is a potential friend. Approach them with an open heart and mind."
            ]
          },
          "Public speaking": {
            image: "https://i.ibb.co/SwLTBPn8/Hushed-Face-Emoji.png",
            messages: [
              "Public speaking can be nerve-wracking, but remember, you have a unique voice and message to share.",
              "Focus on your message and the value you're providing to your audience. You've got this!",
              "Every expert was once a beginner. Keep practicing and honing your skills."
            ]
          }
        }
      }
    }
  },
  "Anger ": {
    image: "https://i.ibb.co/rKdsvwrB/Angry-Emoji.png",
    options: {
      Frustration: {
        image: "https://i.ibb.co/fzgk5XdL/Very-Angry-Emoji.png",
        details: {
          "Feeling stuck": {
            image: "https://i.ibb.co/fzgk5XdL/Very-Angry-Emoji.png",
            messages: [
              "Feeling stuck is a temporary state. Take a deep breath and reassess your situation.",
              "It's okay to feel frustrated when things aren't going as planned. Use it as motivation to find a new path.",
              "You have the power to change your circumstances. Keep moving forward, one step at a time."
            ]
          },
          "Things not working out": {
            image: "https://i.ibb.co/gF6VJmrT/Smirk-Face-Emoji.png",
            messages: [
              "It's natural to feel frustrated when things don't go as planned. Remember, every setback is a setup for a comeback.",
              "Use this frustration as fuel to find new solutions and approaches.",
              "You have the resilience to overcome challenges. Keep going!"
            ]
          },
          "Lack of progress": {
            image: "https://i.ibb.co/rKdsvwrB/Angry-Emoji.png",
            messages: [
              "Progress isn't always visible. Trust the process and keep moving forward.",
              "It's okay to feel frustrated when progress seems slow. Use it as motivation to find new strategies.",
              "Every small step counts. Celebrate your progress, no matter how small it may seem."
            ]
          }
        }
      },
      Resentment: {
        image: "https://i.ibb.co/gF6VJmrT/Smirk-Face-Emoji.png",
        details: {
          "Feeling wronged": {
            image: "https://i.ibb.co/gF6VJmrT/Smirk-Face-Emoji.png",
            messages: [
              "It's natural to feel resentful when you've been wronged. Use this energy to set boundaries and communicate your needs.",
              "Forgiveness is a gift you give yourself. It doesn't excuse the behavior, but it frees you from the burden of resentment.",
              "You deserve to be treated with respect and kindness. Use this experience to clarify your values and boundaries."
            ]
          },
          "Holding onto grudges": {
            image: "https://i.ibb.co/fzgk5XdL/Very-Angry-Emoji.png",
            messages: [
              "Holding onto grudges can be heavy. Consider forgiving, not for them, but for your own peace of mind.",
              "Grudges weigh you down. Let go and free yourself from the past.",
              "Forgiveness is a process. Take your time, but don't let grudges steal your joy."
            ]
          },
          "Unresolved conflicts": {
            image: "https://i.ibb.co/rKdsvwrB/Angry-Emoji.png",
            messages: [
              "Unresolved conflicts can be challenging. Consider reaching out and communicating your feelings.",
              "Conflict is a natural part of relationships. Use it as an opportunity for growth and understanding.",
              "You deserve to be heard and understood. Don't be afraid to express your needs and feelings."
            ]
          }
        }
      }
    }
  },
  "Calm / Neutral ": {
    image: "https://i.ibb.co/1JPycTcN/Relieved-Emoji.png",
    options: {
      Relaxation: {
        image: "https://i.ibb.co/1JPycTcN/Relieved-Emoji.png",
        details: {
          "Feeling at ease": {
            image: "https://i.ibb.co/nNzywhvJ/Shyly-Smiling-Face-Emoji.png",
            messages: [
              "Relaxation is essential. Enjoy this moment of calm and let it rejuvenate you.",
              "You deserve this peace. Let it fill your heart and mind.",
              "Embrace this tranquility. It's good for your soul and well-being."
            ]
          },
          "Enjoying quiet time": {
            image: "https://i.ibb.co/1GmgsqFM/Sunglasses-Emoji.png",
            messages: [
              "Quiet time is a gift. Use it to reflect, recharge, and connect with yourself.",
              "In the silence, you can hear your inner voice. Listen to it and trust its guidance.",
              "Enjoy this moment of solitude. It's a chance to reconnect with yourself and your needs."
            ]
          },
          "Feeling refreshed": {
            image: "https://i.ibb.co/1JPycTcN/Relieved-Emoji.png",
            messages: [
              "Feeling refreshed is a sign of self-care. Keep nurturing your body, mind, and soul.",
              "You deserve to feel refreshed and rejuvenated. Embrace this energy and let it guide you.",
              "Refreshment is a gift. Use it to fuel your passions and pursue your dreams."
            ]
          }
        }
      },
      Mindfulness: {
        image: "https://i.ibb.co/1JPycTcN/Relieved-Emoji.png",
        details: {
          "Being present": {
            image: "https://i.ibb.co/nNzywhvJ/Shyly-Smiling-Face-Emoji.png",
            messages: [
              "Mindfulness is a gift. Cherish this moment and let it fill your heart with gratitude.",
              "Being present is a powerful practice. Keep it up and watch your life transform.",
              "The present moment is all we have. Make the most of it and embrace its beauty."
            ]
          },
          "Practicing meditation": {
            image: "https://i.ibb.co/1GmgsqFM/Sunglasses-Emoji.png",
            messages: [
              "Meditation is a journey, not a destination. Enjoy the process and trust its benefits.",
              "Every moment of meditation is a moment of self-care. Keep nurturing your mind, body, and soul.",
              "Meditation is a gift. Use it to connect with yourself and the world around you."
            ]
          },
          "Focusing on the now": {
            image: "https://i.ibb.co/1JPycTcN/Relieved-Emoji.png",
            messages: [
              "Focusing on the now is a powerful practice. Keep it up and watch your life transform.",
              "The present moment is a gift. Embrace it and let it fill your heart with joy and gratitude.",
              "Every moment is an opportunity to connect with yourself and the world around you. Make the most of it."
            ]
          }
        }
      }
    }
  },
  "Sadness ": {
    image: "https://i.ibb.co/FqCdh15X/Confused-Face-Emoji.png",
    options: {
      Loneliness: {
        image: "https://i.ibb.co/FqCdh15X/Confused-Face-Emoji.png",
        details: {
          "Missing someone": {
            image: "https://i.ibb.co/bMqqjtpk/Very-Sad-Emoji.png",
            messages: [
              "It's okay to miss someone. Reach out to them if you can.",
              "Your feelings are valid. It's natural to miss those we care about.",
              "Missing someone is a sign of the love you shared. Hold onto that."
            ]
          },
          "Feeling isolated": {
            image: "https://i.ibb.co/Gf84ZT61/Crying-Face-Emoji.png",
            messages: [
              "Isolation can be tough, but remember, you are not alone.",
              "Reach out to someone you trust. Connection can make a difference.",
              "Even in isolation, there are people who care about you."
            ]
          },
          "Craving connection": {
            image: "https://i.ibb.co/mFyrrMSk/Sad-Face-Emoji.png",
            messages: [
              "Craving connection is a natural human need. Seek out those who uplift you.",
              "Connection is essential. Don't hesitate to reach out to others.",
              "You deserve meaningful connections. Keep seeking them."
            ]
          }
        }
      }
    }
  }
};

const EmotionExplorer = () => {
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleMainClick = (main) => {
    setSelectedMain(main);
    setSelectedSub(null);
    setSelectedDetail(null);
  };

  const handleSubClick = (sub) => {
    setSelectedSub(sub);
    setSelectedDetail(null);
  };

  const handleDetailClick = (detail) => {
    setSelectedDetail(detail);
  };

  const handleBack = () => {
    if (selectedDetail) {
      setSelectedDetail(null);
    } else if (selectedSub) {
      setSelectedSub(null);
    } else if (selectedMain) {
      setSelectedMain(null);
    }
  };

  const renderCards = () => {
    if (!selectedMain) {
      return Object.keys(emotions).map((key) => (
        <div className="emotion-card" key={key} onClick={() => handleMainClick(key)}>
          <img src={emotions[key].image} alt={`Emotion: ${key}`} className="emotion-image" />
          <p className="emotion-title">{key}</p>
        </div>
      ));
    }

    if (!selectedSub) {
      return Object.keys(emotions[selectedMain].options).map((subKey) => (
        <div className="emotion-card" key={subKey} onClick={() => handleSubClick(subKey)}>
          <img src={emotions[selectedMain].options[subKey].image} alt={`Sub-Emotion: ${subKey}`} className="emotion-image" />
          <p className="emotion-title">{subKey}</p>
        </div>
      ));
    }

    if (!selectedDetail) {
      return Object.keys(emotions[selectedMain].options[selectedSub].details).map((detailKey) => (
        <div className="emotion-card" key={detailKey} onClick={() => handleDetailClick(detailKey)}>
          <img src={emotions[selectedMain].options[selectedSub].details[detailKey].image} alt={detailKey} className="emotion-image" />
          <p className="emotion-title">{detailKey}</p>
        </div>
      ));
    }

    return null;
  };

  const renderMessages = () => {
    if (selectedMain && selectedSub && selectedDetail) {
      const messages = emotions[selectedMain].options[selectedSub].details[selectedDetail].messages;
      return (
        <div className="messages-container">
          <h3>Messages for You</h3>
          {messages.map((msg, index) => (
            <p key={index} className="message-text">{msg}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="emotion-explorer">
      {(selectedMain || selectedSub || selectedDetail) && (
        <div className="back-arrow" onClick={handleBack}>
          ← Back
        </div>
      )}
      <h2 className="section-title">Explore Your Emotions</h2>
      <div className="emotions-container">
        {renderCards()}
      </div>
      {renderMessages()}
    </div>
  );
};

export default EmotionExplorer;