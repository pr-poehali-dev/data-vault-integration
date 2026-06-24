import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Оставить заявку</p>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
              Закажите мебель
              <br />
              по <HighlightedText>себестоимости</HighlightedText>
            </h2>

            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8 max-w-md">
              Оставьте заявку — мы свяжемся с вами, обсудим идею, приедем на замер и рассчитаем стоимость материалов. Без наценки за работу, в обмен на честный отзыв.
            </p>

            <div className="space-y-3 text-primary-foreground/80">
              <a href="tel:+79000000000" className="block hover:text-white transition-colors">
                +7 (900) 000-00-00
              </a>
              <a href="mailto:hello@teploederevo.ru" className="block hover:text-white transition-colors">
                hello@teploederevo.ru
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-background text-foreground p-8 md:p-10 rounded-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <h3 className="text-2xl font-medium mb-3">Спасибо за заявку!</h3>
                <p className="text-muted-foreground">
                  Мы свяжемся с вами в ближайшее время, чтобы обсудить вашу будущую мебель.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Как к вам обращаться"
                    className="w-full px-4 py-3 bg-secondary/60 border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 bg-secondary/60 border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Что хотите заказать?</label>
                  <textarea
                    rows={4}
                    placeholder="Например: кухня, стол из дуба, шкаф в спальню..."
                    className="w-full px-4 py-3 bg-secondary/60 border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 text-sm tracking-wide hover:bg-accent/90 transition-colors duration-300 group"
                >
                  Отправить заявку
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
