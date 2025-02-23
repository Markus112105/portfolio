import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Full Stack Developer",
    period: "2020 - Present",
    description: "Led development of core product features, mentored junior developers, and improved application performance by 40%.",
  },
  {
    company: "Startup Inc",
    position: "Full Stack Developer",
    period: "2018 - 2020",
    description: "Built and maintained multiple client projects using React and Node.js. Implemented CI/CD pipelines.",
  },
  {
    company: "Web Solutions",
    position: "Frontend Developer",
    period: "2016 - 2018",
    description: "Developed responsive web applications and improved user experience through modern frontend practices.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.position}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
