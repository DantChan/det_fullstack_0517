class Course {
    duration = 49
    printDuration = () => {
        console.log('duration'+this.duration)
    }
}

class ReactCourse extends Course{
    name = "React"
    printCourse = () => {
        console.log('Course name'+this.name)
    }
}

const c1 = new ReactCourse();
c1.printCourse()
c1.printDuration()