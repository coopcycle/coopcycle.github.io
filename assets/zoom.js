// Click a screenshot or a video to see it large; click again or press Escape to close.
// Videos only play by themselves when the reader hasn't asked for less motion.
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  document.querySelectorAll('figure video').forEach(video => {
    if (reduceMotion) {
      video.removeAttribute('autoplay')
      video.pause()
      video.controls = true
    }
  })

  const media = document.querySelectorAll('figure img, figure video')
  if (media.length === 0) {
    return
  }

  const dialog = document.createElement('dialog')
  dialog.className = 'zoom'
  document.body.appendChild(dialog)

  dialog.addEventListener('click', () => dialog.close())
  dialog.addEventListener('close', () => dialog.replaceChildren())

  media.forEach(el => {
    if (el.tagName === 'IMG') {
      el.tabIndex = 0
    }
    const open = () => {
      let large
      if (el.tagName === 'VIDEO') {
        large = el.cloneNode()
        large.controls = reduceMotion
        large.autoplay = !reduceMotion
      } else {
        large = document.createElement('img')
        large.src = el.currentSrc || el.src
        large.alt = el.alt
      }
      large.removeAttribute('width')
      large.removeAttribute('height')
      dialog.replaceChildren(large)
      dialog.showModal()
    }
    el.addEventListener('click', e => {
      // With its controls shown, a click on a video is for the controls
      if (!el.controls) {
        open()
      }
    })
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        open()
      }
    })
  })
})()
