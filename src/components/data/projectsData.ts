
export interface projectsType {
    id: number
    title: string
    description: string
    image : string
    // image: Object
    GitHub: string
    hosted: string
  }

export const projectsData: projectsType[] = [
    {
        id: 1,
        title: 'Nancy Pelosi Trade Watcher',
        description: `Copies pelosi trades from a service like quiver-quant api and send notifications to my phone/mail. In the future I'd want to integrate this with my robinhood and/or Saving acct. Don't know how yet`,
        image: "https://www.thedailybeast.com/resizer/v2/ZIGUM3JBEJPVPFSYSO4OEGZXPI.jpg?smart=true&auth=aa93b061a0417a67cac8f506bac1bcf53e175e0b5e5786961b719d17c4de47f6&width=1600&height=900",
        GitHub: 'https://github.com/oudeze/pelosi-trade-watcher',
        hosted: 'https://github.com/oudeze/pelosi-trade-watcher',
    },
    {
        id: 2,
        title: 'Algorithms Arcade',
        description: `An arcade website that lets users compare different algorithms for solving common everyday problems`,
        image: "https://i.guim.co.uk/img/media/8152f8ea7f06fd8ef5c68a3a594e6ac35dfd774b/0_342_800_480/master/800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42bb412858826e59cd33e40975ca3ee1",
        GitHub: 'https://github.com/oudeze/algo-arcade',
        hosted: 'https://github.com/oudeze/algo-arcade',
    },
    {
        id: 3,
        title: 'Limit Order Book Simulation',
        description: `A low latency C++ limit order book simulation`,
        image: require("../assets/limit_order_book.jpeg"),
        GitHub: 'https://github.com/oudeze/limit-order-book-sim-practice',
        hosted: 'https://github.com/oudeze/limit-order-book-sim-practice',
    },
    {
        id: 4,
        title: 'Personal Market Data Dashboard',
        description: `Personal trading dashboard built with FastAPI and Next.js.`,
        image: "https://www.anabatic.com/wp-content/uploads/2025/06/pengertian-trading-saham.webp",
        GitHub: 'https://github.com/oudeze/portfolio-dashboard',
        hosted: 'https://github.com/oudeze/portfolio-dashboard',
    },
    {
        id: 5,
        title: 'Clip Notes',
        description: `A small web app for playing and annotating short audio and video clips`,
        image: require("../assets/clip-notes-img.png"),
        GitHub: 'https://github.com/oudeze/clip-notes',
        hosted: 'https://github.com/oudeze/clip-notes',
    },
]
