export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server)
    return

  const publicPages = ['/', '/settings', '/about']
  const { displayName } = useUserSettings()

  if (!displayName.value && !publicPages.includes(to.path)) {
    return navigateTo('/settings')
  }
})
