const slider = () => {
  let i = 0
  const titles = ["about", "products", "apino", "customers", "contact"]

  const hideAll = () => {
    let title
    for (let j = 0; j < titles.length; j++) {
      title = document.getElementById(titles[j])
      title.classList.remove("title-show")

      context = document.getElementById(`context-${titles[j]}`)
      context.classList.remove("context-show")
    }
  }

  const show = (i) => {
    let title
    title = document.getElementById(titles[i])
    title.classList.add("title-show")

    context = document.getElementById(`context-${titles[i]}`)
    context.classList.add("context-show")
  }

  const previous = () => {
    hideAll()
    if (i == 0) {
      i = titles.length
    }
    console.log(i)
    show(--i)
  }

  const next = () => {
    hideAll()
    if (i == titles.length - 1) {
      i = -1
    }
    console.log(i)
    show(++i)
  }

  return { previous, next }
}

const slide = slider()
