import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "TCI Technologies",
    position: "Cybersecurity Intern",
    period: "June 2023 – August 2023",
    description: "Acquired practical expertise in security risk assessment, computer troubleshooting, and incident response. Contributed to quality assurance efforts and provided valuable feedback on cybersecurity training materials. Actively participated in quality improvement initiatives, including the practical application of Python for security enhancements.",
  },
  {
    company: "Law Office of Sylvia Cabana",
    position: "Tech Support/Paralegal",
    period: "November 2019 – December 2022",
    description: "Supported critical information input for political asylum applications, ensuring accuracy and completeness. Created and managed web accounts for immigrants, enhancing digital integration and access to resources. Facilitated federal and state document application processes, streamlining bureaucratic procedures for clients.",
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