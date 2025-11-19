export interface educationType {
    id: number
    school: string
    degree: string
    grade: string
    location: [string, string]
    image : string
    dates: [string, string]

  }

  export  const educationData: educationType[] = [
    {
        id: 1,
        school: 'Drexel University',
        degree: 'B.S. Electrical and Computer Engineering',
        grade: 'GPA: 3.55/4.00',
        location: ['Philadelphia', 'PA'],
        image: require("../assets/drexel_logo.png"),
        dates: ['Sept 2018', 'June 2023'],
    },
    {
        id: 2,
        school: 'Loyola Jesuit College',
        degree: 'High School Diploma',
        grade: '4.0/4.0; 8 Distinction in WASSCE',
        location: ['FCT', 'Nigeria'],
        image: "https://loyolajesuit.org/wp-content/uploads/2025/07/Official_LJC_Web_Logo200px.png",
        dates: ['Sept 2012', 'July 2018'],
    },
  ]
