function genToc(selector, el) {
    let tocs = document.querySelector(selector).children
    let reg = new RegExp('[H]\\d')
    let list = document.createDocumentFragment()
    let style = document.createElement('style')
    style.innerHTML = `
      .toc h1 {cursor: pointer;margin-bottom: 10px;padding-left: 10px;font-size:16px;font-weight:500;}
      .toc h2 {cursor: pointer; padding-left: 10px;margin-bottom: 5px;font-size:14px;font-weight:500;}
      .toc h3 {cursor: pointer; padding-left: 20px;margin-bottom: 5px;font-size:14px;font-weight:normal;}
      .toc h4 {cursor: pointer; padding-left: 30px;margin-bottom: 5px;font-size:12px;font-weight:500;}
      .toc h5 {cursor: pointer; padding-left: 40px;margin-bottom: 5px;font-size:12px;font-weight:normal;}
      .toc h6 {cursor: pointer; padding-left: 50px;margin-bottom: 5px;font-size:11px;font-weight:normal;}
      .toc h1:hover {text-decoration: underline;}
      .toc h2:hover {text-decoration: underline;}
      .toc h3:hover {text-decoration: underline;}
      .toc h4:hover {text-decoration: underline;}
      .toc h5:hover {text-decoration: underline;}
      .toc h6:hover {text-decoration: underline;}
    `
    for (let index = 0; index < tocs.length; index++) {
      const item = tocs[index]
      if (reg.test(item.nodeName)) {
        list.appendChild(item.cloneNode(true))
      }
    }
    document.querySelector(el).appendChild(style)
    document.querySelector(el).appendChild(list)
    document.querySelector(el).addEventListener('click', function (e) {
      if (reg.test(e.target.nodeName)) {
        let id = e.target.children[0].id
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
  
  export {
    genToc // 生成目录
  }
  