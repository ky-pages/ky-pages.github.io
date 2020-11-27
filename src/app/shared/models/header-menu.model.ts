export class HeaderMenuModel {
  constructor(public title: string, public  subMenus?: HeaderMenuModel[], public link?: string) {
  }
}

export class SearchSuggestionModel {
  constructor(public title: string, public link: string) {
  }
}
