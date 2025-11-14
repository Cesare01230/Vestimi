import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Chi siamo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cezar & Denis — Team fondatori con competenza in product design, sviluppo tech e innovazione
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">La nostra Vision</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Crediamo che la tecnologia debba semplificare la vita quotidiana, non complicarla. VESTIMI nasce
                    dall'idea di trasformare un momento spesso stressante della giornata — scegliere cosa indossare — in
                    un'esperienza fluida, intelligente e personalizzata.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">La nostra Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Sviluppare un ecosistema di smart wardrobe che combini hardware innovativo, intelligenza artificiale
                    e design intuitivo per aiutare le persone a:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Risparmiare tempo prezioso ogni mattina</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ottimizzare l'utilizzo del proprio guardaroba</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Fare scelte di stile più consapevoli e sostenibili</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Sentirsi sempre sicuri del proprio look</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-chart-4/10 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-chart-4" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Il Team</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    VESTIMI è un progetto concept sviluppato da Cezar e Denis, due professionisti con background
                    complementari in tecnologia, design e business. La nostra esperienza spazia dallo sviluppo software
                    all'UX design, dalla computer vision all'e-commerce.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Siamo basati a Torino e stiamo attivamente cercando investitori e partner per portare VESTIMI dal
                    concept alla produzione.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/10 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Vuoi saperne di più?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Siamo sempre disponibili per presentazioni, demo e discussioni su partnership. Contattaci per maggiori
            informazioni sul progetto.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contattaci</Link>
          </Button>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Sede</h3>
            <p className="text-muted-foreground">
              Via Giuseppe Verdi 8 bis
              <br />
              Torino, Piemonte
              <br />
              Italia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
