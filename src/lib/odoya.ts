// Dados editáveis do Bistrô Odoyá — altere aqui para atualizar o site inteiro.

export const RESTAURANTE = {
  nome: "Bistrô Odoyá",
  cidade: "Maresias · São Sebastião",
  endereco: {
    rua: "R. Nova Iguaçu, 86",
    bairro: "Praia do Saco",
    cidade: "São Sebastião - SP",
    cep: "11628-222",
  },
  telefone: "+55 11 98865-1059",
  whatsapp:
    "https://wa.me/5511988651059?text=" +
    encodeURIComponent("Olá! Vim pelo site do Bistrô Odoyá e gostaria de saber mais."),
  instagram: "https://www.instagram.com/bistroodoya/",
  maps: "https://maps.app.goo.gl/CLVFr7e3jTnNSn379",
};

// Horários confirmados — edite livremente.
export const HORARIOS: { dia: string; horario: string }[] = [
  { dia: "Segunda-feira", horario: "12h às 20h" },
  { dia: "Terça-feira", horario: "Fechado" },
  { dia: "Quarta-feira", horario: "Fechado" },
  { dia: "Quinta-feira", horario: "Fechado" },
  { dia: "Sexta-feira", horario: "12h às 22h" },
  { dia: "Sábado", horario: "12h às 22h" },
  { dia: "Domingo", horario: "12h às 22h" },
];

export const NAV = [
  { label: "Nossa História", href: "#historia" },
  { label: "Gastronomia", href: "#gastronomia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

// Avaliações reais podem ser adicionadas aqui (nome, nota de 1 a 5, comentário).
export type Avaliacao = { nome: string; nota: number; comentario: string };
export const AVALIACOES: Avaliacao[] = [];
