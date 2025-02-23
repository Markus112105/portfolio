import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Get in Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle>Let's connect!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I'm always eager to connect with fellow developers and explore new opportunities.
              Feel free to reach out through any of the following channels:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex-1">
                <a
                  href="mailto:mmassina@binghamton.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a
                  href="https://github.com/Markus112105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a
                  href="https://linkedin.com/in/markus-massina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}