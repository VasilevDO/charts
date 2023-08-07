/* eslint-disable @typescript-eslint/naming-convention */

export const COVID_API_BASE_URL = 'https://api.coronavirus.data.gov.uk/v1/data';
export const COVID_NEW_CASES_URL = `${COVID_API_BASE_URL}?filters=areaType=nation&structure={"date":"date","newCases":"newCasesByPublishDate","areaName":"areaName"}`;
export const COVID_VACCINE_OVERVIEW_URL = `${COVID_API_BASE_URL}?filters=areaType=overview&structure={"first":"cumPeopleVaccinatedFirstDoseByPublishDate", "second": "cumPeopleVaccinatedSecondDoseByPublishDate", "third": "cumPeopleVaccinatedThirdInjectionByPublishDate", "date": "date"}&latestBy=cumPeopleVaccinatedThirdInjectionByPublishDate`;
export const COVID_VACCINE_OVERVIEW_LATEST_URL = `${COVID_VACCINE_OVERVIEW_URL}&latestBy=cumPeopleVaccinatedThirdInjectionByPublishDate`;
