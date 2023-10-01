export const buildWebhook = (slug: string, body: { productId: string } ): Promise<Response> => {
  if (!process.env.NEXT_API_WEBHOOK_URL) {
    throw new Error('NO NEXT_API_WEBHOOK_URL found')
  }

  console.log(`Rebuild webhook triggered at ${slug}...`)

  return fetch(
    `${process.env.NEXT_API_WEBHOOK_URL}${slug}`, 
    { 
      method: 'POST', 
      body: JSON.stringify(body) 
    }
  )
}
