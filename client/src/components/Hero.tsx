import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-bold tracking-tight text-4xl sm:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Markus Massina
        </h1>
        <p className="text-2xl sm:text-3xl mt-6 text-muted-foreground">
          Computer Science Student
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Pursuing Bachelor of Science in Computer Science at Binghamton University. 
          Passionate about building efficient software solutions and exploring new technologies.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <a href="#contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}