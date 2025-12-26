// app/data/mockData.js

export const CURRENT_USER = {
  name: "Ayokunle Shittu",
  handle: "@ayostack",
  avatar: 'AS',
  college: "COLPHYS",
  level: "300L",
  bio: "STS Student | Building FunaabFeed 🚀 | Looking for a 200L collab partner for Backend!"
};

export const STORIES = [
  { id: 0, user: "Your Story", avatar: "AD", isUser: true, viewed: false },
  { id: 1, user: "Student Union", avatar: "SU", viewed: false },
  { id: 2, user: "Campus Gist", avatar: "CG", viewed: false },
  { id: 3, user: "Tola", avatar: "T", viewed: true },
  { id: 4, user: "Bayo", avatar: "B", viewed: true },
  { id: 5, user: "VC Office", avatar: "VC", viewed: false },
  { id: 6, user: "Funaabites", avatar: "F", viewed: false },
];

export const TRENDS = [
  { id: 1, category: "Academic", topic: "#FunaabExams", posts: "12.5k" },
  { id: 2, category: "Politics", topic: "SU Elections", posts: "8,903" },
  { id: 3, category: "Lifestyle", topic: "Motion Ground", posts: "4,200" },
  { id: 4, category: "Gist", topic: "SUB Wifi", posts: "2,100" },
  { id: 5, category: "Sports", topic: "VC Cup", posts: "1,500" },
];

export const INITIAL_POSTS = [
  {
    id: 1,
    type: 'announcement',
    community: 'StudentUnion',
    name: "Student Union",
    handle: "@funaabsu",
    avatar: "SU",
    content: "📢 The shuttle bus price remains ₦100. Any driver charging more should be reported to the Welfare Director immediately. #FunaabTransport",
    time: "2h",
    votes: 452,
    comments: 32,
    retweets: 120,
    liked: false, 
    verified: true
  },
  {
    id: 5,
    type: 'question',
    community: 'ComputerScience',
    name: "David Miller",
    handle: "@d_miller",
    avatar: "DM",
    title: "How do I connect to the new CSC Lab WiFi?",
    content: "I tried using my portal login but it keeps rejecting it. Is there a specific configuration for Ubuntu users?",
    time: "15m",
    votes: 12,
    comments: 5,
    retweets: 0,
    liked: false,
    verified: false
  },
  {
    id: 4,
    type: 'poll',
    community: 'Politics',
    name: "Funaab Decides",
    handle: "@funaabdecides",
    avatar: "FD",
    content: "Who are you supporting for the upcoming SUG Presidency? Vote now! 🗳️ #SUGElection",
    time: "3h",
    votes: 1205,
    comments: 450,
    retweets: 89,
    liked: false,
    verified: true,
    poll: {
      totalVotes: 2450,
      options: [
        { id: 1, text: "Team Progressive", votes: 45 },
        { id: 2, text: "Team Aluta", votes: 35 },
        { id: 3, text: "Indifferent", votes: 20 }
      ]
    }
  },
  {
    id: 2,
    type: 'post',
    community: 'General',
    name: "Chidinma Okoro",
    handle: "@chidiluv",
    avatar: "CO",
    content: "Has anyone seen the CSC 304 timetable? The portal is crashing 😭",
    time: "4h",
    votes: 12,
    comments: 8,
    retweets: 2,
    liked: true,
    verified: false
  },
  {
    id: 3,
    type: 'post',
    community: 'Gist',
    name: "Campus Gist",
    handle: "@funaabgist",
    avatar: "CG",
    content: "Happening Now: Massive turnout at the ceremonial building for the freshers orientation! Welcome to the stress... I mean success! 😂🎓",
    image: true,
    time: "5h",
    votes: 890,
    comments: 154,
    retweets: 400,
    liked: false,
    verified: false
  }
];

export const MOCK_COMMENTS = [
  { id: 101, name: "Tola", handle: "@tolabytes", avatar: "T", content: "Finally! Someone said it.", time: "1h", likes: 24 },
  { id: 102, name: "David", handle: "@dave_codes", avatar: "D", content: "Is this confirmed by the Dean?", time: "30m", likes: 5 },
];

export const NOTIFICATIONS = [
  { id: 1, type: "like", content: "Tola and 3 others upvoted your question", time: "12m" },
  { id: 2, type: "mention", content: "mentioned you in c/Engineering", user: "@biodun_dev", time: "1h" },
  { id: 3, type: "follow", content: "started following you", user: "@precious_gems", time: "4h" },
];

export const MOCK_CHATS = [
  { id: 1, type: 'dm', name: "Tola", avatar: "T", lastMessage: "Are you coming to the tutorial?", time: "2m", unread: true, online: true },
  { id: 2, type: 'group', name: "CSC 301 Project Group", avatar: "GP", lastMessage: "Bayo: I'll handle the frontend.", time: "1h", unread: false, members: 4 },
  { id: 3, type: 'channel', name: "Funaab News Updates", avatar: "FN", lastMessage: "📢 Resumption date has been postponed.", time: "1d", unread: true, subscribers: "12.5k" },
  { id: 4, type: 'dm', name: "Bayo", avatar: "B", lastMessage: "Sent the PDF.", time: "1h", unread: false, online: false },
  { id: 5, type: 'group', name: "Funaab Tech Comm", avatar: "TC", lastMessage: "Meeting by 4pm at JAO 3.", time: "3h", unread: true, members: 156 },
];

export const GROUP_CHAT_HISTORY = [
    { id: 1, sender: 'Tola', senderId: 'other1', text: 'Guys, have we submitted the assignment?', time: '10:00 AM' },
    { id: 2, sender: 'Bayo', senderId: 'other2', text: 'Not yet, deadline is tomorrow.', time: '10:05 AM' },
    { id: 3, sender: 'me', senderId: 'me', text: 'I am almost done with my part.', time: '10:10 AM' },
    { id: 4, sender: 'Tola', senderId: 'other1', text: 'Okay, please send it to the drive when done.', time: '10:12 AM' },
];

export const CHAT_HISTORY = [
    { id: 1, sender: 'Tola', senderId: 'other1', text: 'Are you coming to the tutorial?', time: '10:00 AM' },
    { id: 2, sender: 'me', senderId: 'me', text: 'Yes, on my way.', time: '10:05 AM' },
];