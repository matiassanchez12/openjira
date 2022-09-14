interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi ",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description: "en progres: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi ",
      createdAt: Date.now() + 1000000,
      status: "in-progress",
    },
    {
      description: "Terminadas: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi ",
      createdAt: Date.now() + 100000,
      status: "finished",
    },
  ],
};
