const services = [
    {
        name: 'Learn Python Programming Beginner',
        price: 150,
        duration: '3:45',
        rating: 3,
        img: "https://www.thebalancecareers.com/thmb/-s_E03Zmzhf88WTiZ_MA40UsZ5g=/1500x1000/filters:fill(auto,1)/graphic-designer-job-description-and-salary-information-2061790-9c975e46838c4e7d9cc6ed9fda6e94db.png"
    },
    {
        name: 'Learn HTML Beginner',
        price: 130,
        duration: '3:00',
        rating: 4.5,
        img: "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
    },
    {
        name: 'Learn CSS Beginner',
        price: 90,
        duration: '3:21',
        rating: 4.5,
        img: "data:image/jpeg;base64,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"
    },
    {
        name: 'Static Data Science and Buissnenss Analysis',
        price: 200,
        duration: '2:30',
        rating: 4,
        img: "https://www.sharda.ac.in/blog/wp-content/uploads/2020/04/Data-Science-1.jpg"
    },
    {
        name: 'Software Developer From A to Z Beginner',
        price: 220,
        duration: '2:30',
        rating: 4.5,
        img: "https://konfinity-assets.s3.ap-south-1.amazonaws.com/blog/developer+vs+engineer.png"
    },
    {
        name: 'Graphics Designer & Photoshop Beginner',
        price: 170,
        duration: '2:30',
        rating: 3.5,
        img: "https://www.thebalancecareers.com/thmb/-s_E03Zmzhf88WTiZ_MA40UsZ5g=/1500x1000/filters:fill(auto,1)/graphic-designer-job-description-and-salary-information-2061790-9c975e46838c4e7d9cc6ed9fda6e94db.png"
    },
    {
        name: 'The Coplete JavaScript Coures Beginner to Advance',
        price: 300,
        duration: '2:30',
        rating: 5,
        img: "https://www.thebalancecareers.com/thmb/-s_E03Zmzhf88WTiZ_MA40UsZ5g=/1500x1000/filters:fill(auto,1)/graphic-designer-job-description-and-salary-information-2061790-9c975e46838c4e7d9cc6ed9fda6e94db.png"
    },
    {
        name: 'React: Beginner to Advance Course',
        price: 210,
        duration: '2:30',
        rating: 4.5,
        img: "https://www.thebalancecareers.com/thmb/-s_E03Zmzhf88WTiZ_MA40UsZ5g=/1500x1000/filters:fill(auto,1)/graphic-designer-job-description-and-salary-information-2061790-9c975e46838c4e7d9cc6ed9fda6e94db.png"
    },

]
