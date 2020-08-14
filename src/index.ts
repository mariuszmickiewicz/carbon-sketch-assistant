import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'carbon-design-system',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/artboards-layout': {
            active: true,
            layouts: [
              {
                columnWidth: 64,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 24,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1536
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 16,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1280
              },
              {
                columnWidth: 32,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 16,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1024
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 16,
                numberOfColumns: 8,
                rowHeightMultiplication: 0,
                totalWidth: 640
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 0,
                numberOfColumns: 4,
                rowHeightMultiplication: 0,
                totalWidth: 320
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 280,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1280
              },
              {
                columnWidth: 32,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 272,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1024
              },
              {
                columnWidth: 64,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 272,
                numberOfColumns: 8,
                rowHeightMultiplication: 0,
                totalWidth: 768
              },
              {
                columnWidth: 16,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 272,
                numberOfColumns: 8,
                rowHeightMultiplication: 0,
                totalWidth: 384
              },


            ]
          },
        },
      },
    }
  },
]

export default assistant
