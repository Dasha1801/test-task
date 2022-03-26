import { IUserCard } from "../components/shared/interfaces";

export const sortFunction = (sortType: string, arr: IUserCard[]): IUserCard[] =>
  sortType === "по городу" ? sortedByCity(arr) : sortedByCompany(arr);

const sortedByCity = (arr: IUserCard[]) =>
  arr.sort(function (a, b) {
    let nameA = a.address.city.toLowerCase(),
      nameB = b.address.city.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

const sortedByCompany = (arr: IUserCard[]) =>
  arr.sort(function (a, b) {
    let nameA = a.company.name.toLowerCase(),
      nameB = b.company.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
