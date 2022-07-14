export const catpls = async (): Promise<string> => {
  try {
    const randomCatsResponse = await fetch(
      'https://api.thecatapi.com/v1/images/search'
    )
    const randomCats = await randomCatsResponse.json()

    return `
      <div style="aspect-ratio: 1; width: 300px;">
        <img style="max-width: 300px; max-height: 100%;" src="${randomCats[0].url}">
      </div>
    `
  } catch (e) {
    return `Sorry, no can has cat, something broke :'(`
  }
}
