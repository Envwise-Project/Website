const { Activity, Country } = require("../../src/db.js");

describe("Test de los modelos", () => {
  beforeAll(async () => {
    await Country.sync({ force: true });
    await Activity.sync({ force: true });
  });

  test("Crear un país y agregar actividades", async () => {
    const country = await Country.create({
      id: "USA",
      name: "United States",
      flagImage: "https://example.com/usa-flag.png",
      continent: "North America",
      capital: "Washington, D.C.",
      subregion: "Northern America",
      area: 9833520,
      population: 331449281,
    });

    const activity1 = await Activity.create({
      id: 1,
      name: "Hiking",
      difficulty: 3,
      duration: 4,
      season: "Summer",
    });

    const activity2 = await Activity.create({
      id: 2,
      name: "Sightseeing",
      difficulty: 1,
      duration: 2,
      season: "Fall",
    });

    await country.addActivity(activity1);
    await country.addActivity(activity2);

    const activities = await country.getActivities();
    expect(activities).toHaveLength(2);

    const createdCountry = await Country.findOne({
      where: { id: "USA" },
      include: [Activity],
    });

    expect(createdCountry.name).toBe("United States");
    expect(createdCountry.activities).toHaveLength(2);
    console.log(createdCountry.name)
    console.log(createdCountry.activities)
  });
});

