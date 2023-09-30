export class User {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public phone: string,
    public fullName: string,
    public gender: string,
    public enableCampaign: boolean,
    public blacklisted: boolean
  ) {}
}
