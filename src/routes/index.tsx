import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Clock, Leaf, Star } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { AVALIACOES, HORARIOS, NAV, RESTAURANTE } from "@/lib/odoya";

import hero from "@/assets/hero.jpg";
import ambiente1 from "@/assets/ambiente-1.jpg";
import ambiente2 from "@/assets/ambiente-2.jpg";
import experiencia from "@/assets/experiencia.jpg";
import galeria1 from "@/assets/galeria-1.jpg";

// Fotos reais dos pratos enviadas pelo Bistrô Odoyá
import pescada from "@/assets/pescada-molho-camarao.jpg";
import linguado from "@/assets/linguado-molho-camarao.jpg";
import talharim from "@/assets/talharim-frutos-do-mar.jpg";
import risoto from "@/assets/risoto-shimeji.jpg";

const TITLE = "Bistrô Odoyá Maresias | Gastronomia em São Sebastião";
const DESC =
  "Bistrô Odoyá em Maresias, São Sebastião: culinária brasileira e sul-americana, pratos artesanais e opções vegetarianas e veganas em um ambiente acolhedor perto da praia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Bistrô Odoyá",
          servesCuisine: ["Brasileira", "Sul-americana", "Vegetariana", "Vegana"],
          telephone: RESTAURANTE.telefone,
          address: {
            "@type": "PostalAddress",
            streetAddress: RESTAURANTE.endereco.rua,
            addressLocality: "São Sebastião",
            addressRegion: "SP",
            postalCode: RESTAURANTE.endereco.cep,
            addressCountry: "BR",
          },
          sameAs: [RESTAURANTE.instagram],
          hasMap: RESTAURANTE.maps,
          openingHours: [
            "Mo 12:00-20:00",
            "Fr 12:00-22:00",
            "Sa 12:00-22:00",
            "Su 12:00-22:00",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

/**
 * Cardápio real baseado nas quatro publicações do Instagram
 * enviadas pelo usuário.
 *
 * Os preços não foram inventados: continuam como "Preço a confirmar".
 */
const PRATOS = [
  {
    img: pescada,
    nome: "Pescada ao Molho de Camarão",
    desc: "Acompanha arroz branco, batatas fritas e salada da casa.",
  },
  {
    img: linguado,
    nome: "Linguado ao Molho de Camarão ou Frutos do Mar",
    desc: "Linguado ao Molho de Camarão ou Frutos do Mar.",
  },
  {
    img: talharim,
    nome: "Talharim ao Molho de Frutos do Mar",
    desc: "Talharim ao Molho de Frutos do Mar.",
  },
  {
    img: risoto,
    nome: "Risoto de Shimeji",
    desc: "Risoto de Shimeji Clássico ou Vegano.",
  },
];

const GALERIA = [
  {
    img: ambiente1,
    alt: "Área externa do Bistrô Odoyá com mesas e plantas",
    span: "row-span-2",
  },
  {
    img: pescada,
    alt: "Pescada ao Molho de Camarão",
    span: "",
  },
  {
    img: linguado,
    alt: "Linguado ao Molho de Camarão ou Frutos do Mar",
    span: "",
  },
  {
    img: talharim,
    alt: "Talharim ao Molho de Frutos do Mar",
    span: "",
  },
  {
    img: risoto,
    alt: "Risoto de Shimeji Clássico ou Vegano",
    span: "",
  },
  {
    img: ambiente2,
    alt: "Detalhes do ambiente do Bistrô Odoyá",
    span: "",
  },
  {
    img: galeria1,
    alt: "Mesa e decoração do Bistrô Odoyá",
    span: "",
  },
  {
    img: experiencia,
    alt: "Preparo de um prato na cozinha do bistrô",
    span: "md:col-span-2",
  },
];

const INSTAGRAM_FOTOS = [
  {
    img: pescada,
    alt: "Pescada ao Molho de Camarão",
  },
  {
    img: linguado,
    alt: "Linguado ao Molho de Camarão ou Frutos do Mar",
  },
  {
    img: talharim,
    alt: "Talharim ao Molho de Frutos do Mar",
  },
  {
    img: risoto,
    alt: "Risoto de Shimeji Clássico ou Vegano",
  },
];

function Home() {
  return (
    <div id="topo" className="w-full overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[92svh] w-full">
        <img
          src={hero}
          alt="Salão do Bistrô Odoyá com mesas de madeira, plantas e vista para o mar"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-5 pb-16 pt-32 md:px-8">
          <div className="rise max-w-2xl">
            <span className="text-[0.7rem] uppercase tracking-[0.32em] text-background/80">
              Maresias · São Sebastião
            </span>

            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-background sm:text-6xl md:text-7xl">
              Bistrô Odoyá
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-background/85 md:text-lg">
              Uma experiência gastronômica acolhedora em Maresias.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#gastronomia"
                className="inline-flex items-center justify-center rounded-sm border border-background/70 px-7 py-4 text-sm tracking-wide text-background transition-colors hover:bg-background hover:text-primary"
              >
                Conheça nossa gastronomia
              </a>

              <a
                href={RESTAURANTE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-moss"
              >
                <MessageCircle size={17} /> Fale conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <section id="historia" className="section-pad bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <div>
            <Eyebrow>Nossa História</Eyebrow>
            <span className="rule-line mt-5" />

            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Um bistrô entre a mata e o mar
            </h2>

            <div className="mt-6 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
              <p>
                O Bistrô Odoyá está em Maresias, na Praia do Saco, em São Sebastião.
              </p>
              <p>
                A casa reúne uma proposta de culinária brasileira e sul-americana,
                com opções vegetarianas e veganas.
              </p>
              <p>
                Um espaço para aproveitar a gastronomia e o ambiente do litoral
                norte de São Paulo.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={ambiente1}
              alt="Área externa do bistrô com mesas de madeira e plantas"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-[420px] w-full rounded-sm object-cover md:h-[560px]"
            />

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <Leaf size={16} className="shrink-0 text-clay" />
              <span>Culinária, natureza e aconchego em Maresias.</span>
            </div>
          </div>
        </div>
      </section>

      {/* GASTRONOMIA */}
      <section id="gastronomia" className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
              Nossa Gastronomia
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Cozinha brasileira, inspiração sul-americana
            </h2>

            <p className="mt-6 text-[0.98rem] leading-relaxed text-primary-foreground/80">
              Uma cozinha que reúne referências brasileiras e sul-americanas e
              também contempla opções vegetarianas e veganas.
            </p>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Culinária brasileira", "Sabores da cozinha brasileira."],
              ["Inspiração sul-americana", "Referências da gastronomia sul-americana."],
              ["Comida saudável", "Opções para diferentes preferências alimentares."],
              ["Opções vegetarianas", "Alternativas vegetarianas disponíveis na casa."],
              ["Opções veganas", "Alternativas veganas disponíveis na casa."],
              ["Pratos artesanais", "Preparos apresentados no cardápio do bistrô."],
            ].map(([titulo, texto]) => (
              <li key={titulo} className="bg-primary p-8">
                <h3 className="font-display text-2xl">{titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                  {texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CARDÁPIO REAL */}
      <section id="cardapio" className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Cardápio</Eyebrow>
            <span className="rule-line mt-5" />

            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Sabores da casa
            </h2>

            <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">
              Alguns dos pratos publicados pelo Bistrô Odoyá. Consulte a casa
              pelo WhatsApp para confirmar disponibilidade e valores.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRATOS.map((p) => (
              <article
                key={p.nome}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-card"
              >
                <img
                  src={p.img}
                  alt={p.nome}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{p.nome}</h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  <p className="mt-5 text-sm text-clay">Preço a confirmar</p>

                  <a
                    href={RESTAURANTE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-sm border border-primary px-5 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Tenho interesse
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
          <img
            src={experiencia}
            alt="Preparo de um prato em cozinha do bistrô"
            width={1400}
            height={1000}
            loading="lazy"
            className="order-2 h-[340px] w-full rounded-sm object-cover md:order-1 md:h-[520px]"
          />

          <div className="order-1 md:order-2">
            <Eyebrow>A Experiência</Eyebrow>
            <span className="rule-line mt-5" />

            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Comer com calma, cercado de verde
            </h2>

            <ul className="mt-8 space-y-5">
              {[
                ["Ambiente acolhedor", "Um espaço para aproveitar a refeição com tranquilidade."],
                ["Contato com a natureza", "Plantas, madeira e luz natural compõem o ambiente."],
                ["Para diferentes preferências", "Opções vegetarianas e veganas no cardápio."],
                ["Cozinha artesanal", "Pratos preparados com cuidado na casa."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-b border-border pb-5">
                  <Leaf size={18} className="mt-1 shrink-0 text-clay" />

                  <div className="min-w-0">
                    <h3 className="font-display text-xl">{t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Galeria</Eyebrow>
            <span className="rule-line mt-5" />

            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              A mesa e o ambiente
            </h2>

            <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">
              Conheça alguns pratos e detalhes do ambiente do Bistrô Odoyá.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3">
            {GALERIA.map((g, i) => (
              <figure
                key={i}
                className={`overflow-hidden rounded-sm ${g.span} ${
                  i === 0 ? "sm:row-span-2" : ""
                }`}
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Avaliações</Eyebrow>
            <span className="rule-line mt-5" />

            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              O que dizem nossos visitantes
            </h2>
          </div>

          {AVALIACOES.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {AVALIACOES.map((a) => (
                <blockquote
                  key={a.nome}
                  className="rounded-sm border border-border bg-card p-7"
                >
                  <div className="flex gap-1 text-clay">
                    {Array.from({ length: a.nota }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    “{a.comentario}”
                  </p>

                  <footer className="mt-5 font-display text-lg">{a.nome}</footer>
                </blockquote>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-sm border border-dashed border-border bg-card p-10 text-center">
              <div className="flex justify-center gap-1 text-clay/50">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={17} />
                ))}
              </div>

              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Esta seção está preparada para receber avaliações reais de clientes.
                Enquanto isso, fale diretamente com a casa pelo WhatsApp.
              </p>

              <a
                href={RESTAURANTE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle size={16} /> Falar com o bistrô
              </a>
            </div>
          )}
        </div>
      </section>

      {/* LOCALIZAÇÃO + HORÁRIOS */}
      <section id="localizacao" className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Localização</Eyebrow>
            <span className="rule-line mt-5" />

            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Venha nos visitar
            </h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex gap-4">
                <MapPin size={20} className="mt-1 shrink-0 text-clay" />

                <address className="not-italic leading-relaxed text-foreground">
                  {RESTAURANTE.endereco.rua}
                  <br />
                  {RESTAURANTE.endereco.bairro}
                  <br />
                  {RESTAURANTE.endereco.cidade}
                  <br />
                  {RESTAURANTE.endereco.cep}
                </address>
              </div>

              <a
                href={RESTAURANTE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-moss"
              >
                <MapPin size={16} /> Como chegar
              </a>

              <div className="mt-10 rounded-sm border border-border bg-card p-7">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0 text-clay" />
                  <h3 className="font-display text-2xl">
                    Horários de funcionamento
                  </h3>
                </div>

                <ul className="mt-5 divide-y divide-border">
                  {HORARIOS.map((h) => (
                    <li
                      key={h.dia}
                      className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-3 text-sm"
                    >
                      <span className="truncate text-foreground">{h.dia}</span>

                      <span
                        className={
                          h.horario === "Fechado"
                            ? "text-muted-foreground"
                            : "text-clay"
                        }
                      >
                        {h.horario}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Horários sujeitos a alteração. Confirme pelo WhatsApp antes de sua visita.
                </p>
              </div>
            </div>

            <div className="min-h-[320px] overflow-hidden rounded-sm border border-border">
              <iframe
                title="Mapa da localização do Bistrô Odoyá em Maresias"
                src="https://www.google.com/maps?q=R.%20Nova%20Iguacu%2C%2086%20-%20Praia%20do%20Saco%2C%20Sao%20Sebastiao%20-%20SP%2C%2011628-222&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <Eyebrow>Instagram</Eyebrow>

          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Siga o Bistrô Odoyá
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
            Veja os pratos, novidades e momentos da casa diretamente pelo nosso Instagram.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
            {INSTAGRAM_FOTOS.map((foto) => (
              <a
                key={foto.alt}
                href={RESTAURANTE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-sm"
              >
                <img
                  src={foto.img}
                  alt={foto.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </a>
            ))}
          </div>

          <a
            href={RESTAURANTE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-7 py-4 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram size={17} /> Conheça nosso Instagram
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="relative">
        <img
          src={ambiente1}
          alt="Mesas ao ar livre do bistrô"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-ink/70" />

        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
          <h2 className="font-display text-4xl leading-tight text-background md:text-5xl">
            Viva essa experiência em Maresias
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-background/85">
            Venha conhecer o Bistrô Odoyá, na Praia do Saco. Fale com a gente
            para tirar dúvidas sobre a casa, o cardápio e a sua visita.
          </p>

          <a
            href={RESTAURANTE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-sm bg-background px-7 py-4 text-sm tracking-wide text-primary transition-opacity hover:opacity-90"
          >
            <MessageCircle size={17} /> Fale conosco pelo WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          <div>
            <p className="font-display text-3xl">Bistrô Odoyá</p>

            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-primary-foreground/70">
              Maresias · SP
            </p>

            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
              Culinária brasileira e sul-americana, com opções vegetarianas e veganas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
              Endereço
            </h3>

            <address className="mt-4 not-italic text-sm leading-relaxed text-primary-foreground/80">
              {RESTAURANTE.endereco.rua}
              <br />
              {RESTAURANTE.endereco.bairro}
              <br />
              {RESTAURANTE.endereco.cidade}
              <br />
              {RESTAURANTE.endereco.cep}
            </address>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={RESTAURANTE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-70"
              >
                <MessageCircle size={15} /> {RESTAURANTE.telefone}
              </a>

              <a
                href={RESTAURANTE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-70"
              >
                <Instagram size={15} /> @bistroodoya
              </a>
            </div>
          </div>

          <nav>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
              Navegação
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:opacity-70">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
              Horários
            </h3>

            <ul className="mt-4 space-y-1.5 text-sm text-primary-foreground/80">
              {HORARIOS.map((h) => (
                <li
                  key={h.dia}
                  className="grid grid-cols-[minmax(0,1fr)_auto] gap-3"
                >
                  <span className="truncate">{h.dia}</span>
                  <span>{h.horario}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15">
          <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-primary-foreground/70 md:px-8">
            © {new Date().getFullYear()} Bistrô Odoyá — Maresias, São Sebastião · SP.
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
