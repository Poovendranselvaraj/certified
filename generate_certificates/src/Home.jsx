import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Briefcase, GraduationCap, Plus } from "lucide-react";

export default function Home() {
  const categories = [
    { title: "Academic", icon: GraduationCap, description: "Degrees, diplomas, and academic achievements" },
    { title: "Professional", icon: Briefcase, description: "Work-related certifications and qualifications" },
    { title: "Course Completion", icon: BookOpen, description: "Online and offline course certificates" },
    { title: "Awards", icon: Award, description: "Recognitions and special achievements" },
  ];

  const featuredCertificates = [
    { title: "Web Development Bootcamp", issuer: "Tech Academy", date: "2023-05-15" },
    { title: "Data Science Specialization", issuer: "DataCorp", date: "2023-06-22" },
    { title: "Project Management Professional", issuer: "PMI", date: "2023-04-10" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Certificate Management System</h1>
        <p className="text-xl text-muted-foreground">Create, manage, and verify certificates with ease</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Certificate Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCertificates.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Issued on: {cert.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Button size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Create New Certificate
        </Button>
      </div>
    </div>
  );
}
