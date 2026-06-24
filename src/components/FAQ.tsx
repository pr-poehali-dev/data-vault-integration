import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Почему мебель по себестоимости? В чём подвох?",
    answer:
      "Подвоха нет. Мы только открыли мастерскую и нам важно собрать первые реальные работы и честные отзывы. Поэтому сейчас вы оплачиваете только материалы и фурнитуру, без наценки за нашу работу. Взамен просим оставить отзыв и, по возможности, разрешить сделать фото готовой мебели для портфолио.",
  },
  {
    question: "Из какого материала вы делаете мебель?",
    answer:
      "Работаем с разными материалами: дерево, МДФ, ЛДСП, металл, стекло. Используем проверенную фурнитуру и качественные покрытия. Конкретный материал подбираем под ваш стиль, задачу и бюджет.",
  },
  {
    question: "Сколько времени занимает изготовление?",
    answer:
      "Сроки зависят от сложности: небольшой стол или полка — от 1 до 2 недель, кухня или шкаф-гардероб — от 3 до 5 недель. Точный срок назовём после замера и согласования эскиза.",
  },
  {
    question: "Вы делаете замер и доставку?",
    answer:
      "Да. Мы приезжаем на замер, согласовываем эскиз и размеры, а после изготовления привозим и устанавливаем мебель. Условия доставки обсудим при оформлении заявки.",
  },
  {
    question: "Можно заказать мебель по моему эскизу или фото?",
    answer:
      "Конечно. Присылайте чертёж, фото из интернета или просто опишите идею — мы поможем доработать эскиз, подберём материалы и сделаем мебель именно такой, как вы хотите.",
  },
  {
    question: "Как оставить заявку?",
    answer:
      "Заполните короткую форму на сайте или позвоните нам. Мы свяжемся с вами, обсудим детали, согласуем замер и рассчитаем стоимость материалов.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}