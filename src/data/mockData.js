export const STORIES = [
  {
    id: "s1",
    name: "you",
    avatar: "https://i.pravatar.cc/150?img=12",
    isYou: true,
    images: ["https://picsum.photos/id/1027/800/1400"],
  },
  {
    id: "s2",
    name: "marta_k",
    avatar: "https://i.pravatar.cc/150?img=32",
    images: [
      "https://picsum.photos/id/1025/800/1400",
      "https://picsum.photos/id/1035/800/1400",
    ],
  },
  {
    id: "s3",
    name: "devon.codes",
    avatar: "https://i.pravatar.cc/150?img=51",
    images: ["https://picsum.photos/id/119/800/1400"],
  },
  {
    id: "s4",
    name: "little_owl",
    avatar: "https://i.pravatar.cc/150?img=5",
    images: [
      "https://picsum.photos/id/162/800/1400",
      "https://picsum.photos/id/163/800/1400",
    ],
  },
  {
    id: "s5",
    name: "rui.travels",
    avatar: "https://i.pravatar.cc/150?img=15",
    images: [
      "https://picsum.photos/id/1041/800/1400",
      "https://picsum.photos/id/1044/800/1400",
      "https://picsum.photos/id/1047/800/1400",
    ],
  },
  {
    id: "s6",
    name: "noor.k",
    avatar: "https://i.pravatar.cc/150?img=48",
    images: ["https://picsum.photos/id/177/800/1400"],
  },
  {
    id: "s7",
    name: "hana_p",
    avatar: "https://i.pravatar.cc/150?img=9",
    images: ["https://picsum.photos/id/203/800/1400"],
  },
  {
    id: "s8",
    name: "big.sur.dan",
    avatar: "https://i.pravatar.cc/150?img=60",
    images: [
      "https://picsum.photos/id/1043/800/1400",
      "https://picsum.photos/id/1048/800/1400",
    ],
  },
];

export const SUGGESTIONS = [
  { id: "u1", name: "ines.codes", sub: "Followed by marta_k", avatar: "https://i.pravatar.cc/150?img=20" },
  { id: "u2", name: "paulo.makes", sub: "New to Instagram", avatar: "https://i.pravatar.cc/150?img=22" },
  { id: "u3", name: "willow.studio", sub: "Followed by rui.travels", avatar: "https://i.pravatar.cc/150?img=25" },
  { id: "u4", name: "kenji.eats", sub: "Suggested for you", avatar: "https://i.pravatar.cc/150?img=29" },
  { id: "u5", name: "avery.runs", sub: "Followed by hana_p", avatar: "https://i.pravatar.cc/150?img=33" },
];

export const INITIAL_POSTS = [
  {
    id: "p1",
    username: "rui.travels",
    avatar: "https://i.pravatar.cc/150?img=15",
    location: "Lisbon, Portugal",
    image: "https://picsum.photos/id/1011/900/900",
    caption: "Chasing yellow trams through the Alfama alleys \u2600\ufe0f",
    likes: 1284,
    liked: false,
    saved: false,
    timeAgo: "2h",
    comments: [
      { id: "c1", username: "marta_k", text: "This light is unreal \ud83d\ude0d" },
      { id: "c2", username: "hana_p", text: "adding this to my list" },
    ],
  },
  {
    id: "p2",
    username: "devon.codes",
    avatar: "https://i.pravatar.cc/150?img=51",
    location: "Home office",
    image: "https://picsum.photos/id/60/900/900",
    caption: "New keyboard, same amount of bugs.",
    likes: 342,
    liked: true,
    saved: false,
    timeAgo: "4h",
    comments: [{ id: "c3", username: "noor.k", text: "clicky clicky \u2328\ufe0f" }],
  },
  {
    id: "p3",
    username: "little_owl",
    avatar: "https://i.pravatar.cc/150?img=5",
    location: "",
    image: "https://picsum.photos/id/431/900/900",
    caption: "Sunday reset. slow mornings only \ud83e\udd0d",
    likes: 897,
    liked: false,
    saved: true,
    timeAgo: "6h",
    comments: [
      { id: "c4", username: "big.sur.dan", text: "need this energy" },
      { id: "c5", username: "rui.travels", text: "\ud83d\ude4c\ud83d\ude4c\ud83d\ude4c" },
    ],
  },
  {
    id: "p4",
    username: "big.sur.dan",
    avatar: "https://i.pravatar.cc/150?img=60",
    location: "Big Sur, CA",
    image: "https://picsum.photos/id/1043/900/900",
    caption: "The coast doesn't need a caption.",
    likes: 2310,
    liked: false,
    saved: false,
    timeAgo: "9h",
    comments: [{ id: "c6", username: "devon.codes", text: "wallpaper material" }],
  },
];
