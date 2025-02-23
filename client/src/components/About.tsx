import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-7">
              I'm currently pursuing my Bachelor of Science in Computer Science at Binghamton University's 
              Thomas J. Watson College of Engineering and Applied Science, with an expected graduation in May 2027. 
              Maintaining a strong academic record with a GPA of 3.43/4.00, I've earned a place on the Dean's List 
              in Fall 2022.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              My academic journey includes comprehensive coursework in Data Structures and Algorithms, 
              Object-Oriented Programming, Discrete Math, and Linear Algebra. I'm passionate about applying 
              these theoretical foundations to practical software development and problem-solving.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              Beyond academics, I'm actively involved in the Association of Computing Machinery (ACM) and 
              Binghamton Mens Club Golf, where I develop both my technical expertise and leadership skills.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}