export class HeaderMenuModel {
  constructor(public title: string, public  subMenus?: HeaderMenuModel[], public link?: string) {
  }
}
