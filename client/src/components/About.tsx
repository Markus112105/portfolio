import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-7">
              I'm a passionate full stack developer with over 5 years of experience building web applications. 
              I specialize in React, Node.js, and modern web technologies. My journey in tech started 
              when I built my first website in college, and I've been hooked ever since.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              When I'm not coding, you can find me contributing to open source projects, writing technical 
              blog posts, or exploring new technologies. I believe in writing clean, maintainable code 
              and building user-friendly applications that solve real problems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
