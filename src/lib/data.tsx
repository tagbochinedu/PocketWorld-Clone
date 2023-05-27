import clock from '../../public/clock.svg'
import earth from "../../public/earth.svg";
import puzzle from "../../public/puzzle.svg";
import map from "../../public/map.svg";

export interface Props {
  scrolled: number
  width: number|undefined
  className?: string
}

export interface AnimationState {
  state: boolean
}

export const navlinks = [
    {name: 'Company', link: 'company'},
    {name: 'Our Worlds', link: 'our-worlds'},
    {name:'Careers', link: 'careers'}
]

export const jobs = [
  {
    id: "1",
    title: "Lead Backend Engineer",
    location: "Remote / Fulltime",
    link: "https://jobs.lever.co/pocketworlds/006862b0-0f07-4d5a-aa1d-3b25ab869978",
  },
  {
    id: "2",
    title: "Senior Software Developer (Unity)",
    location: "Remote / Fulltime",
    link: "https://jobs.lever.co/pocketworlds/1fadd62c-cb77-48d7-9eef-45e2d284cfb6",
  },
  {
    id: "3",
    title: "Senior Software Engineer (Python)",
    location: "Remote / Fulltime",
    link: "https://jobs.lever.co/pocketworlds/e5746549-1e20-444c-8f41-db5430e4757d",
  },
  {
    id: "4",
    title: "Live Ops Producer",
    location: "Remote / Fulltime",
    link: "https://jobs.lever.co/pocketworlds/b4d979f5-d10c-4175-bcb7-a73c2f7e8417",
  },
];

export const locations: string[] = [
  "San Francisco, CA",
  "Las Vegas, NV",
  "Copenhagen, Denmark",
  "Toronto, Canada",
  "Austin, TX",
  "Mexico City, MX",
  "Pittsburgh, PA",
  "Chicago, IL",
  "Columbus, OH",
  "Raleigh, NC",
  "Lakeland, FL",
  "New York, NY",
  "London, England",
  "Amsterdam, Netherlands",
  "Talinn, Estonia",
  "Nice, France",
  "Warsaw, Poland",
  "Kyiv, Ukraine",
  "Zagreb, Croatia",
  "Manilla, PH",
  "Buenos Aires, Argentina",
];


//Ethos careers page 
export const ethos = [
  {
    id: 1,
    img: clock,
    title: "Experimentation.",
    desc: "We push boundaries by testing, validating, and iterating on new ideas, processes, and strategies.",
  },
  {
    id: 2,
    img: earth,
    title: "Creator-focused.",
    desc: "We enable people all over the world to fully express their creativity in immersive, digital worlds.",
  },
  {
    id: 3,
    title: "Play.",
    img: puzzle,
    desc: "Through immersive gameplay, we unleash creativity, imagination, and collaboration.",
  },
  {
    id: 4,
    title: "Belonging.",
    img: map,
    desc: "We cultivate inclusive environments that empower individuals and build thriving societies.",
  },
];


