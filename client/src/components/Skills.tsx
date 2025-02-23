import { Card, CardContent } from "@/components/ui/card";
import { SiCplusplus, SiC, SiPython, SiJavascript, SiHtml5, SiCss3, SiLinux, SiGit, SiDocker, SiMongodb, SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { name: "C++", icon: SiCplusplus },
  { name: "C", icon: SiC },
  { name: "Java", icon: DiJava },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML/CSS", icon: SiHtml5 },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
                >
                  <skill.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}