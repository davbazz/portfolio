import pocketbase from 'pocketbase'

export const pb = new pocketbase(process.env.POCKETBASE_URL)

pb.autoCancellation(false)

await pb
  .collection('_superusers')
  .authWithPassword(process.env.SUPERUSER_EMAIL!, process.env.SUPERUSER_PASS!, {
    autoRefreshThreshold: 30 * 60,
  })

export default pb
