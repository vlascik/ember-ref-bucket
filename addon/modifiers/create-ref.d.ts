import Modifier from 'ember-modifier';

type Positional = [name: string];
type Named = {
  bucket?: string;
  tracked?: boolean;
  subtree?: boolean;
  attributes?: boolean;
  children?: boolean;
  resize?: boolean;
  character?: boolean;
};

export interface CreateRefSignature<E> {
  Element: E;
  Args: {
    Positional: Positional;
    Named: Named;
  };
}

export default class CreateRefModifier<E extends HTMLElement | SVGElement> extends Modifier<CreateRefSignature<E>> {
  modify(element: E, [name]: Positional, named: Named): void;
}
