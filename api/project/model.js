const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects");
  //   console.log(projects);
  projects.forEach((project) => {
    if (
      project.project_completed == 1 ||
      project.project_completed == true ||
      project.project_completed == "true"
    ) {
      project.project_completed = true;
    } else {
      project.project_completed = false;
    }
  });
  return projects;
}

async function addProject(projectobj) {
  await db("projects").insert(projectobj);

  const response = await db("projects")
    .where("project_name", projectobj.project_name)
    .first();
  if (
    projectobj.project_completed == 1 ||
    projectobj.project_completed == true ||
    projectobj.project_completed == "true"
  ) {
    response.project_completed = true;
  } else {
    response.project_completed = false;
  }

  return await response;
}

module.exports = { addProject, getProjects };
