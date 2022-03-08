let tasks = []
let number = []
let close = 0
let invalid = 0

while (close == 0) {
    userInput = prompt(
        "Task Manger \nHere are your options:\n(1) SHOW TASKS\n(2) ADD TASKS\n(3) REMOVE TASKS\n(4) CLOSE TASK MANAGER"
    )
    // If user inputs 1 display tasks
    if (userInput == 1) {
        if (tasks[0] == undefined) {
           alert("You have no tasks.")
        }
        else {
            alert("Here are your tasks:\n"+tasks)
        }
    }

    // if user inputs 2 to add tasks
    else if (userInput == 2) {
        let newTask = prompt("Please enter the task you'd like to add, or press \"Cancel\" to quit.")
        console.log(newTask);
        if (newTask != undefined || newTask != "") {
            // Must use concat, do not use unshift. Unshift is buggy, and will sometimes change the entire array to "1"
            tasks = tasks.concat("\n"+newTask)
            console.log(tasks);
        } 
    }

    // If user inputs 3 to remove tasks
    else if (userInput == 3) {
        if (tasks[0] != undefined) {
        number = []
        for (item in tasks) {
            item++
            number.push("["+item+"] "+tasks[item-1].replace(/\n/g, ''))
            item--
        }
        console.log(number);
        invalid = 1
        while (invalid == 1) {
            let remove = prompt("Please type the number of the task you wish to delete.\n"+number.join("\n"))
            if (remove < tasks.length || remove > 0) {
                tasks.splice((remove - 1), 1)
                alert("Here are the remaining tasks. \n"+tasks)
                invalid = 0
            }
        }
        } else {
            alert("You do not have any tasks to remove!")
        }
    }

    // If user inputs 4 to close alert box
    else if (userInput == 4) {
        close = 1
    }
}