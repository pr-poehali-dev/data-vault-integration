import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Кухонный гарнитур",
    category: "Кухня",
    location: "МДФ, фасады, столешница",
    year: "Под заказ",
    image: "https://cdn.poehali.dev/projects/ec5938df-2759-48e4-89b4-6d5ce40db410/files/2c3fb731-be19-46b0-9ef1-fa6c9bcfcfaf.jpg",
  },
  {
    id: 2,
    title: "Шкаф-гардероб",
    category: "Спальня",
    location: "ЛДСП, фурнитура Blum",
    year: "Под заказ",
    image: "https://cdn.poehali.dev/projects/ec5938df-2759-48e4-89b4-6d5ce40db410/files/74c90c38-f1ae-4f40-857a-0dc0b9ecaae0.jpg",
  },
  {
    id: 3,
    title: "Стеллаж для гостиной",
    category: "Гостиная",
    location: "Дерево + открытые полки",
    year: "Под заказ",
    image: "https://cdn.poehali.dev/projects/ec5938df-2759-48e4-89b4-6d5ce40db410/files/5a433082-5fb6-4c24-9038-4859c55aa26e.jpg",
  },
  {
    id: 4,
    title: "Обеденный стол со стульями",
    category: "Столовая",
    location: "Массив + металл",
    year: "Под заказ",
    image: "https://cdn.poehali.dev/projects/ec5938df-2759-48e4-89b4-6d5ce40db410/files/def02181-9c18-4931-86a9-6d5cfd60aaa3.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Примеры работ</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Что мы делаем</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Заказать свою мебель
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}