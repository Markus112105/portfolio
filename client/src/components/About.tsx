import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-7">
              I'm currently pursuing my Bachelor of Science in Computer Science with a minor in Mathematics at Binghamton University's 
              Thomas J. Watson College of Engineering and Applied Science, with an expected graduation in May 2027. 
              I plan to continue my education by pursuing a graduate degree to further deepen my expertise in computer science.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              My academic journey includes comprehensive coursework in Data Structures and Algorithms, 
              Object-Oriented Programming, Discrete Math, and Linear Algebra. I'm passionate about applying 
              these theoretical foundations to practical software development and problem-solving.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              Outside of technology, I'm passionate about various activities that keep me engaged and learning. 
              I enjoy playing golf and chess, exploring the strategic depths of poker, hitting the slopes for skiing, 
              and following my interests in cars, cryptocurrency, and financial markets.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}