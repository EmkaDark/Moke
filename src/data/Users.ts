interface IUser {
  img: string;
  name: string;
  link: string;
  comment: string;
}

const UserData: IUser[] = [
  {
    img: "/Lorenzo.svg",
    name: "Lorenzo",
    link: "@lorenzoo",
    comment: "Amazing Telegram bot! Provides real-time crypto prices and news",
  },
  {
    img: "/Adalina.svg",
    name: "Adalina",
    link: "@ada",
    comment: "Must-have bot for crypto traders. Accurate signals and analysis",
  },
  {
    img: "/Alexander.svg",
    name: "Alexander",
    link: "@alex_x",
    comment: "Superb cryptocurrency bot! Quick updates and reliable data",
  },
  {
    img: "/Rushana.svg",
    name: "Rushana",
    link: "@Nana",
    comment: "Efficient and user-friendly bot. Simplifies crypto trading tasks",
  },
];
export { UserData };
