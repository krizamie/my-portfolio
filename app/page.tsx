
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  UserRound,
  Mail,
  Monitor,
  Laptop,
  Palette,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

const skills = [
  { name: "HTML", description: "Web page structure", icon: Code2 },
  { name: "CSS", description: "Web styling and design", icon: Palette },
  { name: "JavaScript", description: "Interactive web development", icon: Code2 },
  { name: "C++", description: "Programming fundamentals", icon: Laptop },
  { name: "Java", description: "Object-oriented programming", icon: Monitor },
];

const projects = [
  {
    number: "01",
    title: "Personal Portfolio Website",
    description:
      "A personal website showcasing my background, technical skills, and projects as an IT student.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Cinema Ticket Booking System",
    description:
      "An academic project focused on movie information, customer accounts, and cinema ticket reservations.",
    tags: ["Node.js", "Express", "MySQL"],
  },
  {
    number: "03",
    title: "Programming Activities",
    description:
      "A collection of programming exercises and activities developed while learning different programming languages.",
    tags: ["C++", "Java", "JavaScript"],
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080f1e] text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080f1e]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight">
            KS<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let&apos;s Connect
          </a>
        </nav>

        <div className="flex justify-center gap-4 overflow-x-auto px-4 pb-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-xs text-slate-400 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[85vh] items-center overflow-hidden"
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <Badge className="mb-7 border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-300">
              <Sparkles className="mr-2 h-3 w-3" />
              Welcome to my portfolio
            </Badge>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Krizamie C.
              <span className="block text-cyan-400">Salazar.</span>
            </h1>

            <h2 className="mt-6 text-xl text-slate-300 md:text-2xl">
              Aspiring IT Professional
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-slate-400">
              I am an Information Technology student passionate about
              technology, programming, and continuously learning new
              things in the digital world.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5 text-sm text-slate-400">
              <span className="h-px w-12 bg-cyan-400" />
              BS Information Technology · NCF
            </div>
          </div>

          {/* Profile Display */}
          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-900/30 shadow-[0_0_100px_rgba(34,211,238,0.12)] md:h-96 md:w-96">
              <div className="absolute inset-5 rounded-full border border-dashed border-cyan-300/30" />

              <Avatar className="h-52 w-52 border-4 border-cyan-400/30 bg-[#14243a] md:h-64 md:w-64">
                <AvatarFallback className="bg-[#14243a] text-6xl font-bold text-cyan-300 md:text-8xl">
                  KS
                </AvatarFallback>
              </Avatar>

              <div className="absolute -bottom-3 rounded-full border border-cyan-400/30 bg-[#101d30] px-6 py-3 text-sm text-cyan-300 shadow-xl">
                IT Student
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-white/5 bg-[#0c1628] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Get to know me
            </p>
            <h2 className="text-4xl font-bold">
              About <span className="text-cyan-400">Me</span>
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-5 text-2xl font-semibold">
                Passionate about technology and innovation.
              </h3>

              <p className="leading-8 text-slate-400">
                I am Krizamie C. Salazar, an Information Technology
                student at NCF. I am passionate about technology and
                programming, and I enjoy learning how software and
                digital solutions are created.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                My goal is to continue improving my technical skills,
                gain experience through projects, and become a
                knowledgeable IT professional in the future.
              </p>
            </div>

            <Card className="border-white/10 bg-[#111e32] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserRound className="text-cyan-400" />
                  Personal Information
                </CardTitle>
                <CardDescription className="text-slate-400">
                  A little information about me
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <div>
                  <p className="text-sm text-slate-500">Full Name</p>
                  <p className="mt-1 font-medium">Krizamie C. Salazar</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Course</p>
                  <p className="mt-1 font-medium">
                    BS Information Technology
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">School</p>
                  <p className="mt-1 font-medium">NCF</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Interest</p>
                  <p className="mt-1 font-medium">
                    Programming and Technology
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My academic background
          </p>

          <h2 className="mb-12 text-4xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <Card className="max-w-3xl border-white/10 bg-[#111e32] text-white">
            <CardContent className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10">
                <GraduationCap className="h-9 w-9 text-cyan-400" />
              </div>

              <div>
                <Badge className="mb-3 bg-cyan-400/10 text-cyan-300">
                  Current Education
                </Badge>
                <h3 className="text-xl font-bold">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="mt-2 text-slate-400">
                  NCF (New College Foundation)
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  College Student
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#0c1628] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What I am learning
          </p>

          <h2 className="mb-4 text-4xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mb-12 max-w-xl leading-7 text-slate-400">
            These are some of the programming languages and
            technologies I have been learning and practicing.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <Card
                  key={skill.name}
                  className="group border-white/10 bg-[#111e32] text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
                >
                  <CardContent className="flex items-center gap-5 p-6">
                    <div className="rounded-xl bg-cyan-400/10 p-4 transition group-hover:bg-cyan-400/20">
                      <Icon className="h-7 w-7 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {skill.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My work
          </p>

          <h2 className="mb-4 text-4xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mb-12 max-w-xl leading-7 text-slate-400">
            A selection of academic and personal projects that
            represent my learning journey in Information Technology.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.number}
                className="group flex flex-col border-white/10 bg-[#111e32] text-white transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <CardHeader>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-3xl font-bold text-cyan-400/60">
                      {project.number}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-400" />
                  </div>

                  <CardTitle className="text-xl">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="min-h-20 leading-7 text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0c1628] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
            Thank you for visiting my portfolio! I am always
            interested in learning, sharing ideas, and connecting
            with people who are passionate about technology.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <Mail className="h-5 w-5" />
            Email Me
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-12 flex justify-center gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 px-4 py-3 text-sm text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/10 px-4 py-3 text-sm text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <a href="#home" className="text-lg font-bold">
            KS<span className="text-cyan-400">.</span>
          </a>

          <p className="text-sm text-slate-500">
            © 2026 Krizamie C. Salazar.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
          >
            Back to top <ArrowDown className="h-4 w-4 rotate-180" />
          </a>
        </div>
      </footer>
    </main>
  );
}
