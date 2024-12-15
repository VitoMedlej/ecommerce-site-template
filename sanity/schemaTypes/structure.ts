import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Base')
    .items([
      S.documentTypeListItem('homePage')
        .title('Home Page')
        .child(S.document().schemaType('homePage')),
      S.documentTypeListItem('aboutPage')
        .title('About Us Page')
        .child(S.document().schemaType('aboutPage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['homePage', 'aboutPage'].includes(`${listItem.getId()}`)
      ),
    ])
}
