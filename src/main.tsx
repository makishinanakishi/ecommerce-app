// ===== 类型定义 =====
interface Product {
  id: number
  name: string
  category: string
  price: number
  oldPrice?: number
  image: string
  images?: string[]
  rating: number
  reviews: number
  sales: number
  stock: number
  description: string
  specs: { [key: string]: string }
  badge?: string
}

interface CartItem extends Product {
  quantity: number
}

interface User {
  email: string
  name?: string
}

// ===== 模拟商品数据 =====
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "无线蓝牙耳机 Pro",
    category: "electronics",
    price: 899,
    oldPrice: 1299,
    image: "/wireless-bluetooth-headphones.jpg",
    images: ["/wireless-bluetooth-headphones.jpg", "/headphones-side-view.png", "/headphones-case.png"],
    rating: 4.8,
    reviews: 1234,
    sales: 5000,
    stock: 50,
    description: "高品质无线蓝牙耳机，采用主动降噪技术，提供卓越的音质体验。30小时超长续航，让您畅享音乐世界。",
    specs: {
      品牌: "AudioPro",
      型号: "AP-X100",
      连接方式: "蓝牙 5.3",
      续航时间: "30小时",
      降噪: "主动降噪",
    },
    badge: "热卖",
  },
  {
    id: 2,
    name: "智能运动手表",
    category: "electronics",
    price: 1299,
    image: "/smart-watch-fitness.png",
    images: ["/smart-watch-fitness.png"],
    rating: 4.6,
    reviews: 856,
    sales: 3200,
    stock: 30,
    description: "多功能智能运动手表，支持心率监测、睡眠追踪、50+运动模式。防水设计，适合各种运动场景。",
    specs: {
      品牌: "FitTech",
      屏幕: "1.4英寸AMOLED",
      防水等级: "5ATM",
      续航: "7天",
      传感器: "心率、血氧、GPS",
    },
  },
  {
    id: 3,
    name: "商务双肩背包",
    category: "fashion",
    price: 399,
    oldPrice: 599,
    image: "/modern-backpack-business.jpg",
    images: ["/modern-backpack-business.jpg"],
    rating: 4.7,
    reviews: 678,
    sales: 2100,
    stock: 80,
    description: "时尚商务双肩包，采用防水面料，多层分区设计。可容纳15.6英寸笔记本电脑，USB充电接口设计。",
    specs: {
      品牌: "UrbanCarry",
      材质: "防水尼龙",
      容量: "25L",
      尺寸: "45x30x15cm",
      适用: "15.6英寸笔记本",
    },
  },
  {
    id: 4,
    name: "意式咖啡机",
    category: "home",
    price: 2999,
    image: "/espresso-coffee-machine.png",
    images: ["/espresso-coffee-machine.png"],
    rating: 4.9,
    reviews: 432,
    sales: 1500,
    stock: 20,
    description: "专业级意式咖啡机，19Bar高压萃取，双锅炉设计。支持手动打奶泡，在家享受咖啡馆品质。",
    specs: {
      品牌: "CoffeeMaster",
      压力: "19Bar",
      功率: "1450W",
      容量: "2.5L水箱",
      功能: "萃取、蒸汽、热水",
    },
    badge: "新品",
  },
  {
    id: 5,
    name: "高档笔记本套装",
    category: "books",
    price: 129,
    image: "/notebook-set-premium.jpg",
    images: ["/notebook-set-premium.jpg"],
    rating: 4.5,
    reviews: 923,
    sales: 4200,
    stock: 150,
    description: "精美笔记本套装，采用优质纸张，书写流畅不洇墨。包含3本不同规格笔记本和精美书签。",
    specs: {
      品牌: "WriteWell",
      规格: "A5 + B5 + A6",
      页数: "80页/本",
      纸张: "100g米白纸",
      装订: "线装",
    },
  },
  {
    id: 6,
    name: "专业跑步鞋",
    category: "fashion",
    price: 599,
    oldPrice: 899,
    image: "/running-shoes-sport.jpg",
    images: ["/running-shoes-sport.jpg"],
    rating: 4.8,
    reviews: 1567,
    sales: 6800,
    stock: 45,
    description: "轻量化专业跑步鞋，采用缓震中底技术，透气网面设计。适合长距离跑步和日常训练。",
    specs: {
      品牌: "RunFast",
      重量: "单只约250g",
      鞋面: "工程网布",
      中底: "EVA缓震",
      适用: "路跑、训练",
    },
    badge: "热卖",
  },
  {
    id: 7,
    name: "家用空气净化器",
    category: "home",
    price: 1899,
    image: "/air-purifier-home.jpg",
    images: ["/air-purifier-home.jpg"],
    rating: 4.7,
    reviews: 734,
    sales: 2800,
    stock: 35,
    description: "高效家用空气净化器，三层过滤系统，有效去除PM2.5、甲醛、细菌。适用面积60㎡，智能控制。",
    specs: {
      品牌: "PureAir",
      CADR值: "600m³/h",
      适用面积: "40-60㎡",
      噪音: "25-65dB",
      滤网: "HEPA + 活性炭",
    },
  },
  {
    id: 8,
    name: "机械键盘RGB版",
    category: "electronics",
    price: 699,
    image: "/mechanical-keyboard-rgb.jpg",
    images: ["/mechanical-keyboard-rgb.jpg"],
    rating: 4.9,
    reviews: 2134,
    sales: 8900,
    stock: 60,
    description: "专业机械键盘，青轴手感清脆，全键无冲突。RGB背光效果可自定义，铝合金面板更耐用。",
    specs: {
      品牌: "MechKeys",
      轴体: "青轴",
      连接: "有线USB-C",
      背光: "RGB 1680万色",
      键帽: "PBT双色注塑",
    },
    badge: "热卖",
  },
  {
    id: 9,
    name: "保温水杯 316不锈钢",
    category: "home",
    price: 159,
    image: "/insulated-bottle-steel.jpg",
    images: ["/insulated-bottle-steel.jpg"],
    rating: 4.6,
    reviews: 1845,
    sales: 7200,
    stock: 200,
    description: "316不锈钢保温杯，真空双层保温技术，保温24小时保冷12小时。大容量设计，适合户外运动。",
    specs: {
      品牌: "ThermoPro",
      材质: "316不锈钢",
      容量: "750ml",
      保温: "24小时",
      保冷: "12小时",
    },
  },
  {
    id: 10,
    name: "智能护眼台灯",
    category: "home",
    price: 299,
    image: "/desk-lamp-led.jpg",
    images: ["/desk-lamp-led.jpg"],
    rating: 4.7,
    reviews: 956,
    sales: 3400,
    stock: 70,
    description: "智能LED护眼台灯，无蓝光危害，Ra95高显色指数。触控调光，记忆功能，USB充电口设计。",
    specs: {
      品牌: "LightCare",
      光源: "LED",
      显色指数: "Ra95",
      色温: "3000-5000K",
      功率: "12W",
    },
  },
  {
    id: 11,
    name: "电子书阅读器",
    category: "electronics",
    price: 999,
    image: "/e-reader-tablet.jpg",
    images: ["/e-reader-tablet.jpg"],
    rating: 4.8,
    reviews: 1289,
    sales: 4500,
    stock: 40,
    description: "7英寸电子墨水屏阅读器，300PPI高清显示，护眼不伤眼。8GB存储可容纳数千本书籍。",
    specs: {
      品牌: "ReadPro",
      屏幕: "7英寸墨水屏",
      分辨率: "300PPI",
      存储: "8GB",
      续航: "数周",
    },
  },
  {
    id: 12,
    name: "瑜伽垫加厚防滑",
    category: "fashion",
    price: 89,
    oldPrice: 149,
    image: "/yoga-mat-exercise.jpg",
    images: ["/yoga-mat-exercise.jpg"],
    rating: 4.5,
    reviews: 2345,
    sales: 9800,
    stock: 180,
    description: "加厚瑜伽垫，10mm厚度提供更好的缓冲保护。双面防滑设计，环保TPE材质，无异味。",
    specs: {
      品牌: "YogaFit",
      材质: "TPE环保材料",
      厚度: "10mm",
      尺寸: "183x61cm",
      重量: "1.2kg",
    },
  },
]

// ===== 数据存储管理 =====
class Store {
  private static CART_KEY = "ecommerce_cart"
  private static HISTORY_KEY = "ecommerce_history"
  private static THEME_KEY = "ecommerce_theme"
  private static USER_KEY = "ecommerce_user"

  static getCart(): CartItem[] {
    const data = localStorage.getItem(this.CART_KEY)
    return data ? JSON.parse(data) : []
  }

  static saveCart(cart: CartItem[]): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart))
  }

  static addToCart(product: Product, quantity = 1): void {
    const cart = this.getCart()
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ ...product, quantity })
    }

    this.saveCart(cart)
  }

  static removeFromCart(productId: number): void {
    const cart = this.getCart().filter((item) => item.id !== productId)
    this.saveCart(cart)
  }

  static updateQuantity(productId: number, quantity: number): void {
    const cart = this.getCart()
    const item = cart.find((item) => item.id === productId)

    if (item) {
      item.quantity = Math.max(1, quantity)
      this.saveCart(cart)
    }
  }

  static clearCart(): void {
    localStorage.removeItem(this.CART_KEY)
  }

  static getHistory(): Product[] {
    const data = localStorage.getItem(this.HISTORY_KEY)
    return data ? JSON.parse(data) : []
  }

  static addToHistory(product: Product): void {
    let history = this.getHistory()
    history = history.filter((p) => p.id !== product.id)
    history.unshift(product)
    history = history.slice(0, 6) // 只保留最近6个
    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history))
  }

  static getTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || "light"
  }

  static setTheme(theme: string): void {
    localStorage.setItem(this.THEME_KEY, theme)
  }

  static getUser(): User | null {
    const data = localStorage.getItem(this.USER_KEY)
    return data ? JSON.parse(data) : null
  }

  static setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user))
  }

  static logout(): void {
    localStorage.removeItem(this.USER_KEY)
  }
}

// ===== UI管理类 =====
class UI {
  static showToast(message: string, type: "success" | "error" | "warning" = "success"): void {
    const container = document.getElementById("toast-container")
    if (!container) return

    const toast = document.createElement("div")
    toast.className = `toast toast-${type}`
    toast.innerHTML = `
      <div class="toast-icon">
        ${type === "success" ? "✓" : type === "error" ? "✕" : "⚠"}
      </div>
      <div class="toast-message">${message}</div>
    `

    container.appendChild(toast)

    setTimeout(() => {
      toast.style.opacity = "0"
      setTimeout(() => toast.remove(), 300)
    }, 3000)
  }

  static showModal(modalId: string): void {
    const modal = document.getElementById(modalId)
    if (modal) {
      modal.removeAttribute("hidden")
      document.body.style.overflow = "hidden"
    }
  }

  static hideModal(modalId: string): void {
    const modal = document.getElementById(modalId)
    if (modal) {
      modal.setAttribute("hidden", "")
      document.body.style.overflow = ""
    }
  }

  static openCart(): void {
    const cart = document.getElementById("cart-sidebar")
    cart?.classList.add("open")
    document.body.style.overflow = "hidden"
  }

  static closeCart(): void {
    const cart = document.getElementById("cart-sidebar")
    cart?.classList.remove("open")
    document.body.style.overflow = ""
  }

  static updateCartBadge(count: number): void {
    const badge = document.querySelector(".cart-badge")
    if (badge) {
      badge.textContent = count.toString()
    }
  }
}

// ===== 商品渲染 =====
function renderProducts(products: Product[]): void {
  const grid = document.getElementById("products-grid")
  if (!grid) return

  grid.innerHTML = products
    .map(
      (product, index) => `
    <div class="product-card" style="animation-delay: ${index * 0.05}s" data-product-id="${product.id}">
      <div class="product-image-wrapper">
        <img 
          src="${product.image}" 
          alt="${product.name}"
          class="product-image"
          loading="lazy"
        >
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryName(product.category)}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span>${product.rating}</span>
          <span class="text-muted">(${product.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">¥${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="product-old-price">¥${product.oldPrice.toFixed(2)}</span>` : ""}
          </div>
          <button class="btn-add-cart" data-product-id="${product.id}" aria-label="添加到购物车">
            加入购物车
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("")

  // 图片懒加载
  lazyLoadImages()
}

function getCategoryName(category: string): string {
  const names: { [key: string]: string } = {
    electronics: "电子产品",
    fashion: "时尚服饰",
    home: "家居生活",
    books: "图书文具",
  }
  return names[category] || category
}

// ===== 购物车渲染 =====
function renderCart(): void {
  const cart = Store.getCart()
  const cartBody = document.getElementById("cart-items")
  const checkoutBtn = document.getElementById("checkout-btn") as HTMLButtonElement

  if (!cartBody) return

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <p>购物车是空的</p>
        <p class="text-muted">快去挑选心仪的商品吧！</p>
      </div>
    `
    if (checkoutBtn) checkoutBtn.disabled = true
  } else {
    cartBody.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">¥${item.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="quantity-btn" data-action="decrease" data-id="${item.id}" ${item.quantity <= 1 ? "disabled" : ""}>-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
            <button class="btn-remove" data-id="${item.id}">删除</button>
          </div>
        </div>
      </div>
    `,
      )
      .join("")
    if (checkoutBtn) checkoutBtn.disabled = false
  }

  updateCartSummary(cart)
  UI.updateCartBadge(cart.reduce((sum, item) => sum + item.quantity, 0))
}

function updateCartSummary(cart: CartItem[]): void {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 99 ? 0 : 10
  const total = subtotal + shipping

  const subtotalEl = document.getElementById("cart-subtotal")
  const shippingEl = document.getElementById("cart-shipping")
  const totalEl = document.getElementById("cart-total")

  if (subtotalEl) subtotalEl.textContent = `¥${subtotal.toFixed(2)}`
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "免运费" : `¥${shipping.toFixed(2)}`
  if (totalEl) totalEl.textContent = `¥${total.toFixed(2)}`
}

// ===== 商品详情弹窗 =====
function showProductDetail(productId: number): void {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) return

  Store.addToHistory(product)
  updateHistory()

  const modalBody = document.getElementById("modal-body")
  if (!modalBody) return

  const images = product.images || [product.image]

  modalBody.innerHTML = `
    <div class="product-detail">
      <div class="product-detail-images">
        <div class="main-image-wrapper">
          <img src="${images[0]}" alt="${product.name}" class="main-image" id="main-image">
        </div>
        ${
          images.length > 1
            ? `
          <div class="thumbnail-list">
            ${images.map((img, i) => `<img src="${img}" alt="缩略图 ${i + 1}" class="thumbnail ${i === 0 ? "active" : ""}" data-index="${i}">`).join("")}
          </div>
        `
            : ""
        }
      </div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <div class="product-detail-rating">
          <span class="stars">★★★★★</span>
          <span>${product.rating} (${product.reviews}条评价)</span>
          <span>已售${product.sales}件</span>
        </div>
        <div class="product-detail-price">¥${product.price.toFixed(2)}</div>
        <div class="product-detail-stock">库存：${product.stock}件</div>
        <div class="product-detail-description">
          <h3>商品描述</h3>
          <p>${product.description}</p>
        </div>
        <div class="product-specs">
          <h3>商品规格</h3>
          ${Object.entries(product.specs)
            .map(
              ([key, value]) => `
            <div class="spec-row">
              <span class="spec-label">${key}</span>
              <span class="spec-value">${value}</span>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="product-detail-actions">
          <button class="btn-secondary btn-block" onclick="window.uiActions.closeProductModal()">继续浏览</button>
          <button class="btn-primary btn-block" onclick="window.uiActions.addToCartFromModal(${product.id})">加入购物车</button>
        </div>
      </div>
    </div>
  `

  // 图片切换
  const thumbnails = modalBody.querySelectorAll(".thumbnail")
  const mainImage = document.getElementById("main-image") as HTMLImageElement
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbnails.forEach((t) => t.classList.remove("active"))
      thumb.classList.add("active")
      const index = Number.parseInt((thumb as HTMLElement).dataset.index || "0")
      if (mainImage) mainImage.src = images[index]
    })
  })

  UI.showModal("product-modal")
}

// ===== 搜索功能 =====
let searchTimeout: number

function handleSearch(query: string): void {
  clearTimeout(searchTimeout)

  if (!query.trim()) {
    hideSearchResults()
    return
  }

  searchTimeout = window.setTimeout(() => {
    const results = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()),
    )

    showSearchResults(results, query)
  }, 300) // 防抖300ms
}

function showSearchResults(results: Product[], query: string): void {
  const resultsContainer = document.getElementById("search-results")
  if (!resultsContainer) return

  if (results.length === 0) {
    resultsContainer.innerHTML = '<div style="padding: 1rem; text-align: center;">未找到相关商品</div>'
  } else {
    resultsContainer.innerHTML = results
      .slice(0, 5)
      .map(
        (product) => `
      <div class="search-result-item" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <div class="search-result-info">
          <div class="search-result-name">${highlightText(product.name, query)}</div>
          <div class="search-result-price">¥${product.price.toFixed(2)}</div>
        </div>
      </div>
    `,
      )
      .join("")
  }

  resultsContainer.removeAttribute("hidden")
}

function hideSearchResults(): void {
  const resultsContainer = document.getElementById("search-results")
  if (resultsContainer) {
    resultsContainer.setAttribute("hidden", "")
  }
}

function highlightText(text: string, query: string): string {
  const regex = new RegExp(`(${query})`, "gi")
  return text.replace(regex, '<span class="search-highlight">$1</span>')
}

// ===== 筛选和排序 =====
function filterProducts(category: string): void {
  let filtered = category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)
  const sortValue = (document.getElementById("sort-select") as HTMLSelectElement)?.value
  filtered = sortProducts(filtered, sortValue)
  renderProducts(filtered)
}

function sortProducts(products: Product[], sortBy: string): Product[] {
  const sorted = [...products]

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price)
    case "sales":
      return sorted.sort((a, b) => b.sales - a.sales)
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating)
    default:
      return sorted
  }
}

// ===== 浏览历史 =====
function updateHistory(): void {
  const history = Store.getHistory()
  const historySection = document.getElementById("history-section")
  const historyGrid = document.getElementById("history-grid")

  if (!historySection || !historyGrid) return

  if (history.length === 0) {
    historySection.setAttribute("hidden", "")
  } else {
    historySection.removeAttribute("hidden")
    historyGrid.innerHTML = history
      .map(
        (product) => `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-price">¥${product.price.toFixed(2)}</div>
        </div>
      </div>
    `,
      )
      .join("")
  }
}

// ===== 主题切换 =====
function toggleTheme(): void {
  const currentTheme = Store.getTheme()
  const newTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", newTheme)
  Store.setTheme(newTheme)
}

// ===== 表单验证 =====
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function validateForm(form: HTMLFormElement): boolean {
  let isValid = true
  const emailInput = form.querySelector("#email") as HTMLInputElement
  const passwordInput = form.querySelector("#password") as HTMLInputElement

  // 验证邮箱
  if (emailInput) {
    const emailError = document.getElementById("email-error")
    if (!emailInput.value) {
      emailInput.classList.add("error")
      if (emailError) emailError.textContent = "请输入邮箱"
      isValid = false
    } else if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("error")
      if (emailError) emailError.textContent = "邮箱格式不正确"
      isValid = false
    } else {
      emailInput.classList.remove("error")
      if (emailError) emailError.textContent = ""
    }
  }

  // 验证密码
  if (passwordInput) {
    const passwordError = document.getElementById("password-error")
    if (!passwordInput.value) {
      passwordInput.classList.add("error")
      if (passwordError) passwordError.textContent = "请输入密码"
      isValid = false
    } else if (passwordInput.value.length < 6) {
      passwordInput.classList.add("error")
      if (passwordError) passwordError.textContent = "密码至少6个字符"
      isValid = false
    } else {
      passwordInput.classList.remove("error")
      if (passwordError) passwordError.textContent = ""
    }
  }

  return isValid
}

// ===== 图片懒加载 =====
function lazyLoadImages(): void {
  const images = document.querySelectorAll('img[loading="lazy"]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.classList.add("loaded")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}
// ===== 全局UI操作 =====
;(window as any).uiActions = {
  closeProductModal: () => UI.hideModal("product-modal"),
  addToCartFromModal: (productId: number) => {
    const product = PRODUCTS.find((p) => p.id === productId)
    if (product) {
      Store.addToCart(product)
      renderCart()
      UI.showToast("已添加到购物车")
    }
  },
}

// ===== 初始化 =====
function init(): void {
  // 加载主题
  const theme = Store.getTheme()
  document.documentElement.setAttribute("data-theme", theme)

  // 隐藏页面加载动画
  setTimeout(() => {
    const loader = document.getElementById("page-loader")
    loader?.classList.add("hidden")
  }, 500)

  // 渲染商品
  renderProducts(PRODUCTS)

  // 渲染购物车
  renderCart()

  // 更新浏览历史
  updateHistory()

  // 事件监听器
  setupEventListeners()
}

function setupEventListeners(): void {
  // 导航切换
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")
  navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true"
    navToggle.setAttribute("aria-expanded", (!isOpen).toString())
    navMenu?.classList.toggle("open")
  })

  // 主题切换
  const themeToggle = document.querySelector(".theme-toggle")
  themeToggle?.addEventListener("click", toggleTheme)

  // 购物车打开/关闭
  const cartButton = document.querySelector(".cart-button")
  cartButton?.addEventListener("click", UI.openCart)

  const cartCloseBtns = document.querySelectorAll("#cart-sidebar .btn-close")
  cartCloseBtns.forEach((btn) => btn.addEventListener("click", UI.closeCart))

  // 购物车操作 - 事件委托
  const cartBody = document.getElementById("cart-items")
  cartBody?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement

    if (target.classList.contains("quantity-btn")) {
      const action = target.dataset.action
      const id = Number.parseInt(target.dataset.id || "0")
      const cart = Store.getCart()
      const item = cart.find((item) => item.id === id)

      if (item) {
        if (action === "increase") {
          Store.updateQuantity(id, item.quantity + 1)
        } else if (action === "decrease") {
          Store.updateQuantity(id, item.quantity - 1)
        }
        renderCart()
      }
    }

    if (target.classList.contains("btn-remove")) {
      const id = Number.parseInt(target.dataset.id || "0")
      Store.removeFromCart(id)
      renderCart()
      UI.showToast("已从购物车移除")
    }
  })

  // 商品卡片点击 - 事件委托
  const productsGrid = document.getElementById("products-grid")
  productsGrid?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const card = target.closest(".product-card") as HTMLElement

    if (!card) return

    const productId = Number.parseInt(card.dataset.productId || "0")

    if (target.classList.contains("btn-add-cart") || target.closest(".btn-add-cart")) {
      e.stopPropagation()
      const product = PRODUCTS.find((p) => p.id === productId)
      if (product) {
        Store.addToCart(product)
        renderCart()
        UI.showToast("已添加到购物车")
      }
    } else {
      showProductDetail(productId)
    }
  })

  // 搜索结果点击
  const searchResults = document.getElementById("search-results")
  searchResults?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const item = target.closest(".search-result-item") as HTMLElement
    if (item) {
      const productId = Number.parseInt(item.dataset.productId || "0")
      showProductDetail(productId)
      hideSearchResults()
      const searchInput = document.getElementById("search-input") as HTMLInputElement
      if (searchInput) searchInput.value = ""
    }
  })

  // 搜索输入
  const searchInput = document.getElementById("search-input")
  searchInput?.addEventListener("input", (e) => {
    const query = (e.target as HTMLInputElement).value
    handleSearch(query)
  })

  // 点击外部关闭搜索结果
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    if (!target.closest(".search-wrapper")) {
      hideSearchResults()
    }
  })

  // 分类筛选
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      const category = (btn as HTMLElement).dataset.category || "all"
      filterProducts(category)
    })
  })

  // 分类导航链接
  const navLinks = document.querySelectorAll(".nav-link[data-category]")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const category = (link as HTMLElement).dataset.category || "all"

      // 更新筛选按钮状态
      filterBtns.forEach((btn) => {
        if ((btn as HTMLElement).dataset.category === category) {
          filterBtns.forEach((b) => b.classList.remove("active"))
          btn.classList.add("active")
        }
      })

      filterProducts(category)

      // 滚动到商品区域
      const productsSection = document.querySelector(".products-section")
      productsSection?.scrollIntoView({ behavior: "smooth" })
    })
  })

  // 排序
  const sortSelect = document.getElementById("sort-select")
  sortSelect?.addEventListener("change", (e) => {
    const category = document.querySelector(".filter-btn.active")?.getAttribute("data-category") || "all"
    filterProducts(category)
  })

  // 登录按钮
  const loginBtn = document.getElementById("login-btn")
  loginBtn?.addEventListener("click", () => UI.showModal("login-modal"))

  // 模态框关闭
  const modalCloseBtns = document.querySelectorAll(".modal-close")
  modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal") as HTMLElement
      if (modal) {
        modal.setAttribute("hidden", "")
        document.body.style.overflow = ""
      }
    })
  })

  // 模态框背景点击关闭
  const modalOverlays = document.querySelectorAll(".modal-overlay")
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      const modal = overlay.closest(".modal") as HTMLElement
      if (modal) {
        modal.setAttribute("hidden", "")
        document.body.style.overflow = ""
      }
    })
  })

  // 登录表单提交
  const loginForm = document.getElementById("login-form")
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateForm(loginForm as HTMLFormElement)) {
      const emailInput = document.getElementById("email") as HTMLInputElement
      const user: User = { email: emailInput.value }
      Store.setUser(user)
      UI.hideModal("login-modal")
      UI.showToast("登录成功！")

      // 更新登录按钮
      const loginBtn = document.getElementById("login-btn")
      if (loginBtn) {
        loginBtn.textContent = emailInput.value.split("@")[0]
      }
    }
  })

  // 结算按钮
  const checkoutBtn = document.getElementById("checkout-btn")
  checkoutBtn?.addEventListener("click", () => {
    const cart = Store.getCart()
    if (cart.length > 0) {
      UI.showToast("订单已提交，感谢购买！", "success")
      Store.clearCart()
      renderCart()
      UI.closeCart()
    }
  })

  // 浏览历史点击
  const historyGrid = document.getElementById("history-grid")
  historyGrid?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const card = target.closest(".product-card") as HTMLElement
    if (card) {
      const productId = Number.parseInt(card.dataset.productId || "0")
      showProductDetail(productId)
    }
  })
}

// 页面加载完成后初始化
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}
