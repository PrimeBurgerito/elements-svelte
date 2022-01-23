export interface Property<T> {
  value: T;
  key: string;
  name: string;
}

export interface NumericProperty extends Property<number> {
  min: number;
  max: number;
}

export interface StringProperty extends Property<ReadonlyArray<string>> {
  possibleValues: ReadonlyArray<string>;
  type: 'SINGLE' | 'MULTIPLE' | 'UNIQUE';
}
