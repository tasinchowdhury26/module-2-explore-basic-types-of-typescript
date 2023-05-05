type NoobDeveloper = {
  name: string;
};
type JuniorDeveloper = NoobDeveloper & {
  name: string;
  skills: string;
  experience: number;
};
type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExp: number;
  level: "junior" | "mid" | "senior";
};

const seniorDev: NextLevelDeveloper = {
  name: `Fed`,
  skills: `JS`,
  experience: 6,
  leadershipExp: 10,
  level: "mid",
};
