import Helper from '@ember/component/helper';

type Positional = [name: string];
type Named = { bucket?: string; tracked?: boolean };
type Return = HTMLElement;

export interface RefToSignature {
  Args: {
    Positional: Positional;
    Named: Named;
  };
  Return: Return;
}

export default class RefToHelper extends Helper<RefToSignature> {
  public compute(positional: Positional, named: Named): Return;
}
