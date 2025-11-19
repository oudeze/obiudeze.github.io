export interface positionType {
    id: number
    position_title: string
    company: string
    location: [string, string]
    image : string
    // image: Object
    dates: [string, string]
    website: string
    linkedin: string
  }

  export  const positionData: positionType[] = [
    {
        id: 1,
        position_title: 'Software Development Engineer',
        company: 'Amazon',
        location: ['Chicago', 'IL'],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
        dates: ['July 2023', 'Present'],
        website: 'https://www.amazon.jobs/',
        linkedin: 'https://www.linkedin.com/company/amazon/'
    },
    {
      id: 2,
      position_title: 'Associate Engineer',
      company: 'Exelon (BGE)',
      location: ['Baltimore', 'MD'],
      image: require("../assets/exelon_logo.jpeg"),
      dates: ['Jan 2023', 'May 2023'],
      website: 'https://www.exeloncorp.com',
      linkedin: 'https://www.linkedin.com/company/exelon/'
  },
    {
      id: 3,
      position_title: 'Software Development Engineer Intern',
      company: 'Amazon',
      location: ['Chicago', 'IL'],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      dates: ['June 2022', 'Sept 2022'],
      website: 'https://www.amazon.jobs/',
      linkedin: 'https://www.linkedin.com/company/amazon/'
  },
  {
    id: 4,
      position_title: 'Navy Yard Smart Grid Coop',
      company: 'PIDC',
      location: ['Philadelphia', 'PA'],
      image: require("../assets/pidc_logo.jpeg"),
      dates: ['April 2021', 'Sept 2021'],
      website: 'https://www.pidcphila.com/',
      linkedin: 'https://www.linkedin.com/company/pidc/'
  },
{
  id: 5,
      position_title: 'Grid Connection Engineering Coop',
      company: 'PECO an Exelon Company',
      location: ['Philadelphia', 'PA'],
      image: require("../assets/exelon_logo.jpeg"),
      dates: ['May 2020', 'Sept 2020'],
      website: 'https://www.peco.com/',
      linkedin: 'https://www.linkedin.com/company/pecoconnect/'
  },
{
  id: 6,
    position_title: 'STEM Tutor',
    company: 'Drexel University',
    location: ['Philadelphia', 'PA'],
    image: require("../assets/drexel_logo.png"),
    dates: ['Sept 2022', 'May 2023'],
    website: 'https://drexel.edu/',
    linkedin: 'https://www.linkedin.com/school/drexel-university/'
},






    
    
  ]

