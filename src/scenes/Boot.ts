import { Scene } from 'phaser'

export class Boot extends Scene {
  constructor() {
    super('Preloader')
  }

  init() {
    this.cameras.main.setBackgroundColor(0xffffff)
    const bar = this.add
      .rectangle(0, 0, 0, this.cameras.main.height, 0x028af8)
      .setOrigin(0, 0)

    this.load.on('progress', (progress: number) => {
      bar.width = this.cameras.main.width * progress
    })
  }

  preload() {
    this.load.setPath('assets')
    this.load.script(
      'webfont',
      'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
    )
    this.load.audio('music', 'pp-atlantic-drift.mp3')
  }

  create() {
    this.sound.play('music', { loop: true })
    this.scene.start('Menu')
  }
}
