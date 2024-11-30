import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ecom',

  projectId: '8hww7tr9',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  cors: {
    origin: ['https://studio.mysite.com'], // Allow only this origin
    methods: ['GET', 'POST'], // Adjust as needed
  },
})
