import {
  createServer,
  Model,
  Response,
  Factory,
  RestSerializer,
} from "miragejs";
import { User, VanData } from "types/types";

createServer({
  models: {
    van: Model,
    user: Model.extend<User>({
      id: "123",
      email: "test@example.com",
      password: "password123",
      name: "John Doe",
    }),
  },

  factories: {
    van: Factory.extend<VanData>({
      id: "Default id",
      type: "Default Type",
      name: "Default Name",
      star: "Default Star",
      year: 2022,
      price: 0,
      fuel: "Default Fuel",
      model: "Default Model",
      mileage: "Default Mileage",
      gearType: "Default gearType",
      imageUrl: "Default imageUrl",
    }),
  },

  serializers: {
    application: RestSerializer,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      star: "4.3",
      year: 2007,
      fuel: "petrol",
      model: "Volkswagen Buzz 1.9",
      gears: "6",
      gearType: "handle",
      mileage: "94,495",
      consumption: "depends",
      engPower: "120 Hp",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple",
      visiblity: "Visible",
      imgGallery: [{}],
    });

    server.create("van", {
      id: "2",
      name: "Marco Polo",
      star: "4.7",
      year: 2021,
      fuel: "diesel",
      model: "Marco Polo 300D 2.0",
      gears: "8",
      gearType: "automatic",
      mileage: "38,231",
      consumption: "8,4/100 mls",
      engPower: "239 Hp",
      price: 80,
      description:
        "The most classic campervan on the market, combining a luxury transformation with the quality and comfort of a top-of-the-range Mercedes Viano model.The most classic campervan on the market, combining a luxury transformation with the quality and comfort of a top-of-the-range Mercedes Viano model.",
      imageUrl:
        "https://images.prismic.io/indiecampers-demo/091021a3-6905-4cec-a9f4-fa492b8e33b0_20221012_145159.jpg?auto=compress,format&rect=0,167,4000,2667&w=1200&h=800",
      type: "luxury",
      visiblity: "Visible",
      imgGallery: [
        {
          id: 1,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/2f666ee0-cdb3-4403-b8e2-b234c4e7fc08_20221012_145211.jpg?auto=compress,format&rect=0,166,4000,2668&w=2000&h=1334&q=30",
        },
        {
          id: 2,
          src: "https://images.prismic.io/indiecampers-demo/2432e0a9-878c-434e-aa83-bdc4ced1eee7_20221012_145812.jpg?auto=compress,format&rect=0,166,4000,2668&w=2000&h=1334&q=30",
          alt: "van",
        },
        {
          id: 3,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/0bd44f06-6e32-4127-8870-d09114ba2362_20221012_152828.jpg?auto=compress,format&rect=0,166,4000,2668&w=2000&h=1334&q=30",
        },
        {
          id: 4,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/64608a77-9db1-49ff-bbd5-4889db6b4a72_20221012_152449.jpg?auto=compress,format&rect=0,999,3000,2001&w=2000&h=1334&q=30",
        },
        {
          id: 5,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/091021a3-6905-4cec-a9f4-fa492b8e33b0_20221012_145159.jpg?auto=compress,format&rect=0,167,4000,2667&w=1200&h=800",
        },
        
      ],
    });

    server.create("van", {
      id: "3",
      name: "Reliable Red",
      star: "4.3",
      year: 2009,
      fuel: "petrol",
      model: "Volkswagen Buzz 2.0",
      gears: "7",
      gearType: "handle",
      mileage: "77,124",
      consumption: "9,2/ 100 mls",
      engPower: "140 Hp",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
      visiblity: "Visible",
      imgGallery: [
        {
          id: 1,
          alt: "van",
          src: "https://img.freepik.com/premium-photo/summer-day-converted-van-by-beach-generative-by-ai_894067-11577.jpg",
        },
        {
          id: 2,
          alt: "van",
          src: "https://img.freepik.com/premium-photo/van-life-sunny-day-generative-by-ai_894067-11578.jpg",
        },
        {
          id: 3,
          alt: "van",
          src: "https://img.freepik.com/free-photo/front-view-beautiful-couple-posing-vintage-portrait_23-2150794830.jpg?t=st=1699686978~exp=1699690578~hmac=68413f8933aaca7c94635967feab15098d46f41711b680d6e81b940980021e0b&w=996",
        },
        {
          id: 4,
          alt: "van",
          src: "https://img.freepik.com/premium-photo/camping-beach_605905-13036.jpg",
        },
        {
          id: 5,
          alt: "van",
          src: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        },
      ],
    });

    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      star: "4.5",
      year: 2006,
      fuel: "petrol",
      model: "Volkswagen Buzz 1.8",
      gears: "6",
      gearType: "handle",
      mileage: "108,294",
      consumption: "depends",
      engPower: "124 Hp",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
      visiblity: "Visible",
      imgGallery: [
        {
          id: 1,
          alt: "van",
          src: "https://img.freepik.com/free-photo/empty-campervan-near-tall-tree_23-2149516065.jpg?w=996&t=st=1699686321~exp=1699686921~hmac=5965ea369b06b0f1f91264fa6ba22b447a7a994f83708ef20dcb051525512a5a",
        },
        {
          id: 2,
          alt: "van",
          src: "https://img.freepik.com/free-photo/side-view-smiley-woman-campervan_23-2149516106.jpg?w=996&t=st=1699631665~exp=1699632265~hmac=93ed9fc5ef35ff7ec2a7c5c9595d1c30a5b09398c7ceead32a9e4f01c84c1c05",
        },
        {
          id: 3,
          alt: "van",
          src: "https://img.freepik.com/free-photo/full-shot-happy-friends-chatting_23-2149516108.jpg?w=996&t=st=1699631700~exp=1699632300~hmac=917b34f34328bce618895e24558c4e1a015133b438a13f5e66ca2504d15c5269",
        },
        {
          id: 4,
          alt: "van",
          src: "https://img.freepik.com/free-photo/women-standing-near-campervan-front-view_23-2149516110.jpg?w=996&t=st=1699686064~exp=1699686664~hmac=4e14bde41002b84756eafffe380cae7da304b97ece1873de3a48d4cd63ddb0d5",
        },
        {
          id: 5,
          alt: "van",
          src: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        },
      ],
    });

    server.create("van", {
      id: "5",
      name: "The Cruiser",
      star: "4.9",
      year: 2020,
      fuel: "diesel",
      model: "Mercedec Sprinter",
      gears: "9",
      gearType: "automatic",
      mileage: "24,982",
      consumption: "7,7/ 100 mls",
      engPower: "172 Hp",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://images.prismic.io/indiecampers-demo/aba40e74-c8fd-4dcc-8590-76098cdd2b6d_IndieCampersSSDSC07995.jpg?auto=compress,format&rect=0,0,4980,3320&w=1200&h=800",
      type: "luxury",
      visiblity: "Visible",
      imgGallery: [
        {
          id: 1,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/5a8daca4-0995-4939-b95a-145e0e70f1b2_IndieCampersSSDSC07938.jpg?auto=compress,format&rect=0,0,5255,3505&w=2000&h=1334&q=30",
        },
        {
          id: 2,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/545de4ec-88c8-48d4-821a-f4dad4a8fe6f_19G.jpg?auto=compress,format&rect=100,0,1079,720&w=2000&h=1334&q=30",
        },
        {
          id: 3,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/3a5bd44b-be8b-4b8f-ac7b-1c47bc656f26_Screenshot+2022-09-27+160036.jpg?auto=compress,format&rect=5,0,1460,974&w=2000&h=1334&q=30",
        },
        {
          id: 4,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/265d6158-c923-4672-90bb-1d56161abec9_Checkout_834387_sliding_door_open.jpg?auto=compress,format&rect=0,135,3264,2177&w=2000&h=1334&q=30",
        },
        {
          id: 5,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/aba40e74-c8fd-4dcc-8590-76098cdd2b6d_IndieCampersSSDSC07995.jpg?auto=compress,format&rect=0,0,4980,3320&w=1200&h=800",
        },
      ],
    });

    server.create("van", {
      id: "6",
      name: "Green Wonder",
      star: "4.7",
      year: 2008,
      fuel: "petrol",
      model: "Volkswagen Buzz",
      gears: "",
      gearType: "handle",
      mileage: "110,248",
      consumption: "depends",
      engPower: "130 Hp",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged",
      visiblity: "Visible",
      imgGallery: [
        {
          id: 1,
          alt: "van",
          src: "https://img.freepik.com/free-photo/nomad-man-traveling-with-family_23-2149431681.jpg?w=996&t=st=1699686248~exp=1699686848~hmac=2dada97a282b30beaee2a80a1e65a470f82561031230502a473bfa53f572970a",
        },
        {
          id: 2,
          alt: "van",
          src: "https://img.freepik.com/free-photo/man-woman-hug-smile-sitting-old-bus_1304-5364.jpg?w=996&t=st=1699686480~exp=1699687080~hmac=e66dfce838615561e5f6375c98a0a5847503b0fc2dd481a335799abf622849ac",
        },
        {
          id: 3,
          alt: "van",
          src: "https://img.freepik.com/free-photo/happy-man-enjoying-nature-while-road-trip_23-2148851275.jpg?w=996&t=st=1699686672~exp=1699687272~hmac=53802a476f69c655ed4f5d1dc012d71e17581712ba936e57e4abe123f3a2ce65",
        },
        {
          id: 4,
          alt: "van",
          src: "https://img.freepik.com/premium-photo/van-surrounded-by-lush-greenery-sounds-nature-created-with-generative-ai_124507-192892.jpg?w=996",
        },
        {
          id: 5,
          alt: "van",
          src: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        },
      ],
    });

    server.create("van", {
      id: "7",
      name: "Green Peace",
      star: "4.5",
      year: 2017,
      fuel: "diesel",
      model: "Renoult Rx 47",
      gears: "8",
      gearType: "automatic",
      mileage: "47,628",
      consumption: "9/ 100",
      engPower: "180 Hp",
      price: 95,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-campsite-mountains-with-rv-wooden-bench_181624-46208.jpg?w=996&t=st=1699630235~exp=1699630835~hmac=439f5eb3e58a4e2f61b27e4c67bed2e711eec004f57d8a4507a3392531bfed92",
      type: "simple",
      visiblity: "Visible",
      imgGallery: [
        {
          id: 1,
          alt: "van",
          src: "https://img.freepik.com/premium-photo/family-vacation-travel-rv-holiday-trip-motorhome-caravan-car-vacation_564276-1415.jpg?w=996",
        },
        {
          id: 2,
          alt: "van",
          src: "https://img.freepik.com/free-photo/nomad-family-having-fun-together-tiny-house_23-2149482506.jpg?w=996&t=st=1699631454~exp=1699632054~hmac=c357498bef5972add81c5e0d2633d9b5aa4ec754fad02a773ffabb2806343c2b",
        },
        {
          id: 3,
          alt: "van",
          src: "https://campervanbulgaria.com/wp-content/uploads/2019/06/rimor-ahorn-12-891x636.jpg",
        },
        {
          id: 4,
          alt: "van",
          src: "https://campervanbulgaria.com/wp-content/uploads/2019/06/rimor-ahorn-13-891x636.jpg",
        },
        {
          id: 5,
          alt: "van",
          src: "https://img.freepik.com/free-photo/beautiful-campsite-mountains-with-rv-wooden-bench_181624-46208.jpg?w=996&t=st=1699630235~exp=1699630835~hmac=439f5eb3e58a4e2f61b27e4c67bed2e711eec004f57d8a4507a3392531bfed92",
        },
      ],
    });

    server.create("van", {
      id: "8",
      name: "Wrangler",
      star: "5",
      year: 2022,
      fuel: "petrol",
      model: "Jeep Wrangler Scout",
      gears: 8,
      gearType: "automatic",
      mileage: "77,362",
      consumption: "16 MPG(US)",
      engPower: "270 HP",
      price: 95,
      description:
        "Jeep Wrangler Unlimited Sport S , an iconic vehicle built for rugged terrains, equipped with automatic transmission, cruise control and A/C, a rear camera and 4-wheel drive.",
      imageUrl:
        "https://images.prismic.io/indiecampers-demo/d777a652-2922-45a4-8008-5490d0a10903_Jeep_Camper001+(16).jpg?auto=compress,format&rect=0,53,1280,853&w=1200&h=800",
      type: "rugged",
      visiblity: "Visible",
      imgGallery: [
        {
          id: 1,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/41731f66-477d-477f-b2e3-3ed38e32e523_Jeep_Camper001+(30).jpg?auto=compress,format&rect=0,53,1280,854&w=2000&h=1334&q=30",
        },
        {
          id: 2,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/0c0c83cb-223f-41b8-84cb-19507161c578_Jeep_Camper001+(24).jpg?auto=compress,format&rect=0,53,1280,854&w=2000&h=1334&q=30",
        },
        {
          id: 3,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/7423187c-ad2f-443e-8a99-46564a481874_Jeep_Camper001+(29).jpg?auto=compress,format&rect=0,53,1280,854&w=2000&h=1334&q=30",
        },
        {
          id: 4,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/5756bf07-9786-4c23-9b32-60dd6185866f_Screenshot+2022-03-03+at+09.46.05.png?auto=compress,format&rect=1,0,2012,1342&w=2000&h=1334&q=30",
        },
        {
          id: 5,
          alt: "van",
          src: "https://images.prismic.io/indiecampers-demo/d777a652-2922-45a4-8008-5490d0a10903_Jeep_Camper001+(16).jpg?auto=compress,format&rect=0,53,1280,853&w=1200&h=800",
        },
      ],
    });

    server.create("user", {
      id: "123",
      email: "test@example.com",
      password: "123",
      name: "Ivan",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    this.timing = 1000;

    this.get("/vans", (schema) => {
      return schema.all("van");
    });

    this.get("/vans", (schema, request) => {
      const sortBy = (request.queryParams.sortBy as string) || "";
      const sortOrder = request.queryParams.sortOrder || "asc";

      let vans = schema.all("van");

      if (sortBy) {
        vans.models = vans.models.sort((a, b): any => {
          const aValue = (a as any)[sortBy];
          const bValue = (b as any)[sortBy];

          const actualSortOrder = Array.isArray(sortOrder)
            ? sortOrder[0]
            : sortOrder;

          if (aValue < bValue) {
            return actualSortOrder.toLowerCase() === "asc" ? -1 : 1;
          }
          if (aValue > bValue) {
            return actualSortOrder.toLowerCase() === "asc" ? 1 : -1;
          }

          return 0;
        });
      }

      if (Array.isArray(sortOrder) && sortOrder[0].toLowerCase() === "desc") {
        vans.models.reverse();
      }

      return vans;
    });

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.find("van", id);
    });

    this.post("/login", (schema, request) => {
      const foundUser = schema.find("user", "123");

      if (!foundUser) {
        return new Response(401, {
          message: "No user with those credentials found!",
        });
      }

      foundUser.update({ password: undefined });
      return {
        user: foundUser,
        token: "Enjoy your day, here's your tokens.",
      };
    });
  },
  //
});
