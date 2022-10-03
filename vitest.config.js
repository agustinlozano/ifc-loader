import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    deps: {
      inline: [
        'web-ifc'
      ]
    },
    environment: 'happy-dom'
  }
})
