import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Цена по себестоимости",
    description:
      "Сейчас мы делаем мебель без наценки — оплачиваете только материалы и фурнитуру. Взамен просим лишь честный отзыв о работе.",
  },
  {
    title: "Любые материалы",
    description:
      "Работаем с деревом, МДФ, металлом и стеклом. Подберём материалы под ваш стиль, задачу и бюджет.",
  },
  {
    title: "Точно по размерам",
    description:
      "Делаем мебель под ваше помещение и задачи — ни сантиметра лишнего. Замер, эскиз и согласование перед началом работ.",
  },
  {
    title: "Душа в каждой детали",
    description: "Мы только начинаем, поэтому вкладываемся в каждый заказ на 100%. Для нас важна репутация и довольные первые клиенты.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Почему мы</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Честная
              <br />
              <HighlightedText>работа</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/ec5938df-2759-48e4-89b4-6d5ce40db410/files/64536efa-5206-422b-b24b-480013efc30c.jpg"
                alt="Рабочий стол на заказ"
                className="opacity-95 relative z-10 w-auto rounded-sm"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Мебель — это не просто предметы, это уют вашего дома на годы вперёд. Мы делаем её честно, из хороших материалов и с вниманием к деталям.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}