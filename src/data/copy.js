import spotifyClone from "../assets/Linkedin-spotify klon@2x.jpg";
import orderSumCard from "../assets/Linkedin-best-app - v2@2x.jpg";
import passGen from "../assets/Linkedin-pw-gen-v2.jpg";
import klarna from "../assets/Linkedin-klarna@2x.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import macHero from "../assets/mac-hero-square.png";
import CalleHero from "../assets/CalleHero2.jpg";
import flagapp from "../assets/flaggapp.jpg"

export const COPY = {
  hero: {
    title: "Skapar webbplatser som engagerar och konverterar",
    subtitle:
      "Jag utvecklar användarvänliga system som effektiviserar logistik och förbättrar kundupplevelsen utan krångliga arbetsflöden.",
    cta1: {
      text: "TA KONTAKT",
      callback: () => {
        window.open(
          "https://www.linkedin.com/in/carl-lembren-217596341/",
          "_blank"
        );
      },
    },
    cta2: {
      text: "SE PROJEKT",
      to: "/#projects",
    },
    statistic1: "1 000+ timmar kodat",
    statistic2: "Certifierad webbutvecklare",
  },
  aboutMe: {
    title: "Carl Lembrén",
    subtitle:
      "Jag hjälper företag att öka sin försäljning med smarta webblösningar utan att behöva investera i dyra system.",
    cta: {
      text: "TA KONTAKT",
      callback: () => {
        window.open(
          "https://www.linkedin.com/in/carl-lembren-217596341/",
          "_blank"
        );
      },
    },
    statistics: [
      { statistic: "500 +", text: "Timmar kodat" },
      { statistic: "10 +", text: "Projekt byggda" },
    ],
    profilePicture: CalleHero,
  },
  projects: [
    {
      img: spotifyClone,
      title: "Spotify Klon",
      listOfTechStack: ["React", "Node", "API"],
      description: `A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Celelembren/Spotify-Clone" },
        { Icon: OpenInNewIcon, href: "https://calles-spotify-clones.vercel.app/" },
      ],
      rightAlign: true,
    },
    {
      img: flagapp,
      title: "Flag App",
      listOfTechStack: ["API", "React", "Responsivitet"],
      description: `Det här projektet är ett perfekt exempel på hur jag kan bidra i roller som Frontend Developer, UI/UX Developer, eller Web Developer i organisationer som värdesätter detaljerad och interaktiv design.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Celelembren/Flag-App" },
        { Icon: OpenInNewIcon, href: "https://flag-app-seven.vercel.app/" },
      ],
      rightAlign: false,
    },
    {
      img: passGen,
      title: "Password generator",
      listOfTechStack: ["Javascript", "CSS", "HTML", "Responsivitet"],
      description: `Denna lösenordsgeneratorapp är en bra illustration av hur jag kan bidra till roller som Frontend Developer, UI/UX Developer eller Software Developer där säkerhet och användarvänlighet är prioriterat.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Celelembren/PW-generator" },
        { Icon: OpenInNewIcon, href: "https://password-generator-gamma-lyart-42.vercel.app/" },
      ],
      rightAlign: true,
    },
    {
      img: klarna,
      title: "Beställningskortet",
      listOfTechStack: [, "Node", "API", "Express"],
      description: `Jag har byggt en webbtjänst som integrerar Klarna Checkout API, utvecklad med Node.js och Express. Projektet inkluderar autentiska API-anrop för att skapa en fungerande checkout-lösning och simulera en verklig köpprocess med produkter hämtade från FakeStore API.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Celelembren/Klarna" },
        { Icon: OpenInNewIcon, href: "https://tsm-klarna-checkout-start-here-lac.vercel.app/" },
      ],
      rightAlign: false,
    },
  ],
  reviews: [
    {
      author: "John Doe",
      reviewText: `Marcus's expertise in page speed optimization has greatly improved our website's performance. Our conversions have increased by 20% since working with him.`,
      img: CalleHero,
      title: "Head of Cool Stuff",
    },
  ],
  contact: {
    title: "Nå ut till mig på Linkedin!",
    subtitle:
      "Vill du samarbeta eller veta mer om mina projekt? Kontakta mig gärna på LinkedIn – jag ser fram emot att höra från dig!",
    cta: {
      text: "TA KONTAKT",
      callback: () =>
        window.open(
          "https://www.linkedin.com/in/carl-lembren-217596341/",
          "_blank"
        ),
    },
  },
};
