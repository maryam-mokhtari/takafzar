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

  const show = (id) => {
    hideAll()
    let title
    title = document.getElementById(id)
    title.classList.add("title-show")

    context = document.getElementById(`context-${id}`)
    context.classList.add("context-show")
  }

  const showItem = (i) => {
    show(titles[i])
  }

  const previous = () => {
    if (i == 0) {
      i = titles.length
    }
    showItem(--i)
  }

  const next = () => {
    if (i == titles.length - 1) {
      i = -1
    }
    showItem(++i)
  }

  return { previous, next, show }
}

const slide = slider()

const openMenu = () => {
  const menu = document.getElementById("menu")
  menu.classList.add("menu-show")
}

const hideMenu = () => {
  const menu = document.getElementById("menu")
  menu.classList.remove("menu-show")
}
