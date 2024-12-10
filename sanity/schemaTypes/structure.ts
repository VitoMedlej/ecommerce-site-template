import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Base')
    .items([
      S.documentTypeListItem('aboutPage')
        .title('About Us Page')
        .child(S.document().schemaType('aboutPage')), // Ensure schemaType is set
        ...S.documentTypeListItems().filter(listItem => !['aboutPage'].includes(`${listItem.getId()}`))
    ])
}