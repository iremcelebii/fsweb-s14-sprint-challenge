exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").insert([
    {
      project_name: "S14 Cuma günü",
    },

    {
      project_name: "S15 Pazarsitesi günü",
    },

    {
      project_name: "Genetik algoritma ödevi",
      project_description: "%10 etkili",
    },
  ]);

  await knex("resources").insert([
    {
      resource_name: "Cplex",
      resource_description: "Optimizayon programı",
    },
    {
      resource_name: "Matlab",
    },
    {
      resource_name: "Vscode",
    },
    {
      resource_name: "Github",
      resource_description: "Github Documentation page",
    },
  ]);

  await knex("tasks").insert([
    {
      task_description: "Cuma ders kaydını izleme",

      project_id: 1,
    },
    {
      task_description: "Cuma projesini tamamlama",

      project_id: 1,
    },
    {
      task_description: "Pazartesi ders kaydını izlemek",

      project_id: 2,
    },
    {
      task_description: "Pazartesi projesini tamamlama",
      project_id: 2,
    },
    {
      task_description: "Modeli kurma",
      project_id: 3,
    },
    {
      task_description: "Matlab'i kurma",
      project_id: 3,
    },
    {
      task_description: "Genetik algoritma kodunu yazma",
      project_id: 3,
    },
  ]);
  await knex("project_resources").insert([
    { project_id: 1, resource_id: 3 },
    { project_id: 1, resource_id: 4 },
    { project_id: 2, resource_id: 3 },
    { project_id: 2, resource_id: 4 },
    { project_id: 3, resource_id: 1 },
    { project_id: 3, resource_id: 2 },
  ]);
};
