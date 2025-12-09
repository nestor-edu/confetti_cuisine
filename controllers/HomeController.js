
const courses = [
    { 
        title: "Event Driven Cakes",
        description: "Learn how to bake cakes that respond to events in the kitchen.",
        cost: 50
    },
    {
        title: "Asynchronous Cooking",
        description: "Master the art of cooking asynchronously with multiple ingredients.",
        cost: 75
    },
    {
        title: "Functional Baking",
        description: "Explore the functional programming paradigm through baking.",
        cost: 100
    },
    {
        title: "Object-Oriented Pastries",
        description: "Learn to create pastries using object-oriented principles.",
        cost: 120
    }
]

const showCourses = (req, res) => {
    res.render("courses", {
        offeredCourses: courses,
        pageTitle: "Courses",
    });
}

export { showCourses };