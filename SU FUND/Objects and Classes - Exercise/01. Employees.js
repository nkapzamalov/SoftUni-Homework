function employess(workersInfo) {
  const workers = {};

  workersInfo.forEach((name) => {
    workers["name"] = name;
    workers["personalNumber"] = name.length;

    console.log(
      `Name: ${workers.name} -- Personal Number: ${workers.personalNumber}`
    );
  });
}

employess([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
