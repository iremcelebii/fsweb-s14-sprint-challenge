const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    )
    .leftJoin("projects", "projects.project_id", "tasks.project_id");
  //   console.log(tasks);
  tasks.forEach((task) => {
    if (
      task.task_completed == 1 ||
      task.task_completed == true ||
      task.task_completed == "true"
    ) {
      task.task_completed = true;
    } else {
      task.task_completed = false;
    }
  });
  return tasks;
}

async function addTask(taskobj) {
  await db("tasks").insert(taskobj);

  const response = await db("tasks")
    .where("task_description", taskobj.task_description)
    .first();

  if (
    taskobj.task_completed == 1 ||
    taskobj.task_completed == true ||
    taskobj.task_completed == "true"
  ) {
    response.task_completed = true;
  } else {
    response.task_completed = false;
  }

  return await response;
}

module.exports = { addTask, getTasks };
