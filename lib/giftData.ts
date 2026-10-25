export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Get engaged & build a beautiful life together 💍",
  "Sit on the beach in winter and hug each other tightly 🌊",
  "Travel together to all our dream destinations ✈️",
  "Walk in the rain holding hands and never let go 🌧️",
  "Grow old together, loving you more every single day 🤍",
];

export const defaultLoveLetterParagraphs: string[] = [
  "To my Ahmed, loving you is the easiest and most beautiful thing I've ever done.",
  "You are my safe place, my warmth, and the only person I can be truly myself with.",
  "I love the man you are—your gentle heart, your reassuring voice, and your sweet smile.",
  "I choose you through the easy days and the hard ones, today and for all our years ahead.",
  "Happy 21th birthday to my forever favorite person, my heart, and my future.",
  "Always and forever, your favorite lady. 🤍",
];

const ahmedGift: GiftData = {
  senderName: "malak",
  receiverName: "Ahmed",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, Ahmed",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "I LOVE YOU SO, SO MUCH, MY LOVE. TODAY IS YOUR DAY, BUT YOU WILL ALWAYS BE ONE OF MY FAVORITE GIFTS IN LIFE",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 21th Birthday, Ahmed! 🎂✨",
  birthdayWishesMessage:
    "Happy Birthday to my baby, my love, my favorite person in the whole world, and the one who holds such a special place in my heart.I love you for who you are, for the person you are today, and for the person you’re still becoming. I love the little things about you that you probably don’t even notice, the things that make you different from everyone else, and the way you’ve managed to make yourself such an important part of my heart. And if I could go back to the beginning and experience everything all over again, I would still want to know you, still want to make those memories with you, and still want to feel all those butterflies that come with loving you. Because you are you, and that has always been something special to me.And finally, my love, if there’s one thing I want you to remember today and every day after it, it’s that you are so incredibly loved. I hope I get to keep loving you in a thousand different ways, celebrating you on a thousand different occasions, and reminding you a thousand times over",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To My Ahmed, With All My Love <3",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;