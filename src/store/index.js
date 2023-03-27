import piniaPluginPersist from 'pinia-plugin-persist-uni'

export const setupPinia = (app) => {
  const store = createPinia()
  store.use(piniaPluginPersist)
  app.use(store)
}

// 自动注入所有pinia模块
const files = import.meta.globEager('./*.js')
const modules = {}
Object.keys(files).forEach((key) => {
  modules[key.replace(/(.*\/)*([^.]+).*/gi, '$2')] = files[key].default
})

export default (name) => {
  return modules[name]()
}
