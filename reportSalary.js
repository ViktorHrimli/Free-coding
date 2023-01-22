const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};
const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];

const salaries2 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};
const team2 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];

function calculateTeam(team) {
  const resultObj = {};
  team.map(({ specialization }) => {
    if (!resultObj[specialization]) {
      resultObj[specialization] = 1;
    } else {
      resultObj[specialization] += 1;
    }
  });
  return resultObj;
}

function calculateTeamFinanceReport(salaries, team) {
  const teams = calculateTeam(team);

  const totalObj = {};

  for (const item in salaries) {
    if (Object.hasOwn(teams, item)) {
      const { tax, salary } = salaries[item];
      //   pecentage to integer
      const percentage = 1 + parseFloat(tax) / 100;
      //
      const sum = Math.trunc(salary * teams[item] * percentage);

      totalObj["totalBadgetTeam"] = (totalObj["totalBadgetTeam"] || 0) + sum;
      totalObj[`total${item}Team`] = sum;
    }
  }

  return totalObj;
}

console.log(calculateTeamFinanceReport(salaries1, team1));
console.log(calculateTeamFinanceReport(salaries2, team2));
