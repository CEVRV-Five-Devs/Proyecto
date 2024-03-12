import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Sounds of the Forest',
      social: {
        github: 'https://github.com/CEVRV-Five-Devs/Proyecto'
      },
      sidebar: [
        {
          label: 'Básicos',
          items: [
            { label: 'Título', link: '/basics/title' },
            { label: 'Resumen', link: '/basics/brief' },
            { label: 'Concepto', link: '/basics/concept' },
            { label: 'Atractivo', link: '/basics/atractive' },
            { label: 'Descripción', link: '/basics/description' },
            { label: 'Historia', link: '/basics/story' }
          ]
        },
        {
          label: 'Interfaz',
          items: [
            { label: 'HUD', link: '/' },
            { label: 'Menú', link: '/' },
            { label: 'Inventario', link: '/' }
          ]
        },
        {
          label: 'Jugabilidad y reglas',
          items: [
            { label: 'Controles', link: '/' },
            { label: 'Combate', link: '/' },
            { label: 'Exploración', link: '/' },
            { label: 'Enemigos', link: '/' },
            { label: 'Otras mecánicas', link: '/' }
          ]
        },
        {
          label: 'Preproducción',
          items: [
            { label: 'Requisitos', link: '/' },
            { label: 'Planificación', link: '/' },
            { label: 'Presupuesto', link: '/' },
            {
              label: 'Herramientas',
              items: [
                { label: 'Software', link: '/' },
                { label: 'Hardware', link: '/' }
              ]
            },
            {
              label: 'Desarrollo',
              items: [
                { label: 'Equipo', link: '/' },
                { label: 'Metodología', link: '/' },
                { label: 'Ciclo de vida', link: '/' }
              ]
            },
            {
              label: 'Lanzamiento',
              items: [
                { label: 'Recepción', link: '/' },
                { label: 'Actualizaciones', link: '/' },
                { label: 'Soporte', link: '/' }
              ]
            }
          ]
        },

        {
          label: 'Marketing',
          items: [
            { label: 'Público objetivo', link: '/' },
            { label: 'Distribución', link: '/' },
            { label: 'Monetización', link: '/' }
          ]
        },
        {
          label: 'El Juego',
          items: [
            { label: 'Profundidad', link: '/' },
            { label: 'Progresión', link: '/' },
            { label: 'Scope', link: '/' }
          ]
        }
      ]
    })
  ]
})
