import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Voter Database",
    description: "Developed a voter database management system utilizing various data structures to efficiently store, search, and process voter data. Optimized for best-case time complexity with comprehensive edge case testing.",
    tech: ["C++", "Data Structures", "Algorithms"],
    date: "November 2024 – December 2024"
  },
  {
    title: "IEEE Floating Point Manipulation",
    description: "Developed a function to convert IEEE double-precision values to the floatx format while preserving key floating-point conventions. Utilized bitwise operations and custom utilities for efficient floating-point component manipulation.",
    tech: ["C", "IEEE Standards", "Bit Manipulation"],
    date: "November 2024 – December 2024"
  },
  {
    title: "EMA Trading Strategy",
    description: "Developed and implemented a stock trading strategy using exponential moving averages (EMAs) to predict price movements and optimize buy/sell decisions. Processed extensive datasets of historical stock prices using Python.",
    tech: ["Python", "Data Analysis", "Financial Analysis"],
    date: "March 2024"
  },
  {
    title: "Duck Hunt Game",
    description: "Crafted an immersive Duck Hunt game using Python and Pygame, designing gameplay mechanics, visuals, and interactive elements. Collaborated within a team environment to deliver a visually compelling and engaging game.",
    tech: ["Python", "Pygame", "Game Development"],
    date: "November 2023 – December 2023"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}