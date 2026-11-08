import type { Dict } from ".";

export default {
  site: {
    title: "Músicas da Ocarina",
    description: "Todas as músicas da ocarina de The Legend of Zelda: Ocarina of Time, com os botões de cada uma.",
  },
  seo: {
    title: "Músicas da Ocarina of Time – Todas as Notas da Ocarina",
    description:
      "Todas as músicas da ocarina de Zelda: Ocarina of Time com as notas: Canção de Zelda, Canção da Tempestade, Canção do Tempo, músicas de teleporte e mais, com os botões A e C do N64.",
  },
  exportImage: { label: "Baixar como imagem", busy: "Gerando imagem…" },
  nav: { notes: "Notas", songs: "Músicas", warpSongs: "Músicas de teleporte" },
  language: "Idioma",
  support: "Me dê uma gorjeta",
  notes: {
    A: { label: "A", pitch: "Ré" },
    "C-down": { label: "C-Baixo", pitch: "Fá" },
    "C-right": { label: "C-Direita", pitch: "Lá" },
    "C-left": { label: "C-Esquerda", pitch: "Si" },
    "C-up": { label: "C-Cima", pitch: "Ré" },
  },
  songs: {
    "zeldas-lullaby": {
      title: "Canção de Zelda (Zelda's Lullaby)",
      description: "Abre portas com o símbolo da Triforce e mostra que você tem ligação com a família real.",
    },
    "eponas-song": { title: "Canção de Epona (Epona's Song)", description: "Chama a Epona e faz as vacas darem leite." },
    "sarias-song": {
      title: "Canção de Saria (Saria's Song)",
      description: "Fala com a Saria de qualquer lugar e anima o Darunia.",
    },
    "suns-song": {
      title: "Canção do Sol (Sun's Song)",
      description: "Passa o tempo até o próximo meio-dia ou meia-noite e paralisa os ReDead.",
    },
    "song-of-time": {
      title: "Canção do Tempo (Song of Time)",
      description: "Abre o Portal do Tempo (Door of Time) e faz os blocos azuis sumirem ou aparecerem.",
    },
    "song-of-storms": {
      title: "Canção da Tempestade (Song of Storms)",
      description: "Faz chover, revela grutas escondidas e seca o poço da Vila Kakariko (Kakariko Village).",
    },
    "minuet-of-forest": {
      title: "Minueto da Floresta (Minuet of Forest)",
      description: "Teleporta para a Campina Sagrada (Sacred Forest Meadow).",
    },
    "bolero-of-fire": {
      title: "Bolero do Fogo (Bolero of Fire)",
      description: "Teleporta para a Cratera da Montanha da Morte (Death Mountain Crater).",
    },
    "serenade-of-water": {
      title: "Serenata da Água (Serenade of Water)",
      description: "Teleporta para o Lago Hylia (Lake Hylia).",
    },
    "nocturne-of-shadow": {
      title: "Noturno das Sombras (Nocturne of Shadow)",
      description: "Teleporta para o Cemitério da Vila Kakariko (Kakariko Graveyard).",
    },
    "requiem-of-spirit": {
      title: "Réquiem dos Espíritos (Requiem of Spirit)",
      description: "Teleporta para o Colosso do Deserto (Desert Colossus).",
    },
    "prelude-of-light": {
      title: "Prelúdio da Luz (Prelude of Light)",
      description: "Teleporta para o Templo do Tempo (Temple of Time).",
    },
  },
  scarecrow:
    "A Canção do Espantalho (Scarecrow's Song) não tem notas fixas: com o Link criança, crie uma melodia de oito notas para o Bonooru no Lago Hylia (Lake Hylia); com o Link adulto, toque a mesma melodia para ele. Depois, é só tocá-la onde o Pierre pode aparecer para chamá-lo.",
} satisfies Dict;
