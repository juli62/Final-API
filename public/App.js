const taskUrl = 'http://localhost:3001/api/tasks'
const userUrl = 'http://localhost:3001/api/users'

const fetchTasks = async (url) => {
    const result = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    }).then(data => data.json()).then((data) => {
        data.map((task) => document.getElementById('tasks-container').insertAdjacentHTML('beforeend', formatTask(task)))

    })
    
    return result;
}
const createTask = async (url, body) => {
     await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }).then(data => data.json()).then(async () => await fetchTasks(taskUrl))
}


const taskSubmitBtn = () => {
    const taskNameInput = document.getElementById('task-name')
    const taskContentInput = document.getElementById('task-text')
    const taskColor = document.getElementById('color-picker').value
    const userId = new Date().toISOString()
    const taskResult = {taskName: taskNameInput.value, task: taskContentInput.value, completed: false, userId };
    console.log(taskResult)
    createTask(taskUrl, taskResult)
    taskContentInput.value = ''

}



fetchTasks(taskUrl)


const deleteTask = async (id) => {
     await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: 'DELETE',
        mode: 'cors'
    }).then(data => data.json()).then(() => document.getElementById(id).remove())
};

const formatTask = (task) => {
    return `<div class='list-group task' id='${task._id}' >
<label class='list-group-item d-flex gap-3' id='task-item'>
    <input class='form-check-input flex-shrink-0' type='checkbox' value='' checked
        style='font-size: 1.375em;'>
    <span class='pt-1 form-checked-content'>
        <strong>${task.taskName} :</strong>
        <a>${task.task}</a>
        <small class='d-block text-muted'>
            <svg class='bi me-1' width='1em' height='1em'>
                <use xlink:href='#calendar-event' />
            </svg>
           
        </small>
    </span> <button  type='button' class='btn btn-outline-dark' onclick='deleteTask("${task._id}")'>
    <img class='delete-icon'src='../public/img/delete_FILL0_wght500_GRAD200_opsz48.png' >
    </button> </label>
    </div>`
}

