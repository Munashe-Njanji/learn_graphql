const courses = [
  {
    id: "1",
    name: "Introduction to Programming",
    description: "Learn the basics of programming with Python.",
    price: 19.99,
    discount: false,
    genreId: "1",
  },
  {
    id: "2",
    name: "Data Structures and Algorithms",
    description: "Explore fundamental data structures and algorithms.",
    price: 29.99,
    discount: true,
    genreId: "1",
  },
  {
    id: "3",
    name: "Web Development with JavaScript",
    description: "Build interactive web applications with JavaScript.",
    price: 39.99,
    discount: false,
    genreId: "2",
  },
  {
    id: "4",
    name: "React Fundamentals",
    description: "Learn the basics of React and build user interfaces.",
    price: 24.99,
    discount: true,
    genreId: "2",
  },
  {
    id: "5",
    name: "Node.js for Beginners",
    description: "Get started with Node.js and build server-side applications.",
    price: 14.99,
    discount: false,
    genreId: "2",
  },
  {
    id: "6",
    name: "Machine Learning with Python",
    description: "Explore the world of machine learning with Python libraries.",
    price: 49.99,
    discount: true,
    genreId: "3",
  },
  {
    id: "7",
    name: "Deep Learning with TensorFlow",
    description: "Build deep learning models with TensorFlow.",
    price: 34.99,
    discount: false,
    genreId: "3",
  },
  {
    id: "8",
    name: "Natural Language Processing with Python",
    description: "Process and analyze text data with Python.",
    price: 29.99,
    discount: true,
    genreId: "3",
  },
  {
    id: "9",
    name: "Data Visualization with Python",
    description: "Create stunning visualizations with Python libraries.",
    price: 19.99,
    discount: false,
    genreId: "4",
  },
  {
    id: "10",
    name: "Business Intelligence with Python",
    description: "Analyze business data and make informed decisions.",
    price: 39.99,
    discount: true,
    genreId: "4",
  },
  {
    id: "11",
    name: "Introduction to Cybersecurity",
    description:
      "Learn the fundamentals of cybersecurity and protect your data.",
    price: 24.99,
    discount: false,
    genreId: "5",
  },
  {
    id: "12",
    name: "Ethical Hacking",
    description: "Explore ethical hacking techniques and secure your systems.",
    price: 34.99,
    discount: true,
    genreId: "5",
  },
  {
    id: "13",
    name: "Cloud Computing with AWS",
    description:
      "Learn the basics of cloud computing with Amazon Web Services.",
    price: 19.99,
    discount: false,
    genreId: "5",
  },
  {
    id: "14",
    name: "Introduction to DevOps",
    description: "Explore the principles and practices of DevOps.",
    price: 29.99,
    discount: true,
    genreId: "5",
  },
  {
    id: "15",
    name: "Agile Project Management",
    description: "Learn the principles of agile project management.",
    price: 14.99,
    discount: false,
    genreId: "5",
  },
  {
    id: "16",
    name: "Introduction to Design Thinking",
    description: "Learn the principles and practices of design thinking.",
    price: 19.99,
    discount: true,
    genreId: "1",
  },
  {
    id: "17",
    name: "User Experience (UX) Design",
    description: "Learn the principles of user experience design.",
    price: 24.99,
    discount: false,
    genreId: "1",
  },
  {
    id: "18",
    name: "Graphic Design Fundamentals",
    description: "Learn the basics of graphic design.",
    price: 14.99,
    discount: true,
    genreId: "1",
  },
  {
    id: "19",
    name: "Introduction to Photography",
    description: "Learn the basics of photography.",
    price: 29.99,
    discount: false,
    genreId: "1",
  },
  {
    id: "20",
    name: "Video Editing with Adobe Premiere Pro",
    description: "Learn how to edit videos with Adobe Premiere Pro.",
    price: 39.99,
    discount: true,
    genreId: "1",
  },
  {
    id: "21",
    name: "Introduction to Music Production",
    description: "Learn the basics of music production.",
    price: 19.99,
    discount: false,
    genreId: "2",
  },
  {
    id: "22",
    name: "Music Theory for Beginners",
    description: "Learn the basics of music theory.",
    price: 14.99,
    discount: true,
    genreId: "2",
  },
  {
    id: "23",
    name: "Songwriting and Composition",
    description: "Learn how to write and compose songs.",
    price: 24.99,
    discount: false,
    genreId: "2",
  },
  {
    id: "24",
    name: "Introduction to Audio Engineering",
    description: "Learn the basics of audio engineering.",
    price: 29.99,
    discount: true,
    genreId: "2",
  },
  {
    id: "25",
    name: "Music Business and Marketing",
    description: "Learn about the music business and how to market your music.",
    price: 34.99,
    discount: false,
    genreId: "2",
  },
  {
    id: "26",
    name: "Introduction to Finance",
    description: "Learn the basics of finance and investing.",
    price: 19.99,
    discount: true,
    genreId: "4",
  },
  {
    id: "27",
    name: "Personal Finance Management",
    description: "Learn how to manage your personal finances.",
    price: 24.99,
    discount: false,
    genreId: "4",
  },
  {
    id: "28",
    name: "Investing for Beginners",
    description: "Learn the basics of investing.",
    price: 14.99,
    discount: true,
    genreId: "4",
  },
  {
    id: "29",
    name: "Real Estate Investing",
    description: "Learn about real estate investing.",
    price: 29.99,
    discount: false,
    genreId: "4",
  },
  {
    id: "30",
    name: "Entrepreneurship and Small Business",
    description: "Learn about entrepreneurship and starting your own business.",
    price: 39.99,
    discount: true,
    genreId: "4",
  },
];

const genres = [
  { id: "1", name: "Programming" },
  { id: "2", name: "Web Development" },
  { id: "3", name: "Data Science" },
  { id: "4", name: "Business" },
  { id: "5", name: "Technology" },
];

const reviews = [
  {
    id: "1",
    date: "2023-11-15",
    title: "Excellent course!",
    comment:
      "This course was very informative and well-organized. I learned a lot from it.",
    rating: 5,
    courseId: "1",
  },
  {
    id: "2",
    date: "2023-11-18",
    title: "Great instructor!",
    comment:
      "The instructor was very knowledgeable and passionate about the subject.",
    rating: 4,
    courseId: "1",
  },
  {
    id: "3",
    date: "2023-11-20",
    title: "Highly recommended!",
    comment:
      "I would highly recommend this course to anyone interested in learning programming.",
    rating: 5,
    courseId: "1",
  },
  {
    id: "4",
    date: "2023-11-16",
    title: "Challenging but rewarding",
    comment: "This course was challenging but I learned a lot from it.",
    rating: 4,
    courseId: "2",
  },
  {
    id: "5",
    date: "2023-11-19",
    title: "Clear and concise",
    comment:
      "The instructor explained the concepts very clearly and concisely.",
    rating: 5,
    courseId: "2",
  },
  {
    id: "6",
    date: "2023-11-21",
    title: "Fun and engaging",
    comment:
      "This course was fun and engaging, and I learned a lot about web development.",
    rating: 5,
    courseId: "3",
  },
  {
    id: "7",
    date: "2023-11-17",
    title: "Well-paced",
    comment:
      "The course was well-paced and I was able to keep up with the material.",
    rating: 4,
    courseId: "3",
  },
  {
    id: "8",
    date: "2023-11-20",
    title: "Excellent resources",
    comment: "The course provided excellent resources for further learning.",
    rating: 5,
    courseId: "3",
  },
  {
    id: "9",
    date: "2023-11-18",
    title: "Informative and insightful",
    comment: "This course was very informative and insightful.",
    rating: 5,
    courseId: "6",
  },
  {
    id: "10",
    date: "2023-11-21",
    title: "Practical and applicable",
    comment:
      "The course provided practical and applicable knowledge that I can use in my work.",
    rating: 4,
    courseId: "6",
  },
  {
    id: "11",
    date: "2023-11-19",
    title: "Challenging but rewarding",
    comment: "This course was challenging but I learned a lot from it.",
    rating: 4,
    courseId: "7",
  },
  {
    id: "12",
    date: "2023-11-22",
    title: "Great instructor!",
    comment:
      "The instructor was very knowledgeable and passionate about the subject.",
    rating: 5,
    courseId: "7",
  },
  {
    id: "13",
    date: "2023-11-20",
    title: "Highly recommended!",
    comment:
      "I would highly recommend this course to anyone interested in learning natural language processing.",
    rating: 5,
    courseId: "8",
  },
  {
    id: "14",
    date: "2023-11-16",
    title: "Excellent course!",
    comment:
      "This course was very informative and well-organized. I learned a lot from it.",
    rating: 5,
    courseId: "9",
  },
  {
    id: "15",
    date: "2023-11-19",
    title: "Great instructor!",
    comment:
      "The instructor was very knowledgeable and passionate about the subject.",
    rating: 4,
    courseId: "9",
  },
  {
    id: "16",
    date: "2023-11-21",
    title: "Highly recommended!",
    comment:
      "I would highly recommend this course to anyone interested in learning data visualization.",
    rating: 5,
    courseId: "9",
  },
  {
    id: "17",
    date: "2023-11-17",
    title: "Challenging but rewarding",
    comment: "This course was challenging but I learned a lot from it.",
    rating: 4,
    courseId: "10",
  },
  {
    id: "18",
    date: "2023-11-20",
    title: "Clear and concise",
    comment:
      "The instructor explained the concepts very clearly and concisely.",
    rating: 5,
    courseId: "10",
  },
  {
    id: "19",
    date: "2023-11-22",
    title: "Fun and engaging",
    comment:
      "This course was fun and engaging, and I learned a lot about business intelligence.",
    rating: 5,
    courseId: "10",
  },
  {
    id: "20",
    date: "2023-11-18",
    title: "Well-paced",
    comment:
      "The course was well-paced and I was able to keep up with the material.",
    rating: 4,
    courseId: "11",
  },
  {
    id: "21",
    date: "2023-11-21",
    title: "Excellent resources",
    comment: "The course provided excellent resources for further learning.",
    rating: 5,
    courseId: "11",
  },
  {
    id: "22",
    date: "2023-11-19",
    title: "Informative and insightful",
    comment: "This course was very informative and insightful.",
    rating: 5,
    courseId: "12",
  },
  {
    id: "23",
    date: "2023-11-22",
    title: "Practical and applicable",
    comment:
      "The course provided practical and applicable knowledge that I can use in my work.",
    rating: 4,
    courseId: "12",
  },
  {
    id: "24",
    date: "2023-11-20",
    title: "Challenging but rewarding",
    comment: "This course was challenging but I learned a lot from it.",
    rating: 4,
    courseId: "13",
  },
  {
    id: "25",
    date: "2023-11-23",
    title: "Great instructor!",
    comment:
      "The instructor was very knowledgeable and passionate about the subject.",
    rating: 5,
    courseId: "13",
  },
  {
    id: "26",
    date: "2023-11-21",
    title: "Highly recommended!",
    comment:
      "I would highly recommend this course to anyone interested in learning cloud computing.",
    rating: 5,
    courseId: "13",
  },
  {
    id: "27",
    date: "2023-11-17",
    title: "Excellent course!",
    comment:
      "This course was very informative and well-organized. I learned a lot from it.",
    rating: 5,
    courseId: "14",
  },
  {
    id: "28",
    date: "2023-11-20",
    title: "Great instructor!",
    comment:
      "The instructor was very knowledgeable and passionate about the subject.",
    rating: 4,
    courseId: "14",
  },
  {
    id: "29",
    date: "2023-11-22",
    title: "Highly recommended!",
    comment:
      "I would highly recommend this course to anyone interested in learning DevOps.",
    rating: 5,
    courseId: "14",
  },
  {
    id: "30",
    date: "2023-11-18",
    title: "Challenging but rewarding",
    comment: "This course was challenging but I learned a lot from it.",
    rating: 4,
    courseId: "15",
  },
  {
    id: "31",
    date: "2023-11-21",
    title: "Clear and concise",
    comment:
      "The instructor explained the concepts very clearly and concisely.",
    rating: 5,
    courseId: "15",
  },
  {
    id: "32",
    date: "2023-11-23",
    title: "Fun and engaging",
    comment:
      "This course was fun and engaging, and I learned a lot about agile project management.",
    rating: 5,
    courseId: "15",
  },
  {
    id: "33",
    date: "2023-11-19",
    title: "Well-paced",
    comment:
      "The course was well-paced and I was able to keep up with the material.",
    rating: 4,
    courseId: "16",
  },
  {
    id: "34",
    date: "2023-11-22",
    title: "Excellent resources",
    comment: "The course provided excellent resources for further learning.",
    rating: 5,
    courseId: "16",
  },
  {
    id: "35",
    date: "2023-11-20",
    title: "Informative and insightful",
    comment: "This course was very informative and insightful.",
    rating: 5,
    courseId: "17",
  },
  {
    id: "36",
    date: "2023-11-23",
    title: "Practical and applicable",
    comment:
      "The course provided practical and applicable knowledge that I can use in my work.",
    rating: 4,
    courseId: "17",
  },
  {
    id: "37",
    date: "2023-11-21",
    title: "Challenging but rewarding",
    comment: "This course was challenging but I learned a lot from it.",
    rating: 4,
    courseId: "18",
  },
  {
    id: "38",
    date: "2023-11-24",
    title: "Great instructor!",
    comment:
      "The instructor was very knowledgeable and passionate about the subject.",
    rating: 5,
    courseId: "18",
  },
  {
    id: "39",
    date: "2023-11-22",
    title: "Highly recommended!",
    comment:
      "I would highly recommend this course to anyone interested in learning graphic design.",
    rating: 5,
    courseId: "18",
  },
  {
    id: "40",
    date: "2023-11-18",
    title: "Excellent course!",
    comment:
      "This course was very informative and well-organized. I learned a lot from it.",
    rating: 5,
    courseId: "19",
  },
  {
    id: "41",
    date: "2023-11-21",
    title: "Great instructor!",
    comment:
      "The instructor was very knowledgeable and passionate about the subject.",
    rating: 4,
    courseId: "19",
  },
  {
    id: "42",
    date: "2023-11-23",
    title: "Highly recommended!",
    comment:
      "I would highly recommend this course to anyone interested in learning photography.",
    rating: 5,
    courseId: "19",
  },
  {
    id: "43",
    date: "2023-11-19",
    title: "Challenging but rewarding",
    comment: "This course was challenging but I learned a lot from it.",
    rating: 4,
    courseId: "20",
  },
  {
    id: "44",
    date: "2023-11-22",
    title: "Clear and concise",
    comment:
      "The instructor explained the concepts very clearly and concisely.",
    rating: 5,
    courseId: "20",
  },
  {
    id: "45",
    date: "2023-11-24",
    title: "Fun and engaging",
    comment:
      "This course was fun and engaging, and I learned a lot about video editing.",
    rating: 5,
    courseId: "20",
  },
  {
    id: "46",
    date: "11/15/2023",
    title: "Amateur Video Editor",
    comment:
      "This course was fun and engaging, and I learned a lot about video editing.",
    rating: 3,
    courseId: "3",
  },
  {
    id: "47",
    date: "11/15/2023",
    title: "Aspiring Filmmaker",
    comment:
      "I found this course to be quite informative, but the pacing was a bit too fast for my liking.",
    rating: 2,
    courseId: "10",
  },
  {
    id: "48",
    date: "11/15/2023",
    title: "Video Production Enthusiast",
    comment:
      "The instructor's explanations were clear, but I felt that some of the topics could have been explored in more depth.",
    rating: 2,
    courseId: "12",
  },
  {
    id: "49",
    date: "11/15/2023",
    title: "Creative Video Creator",
    comment:
      "I struggled to follow along with the course material, and I found the assignments to be overly challenging.",
    rating: 2,
    courseId: "22",
  },
  {
    id: "50",
    date: "11/15/2023",
    title: "Disappointed Student",
    comment:
      "Unfortunately, I did not find this course to be very helpful. The content seemed outdated, and the assignments were not engaging.",
    rating: 0,
    courseId: "28",
  },
  {
    id: "51",
    date: "11/15/2023",
    title: "Dissatisfied Learner",
    comment:
      "I was disappointed with this course. The material was dry and poorly explained, and I didn't feel like I learned much.",
    rating: 2,
    courseId: "13",
  },
  {
    id: "52",
    date: "11/15/2023",
    title: "Satisfied Participant",
    comment:
      "Overall, I enjoyed the course and found it to be very informative. The instructor was engaging, and the assignments were well-designed.",
    rating: 3,
    courseId: "8",
  },
  {
    id: "53",
    date: "11/15/2023",
    title: "Contented Student",
    comment:
      "I thought this course was well-structured, and the material was presented in a clear and organized manner.",
    rating: 3,
    courseId: "4",
  },
  {
    id: "54",
    date: "11/15/2023",
    title: "Frustrated Learner",
    comment:
      "Unfortunately, I did not find this course to be very helpful. The content seemed outdated, and the assignments were not engaging.",
    rating: 0,
    courseId: "29",
  },
  {
    id: "55",
    date: "11/15/2023",
    title: "Struggling Student",
    comment:
      "I struggled to follow along with the course material, and I found the assignments to be overly challenging.",
    rating: 0,
    courseId: "26",
  },
  {
    id: "56",
    date: "11/15/2023",
    title: "Unsatisfied Learner",
    comment:
      "I was disappointed with this course. The material was dry and poorly explained, and I didn't feel like I learned much.",
    rating: 3,
    courseId: "7",
  },
  {
    id: "57",
    date: "11/15/2023",
    title: "Satisfied Participant",
    comment:
      "Overall, I enjoyed the course and found it to be very informative. The instructor was engaging, and the assignments were well-designed.",
    rating: 3,
    courseId: "6",
  },
  {
    id: "58",
    date: "11/15/2023",
    title: "Disappointed Student",
    comment:
      "Unfortunately, I did not find this course to be very helpful. The content seemed outdated, and the assignments were not engaging.",
    rating: 0,
    courseId: "3",
  },
  {
    id: "59",
    date: "11/15/2023",
    title: "Frustrated Participant",
    comment:
      "I struggled to follow along with the course material, and I found the assignments to be overly challenging.",
    rating: 2,
    courseId: "1",
  },
];

exports.db = { courses, genres, reviews }
