export default interface ItemsCountry {
  code: string;
  name: string;
  continent: { code: string; name: string };
  capital: string;
  currency: string;
  languages: any;
}
