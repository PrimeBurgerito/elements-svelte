export interface Requirement {
  locationIds: ReadonlyArray<string>;
  timing?: Timing;
  objectives: ReadonlyArray<string>;
  properties: ReadonlyArray<PropertiesRequirement>;
}

interface Timing {
  weekDays: ReadonlyArray<number>;
  monthDays: ReadonlyArray<number>;
  months: ReadonlyArray<Month>;
  time: ReadonlyArray<TimeRange>;
}

interface TimeRange {
  start: string;
  end: string;
}

interface PropertiesRequirement {
  stringProperties: Record<string, ReadonlyArray<string>>;
  numericProperties: Record<string, [number, number]>;
}

enum Month {
  January = 'JANUARY',
  February = 'FEBRUARY',
  March = 'MARCH',
  April = 'APRIL',
  May = 'MAY',
  June = 'JUNE',
  July = 'JULY',
  August = 'AUGUST',
  September = 'SEPTEMBER',
  October = 'OCTOBER',
  November = 'NOVEMBER',
  December = 'DECEMBER',
}
