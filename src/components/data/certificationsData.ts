export interface certificationType {
    id: number
    name: string
    issuer: string
    issueDate: string
    expirationDate: string
    validationNumber: string
    image: string
    validationUrl: string
  }

  export const certificationsData: certificationType[] = [
    {
        id: 1,
        name: 'AWS Certified Developer - Associate',
        issuer: 'Amazon Web Services',
        issueDate: 'November 13, 2025',
        expirationDate: 'November 13, 2028',
        validationNumber: '4305739f68f647f1b54d75710bcf4185',
        image: require("../assets/AWS Certified Developer - Associate certificate.jpg"),
        validationUrl: 'https://aws.amazon.com/verification'
    },
    {
        id: 2,
        name: 'AWS Certified AI Practitioner',
        issuer: 'Amazon Web Services',
        issueDate: 'April 26, 2025',
        expirationDate: 'April 26, 2028',
        validationNumber: '2faac57e49334996ad0286bd5d708b53',
        image: require("../assets/AWS Certified Al Practitioner.jpg"),
        validationUrl: 'https://aws.amazon.com/verification'
    },
    {
        id: 3,
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        issueDate: 'March 30, 2025',
        expirationDate: 'March 30, 2028',
        validationNumber: '58a50dc57ae94b93a5f1e051280f929c',
        image: require("../assets/AWS Certified Cloud Practitioner.jpg"),
        validationUrl: 'https://aws.amazon.com/verification'
    },
  ]

