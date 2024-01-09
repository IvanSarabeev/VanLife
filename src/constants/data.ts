import { ReactComponent as IconMap } from "../assets/svgs/map.svg";
import { ReactComponent as IconPhoto } from "../assets/svgs/photo.svg";
import { ReactComponent as IconCalendar } from "../assets/svgs/calendar.svg";
import { ReactComponent as IconChartLine } from "../assets/svgs/chart-line.svg";
import { ReactComponent as IconUsers } from "../assets/svgs/users.svg";
import { ReactComponent as IconSparkles } from "../assets/svgs/sparkles.svg";
import { ReactComponent as IconCreditCard } from "../assets/svgs/credit-card.svg";

export const featuresData = [
  {
    id: 1,
    icon: IconMap,
    title: "Set an schedule",
    text: "We provide a solution for you to be able to use renting van, yes by just one click you can book it and use at any time",
  },
  {
    id: 2,
    icon: IconPhoto,
    title: "Capture the Moment",
    text: "Schedule an adventure with friends. On holidays, there are many interesting places where you and your friends can visit.",
  },
  {
    id: 3,
    icon: IconCalendar,
    title: "Inspired by nature",
    text: "We share expert tips about slow and enjoying travel, so you can travel in a way that leaves positive impact on any destination accross the globe",
  },
  {
    id: 4,
    icon: IconChartLine,
    title: "Together on road",
    text: "We provide top-quality and assurance - 24/7, campervans for rent or sale in several locations across the globe. Dispatcher who can help you out if you are stuck and many more features",
  },
];

export const headerLinks = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Vans", to: "/vans" },
  { title: "Host", to: "/host" },
  { title: "Log In", to: "/login" },
] as const;

export const testimonial = [
  {
    subTitle: "Leigh hired a Marco Polo model",
    text: "The whole process was straightforward and easy. We had a great time and we will not hesitate in recommending the Marco Polo model and we shall be planning our next trip soon",
    imgSrc:
      "https://res.cloudinary.com/hqxyevlf6/image/upload/c_thumb,f_auto,g_faces,h_60,w_60,z_0.6/pobunpbuanoqsdhkrkvz.jpg",
  },
  {
    subTitle: "Skye rented the Cruiser",
    text: "I don't think I can say enough to properly convey the wonderful experience we had renting the camper van! The customer service was wonderful, we will absolutely be utilizing them again for next motnhs holiday",
    imgSrc:
      "https://res.cloudinary.com/hqxyevlf6/image/upload/c_thumb,f_auto,g_faces,h_60,w_60,z_0.6/us5kchghtjbvcq9mnvrq.jpg",
  },
  {
    subTitle: "Samantha hired Modest Explorer",
    text: "We had the best time! The Modest Explorer was a perfect choice. I was able to go anywhere we wanted and enjoyed the holiday to the max. Thoroughly recommend! ",
    imgSrc:
      "https://res.cloudinary.com/hqxyevlf6/image/upload/c_thumb,f_auto,g_faces,h_49,w_49,z_0.6/v1570103341/dtahaymj4gqrf89dqdgn.jpg",
  },
  {
    subTitle: "Stephen rented a Wrangler",
    text: "The customer service team was wonderful, everything was perfect, we had a friendly welcoming and they very clear explained how it all works - they made our camper van experience easy and fun and not half scary as I was thinking. ",
    imgSrc:
      "https://res.cloudinary.com/hqxyevlf6/image/upload/c_thumb,f_auto,g_faces,h_60,w_60,z_0.6/x7ycu7jq7x4wwb5tlajd.jpg",
  },
];

export const showcaseTrip = [
  {
    icon: IconSparkles,
    iconFill: "text-[#ffd100]",
    background: "bg-[#ffee99]",
    title: "Best price",
    text: "Cancel your trip with a full refund up to 12 days or before your pick-up date",
  },
  {
    icon: IconUsers,
    iconFill: "text-[#81c6d6]",
    background: "bg-[#e6f4f7]",
    title: "Trusted by thousands",
    text: "Pick up your desired campervan at +20 locations accross Europe",
  },
  {
    icon: IconCreditCard,
    iconFill: "text-[#87d195]",
    background: "bg-[#e7f7ec]",
    title: "Wide range of brands.",
    text: "Chose between a vans that are fully equipped, and ready to go on trip",
  },
];

export const partnersLists = [
  { text: "20+ campervans across Europe" },
  { text: "Fully digital experience" },
  { text: "Bedding, kitchen & emergency kit" },
  { text: "Airport optional" },
  { text: "One-way trips available" },
  { text: "24/7 Pick-up & Drop-off" },
  { text: "Insurance & road assistance" },
  { text: "Unlimited miles/km" },
];

export const vanStaff = [
  {
    imgSrc:
      "https://img.freepik.com/free-photo/portrait-successful-young-entrepreneur-standing-looking-camera-crossing-arms-smiling_482257-5018.jpg?w=996&t=st=1700659902~exp=1700660502~hmac=e6ad6415f5f9dc512ff9cc8ccd51be5a8d5469df3a691adb44833e5d6b295bd7",
    name: "Jessica Russel",
    title: "Insurance Specialist",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-photo/young-businessman-happy-expression_1194-1653.jpg?w=996&t=st=1700661160~exp=1700661760~hmac=1ac2113a6ec9965d7570af7fa5e5755f0b54150d3e02129a21f7d1aa0c8192bf",
    name: "Greg MacBarthy",
    title: "Ceo of VanLife",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-photo/front-view-man-working-travel-agency_52683-136439.jpg?w=996&t=st=1700659794~exp=1700660394~hmac=e67a7836ad244dc8ba50bf6cbce86d08c9e05556ec1ae4ea0ec4815411c8d896",
    name: "Michal Capland",
    title: "Marketing Specialist",
  },
];

export const navLinks = [
  { to: "income", title: "Income" },
  { to: "vans", title: "Vans" },
  { to: "reviews", title: "Reviews" },
];

export const categoryNav = [
  { id: 1, title: "Simple", type: "simple" },
  { id: 2, title: "Luxury", type: "luxury" },
  { id: 3, title: "Rugged", type: "rugged" },
];

export const selectOptions = [
  { value: "Date: Newest First" },
  { value: "Date: Oldest Year" },
  { value: "Price: Lowest Cost" },
  { value: "Price: Highest Cost" },
];
